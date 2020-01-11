<template lang="pug">
section
  slot(name="header")
    Head
      template(v-slot:left)
        span testLeft
      template(v-slot:title)
        span testTitle
      template(v-slot:right)
        span testRight
  slot(name="content")
  slot(name="footer")
</template>
<script>
import Head from '@/components/Head'
export default {
  components: {
    Head
  }
}
</script>