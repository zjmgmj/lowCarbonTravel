<template lang="pug">
  div
    .flex.text-center.align-center.mt-20.flex-content-around
      .emission-reduction
        strong.ft-18 868.0 G
        .ft-14 累计减排CO2
      .carbonPurchaseAmount
        strong.ft-18 1000 G
        .ft-14 购碳数量
    .mt-20.flex.align-center.flex-content-around.pl-10.pr-10
      .home-option-img
        img(:src="optionImg_1")
      .home-option-img
        img(:src="optionImg_2")
      .home-option-img
        img(:src="optionImg_3")
      .home-option-img
        img(:src="optionImg_4")
      .home-option-img
        img(:src="optionImg_5")
    .content-box.mt-20
      .img-box
        img(src="@/assets/images/home_btnbg.png")
    .menu-box.flex.flex-content-between.align-center.text-center
      .menu-list(@click="jump('/carbonPurchase')")
        img(src="@/assets/images/home_menu_1.png")
        .ft-16 购碳
      .menu-list(@click="singInHandler")
        img(src="@/assets/images/home_menu_2.png")
        .ft-16 签到
      .menu-list
        img(src="@/assets/images/home_menu_3.png")
        .ft-16 骑车出行
      .menu-list
        img(src="@/assets/images/home_menu_4.png")
        .ft-16 自带水杯
      .menu-list
        img(src="@/assets/images/home_menu_5.png")
        .ft-16 随手关屏
      .menu-list(@click="jump('/calculation')")
        img(src="@/assets/images/home_menu_6.png")
        .ft-16 碳足迹计算器
      .menu-list
        img(src="@/assets/images/home_menu_7.png")
        .ft-16 更 多
    sing-in(@close="singInShow = false", v-if="singInShow")
    notice-modal(@close="noticeShow = false", v-if="noticeShow")
</template>
<script>
import singIn from './singIn'
import noticeModal from './noticeModal'
export default {
  components: {
    singIn,
    noticeModal
  },
  data () {
    return {
      singInShow: false,
      noticeShow: false,
      optionImg_1: require('@/assets/images/icon_1.png'),
      optionImg_2: require('@/assets/images/icon_2.png'),
      optionImg_3: require('@/assets/images/icon_3.png'),
      optionImg_4: require('@/assets/images/icon_4.png'),
      optionImg_5: require('@/assets/images/icon_5.png')
    }
  },
  methods: {
    singInHandler () {
      this.singInShow = true
    }
  }
}
</script>
<style lang="stylus" scoped>
.emission-reduction
  background url('./../../assets/images/home_btnbg.png') no-repeat
.carbonPurchaseAmount
  background url('./../../assets/images/home_btnbg_2.png') no-repeat
.emission-reduction, .carbonPurchaseAmount
  box-sizing border-box
  padding 0.45rem
  width 11rem
  height 4.4rem
  background-size 100% 100%
  color #fff
  border-radius 0.5rem
  overflow hidden
.home-option-img
  width 3.7rem
  height 4.4rem
  img
    width 100%
    height 100%
.content-box
  border-top 1rem #f6f6f6 solid
  padding 1rem 0.3rem
  .img-box
    width 100%
    // height 16.1rem
    overflow hidden
    border-radius 0.2rem
    img
      width 100%
      height 100%
.menu-box
  border-top 0.5rem #f6f6f6 solid
  padding 1rem 0.3rem
  .menu-list
    margin-bottom 1rem
    width 30%
    img
      width 4.86rem
      height 4.86rem
</style>