<template lang="pug">
div
  Head(title="碳足迹计算器")
  .main-content
    van-tabs(v-model="tabName")
      van-tab(v-for="(item, index) in tabHead", :key="index")
        .flex.flex-content-center.text-white.align-center(slot="title")
          img.title-icon(:src="item.imgPath")
          .pl-5.ft-18 {{item.title}}
        span 1111
  Foot
</template>
<script>
import Head from '@/components/Head'
import Foot from '@/components/Footer'
export default {
  components: {
    Head,
    Foot
  },
  data () {
    return {
      tabHead: [
        { title: '衣', imgPath: require('@/assets/images/clothes_icon.png') },
        { title: '食', imgPath: require('@/assets/images/dessert_icon.png') },
        { title: '住', imgPath: require('@/assets/images/residential_icon.png') },
        { title: '行', imgPath: require('@/assets/images/baggage_icon.png') },
        { title: '用', imgPath: require('@/assets/images/shop_icon.png') }
      ]
    }
  }
}
</script>
<style lang="stylus" scoped>
.title-icon
  width 1.39rem
  height 1.39rem
/deep/.van-tabs__nav
  background #10aa76 !important
/deep/.van-tabs__nav--line
  padding-bottom 0
/deep/.van-tabs__line
  bottom 0
  background-color #fff
/deep/.van-tabs__wrap--scrollable .van-tab
  -webkit-box-flex 0
  -webkit-flex 0 0 20%
  flex 0 0 20%
  flex-basis 20% !important
</style>