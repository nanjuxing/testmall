<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <!-- 导航 -->
      <div slot="center">购物车（{{length }}）</div>
    </nav-bar>

    <!-- 商品的列表 -->
    <cart-list></cart-list>

    <!-- 底部汇总 -->
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import {mapGetters} from 'vuex'
import CartList from './childComps/CartList.vue';
import CartBottomBar from 'views/cart/childComps/CartBottomBar'
export default {
  components: { NavBar,CartList, CartBottomBar},
  name: "Cart",
  computed:{
   ...mapGetters({
     length:'cartLength'
   })
  }
};
</script>

<style scoped>
.nav-bar {
  background-color: var(--color-high-text);
  color: #fff;
}
</style>