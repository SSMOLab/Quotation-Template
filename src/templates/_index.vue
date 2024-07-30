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
export default {
  components: { LayoutFull, Quotation },
  data() {
    return {};
  },
  created() {
    this.getData()
  },
  methods: {
    getData(){
      this.data = this.$root
    }
  }
};
</script>
