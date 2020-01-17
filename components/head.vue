<template lang="pug">
.head.row.bg-green
  slot(name="left")
    van-icon.ft-16(name="arrow-left", @click="back()")
  .col.text-center
    slot(name="title")
      .title {{title}}
  slot(name="right")
    van-icon(name="ellipsis", style="transform: rotate(90deg);")
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="stylus" scoped>
.head
  position fixed
  z-index 2
  left 0
  right 0
  top 0
  align-items center
  background #000
  width 100%
  // height 4.1rem
  height 3.82rem
  line-height 3.82rem
  justify-content center
  color #fff
  /deep/.van-icon
    font-size 26px
    width 44px
    text-align center
  .title
    font-size 18px
</style>
