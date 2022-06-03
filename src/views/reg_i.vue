<template>
    <header>
        <div class="logo">
            <h1>OSMO</h1>
        </div>
    </header>
    <div class="background_registration_line_black"></div>
    <main style="margin: none; box-shadow: none; margin-bottom: none; width: auto">
        <background-Login />
        <registr-Form />
    </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BackgroundLogin from '@/components/BackgroundLogin.vue'
import registrForm from '@/components/registrForm.vue'

export default defineComponent({
  components: {
    'background-Login': BackgroundLogin,
    'registr-Form': registrForm
  }
})
</script>
