<template>
  <div class="wrapper">
    <ul class="content">
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
      <li>fenliei</li>
    </ul>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Category",
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    this.scroll=new BScroll(document.querySelector('.wrapper'),{
      probeType:3
    })
    this.scroll.on('scroll',(position)=>{
      console.log(position)
    })
    // console.log(document.querySelector('.wrapper'))
    // const bs = new BScroll(".wrapper", {
    //   pullUpLoad: true,
    //   scrollbar: true,
    //   pullDownRefresh: true,
    //   // and so on
    // });
  },
};
</script>

<style scoped>
.wrapper {
  height: 100px;
  background: burlywood;
  /* overflow: hidden; */
  overflow-y: scroll;
}
</style>