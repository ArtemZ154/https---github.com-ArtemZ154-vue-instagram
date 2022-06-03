<template>
    <div class="post_person" >
        <div class="all_photo_card">
            <div class="line_post" v-for="(item, index) in posts" :key="index">
                <img v-for="it in item" :src="'http://127.0.0.1:8000/post/' + it" alt="" :key="it">
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

const addr = 'http://127.0.0.1:8000'
export default {
  data () {
    return {
      loginin: '',
      passwordin: '',
      url: document.location.pathname,
      up: {},
      posts: {}
    }
  },
  created () {
    axios.post(
      addr + '/personalpage',
      {
        user_sid: document.cookie,
        login: this.url
      },
      {
        withCredentials: true
      }
    )
      .then((response) => {
        this.up = response.data.up
        this.posts = response.data.postss
        console.log(this.posts)
      })
      .catch((e) => {
        console.log(e)
      })
  }
}
</script>
