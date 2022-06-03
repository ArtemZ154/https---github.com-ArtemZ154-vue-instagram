<template>
    <header>
        <header-All />
    </header>
    <main>
        <p>IN DEVELOPMENT</p>
        <p style="margin-left: 300px;">IN DEVELOPMENT</p>
        <p style="margin-left: 500px;">IN DEVELOPMENT</p>
    </main>
</template>

<style>
@font-face {
    font-family: 'Montserrat';
    src: url(http://127.0.0.1:8000/font-family/Montserrat-Light.ttf);
}
@font-face {
    font-family: 'Montserrat_Black';
    src: url(http://127.0.0.1:8000/font-family/Montserrat-Bold.ttf);
}
@font-face {
    font-family: 'Montserrat_normal';
    src: url(http://127.0.0.1:8000/font-family/Montserrat-SemiBold.ttf);
}
@font-face {
    font-family: 'Leto';
    src: url(http://127.0.0.1:8000/font-family//Leto/Leto\ Text\ Sans\ Defect.otf);
}
@font-face {
    font-family: 'Montserrat';
    src: url(http://127.0.0.1:8000/font-family/Montserrat-Light.ttf);
}
@font-face {
    font-family: 'Montserrat_Black';
    src: url(http://127.0.0.1:8000/font-family/Montserrat-Bold.ttf);
}
@font-face {
    font-family: 'Montserrat_BlackExtra';
    src: url(http://127.0.0.1:8000/font-family/Montserrat-ExtraBold.ttf);
}

@font-face {
    font-family: 'Montserrat_normal';
    src: url(http://127.0.0.1:8000/font-family/Montserrat-SemiBold.ttf);
}
@font-face {
    font-family: 'Leto';
    src: url(http://127.0.0.1:8000/font-family//Leto/Leto\ Text\ Sans\ Defect.otf);
}

</style>

<script lang="ts">
import { defineComponent } from 'vue'
import headerAll from '@/components/HeaderAll.vue'

export default defineComponent({
  name: 'razrabPage',
  components: {
    headerAll: headerAll
  }
})
</script>
