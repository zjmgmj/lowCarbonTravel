<template lang="pug">
div
  Head(title="碳汇支付")
  .main-content
    .bg-white.p-10
      .ft-18.title.pl-10 购买碳排放
      .p-10.flex.border-bottom-line.align-center.pl-20
        .dot.bg-green
        .text-gray.ft-14.pl-10 1元=50公斤碳排放量，请选择购碳数量
      .flex.text-white.text-center.flex-content-between.pb-10
        .list.ft-18.flex(:style="{background: colorList[index]}", v-for="(item, index) in 6")
          span 50kg
          span ￥1员
    .bg-white.mt-15.p-10
      .ft-18.title.pl-10 最新购碳扶贫贡献者
      .mt-20.flex.pl-15
        .autor(v-for="item in 12")
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
      colorList: ['#8cc53b', '#34b646', '#1ab9b1', '#f7bf05', '#ee7c18', '#de4f3f'],
      list: []
    }
  }
}
</script>
<style lang="stylus" scoped>
.title
  border-left 6px solid #10AA76
.list
  margin-top 20px
  width 30%
  height 6rem
  line-height 35px
  flex-direction column
  justify-content center
.autor
  width 3.826rem
  height 3.826rem
  margin-top 10px
  border 3px solid #fff
  background #000
  border-radius 100%
  margin-left -15px
</style>