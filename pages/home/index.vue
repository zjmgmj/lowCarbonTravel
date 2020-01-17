<template lang="pug">
div
  Head(title="旅游碳汇")
  .main-content.bg-white
    van-tabs(v-model="tabActive")
      van-tab(title="碳中和", name="1")
        carbon-neutral
      van-tab(title="介绍", name="2")
</template>
<script>
import carbonNeutral from './carbonNeutral'
import Head from '@/components/Head'
export default {
  components: {
    Head,
    carbonNeutral
  },
  data () {
    return {
      tabActive: 1
    }
  }
}
</script>
<style lang="stylus" scoped>
/deep/.van-tab
  border-bottom 2px #EFEFEF solid
  &:first-child
    border-right 2px #EFEFEF solid
/deep/.van-tabs__line
  bottom 0px !important
  background-color #10AA76 !important
  width 50% !important
/deep/.van-tab--active
  color #10AA76 !important
/deep/.van-tabs__nav--line
  padding-bottom 0 !important
</style>