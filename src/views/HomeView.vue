<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Hello-World msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    'Hello-World': HelloWorld
  }
})
</script>
