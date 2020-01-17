<template lang="pug">
.box
  .mask
  .content-box
    .title.flex.align-center.flex-content-center.p-20
      img.sign-in-icon(src="@/assets/images/sign_in.png" )
      span.pl-10 签到成功！
    .relative(style="height: 24rem")
      .content-bg
        img.content-img(src="@/assets/images/sign_in_bg.png")
        .ft-30.ft-bold.content-detail.text-center
          span.text-white 减排
          span.ft-37.yellow +3g
          p.mt-20.ft-24.text-white 轻碳生活，环保每一天
      .footer-sign-in
  .close(@click="close")
    img(src="@/assets/images/close.png")
</template>
<script>
export default {
  methods: {
    close () {
      this.$emit('close')
    }
  }
}
</script>
<style lang="stylus" scoped>
.yellow
  color #FFF600
.ft-37
  font-size 37px
.box
  position fixed
  left 0
  right 0
  top 0
  bottom 0
  z-index 100
  background rgba(0, 0, 0, 0.5)
  .content-box
    position fixed
    left 50%
    margin-left - 11.1rem
    // top 50%
    top 4rem
    // margin-top -14.28rem
    border-radius 1rem
    overflow hidden
    width 22.2rem
    height 28.9rem
    background #fff
    // position relative
    .title
      font-size 22px
      color #000
      .sign-in-icon
        width 2.47rem
        height 2.39rem
    .content-bg
      background #257c56
      width 50rem
      height 33rem
      border-radius 100%
      position absolute
      top 0px
      left 50%
      margin-left -25rem
      // background-size 18.04rem 14.56rem
      background-position center top
    .content-detail
      width 18.04rem
      height 10.56rem
      position absolute
      top 11rem
      left 50%
      margin-left -9.02rem
    .content-img
      width 18.04rem
      height 14.56rem
      position absolute
      top 1.5rem
      left 50%
      margin-left -9.02rem
    .footer-sign-in
      position absolute
      bottom 0
      left 0
      right 0
      height 4.34rem
      // background #4c8a30
      background #4c8a30 url('../../assets/images/sign_in_bottom.png') no-repeat
      background-position center bottom
      background-size 19.3rem 3.91rem
.close
  width 3.43rem
  height 3.43rem
  position absolute
  left 50%
  margin-left -1.715rem
  top 33.5rem
  img
    width 100%
    height 100%
</style>