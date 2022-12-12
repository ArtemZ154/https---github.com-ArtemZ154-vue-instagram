<template>
    <div class="close" style="display: none;" @click="created_post_out"></div>
    <form action='http://127.0.0.1:8000/upload_file' method="post" enctype="multipart/form-data" onsubmit="">
        <div class="menu_new_post" style="display: none;">
            <div class="header_menu_new_post">
                <div class="header_dop_div">
                    <p>Post a photo</p>
                    <img src="http://127.0.0.1:8000/img/ls/png/upload 1.png" alt="">
                </div>
                <hr>
            </div>
            <div class="any_bar">
                <div class="leftcfdcf_bar">
                    <div class="img_border">
                        <div class="top_saitbar">
                            <div class="tochka"></div>
                        </div>
                        <div class="center_saitbar">
                            <img src="http://127.0.0.1:8000/img/ls/png/upload-big-arrow 1.png" alt="">
                        </div>
                        <div class="bottom_saitbar">
                            <input type="file" name="photo_file" class="custom-file-input" @change="render_photo"/>
                            <p>Tip: use high-quality files in .png format</p>
                        </div>
                    </div>
                </div>
                <div class="right1_bar">
                    <div class="person_info">
                        <div class="img_gradient">
                            <img :src="up.avatar" alt="" style="width: 55px; height: 55px;">
                        </div>
                        <p>{{ this.account }}</p>
                    </div>
                    <textarea name="text_post" class="fdfffd" id="" cols="30" rows="10" placeholder="Add a description:"></textarea>
                    <button id="post" type="submit" @click="fdsa">Post</button>
                </div>
            </div>
        </div>
    </form>
    <div class="top_person">
            <div class="personon">
                <div class="div_person_logo" style="width: 90px; height: 90px; border-radius: 50%; background: radial-gradient(#FF6868 90%, #FFC700 90%,#FF0099 90%,#FF7A00 90%); display: flex; align-items: center; margin: 0 auto;">
                    <img :src="up.avatar" alt="" class="person_logo">
                </div>
                <div class="person_name" v-if="up.settings == 'true'">
                    <p>{{ up.login }}</p>
                    <a href="/settings"><img src="http://127.0.0.1:8000/img/ls/free-icon-gear-interface-symbol-for-configuration-45493 1.png"  alt=""></a>
                </div>
                <div class="person_name" v-if="up.settings === 'false'">
                    <p>{{ up.login }}</p>
                </div>
                <div class="btn">
                    <div class="one_btn" v-if="up.settings_sub == true">
                        <button style="background: #686868;" @click="subsc">Subscribed</button>
                        <p>{{ up.subscribers }} subs</p>
                    </div>
                    <div class="one_btn" v-if="up.settings_sub == false">
                        <button @click="subsc" :key="components_key_re">Subscribe</button>
                        <p>{{ up.subscribers }} subs</p>
                    </div>
                    <div class="two_btn">
                        <button>Message</button>
                        <p>{{ up.posts }} posts</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom_person">
            <div class="about_person">
                <p class="name_p">About me:</p>
                <p class="about_p_person">{{ up.about_me }}</p>
                <div class="btn_menu">
                    <div class="new_post" @click="created_post_in">
                        <img src="http://127.0.0.1:8000/img/ls/Group 51.png" alt="">
                        <p>Post a photo/video</p>
                    </div>
                    <div class="market">
                        <img src="http://127.0.0.1:8000/img/ls/Group 54.png" alt="">
                        <p>Skins market</p>
                    </div>
                </div>
            </div>
        </div>
