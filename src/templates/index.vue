<template>
  <div>
    <layout-full>
      <template class="font-bold" v-slot:content><Quotation :data="data" /></template
    ></layout-full>
  </div>
</template>

<script>
import "../assets/css/tailwind/tailwind.css";
import LayoutFull from "../components/layout-full/src/index.vue";
import Quotation from "../templates/quotation.vue";
import testData from "../data/testData.json"
export default {
  components: { LayoutFull, Quotation },
  data() {
    return {
      data:""
    };
  },
  created() {
    this.getData()
  },
  methods: {
    getData(){
      this.data = testData
    }
  }
};
</script>
