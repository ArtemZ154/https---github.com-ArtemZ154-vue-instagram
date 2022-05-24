<template>
    <div class="all_cards">
        <div class="card35" v-for="(items, index) in posts" :key="index">
            <div class="card" v-for="(item, index) in items" :key="index">
                <div class="left_bar">
                    <img :src="item.photo_post" alt="" class="img_card">
                </div>
                <div class="right_bar" :class="item.number_post">
                    <div class="nav_card">
                        <div class="left_button">
                            <div class="like"><a class="like_abc"><img src="/img/main/iconcard/like (1) 1.png" alt=""></a>
                                <p style="position:relative; display: block;">{{ item.like_post }}</p>
                            </div>
                            <a href=""><img src="/img/main/iconcard/chat 1.png" alt=""></a>
                            <a href=""><img src="/img/main/iconcard/share 1.png" alt=""></a>
                        </div>
                        <div class="right_button">
                            <button>Save</button>
                        </div>
                    </div>
                    <div class="account">
                        <img :src="item.avatar" alt="" class="personone">
                        <p>{{ item.login }}</p>
                        <a href=""><img src="/img/main/iconcard/arrow-down-sign-to-navigate 1.png" alt=""
                                srcset=""></a>
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
                                <img src="/img/main/15746993c3ca3f4a79f2960819de2c37 1.png" alt="">
                                <p style="font-family: 'Montserrat_Black';">hoyleo166:</p>
                                <p style="font-family: 'Montserrat';">Love it!</p>
                            </div>
                        </div>
                        <div class="new_comment">
                            <img src="/img/main/Group 42.png" alt="">
                            <input type="text" placeholder="Add a comment">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  data: () => ({
    posts: {},
    errors: []
  }),
  created () {
    axios.post('http://127.0.0.1:8000/lenta_sub')
      .then(response => {
        console.log(response.data)
        this.posts = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
  }
}
</script>
