<template lang="pug">
.row
  template(slot="left")
    span left
  template(slot="title")
    .col title
  template(slot="right")
    span right
</template>