<template>
    <header>
        <div class="icon">
            <div class="iconleft">
                <a href="/"><img src="http://127.0.0.1:8000/img/main/iconmain/home (1) 1.png" alt=""></a>
                <a :href="'http://localhost:8080/account/' + this.account"><img src="http://127.0.0.1:8000/img/main/iconmain/user (2) 1.png" alt=""></a>
            </div>
            <div class="logo" style="margin-right: 115px;">
                <p>OSMO</p>
            </div>
            <div class="iconright">
                <a href="" @click="exit_a"><img src="http://127.0.0.1:8000/img/icon/exit 1.png" alt=""></a>
                <a href=""><img src="http://127.0.0.1:8000/img/main/iconmain/heart (1) 1.png" alt=""></a>
                <a href=""><img src="http://127.0.0.1:8000/img/main/iconmain/direct 1.png" alt=""></a>
            </div>
        </div>
    </header>
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
    margin: 0;
}

header {
    margin: 0 auto;
    margin-top: 25px;
    margin-bottom: 30px;
    width: 640px;
    height: 40px;
}

.icon {
    max-width: 100%;
    max-height: 100%;
    display: flex;
    justify-content: space-between;
}

.iconleft {
    width: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    width: 200px;
    height: 40px;
    background: #FFFFFF;
    border: 1px solid #000000;
    border-radius: 22px;
    display: flex;
    align-items: center;
}

.logo p {
    margin: 0 auto;
    color: white;
    font-family: 'Montserrat_Black';
    font-size: 15px;
}

.iconright {
    width: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.card {
    width: 640px;
    height: 389px;
    margin: 0 auto;
    display: flex;
    justify-content:right;
    box-shadow: 6px 0px 20px rgba(0, 0, 0, 0.1);
    border-radius: 30px 30px 30px 30px;
    margin-bottom: 20px;
}

.left_bar {
    overflow: hidden;
    position: relative;
    z-index: 0;
    display: flex;
    align-items: center;
    margin: 0 auto;
}

.left_bar img {
    margin: 0 auto;
    width: 389px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 30px;
    pointer-events: none
}

.nav_card {
    width: 221px;
    height: 27px;
    margin-top: 15px;
    margin-left: 15px;
    display: flex;
    justify-content: space-between;
}

.left_button {
    display: flex;
    justify-content: space-between;
}

.left_button a{
    display: flex;
    width: 18px;
    height: 18px;
    justify-content: space-between;
    padding-right: 20px;
}

.left_button a img{
    width: 100%;
    height: 100%;
}

.like img {
    margin-right: 18px;
    cursor: pointer;
    z-index: 100000;
}

.left_button p{
    font-family: 'Montserrat_Black';
    font-size: 9px;
    color: #000000;
    margin: 0px;
    margin-top: 2px;
}

.right_bar {
    position: relative;
    z-index: 1;
    width: 251px;
    height: 389px;
}

.like {
    z-index: 10000;
}

.right_button button {
    font-family: 'Montserrat_Black';
    width: 80px;
    height: 23px;
    background: #FF4848;
    border-radius: 15px;
    border: none;
    color: #FFFFFF;
}

.account {
    display: flex;
    align-items: center;
    margin-top: 16px;
    margin-left: 15px;
}

.account img{
    width: 40px;
    height: 40px;
    margin-right: 15px;
    border-radius: 100%;
}

.account p{
    font-family: 'Montserrat_Black';
    font-size: 12px;
    color: #FF7A00;
    padding-right: 5px;
}

.account a{
    width: 10px;
    height: 10px;
}

.account a img{
    width: 100%;
    height: 100%;
}

.account_me_comment {
    width: 220px;
    height: 55px;
    margin-top: 20px;
    margin-left: 15px;
}

.account_me_comment p{
    font-family: 'Montserrat_Black';
    font-size: 9px;
    color: #000000;
    margin: 0px;
}

.comment {
    width: 100%;
    height: 197px;
}

.comment_p {
    font-family: 'Montserrat_Black';
    font-size: 14px;
    color: #000000;
    padding-top: 14px;
    padding-left: 15px;
    margin-bottom: 10px;
}

.comment_p p{
    margin: 0px;
}

.person {
    display: flex;
    padding-left: 30px;
    align-items: center;
}

.person img {
    width: 16px;
    height: 16px;
    padding-right: 5px;
}

.person p {
    font-size: 8px;
    color: #000000;
    padding-right: 5px;
}

.manyperson {
    width: 100%;
    height: 120px;
}

.new_comment {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.new_comment img {
    width: 25px;
    height: 25px;
}

.new_comment input{
    padding-left: 10px;
    font-family: 'Montserrat';
    font-size: 8px;
    color: #A6A6A6;
    width: 170px;
    height: 25px;
    margin-right: 15px;
    border: 1px solid #FF4848;
    border-radius: 38px;
}
</style>

<script>
/* eslint-disable */
function getCookie (name) {
  const matches = document.cookie.match(new RegExp(
    '(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'
  ))
  return matches ? decodeURIComponent(matches[1]) : undefined
}
/* eslint-enable */

export default {
  data: () => ({
    posts: {},
    errors: [],
    el: document.querySelector('.right_bar'),
    account: (localStorage.getItem('login')).slice(0, -1).replace('"', '')
  }),
  methods: {
    exit_a () {
      localStorage.removeItem('token')
      localStorage.removeItem('login')
      localStorage.removeItem('name')
      localStorage.removeItem('surname')
    }
  }
}
</script>
