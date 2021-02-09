import {debouce} from "./utils"
export const itemListenerMixin = {
  data() {
    return {
      itemImgListener: null
    }
  },
  mounted() {
    let refresh = debouce(this.$refs.scroll.refresh, 100)

    // 对监听的事件进行保存
    this.itemImgListener = () => {
      refresh()
    }
    // 3.监听item中图片加载完成
    this.$bus.$on('itemImageLoad', this.itemImgListener)
  },
}