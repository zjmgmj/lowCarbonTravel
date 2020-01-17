-<template lang="pug">
div
  Head(title="碳足迹计算器")
  .main-content
    .banner.text-center.text-white
      .ft-24 您本次计算的碳足迹为
      .ft-24.pt-15 0.00 kg
    .mt-15.bg-white
      .title.ft-15.flex.align-center.border-bottom-line
        .dot.bg-green
        span.pl-10 碳足迹详情
      .p-10.text-center
        van-row.tab-head.bg-green.pt-10.pb-10
          van-col(span="8") 类别
          van-col(span="8") 碳排放
          van-col(span="8") 单位
        van-row.tab-body.pt-10.pb-10(v-for="(item, index) in list" :key="index")
          van-col(span="8") {{item.type}}
          van-col(span="8")
          van-col(span="8")
        .mt-20.mb-10.ft-16.text-green.ft-bold 您需要种植0.00颗树抵消您的碳排放，实现碳中和。
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
      list: [
        { type: '衣', num: '0.00', danw: 'kg' },
        { type: '衣', num: '0.00', danw: 'kg' },
        { type: '衣', num: '0.00', danw: 'kg' }
      ]
    }
  }
}
</script>
<style lang="stylus" scoped>
.banner
  width 100%
  height 17.9rem
  background #000
  padding-top 6rem
.dot
  width 0.5rem
  height 0.5rem
  border-radius 100%
.title
  padding 15px 10px
.tab-head
  color #E6F3E3
.tab-body
  background #DBF7E0
  &:nth-child(2n+1)
    background #fff
</style>