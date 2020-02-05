<template>
  <div class="app-main">
    <div class="test">
      <router-link to="/home">home</router-link>
      <router-link to="/about">about</router-link>
    </div>
    <router-view :key="key" />
  </div>
</template>
<script>
export default {
  name: 'AppMain',
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>
<style lang="scss" scoped>
  .app-main {
    background-color: pink;
    min-height: 500px;
    overflow: hidden;
  }
  .test {
    text-align: center;
    a {
      margin: 0 15px;
      font-size: 22px;
    }
  }
</style>
