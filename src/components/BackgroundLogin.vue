<template>
    <div class="all_photo">
        <div class="background_registration_line" v-for="(item, index) in posts" :key="index">
            <img v-for="it in item" :src="it" alt="" :key="it">
        </div>
    </div>
</template>

<script>
import axios from 'axios'

const addr = 'http://127.0.0.1:8000'
axios.defaults.withCredentials = true
export default {
  data: () => ({
    posts: { 0: [], 1: [], 2: [], 3: [] },
    errors: []
  }),
  created () {
    axios.post(addr + '/post/randomForLoginPost', {}, { withCredentials: true })
      .then(response => {
        for (let i = 0; i < 4; i++) {
          for (let j = i * 6; j < i * 6 + 6; j++) {
            this.posts[i].push(response.data[j])
          }
        }
        console.log(this.posts)
      })
      .catch(e => {
        this.errors.push(e)
      })
  }
}
</script>

<style>
@font-face {
  font-family: 'Montserrat';
  src: url(http://127.0.0.1:8000/font-family/Montserrat-Light.ttf);
}
@font-face {
  font-family: 'Montserrat_Black';
  src: url(http://127.0.0.1:8000/static/font-family/Montserrat-Bold.ttf);
}

body {
    margin: 0 auto;
}

.background_registration_line img{
    margin-right: 25px;
}

.all_photo {
    margin-left: 50px;
}

.all_photo img {
    object-fit: cover;
    width: 200px;
    height: 200px;
    border-radius: 10px;
}

header {
    margin-top: 15px;
    margin-bottom: 15px;
}

.logo {
    width: 210px;
    height: 50px;
    border-radius: 32px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
}

.logo h1 {
    font-family: 'Montserrat';
    font-size: 20px;
    color: #FFFFFF;
    text-align: center;
    margin: 0;
}

.background_registration_main {
    max-width: 1300px;
    margin: 0 auto;
    margin-top: 20px;
}

.background_registration_line {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
}

.background_registration_line_black {
    position: absolute;
    top: 0px;
    bottom: 0px;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.form_registr {
    position: absolute;
    width: 450px;
    height: 382px;
    right: 390px;
    top: 276px;
    background: #FFFFFF;
    border-radius: 25px;
    box-shadow: 20px 20px 50px 30px rgba(0, 0, 0, 0.65);
}

.form_registr_logo{
    width: 211px;
    height: 50px;
    background: #000000;
    border-radius: 32px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 60px;
    margin-bottom: 35px;
}

.form_registr_logo h1 {
    font-family: 'Montserrat';
    color: #FFFFFF;
    text-align: center;
    margin: 0;
    font-size: 20px;
}

.form_registr_input {
    width: 300px;
    height: 190px;
    margin-top: 0px;
    margin: 0 auto;
}

.form_registr_input_mobile {
    width: 300px;
    height: 40px;
    padding-bottom: 15px;
    display: flex;
    justify-content: space-between;
}

.form_registr_input_mobile .logo_img {
    display: flex;
    align-items: center;
    justify-content: center;
}

.form_registr_input_mobile input {
    width: 237px;
    height: 40px;
    padding: 0px;
    background: #FFFFFF;
    border: 1px solid #000000;
    border-radius: 25px;
    font-family: 'Montserrat_Black';
    color: #000000;
    font-size: 13px;
    padding-left: 23px;
}

.form_registr_input_email {
    width: 300px;
    height: 40px;
    padding-bottom: 15px;
    display: flex;
    justify-content: space-between;
}

.form_registr_input_email div {
    display: flex;
    align-items: center;
    justify-content: center;
}

.form_registr_input_email input {
    width: 237px;
    height: 40px;
    padding: 0px;
    background: #FFFFFF;
    border: 1px solid #000000;
    border-radius: 25px;
    font-family: 'Montserrat_Black';
    color: #000000;
    font-size: 13px;
    padding-left: 23px;
}

.form_registr_input_surname {
    width: 300px;
    height: 40px;
    padding-bottom: 15px;
    display: flex;
    justify-content: right;
}

.form_registr_input_surname input {
    width: 237px;
    height: 40px;
    padding: 0px;
    background: #FFFFFF;
    border: 1px solid #000000;
    border-radius: 25px;
    font-family: 'Montserrat_Black';
    color: #000000;
    font-size: 13px;
    padding-left: 23px;
}

.form_registr_input_username {
    width: 300px;
    height: 40px;
    padding-bottom: 15px;
    display: flex;
    justify-content: space-between;
}

.form_registr_input_username div {
    display: flex;
    align-items: center;
    justify-content: center;
}

.form_registr_input_username input {
    width: 237px;
    height: 40px;
    padding: 0px;
    background: #FFFFFF;
    border: 1px solid #000000;
    border-radius: 25px;
    font-family: 'Montserrat_Black';
    color: #000000;
    font-size: 13px;
    padding-left: 23px;
}

.form_registr_input_password {
    width: 300px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    padding-bottom: 15px;
}

.form_registr_input_password div {
    display: flex;
    align-items: center;
    justify-content: center;
}

.form_registr_input_password input {
    width: 237px;
    height: 40px;
    padding: 0px;
    background: #FFFFFF;
    border: 1px solid #000000;
    border-radius: 25px;
    font-family: 'Montserrat_Black';
    color: #000000;
    font-size: 13px;
    padding-left: 23px;
}

.button_sens {
    width: 260px;
    height: 30px;
    float: right;
    display: flex;
    justify-content: space-between;
}

.button_sens button {
    width: 130px;
    height: 30px;
    background: #000;
    border: 0px solid #000;;
    border-radius: 70px;
    font-family: 'Montserrat_Black';
    font-size: 14px;
    color: rgb(255, 255, 255);
}

.button_sens .logo_social{
    display: flex;
    justify-content: space-between;
}

.button_sens .logo_social div{
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 10px;
}

.button_sens .logo_social div a{
    height: max-content;
}

.login {
    width: 260px;
    margin: 0 auto;
    text-align: center;
    margin-top: 40px;
}

.login p {
    font-family: 'Montserrat_Black';
    font-size: 11px;
    color: #000000;
}
</style>
