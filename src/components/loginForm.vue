<template>
    <div class="form_registr">
        <div class="form_registr_logo">
            <h1>LOGO</h1>
        </div>
        <div class="form_registr_input">
            <div class="form_registr_input_email">
                <div><img src="http://127.0.0.1:8000/img/icon/mail 1.png" alt=""></div>
                <input type="text" placeholder="Login" class="loginin" v-model="loginin">
            </div>
            <div class="form_registr_input_password">
                <div><img src="http://127.0.0.1:8000/img/icon/Vector (3).png" alt=""></div>
                <input type="text" placeholder="Password" class="passwordin" v-model="passwordin">
            </div>
            <div class="button_sens">
                <button class="logup" @click="flogin">Log up</button>
                <div class="logo_social">
                    <div>
                        <a
                            href="https://accounts.google.com/AddSession/identifier?hl=ru&continue=https%3A%2F%2Fwww.google.ru%2F&ec=GAlAmgQ&flowName=GlifWebSignIn&flowEntry=AddSession">
                            <img src="http://127.0.0.1:8000/img/icon/icons8-google-2 1.png" alt="" class="logo_google">
                        </a>
                    </div>
                    <div><a href=""><img src="http://127.0.0.1:8000/img/icon/Group 22.png" alt="" class="logo_facebook"></a></div>
                    <div style="padding-right: 0px;"><a href="https://vk.com/"><img
                                src="http://127.0.0.1:8000/img/icon/Group 21.png" alt="" class="logo_vk"></a></div>
                </div>
            </div>
            <div class="login">
                <p>Need an account? <a href="/registration" style="text-decoration: none;">Sign in</a></p>
                <p>Forgot your password? <a href="#" style="text-decoration: none;">Recover</a></p>
            </div>
        </div>
    </div>
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

body {
    margin: 0 auto;
}

header {
    margin-top: 15px;
    margin-bottom: 15px;
}

.logo {
    width: 210px;
    height: 50px;
    background-color: #000000;
    border-radius: 32px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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
    height: 501px;
    right: 390px;
    top: 149px;
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
    margin-top: 45px;
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
    height: 260px;
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

<script>
import axios from 'axios'

export default {
  data () {
    return {
      loginin: '',
      passwordin: ''
    }
  },
  methods: {
    flogin () {
      console.log(this.loginin)
      axios({
        method: 'post',
        data: {
          login: this.loginin,
          password: this.passwordin
        },
        withCredentials: true,
        url: 'http://127.0.0.1:8000/login_s'
      })
        .then(response => {
          console.log(response)
          if (String(response.data) === 'log_true') {
            console.log(312)
            location.href = '/'
          } if (String(response.data) === 'true') {
            console.log(312)
            location.href = '/'
          }
        })
        .catch(e => {
          console.log(e)
        })
    }
  }
}
</script>
