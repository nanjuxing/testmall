<template>
  <div id="detail">
    <detail-nav-bar
      class="detail-nav"
      @titleClick="titleClick"
    ></detail-nav-bar>
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
    >    
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info
        :detail-info="detailInfo"
        @imgLoad="imgLoad"
      ></detail-goods-info>
      <detail-param-info
        ref="params"
        :param-info="paramInfo"
      ></detail-param-info>
      <detail-comment-info
        ref="comment"
        :comment-info="commentInfo"
      ></detail-comment-info>
      <goods-list ref="recommend" :goods="recommends"></goods-list>
    </scroll>
    <detail-bottom-bar @addCart="addToCart"></detail-bottom-bar>
    <toast message="哈哈哈"></toast>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar.vue";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import { itemListenerMixin } from "common/mixin";
import {mapActions} from 'vuex'
import {
  getDetail,
  Goods,
  Shop,
  GoodsParam,
  getRecommend,
} from "network/detail";
import Scroll from "components/common/scroll/Scroll.vue";
import DetailParamInfo from "./childComps/DetailParamInfo.vue";
import DetailCommentInfo from "views/home/childComponents/DetailCommentInfo.vue";
import GoodsList from "components/content/goods/GoodsList.vue";
import DetailBottomBar from "views/detail/childComps/DetailBottomBar"
import { debouce } from "common/utils";
import Toast from 'components/common/toast/Toast.vue';
export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    Scroll,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar,
    Toast,
  },
  mixins: [itemListenerMixin],
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      itemImgListener: null,
      themeTopYs: [],
      getThemeTopY: null,
      currentIndex:0,
      isShowBackTop:false,
    };
  },
  created() {
    // 1.保存传入的数据
    this.iid = this.$route.params.iid;

    // 2.根据iid请求详情页数据
    getDetail(this.iid).then((res) => {
      // 1.获取顶部的图片轮播数据
      const data = res.result;
      this.topImages = data.itemInfo.topImages;

      // 2.获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );

      // 3.创建店铺信息的对象
      this.shop = new Shop(data.shopInfo);

      //   4.保存商品的详情数据
      this.detailInfo = data.detailInfo;

      // 5.获取参数的信息
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );

      // 6.取出评论的信息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }

      // 7.给getTheTopY赋值
      this.getThemeTopY = debouce(() => {
        this.themeTopYs = [];
        this.themeTopYs.push(0);
        this.themeTopYs.push(this.$refs.params.$el.offsetTop);
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
        console.log(this.themeTopYs);
      }, 100);
    });

    // 3.请求推荐数据
    getRecommend().then((res) => {
      this.recommends = res.data.list;
    });
  },
  destroyed() {
    this.$bus.$off("imgLoad", this.itemImgListener);
  },
  methods: {
    ...mapActions(['addCart']),
    imgLoad() {
      this.$refs.scroll.refresh();
      this.getThemeTopY();
    },
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index] + 22, 9000);
    },
    contentScroll(position) {
      console.log(position);
    },
    addToCart(){
      const product={}
      // 1.获取购物车需要展示的信息
      product.image=this.topImages[0];
      product.title=this.goods.title;
      product.desc=this.goods.desc;
      product.price=this.goods.realPrice;
      product.iid=this.iid;

      // 2.将商品添加到购物车里
      // this.$store.cartList.push(product)
      // this.$store.commit('addCart',product)
      this.addToCart(product).then(res =>{
        this.show =true;
        this.message =res;
        setTimeout(() => {
          this.show =false;
          this.message =''
        }, 1500);
      })
      // this.$store.dispatch('addCart',product).then(res =>{
      //   console.log(res)
      // })
    }
  },
};
</script>

<style scoped>
#detail {
  position: relative  !important;
  z-index: 9;
  background-color: #fff;
   /* height: 100vh;  */
}
.detail-nav {
  position: relative !important;;
  z-index: 9  !important;
}
.content {
  height: calc(100vh - 44px - 55px);
  overflow:scroll;
}
</style>