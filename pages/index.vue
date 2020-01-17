<template lang="pug">
no-ssr
  nuxt-view
</template>

<script>
export default {
  middleware: 'indexJump',
  mounted () {
    this.$nextTick(() => {
      const deviceWidth = document.documentElement.clientWidth
      document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px'
    })
    // document.documentElement.style.fontSize = deviceWidth / 6.4 + 'px';
  }
}
</script>

<style>
</style>
