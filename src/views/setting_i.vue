<template>
    <header>
        <header-All />
    </header>
    <main>
        <app-Setting />
    </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import headerAll from '@/components/HeaderAll.vue'
import appSetting from '@/components/AppSettings.vue'

export default defineComponent({
  components: {
    'header-All': headerAll,
    'app-Setting': appSetting
  }
})
</script>
