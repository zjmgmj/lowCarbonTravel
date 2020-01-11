<template lang="pug">
.head.row
  slot(name="left")
    span left
  .col.text-center
    slot(name="title")
  slot(name="right")
    span right
</template>
<style lang="stylus" scoped>
.head
  position fixed
  left 0
  right 0
  top 0
  background #000
  width 100%
  height 1.5rem
  color #fff
</style>