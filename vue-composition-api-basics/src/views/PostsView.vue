<template>
  <div class="posts">
    <h1>Posts</h1>
    <ul>
      <li 
        v-for="post in posts"
        :key="post.id"
      >
        <RouterLink :to="`/postDetail/${ post.id }`">{{ post.title }}</RouterLink>
      </li>
    </ul>

    <div>
      <h4>Comments Section</h4>    
      <textarea v-autofocus></textarea>
    </div>
    <div>
      <button 
        @click="counter.increaseCounter(1)" 
        class="counter-button"
        :class="{ 'yellow' : counter.oddOrEven === 'odd' }"
        >
          {{ counter.count }}
      </button>
    </div>
  </div>
</template>

<script setup>
/*
  imports
*/
import { vAutofocus } from '@/directives/vAutofocus'
import { useCounterStore } from '@/stores/counter';
import { ref } from 'vue'

/*
  posts
*/
const posts = ref([
  {
    id: '1',
    title: 'Post 1'
  },
  {
    id: '2',
    title: 'Post 2'
  },
  {
    id: '3',
    title: 'Post 3'
  },
])

/*
  Counter button
*/
const counter = useCounterStore()

;

</script>

<style scoped>
  ul {
    margin-bottom: 30px;
  }

  .counter-button {
    font-size: 60px;
    width:100%;
    background-color: pink;
  }

  .counter-button.yellow {
    background-color: yellow;
  }

</style>