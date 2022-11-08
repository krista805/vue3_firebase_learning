<template>
  <div class="home">
    <h3>{{counterData.title}}</h3>
    <h5>{{ appSubTitle }}</h5>
    <div>
      <button @click="decreaseCounter(2)" class="btn">--</button>
      <button @click="decreaseCounter(1)" class="btn">-</button>
      <span class="counter">{{counterData.count}}</span>
      <button @click="increaseCounter(1, $event)" class="btn">+</button>
      <button @click="increaseCounter(2)" class="btn">++</button>
    </div>

    <p>This counter is {{ oddOrEven }}</p>

    <div class="edit">
      <h4>Edit counter title:</h4>
      <input type="text" v-model="counterData.title">
    </div>

  </div>
</template>

<script setup>
import { reactive, computed } from 'vue'

// Reactive object
const counterData = reactive({
    count: 0,
    title: 'My counter'
})

//computed property example
const oddOrEven = computed(() => {
  if (counterData.count % 2 === 0) return 'even'
  return 'odd'
})

// Non reactive way to render data. Sometimes better to do vs reactive for performance reasons
const appSubTitle = 'An amazing sub title'

//examle of event being pulled in ('e')
const increaseCounter = (amount, e) => {
  counterData.count += amount
};

const decreaseCounter = amount => {
  counterData.count -= amount
};
</script>

<script>
export default {
  computed: {
    myComputedProperty() {
      //perform logic based on data property
      return 'my result'
    }
  }
}
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
