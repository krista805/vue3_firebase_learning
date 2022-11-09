<template>
  <div class="post-detail">
    <h1>This is our post page</h1>
    <p>Dislay the content of post with ID of {{ $route.params.id }} here!</p>
    <div>
      <button @click="ShowPostId">Show Post ID</button>
    </div>
    <div>
      <button @click="goHomeInThreeSeconds">Go home in 3 seconds</button>
    </div>
    <div>
      <button @click="goToFirstPost">Go to first post</button>
    </div>
    <p><router-link to="/posts">&lt; Back</router-link></p>
  </div>
</template>

<script setup>
// Vue3's way of rendering params in script tag. Can't use this.$route in composition api
import { useRoute, useRouter } from 'vue-router'

// Vue team recommends the name route for constant
const route = useRoute()

const router = useRouter()

const ShowPostId = () => {
  alert(`The ID of this post is ${ route.params.id }`)
}

const goHomeInThreeSeconds = () => {
  setTimeout(() => {
    // router.push('/')

    // if we want to push user based on path name...
    router.push({ name: 'home' })

  }, 3000)
}

const goToFirstPost = () => {
  router.push({ 
    name: 'postDetail',
    params: {
      id: 'id1'
    }
  })
}


</script>