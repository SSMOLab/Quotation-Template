const ReplaceInFileWebpackPlugin = require("replace-in-file-webpack-plugin");
const fs = require("fs");

const pluginList = [];
const filePath = "dist/css";

if (fs.existsSync(filePath)) {
  pluginList.push(
    new ReplaceInFileWebpackPlugin([
      {
        dir: "dist/css",
        test: [/\.css$/],
        rules: [
          {
            search: /[^\:]\:(after|before|first-letter|first-line|selection)/gi,
            replace: function(match) {
              return `${match.charAt(0)}:${match.substring(1)}`;
            }
          }
        ]
      }
    ])
  );
}
const xml2js = require("xml2js");
// 讀取xml檔案(位置在同目錄底下)
const dataPath = "./src/data/";
let fileList = [];
const testDataPrefix = "testData-";
fs.readdirSync(dataPath).forEach(fileName => {
  if (fileName.indexOf(".xml") !== -1 || fileName.indexOf(".json") !== -1) {
    fileList.push(fileName);
  }
});
if (fileList.length > 0) {
  fileList.forEach(fileName => {
    if (fileName.indexOf(".xml") !== -1 && fileName.split("-").length > 1) {
      const testDataFileName = `${testDataPrefix}${fileName
        .split("-")[1]
        .replace(".xml", "")}.json`;
      if (fileList.indexOf(testDataFileName) === -1) {
        try {
          const xml = fs.readFileSync(`${dataPath}${fileName}`, "utf-8");
          const parser = new xml2js.Parser({ explicitArray: false });

          // 解析xml string成json物件
          parser.parseString(xml, function(err, result) {
            if (err) {
              throw Error(`parse error: ${err}`);
            } else {
              const dataString = JSON.stringify(result);
              fs.writeFile(
                `${dataPath}${testDataFileName}`,
                dataString,
                function(e) {
                  if (e) {
                    throw Error(e);
                  } else {
                    console.log(`Export testData ${testDataFileName} success`);
                  }
                }
              );
            }
          });
        } catch (e) {
          console.log(e);
        }
      }
    }
  });
}

const dependencyList = [];
try {
  const packageConfig = fs.readFileSync("./package.json", "utf-8");
  const packageFile = JSON.parse(packageConfig);
  const dependencies = packageFile["dependencies"];
  try {
    Object.keys(dependencies).map(item => {
      dependencyList.push({
        name: item,
        version: dependencies[item]
      });
    });
    const dependencyString = `{"dependency":${JSON.stringify(dependencyList)}}`;
    fs.writeFile(`${dataPath}dependencyList.json`, dependencyString, function(
      e
    ) {
      if (e) {
        throw Error(e);
      } else {
        console.log("Export dependency file success");
      }
    });
    const metadataString = `{
  "belstarTemplateName": "${packageFile["name"]}", 
  "tenantTemplateName": "${packageFile["name"]}",
  "belstarTemplateVersion": "${packageFile["version"]}",
  "tenantTemplateVersion": "${packageFile["version"]}",
  "author": "", 
  "description": "tuexp_004",
  "templateType": "信函",
  "templateCode": "tuexp_004"
}`;
    fs.writeFile(`${dataPath}metadata.json`, metadataString, function(e) {
      if (e) {
        throw Error(e);
      } else {
        console.log("Export metadata file success");
      }
    });
  } catch (e) {
    throw Error(e);
  }
} catch (e) {
  console.log(`[ERROR] Export file failed: ${e}`);
}
module.exports = {
  publicPath: "./",
  configureWebpack: {
    devtool: "eval",
    plugins: pluginList
  }
};
