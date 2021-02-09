<template>
  <div class="goods-item" >
    <img v-lazy="showImage" alt="" @load="imageLoad" @click="itemClick">
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <span class="goods-price">{{ goodsItem.price }}</span>
      <span class="collect">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed:{
    showImage(){
      return this.goodsItem.image||this.goodsItem.show.img
    }
  },
  methods:{
    imageLoad(){
     if(this.$route.path.indexOf('/home')){
        this.$bus.$emit('homeitemImageLoad')
     }else if(this.$route.path.indexOf('/detail')){
       this.$bus.$emit('detailImageLoad')
     }
    },
    itemClick(){
      this.$router.push('/detail/'+this.goodsItem.iid)
    },

  }
};
</script>

<style scoped>
.goods-item {
 padding-bottom: 40px;
 position: relative;
 width: 48%;
}
.goods-item img {
  width: 100%;
  border-radius: 5px;
}

.goods-info{
    font-size: 12px;
    position:absolute;
    width:100%;
    text-align: center;
    bottom: 5px;
    left: 0;
    overflow:hidden;
    text-align:center;
}
.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.goods-price{
    position: relative;
    display: block;
  float: left;
  left: 45px;
  color:var(--color-text)
}
.goods-info .collect{
    
    position: relative;
}
.goods-info .collect::before{
    content:'';
    position:absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/home/collect_icon.png") 0 0/14px 14px;
}
</style>