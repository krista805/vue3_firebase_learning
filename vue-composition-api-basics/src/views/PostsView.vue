<template>
  <div class="posts">
    <h1>Posts</h1>
    <ul>
      <li>
        <RouterLink to="/postDetail/id1">Post 1</RouterLink>
      </li>
       <li>
        <RouterLink to="/postDetail/id2">Post 2</RouterLink>
      </li>
      <li>
        <RouterLink to="/postDetail/id3">Post 3</RouterLink>
      </li>
    </ul>

    <div>
      <h4>Comments Section</h4>    
      <textarea v-autofocus></textarea>
    </div>
  </div>
</template>

<script setup>
/*
  imports
*/
import { vAutofocus } from '@/directives/vAutofocus'



</script>

<style scoped>
  ul {
    margin-bottom: 30px;
  }
</style>