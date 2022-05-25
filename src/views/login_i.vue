<template>
    <header>
        <div class="logo">
            <h1>LOGO</h1>
        </div>
    </header>
    <div class="background_registration_line_black"></div>
    <main>
        <background-Login />
    </main>
    <router-view/>
</template>

<script>
import BackgroundLogin from '@/components/BackgroundLogin.vue'

export default {
  components: {
    'background-Login': BackgroundLogin
  }
}
</script>
