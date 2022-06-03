<template>
    <div class="form_registr">
        <div class="form_registr_logo">
            <h1>OSMO</h1>
        </div>
        <div class="form_registr_input">
            <div class="form_registr_input_mobile">
                <div class="logo_img"><img
                        src="http://127.0.0.1:8000/img/background_registr\icon/telephone-handle-silhouette 1.png" alt=""></div>
                <input type="text" placeholder="Mobile number" v-model="phonein">
            </div>
            <div class="form_registr_input_email">
                <div><img src="http://127.0.0.1:8000/img/background_registr\icon/mail 1.png" alt=""></div>
                <input type="text" placeholder="Email" v-model="e_mailin">
            </div>
            <div class="form_registr_input_surname">
                <input type="text" placeholder="Name and sername" v-model="name_surnamein">
            </div>
            <div class="form_registr_input_username">
                <div><img src="http://127.0.0.1:8000/img/background_registr\icon/user 1.png" alt=""></div>
                <input type="text" placeholder="User name" v-model="loginin">
            </div>
            <div class="form_registr_input_password">
                <div><img src="http://127.0.0.1:8000/img/background_registr\icon/Vector (3).png" alt=""></div>
                <input type="text" placeholder="Password" v-model="passwordin">
            </div>
            <div class="button_sens">
                <button @click="flogin">Sign up</button>
            </div>
            <div class="login">
                <p>Already have an account? <a href="login" style="text-decoration: none;">Log in</a></p>
            </div>
        </div>
    </div>
</template>

<style>
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
    top: 280px;
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

const addr = 'http://127.0.0.1:8000'
axios.defaults.withCredentials = true

export default {
  data () {
    return {
      loginin: '',
      passwordin: '',
      e_mailin: '',
      phonein: '',
      name_surnamein: ''
    }
  },
  methods: {
    flogin () {
      axios.post(
        addr + '/registration_s',
        {
          login: this.loginin,
          password: this.passwordin,
          e_mail: this.e_mailin,
          phone: this.phonein,
          name_surname: this.name_surnamein
        },
        {
          withCredentials: true
        }
      )
        .then(response => {
          if (String(response.data) === 'true') {
            location.href = '/login'
          } else if (String(response.data) === 'false') {
            location.href = '/registration'
          }
        })
        .catch(e => {
          console.log(e)
        })
    }
  }
}
</script>
