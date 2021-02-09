<template>
  <swiper >
      <swiper-item
        class="swiper-item"
        v-for="item in topImages"
        :key="item.index"
      >
        <img :src="item" alt="" />
      </swiper-item>
    </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  components: { Swiper, SwiperItem },
  name: "DetailSwiper",
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      },
    },
  },
 
};
</script>

<style scoped>
.swiper-item {
    height: 300px;
    overflow: hidden;
}
</style>