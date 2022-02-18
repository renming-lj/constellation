<template>
  <div class="num-list">
    <NumItem
      v-for="(item, index) of numData"
      :key="index"
      :item="item"
      :data="data"
    />
  </div>
</template>

<script>
import numData from "@/datas/num";
import NumItem from "./Item";

export default {
  name: "NumList",
  props: {
    data: Object,
  },
  components: {
    NumItem,
  },
  setup() {
    return {
      numData,
    };
  },
};
</script>

<style lang="scss" scoped>
.num-list {
  display: flex;
  flex-direction: row;
  margin: 0.15rem 0;
  padding: 0.1rem;
  box-shadow: 0.02rem 0.02rem 0.05rem #999;
}
</style>