<template>
  <div class="home">
    <h3>{{counterData.title}}</h3>
    <h5>{{ appSubTitle }}</h5>
    <div>
      <button @click="decreaseCounter" class="btn">-</button>
      <span class="counter">{{counterData.count}}</span>
      <button @click="increaseCounter" class="btn">+</button>
    </div>

    <div class="edit">
      <h4>Edit counter title:</h4>
      <input type="text" v-model="counterData.title">
    </div>

  </div>
</template>

<script setup>
import { reactive } from 'vue'

// Reactive object
const counterData = reactive({
    count: 0,
    title: 'My counter'
})

// Non reactive way to render data. Sometimes better to do vs reactive for performance reasons
const appSubTitle = 'An amazing sub title' 

const increaseCounter = () => {
  counterData.count++
};

const decreaseCounter = () => {
  counterData.count--
};
</script>

<style>
.home {
  text-align: center;
  padding:20px;
}

.btn, .counter {
  font-size: 40px;
  margin:10px;
}

.edit {
  margin-top:60px;
}
</style>
