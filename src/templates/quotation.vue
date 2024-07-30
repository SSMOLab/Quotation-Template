<template>
  <div>
    <layout-full>
      <template v-slot:content
        ><div>
          <div class="pt-8 overflow-hidden">
            <div class="float-left">
              <img class="w-40" src="../assets/img/SSMOLab-RGB.png" alt="" />
            </div>
            <div
              class="float-right text-sm tracking-widest font-normal pt-4 pr-0"
            >
              同源數位智能股份有限公司
            </div>
          </div>
          <div class="blank hidden h-12"></div>
          <div class="overflow-hidden">
            <h1
              class="pt-4 text-4xl font-normal text-center tracking-widest text-blue-600"
            >
              報&nbsp;價&nbsp;單
            </h1>
          </div>
          <div>
            <div
              class="float-right text-sm pt-6 text-gray-800 font-normal overflow-hidden"
            >
              <table class="">
                <tr class="">
                  <td class="border border-blue-200 px-3 py-1">單據編號</td>
                  <td class="border border-blue-200 px-3 text-right py-1">
                    {{data.orderNumber}}
                  </td>
                </tr>
                <tr>
                  <td class="border border-blue-200 px-3 py-1">報價日期</td>
                  <td class="border border-blue-200 px-3 text-right pl-12 py-1">
                    {{data.orderDate}}
                  </td>
                </tr>
                <tr>
                  <td class="border border-blue-200 px-3 py-1">發票類型</td>
                  <td class="border border-blue-200 px-3 text-right py-1">
                    {{data.orderType}}
                  </td>
                </tr>
                <tr>
                  <td class="border border-blue-200 px-3 py-1">幣别</td>
                  <td class="border border-blue-200 px-3 py-1 text-right">
                    {{data.currency}}
                  </td>
                </tr>
              </table>
            </div>
            <div class="text-sm pt-6 font-normal text-gray-800">
              <table>
                <tr>
                  <td class="font-medium">客&nbsp;戶&nbsp;訊&nbsp;息</td>
                </tr>
                <tr>
                  <td class="pt-2">公司名稱：</td>
                  <td class="pt-2">
                    {{data.companyName}}
                  </td>
                </tr>
                <tr>
                  <td>聯&nbsp;絡&nbsp;人：</td>
                  <td></td>
                </tr>
                <tr>
                  <td>聯絡方式：</td>
                  <td>1234567890</td>
                </tr>
                <tr>
                  <td>信 &nbsp;&nbsp;&nbsp;箱：</td>
                  <td>12345678@163.com</td>
                </tr>
                <tr>
                  <td>公司地址：</td>
                  <td>山西省太原市迎則大街300號保險大廈1407房間</td>
                </tr>
              </table>
            </div>
          </div>
          <div class="pt-8 overflow-hidden relative">
            <table class="text-sm text-gray-900 w-full">
              <tr>
                <td
                  class="px-3 py-2 border-gray-100 text-center border-r bg-gray-200"
                >
                  序號
                </td>
                <td
                  class="px-6 py-2 border-gray-100 text-center border-r bg-gray-200"
                >
                  產品編號
                </td>
                <td
                  class="px-6 py-2 border-gray-100 text-center border-r bg-gray-200"
                >
                  規格描述
                </td>
                <td
                  class="px-2 py-2 border-gray-100 text-center border-r bg-gray-200"
                >
                  單價
                </td>
                <td
                  class="px-2 py-2 border-gray-100 text-center border-r bg-gray-200"
                >
                  數量
                </td>
                <td
                  class="px-2 py-2 border-gray-100 text-center border-r bg-gray-200"
                >
                  折扣(%)
                </td>
                <td
                  class="px-6 py-2 border-gray-100 text-center border-r bg-blue-300"
                >
                  稅率
                </td>
                <td class="px-6 py-2 bg-blue-500 text-center text-green-100">
                  小計
                </td>
              </tr>
              <tr
                class="px-3 text-left border-gray-300 border-b text-black text-opacity-75"
              >
                <td class="py-2">0001</td>
                <td class="">62878634</td>
                <td>封面</td>
                <td>0.5</td>
                <td>1000</td>
                <td>0</td>
                <td>1%</td>
                <td>5836</td>
              </tr>
              <tr
                class="px-3 text-left border-gray-300 border-b text-black text-opacity-75"
              >
                <td class="py-2">0002</td>
                <td class="">62878466</td>
                <td>封底</td>
                <td>0.5</td>
                <td>1000</td>
                <td>0</td>
                <td>1%</td>
                <td>3748</td>
              </tr>
              <tr
                class="px-3 text-left border-gray-300 border-b text-black text-opacity-75"
              >
                <td class="py-2">0003</td>
                <td class="">62878568</td>
                <td>內頁1</td>
                <td>0.1</td>
                <td>500</td>
                <td>0</td>
                <td>1%</td>
                <td>648</td>
              </tr>
              <tr
                class="px-3 text-left border-gray-300 border-b text-black text-opacity-75"
              >
                <td class="py-2">0004</td>
                <td class="">62878532</td>
                <td>內頁2</td>
                <td>0.2</td>
                <td>800</td>
                <td>0</td>
                <td>1%</td>
                <td>1537</td>
              </tr>
              <tr
                class="px-3 text-left border-gray-300 border-b text-black text-opacity-75"
              >
                <td class="py-2">0005</td>
                <td class="">62878578</td>
                <td>內頁3</td>
                <td>0.2</td>
                <td>1600</td>
                <td>0</td>
                <td>1%</td>
                <td>5473</td>
              </tr>
              <tr
                class="px-3 text-left border-gray-300 border-b text-black text-opacity-75"
              >
                <td class="py-2">0006</td>
                <td class="">62878734</td>
                <td>內頁4</td>
                <td>0.2</td>
                <td>1100</td>
                <td>0</td>
                <td>1%</td>
                <td>6484</td>
              </tr>
              <tr
                class="px-3 text-left border-gray-300 border-b text-black text-opacity-75"
              >
                <td class="py-2">0007</td>
                <td class="">62878387</td>
                <td>內頁5</td>
                <td>0.6</td>
                <td>1100</td>
                <td>0</td>
                <td>1%</td>
                <td>2647</td>
              </tr>
              <tr class="px-3 text-left text-black">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td class="border-gray-300 border-b py-2">小計</td>
                <td class="border-gray-300 border-b">$ 23748</td>
              </tr>
              <tr class="px-3 text-left text-black">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td class="py-2">稅金</td>
                <td class="">$ 237.48</td>
              </tr>
              <tr class="border-gray-400 border-b-2">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr class="px-3 text-left text-black">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td class="font-medium text-black py-2">總計</td>
                <td class="font-medium text-red-600">$ 23103.48</td>
              </tr>
            </table>
          </div>

          <div class="text-sm text-gray-700 overflow-hidden pt-6 pb-4">
            <div class="float-left overflow-hidden w-5/12 grid grid-cols-12">
              <div class="col-start-1 col-end-4 pt-1 font-medium">其他说明</div>
              <div class="flex items-baseline col-start-1 col-end-13 pt-2">
                <span class="bg-blue-500 rounded-full w-2 h-2 pr-2"></span>
                &nbsp;&nbsp;&nbsp;報價有效期：60天
              </div>
              <div class="flex items-baseline col-start-1 col-end-13 pt-2">
                <span class="bg-blue-500 rounded-full w-2 h-2 pr-2"></span>
                &nbsp;&nbsp;&nbsp;物流：快遞 / 郵政
              </div>
              <div class="flex items-baseline col-start-1 col-end-13 pt-2">
                <span class="bg-blue-500 rounded-full w-2 h-2 pr-2"></span>
                &nbsp;&nbsp;&nbsp;運費說明：
              </div>
              <div class="flex items-baseline col-start-1 col-end-13 pt-2">
                <span class="bg-blue-500 rounded-full w-2 h-2 pr-2"></span>
                &nbsp;&nbsp;&nbsp;付款方式：TT / Cash
              </div>
              <div class="flex items-baseline col-start-1 col-end-13 pt-2">
                <span class="bg-blue-500 rounded-full w-2 h-2 pr-2"></span>
                &nbsp;&nbsp;&nbsp;结算方式：
              </div>
              <div class="flex items-baseline col-start-1 col-end-13 pt-2">
                <span class="bg-blue-500 rounded-full w-2 h-2 pr-2"></span>
                &nbsp;&nbsp;&nbsp;交貨方式：分批 / 整批
              </div>
              <div class="flex items-baseline col-start-1 col-end-13 pt-2">
                <span class="bg-blue-500 rounded-full w-2 h-2 pr-2"></span>
                &nbsp;&nbsp;&nbsp;交貨期：收到貨款後6天內交貨
              </div>
            </div>
            <div>
              <table
                class="text-gray-700 bg-blue-100 font-normal text-sm w-6/12 float-right rounded-lg overflow-hidden"
              >
                <tr>
                  <td class="pl-6 pt-8 pr-2">聯&nbsp;絡&nbsp;人：</td>
                  <td class="pt-8">張三</td>
                </tr>
                <tr class="">
                  <td class="pl-6 pt-1 pr-2">聯絡電話：</td>
                  <td class="pt-1">1350012345</td>
                </tr>
                <tr class="">
                  <td class="pl-6 pt-1 pr-2">信&nbsp;&nbsp;&nbsp;&nbsp;箱：</td>
                  <td class="pt-1">12345678@ssmolab.com</td>
                </tr>
                <tr class="">
                  <td class="pl-6 pt-1">公司名稱：</td>
                  <td class="pt-1">同源數位智能股份有限公司</td>
                </tr>
                <tr class="">
                  <td class="pl-6 pt-1">公司稅號：</td>
                  <td class="pt-1">911101121021724446</td>
                </tr>
                <tr class="">
                  <td class="pl-6 pb-8 align-text-top pt-1">公司地址：</td>
                  <td class="pt-1 pr-6 pb-6">
                    高雄市前鎮區民權二路6號6號樓之2
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div
            class="border-gray-500 border-b border-1 pt-6"
          ></div></div></template
    ></layout-full>
  </div>
</template>

<script>
import LayoutFull from "../components/layout-full/src/index.vue";
export default {
  props: {
    data:Object
  },
  components: {
    LayoutFull
  },
  data() {
    return {};
  }
};
</script>
