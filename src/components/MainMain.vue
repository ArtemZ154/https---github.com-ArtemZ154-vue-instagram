<template>
  <div class="all_cards">
    <div class="card35" v-for="(items, index) in posts" :key="index">
      <div class="card" v-for="(item, index) in items" :key="index">
        <div class="left_bar">
          <img :src="item.photo_post" alt="" class="img_card" />
        </div>
        <div class="right_bar" :class="item.number_post" id="class_roo">
          <div class="nav_card">
            <div class="left_button">
              <div class="like">
                <a class="like_abc" v-if="item.setting_like == false"><img src="http://127.0.0.1:8000/img/main/iconcard/like (1) 1.png" alt="" class="abc_123" @click="like_add"/></a>
                <a class="like_abc" v-if="item.setting_like == true"><img src="http://127.0.0.1:8000/img/icon/Group_82.png" alt="" class="abc_123" @click="like_add"/></a>
                <p style="position: relative; display: block; margin-left: 6px;" class="p_avc">
                  {{ item.like_post }}
                </p>
              </div>
              <a href=""
                ><img
                  src="http://127.0.0.1:8000/img/main/iconcard/chat 1.png"
                  alt=""
              /></a>
              <a href=""
                ><img
                  src="http://127.0.0.1:8000/img/main/iconcard/share 1.png"
                  alt=""
              /></a>
            </div>
            <div class="right_button">
              <button>Save</button>
            </div>
          </div>
          <div class="account">
            <img :src="item.avatar" alt="" class="personone" />
            <router-link :to="'/account/' + item.login"><p style="margin-top: -1px;">{{ item.login }}</p></router-link>
          </div>
          <div class="account_me_comment">
            <p>{{ item.text_post }}</p>
          </div>
          <div class="comment">
            <div class="comment_p">
              <p>Comments:</p>
            </div>
            <div class="manyperson">
              <div class="person">
                <img
                  src="http://127.0.0.1:8000/img/main/15746993c3ctewrwea3f4a79f2960819de2c37 1.png"
                  alt=""
                />
              </div>
            </div>
            <div class="new_comment">
              <img :src="item.avatar" alt="" />
              <input type="text" placeholder="In development" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import $ from 'jquery'

const addr = 'http://127.0.0.1:8000'
axios.defaults.withCredentials = true

/*eslint-disable */
function getCookie (namer) {
  const matches = document.cookie.match(new RegExp(
    '(?:^|; )' + namer.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'
  ))
  return matches ? decodeURIComponent(matches[1]) : undefined
}
/* eslint-enable */

export default {
  data: () => ({
    posts: {},
    errors: [],
    account: getCookie('login')
  }),
  created () {
    console.log(123)
    axios
      .post(
        addr + '/check_ses',
        {
          user_sid: getCookie('user_sid')
        },
        {
          withCredentials: true
        }
      )
      .then((response) => {
        console.log(response)
        if (String(response.data) === 'false') {
          location.href = '/login'
        }
      })
      .catch((e) => {
        console.log(e)
      })
    axios
      .post(
        addr + '/lenta_sub',
        {
          user_sid: getCookie('user_sid')
        },
        {
          withCredentials: true
        }
      )
      .then((response) => {
        let a = 0
        console.log(response.data[0].length)
        a = response.data[0]
        for (let i = 0; i < a.length; i++) {
          a[i].photo_post = addr + a[i].photo_post
          a[i].avatar = addr + a[i].avatar
        }
        this.posts = response.data
      })
      .catch((e) => {
        console.log(e)
      })
  },
  methods: {
    like_add () {
      $('.right_bar').unbind().click(function () {
        axios
          .post(
            addr + '/load_like_post',
            {
              login: getCookie('login'),
              number_post: ($(this).attr('class')).slice(10)
            },
            {
              withCredentials: true
            }
          )
          .then((response) => {
            if (String(response.data) === 'true') {
              $(this).find('.abc_123').attr('src', addr + '/img/icon/Group_82.png')
              $(this).find('.p_avc').text('1')
            } else {
              $(this).find('.abc_123').attr('src', addr + '/img/main/iconcard/like (1) 1.png')
              $(this).find('.p_avc').text('0')
            }
          })
          .catch((e) => {
            console.log(e)
          })
      })
    }
  }
}
</script>
