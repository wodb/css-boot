<template>
  <div class="app-wrapper">
    <Head />
    <AppMain />
  </div>
</template>
<script>
import Head from './component/Header/index'
import AppMain from './component/AppMain'
export default {
  components: {
    AppMain,
    Head
  }
}
</script>