</template>
<style>
.custom-file-input {
  color: transparent;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  outline: 0;
  box-shadow: none;
  border: none;
  width: 167px;
  height: 36px;
  background: #000000;
  border-radius: 20px;
  font-family: 'Montserrat_normal';
  font-size: 13px;
  color: #FFFFFF;
}
.custom-file-input::-webkit-file-upload-button {
  visibility: hidden;
}
.custom-file-input::before {
  content: 'Select from computer';
  display: inline-block;
  background: black;
  border-radius: 3px;
  padding: 5px 8px;
  outline: none;
  white-space: nowrap;
  -webkit-user-select: none;
  cursor: pointer;
  font-weight: 700;
  font-size: 10pt;
  margin-top: 5px;
}
.custom-file-input:hover::before {
  border-color: black;
}
.custom-file-input:active {
  outline: 0;
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

.close {
    position: absolute  ;
    width: 100%;
    height: 100%;
}

.menu_new_post {
    transition-duration: 0.4s;
    opacity: 1;
    position: absolute;
    left: 560px;
    top: 150px;
    display: block;
    width: 800px;
    height: 689px;
    background-color: #fff;
    border-radius: 30px;
}

.header_dop_div {
    display: flex;
    align-items: center;
    margin: 20px 0px 0px 25px;
}

.header_dop_div p {
    font-family: 'Montserrat_BlackExtra';
    font-weight: 800;
    font-size: 25px;
    color: #000000;
    margin: 0px;
    padding-right: 10px;
}

.header_dop_div img {
    padding-right: 30px;
}

.header_menu_new_post hr {
    width: 250px;
    height: 3px;
    background: #828282;
    border-radius: 27px;
    margin-top: 1px;
    margin-left: 25px;
}

.any_bar {
    display: flex;
    width: 389px;
    margin: 96px 26px 150px 25px;
}

.img_border {
    width: 389px;
    height: 389px;
    background: #C4C4C4;
    border: 3px dashed #000000;
    box-shadow: 5px 5px 20px 10px rgba(0, 0, 0, 0.15);
    border-radius: 30px;
}

.tochka {
    width: 30px;
    height: 30px;
    background: #000000;
    margin: 15px 0px 0px 15px;
    border-radius: 50%;
}

.bottom_saitbar button {
    border: none;
    width: 167px;
    height: 36px;
    background: #000000;
    border-radius: 20px;
    font-family: 'Montserrat_normal';
    font-size: 13px;
    color: #FFFFFF;
}

.center_saitbar {
    width: 100%;
    height: 293px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.bottom_saitbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 15px;
    padding-right: 15px;
}

.bottom_saitbar p{
    margin: 0px;
    width: 145px;
    height: 26px;
    font-size: 11px;
    color: #272727;
    font-family: 'Montserrat_normal';
}

.right1_bar {
    margin-left: 50px;
}

.person_info {
    display: flex;
    align-items: center;
}

.img_gradient{
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: radial-gradient(#FF6868 90%, #FFC700 90%,#FF0099 90%,#FF7A00 90%);
    display: flex;
    align-items: center;

}

.img_gradient img {
    width: 55px;
    height: 55px;
    align-items: center;
    margin: 0 auto;
    border-radius: 50%;
    background: radial-gradient(#FF6868, #FFC700,#FF0099,#FF7A00);
}

.person_info p{
    font-family: "Leto";
    font-size: 20px;
    background: linear-gradient(180deg, #FF0000 0%, #FF0000 0.01%, #EBFF00 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin: 0px;
    padding-left: 15px;
}

.right1_bar textarea {
    max-width: 270px;
    max-height: 230px;
    min-width: 270px;
    min-height: 230px;
    border: 3px solid #000000;
    border-radius: 30px;
    margin-top: 15px;
    padding: 15px;
    font-size: 15px;
    line-height: 18px;
    color: #000000;
    font-family: 'Montserrat_normal';
}

.right1_bar button {
    width: 139px;
    height: 38px;
    background: #FF4848;
    border-radius: 35px;
    font-size: 20px;
    color: #FFFFFF;
    font-family: 'Montserrat_Black';
    border: none;
    margin-top: 15px;
    float: right;
}

body {
    margin: 0;

    background: rgba(245, 245, 245, 0.85);
}

main {
    margin: 0 auto;
    height: 100%;
    box-shadow: none;
    border-radius: 30px;
    margin-bottom: 16px;
    margin-top: 25px;
}

.top_person {
    padding-top: 20px;
}

.personon {
    width: 200px;
    height: 170px;
    margin: 0 auto;
}

.div_person_logo{
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background: radial-gradient(#FF6868 90%, #FFC700 90%,#FF0099 90%,#FF7A00 90%);
    display: flex;
    align-items: center;
    margin: 0 auto;
}

.person_logo {
    width: 85px;
    height: 85px;
    align-items: center;
    margin: 0 auto;
    border-radius: 50%;
    background: radial-gradient(#FF6868, #FFC700,#FF0099,#FF7A00);
}

.person_name {
    display: flex;
    justify-content: space-between;
    align-items:center;
}

.person_name p {
    font-family: "Leto";
    font-size: 22px;
    margin: 0px;
    padding: 0px;
    padding-top: 1px;
    width: 141px;
    height: 22px;
    padding-left: 30px;
    background: linear-gradient(180deg, #FF0000 0%, #FF0000 0.01%, #EBFF00 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-align: center
}

.person_name  img {
    padding-top: 4px;
    width: 15px;
    height: 15px;
    padding-right: 20px;
}

.btn {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
}

.one_btn {
    width: 90px;
    height: 47px;
}

.one_btn button {
    width: 90px;
    height: 30px;
    background: #FF4848;
    border-radius: 18px;
    font-size: 12px;
    font-family: "Montserrat_normal";
    border: none;
    color: #fff;
}

.one_btn p {
    margin: 0px;
    padding-top: 5px;
    text-align: center;
    font-size: 10px;
    font-family: "Montserrat_normal";
}

.two_btn {
    width: 90px;
    height: 47px;
}

.two_btn button {
    width: 90px;
    height: 30px;
    background: #FF4848;
    border-radius: 18px;
    font-size: 12px;
    font-family: "Montserrat_normal";
    border: none;
    color: #FFFFFF;
}

.two_btn p {
    margin: 0px;
    padding-top: 5px;
    text-align: center;
    font-size: 10px;
    font-family: "Montserrat_normal";
}

.bottom_person {
    width: 242px;
    height: 133px;
    margin: 0 auto;
    margin-top: 10px;
}

.bottom_person p{
    font-family: "Montserrat_normal";
    margin: 0px;
}

.name_p {
    font-size: 8px;
    color: #A6A6A6;
}

.about_p_person {
    text-indent: 8px;
    font-size: 10px;
    color: #000000;
}

.about_p_person span{
    text-indent: 5px;
    font-size: 8px;
    color: #A6A6A6;
    border-bottom: 1px solid #A6A6A6;
}

.btn_menu {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
}

.new_post {
    width: 110px;
    height: 74px;
    background: #000000;
    border-radius: 10px;
    border: none;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    box-sizing: border-box;
}

.new_post img{
    padding-bottom: 4.5px;
}

.new_post p{
    font-family: "Montserrat_normal";
    font-size: 8px;
    color: #FFFFFF;
}

.market {
    width: 110px;
    height: 74px;
    background: #000000;
    border-radius: 10px;
    border: none;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    box-sizing: border-box;
}

.market img{
    padding-bottom: 3px;
}

.market p{
    font-family: "Montserrat_normal";
    font-size: 8px;
    color: #FFFFFF;
}

hr {
    width: 100%;
    background: rgba(0, 0, 0, 0.2);
    margin: 0px;
    margin-top: 20px;
}

.post_person {
    padding-bottom: 15px;
}

.line_post {
    display: flex;
    justify-content: space-around;
    padding: 15px 20px 0px 20px;
    box-sizing: border-box;
}

.line_post img {
    width: 180px;
    height: 180px;
    border-radius: 10px;
}
</style>

<script>
import axios from 'axios'
import $ from 'jquery'

const addr = 'http://127.0.0.1:8000'
/*eslint-disable */
function getCookie (namer) {
  const matches = document.cookie.match(new RegExp(
    '(?:^|; )' + namer.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'
  ))
  return matches ? decodeURIComponent(matches[1]) : undefined
}
/* eslint-enable */

export default {
  data () {
    return {
      loginin: '',
      passwordin: '',
      url: document.location.pathname,
      account: localStorage.getItem('login'),
      up: {},
      posts: {},
      components_key_re: 0
    }
  },
  created () {
    axios.post(
      addr + '/users/userData',
      {
        login: (this.url).slice(9)
      },
      {
        withCredentials: true
      }
    )
      .then((response) => {
        console.log(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  },
  methods: {
    subsc () {
      axios.post(
        addr + '/subscribator',
        {
          user_sid: document.cookie,
          login: this.url,
          login_from: getCookie('login')
        },
        {
          withCredentials: true
        }
      )
        .then((response) => {
          console.log(response.data)
          if (String(response.data) === 'true') {
            location.reload()
          }
        })
        .catch((e) => {
          console.log(e)
        })
    },
    created_post_in () {
      $('body').css({
        'background-color': 'rgba(0, 0, 0, 0.315)',
        'transition-duration': '0.4s',
        opacity: '1'
      })
      $('.logo').css({
        'background-color': 'rgba(0, 0, 0, 0.005)',
        'transition-duration': '0.6s'
      })
      $('.btn').css({
        'background-color': 'rgba(0, 0, 0, 0.005)',
        'transition-duration': '0.6s'
      })
      $('.menu_new_post').fadeToggle()
      $('.close').fadeToggle()
    },
    created_post_out () {
      $('body').css({
        'background-color': 'rgba(245, 245, 245, 0.85)',
        'transition-duration': '0.4s',
        opacity: '1'
      })
      $('.logo').css({
        'background-color': 'rgba(245, 245, 245, 0.85)',
        'transition-duration': '0.6s'
      })
      $('.btn').css({
        'background-color': 'rgba(245, 245, 245, 0.85)',
        'transition-duration': '0.6s'
      })
      $('.menu_new_post').fadeOut()
      $('.close').fadeOut()
    },
    fdsa () {
      return false
    },
    render_photo () {
      const input = $('.custom-file-input')[0]
      if (input.files && input.files[0]) {
        if (input.files[0].type.match('image.*')) {
          const reader = new FileReader()
          reader.onload = function (e) {
            $('.menu_new_post').css({
              'background-image': 'url(' + e.target.result + ')',
              'background-size': 'contain',
              'background-position': 'center center',
              'background-repeat': 'no-repeat'
            })
            $('.center_saitbar').css({
              opacity: '0'
            })
            $('.top_saitbar').css({
              opacity: '0'
            })
            $('.img_border').css({
              border: 'none',
              background: 'none',
              'box-shadow': 'none'
            })
            $('.bottom_saitbar p').css({
              opacity: '0'
            })
            $('.bottom_saitbar').css({
              position: 'relative',
              top: '115px',
              right: '0px'
            })
          }
          reader.readAsDataURL(input.files[0])
        } else {
          console.log('ошибка, не изображение')
        }
      } else {
        console.log('хьюстон у нас проблема')
      }
    }
  }
}
</script>
