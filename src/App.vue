<template>
  <router-view/>
  <header-All />
  <main-Main />
</template>
<script>
import BackgroundLogin from '@/components/BackgroundLogin.vue'
import CenterMain from '@/components/CenterMain.vue'
import HeaderAll from '@/components/HeaderAll.vue'
import MainMain from '@/components/MainMain.vue'

export default {
  components: {
    'background-Login': BackgroundLogin,
    'center-Main': CenterMain,
    'header-All': HeaderAll,
    'main-Main': MainMain
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
