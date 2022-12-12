<template>
    <header>
        <header-Allll />
    </header>
    <main style="box-shadow: 0px 10px 50px 5px rgba(0, 0, 0, 0.2); width: 640px;">
        <upper-page />
        <hr>
        <bottom-page />
    </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import upPerPage from '@/components/Up_personal_page.vue'
import bottomPerPage from '@/components/Bottom_personal_page.vue'
import headerAll from '@/components/HeaderAll.vue'

export default defineComponent({
  name: 'personal_page',
  components: {
    'upper-page': upPerPage,
    'header-Allll': headerAll,
    'bottom-page': bottomPerPage
  }
})
</script>
