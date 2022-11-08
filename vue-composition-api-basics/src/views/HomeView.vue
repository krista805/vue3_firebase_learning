<template>
  <div class="home">
    <h3>{{counterData.title}}</h3>
    <h5>{{ appSubTitle }}</h5>
    <div>
      <button @click="decreaseCounter(2)" class="btn">--</button>
      <button @click="decreaseCounter(1)" class="btn">-</button>
      <span class="counter" v-colorchange="'red'">{{counterData.count}}</span>
      <button @click="increaseCounter(1, $event)" class="btn">+</button>
      <button @click="increaseCounter(2)" class="btn">++</button>
    </div>

    <p>This counter is {{ oddOrEven }}</p>

    <div class="edit">
      <h4>Edit counter title:</h4>
      <input type="text" v-model="counterData.title" v-autofocus>
    </div>

  </div>
</template>

<script setup>
/*
  imports
*/
import { reactive, computed, watch, onBeforeMount, onMounted, onBeforeUnmount, onUnmounted, onUpdated } from 'vue'
import { vAutofocus } from '@/directives/vAutofocus'

/*
  App subtitle
*/
// Non reactive way to render data. Sometimes better to do vs reactive for performance reasons
const appSubTitle = 'An amazing sub title'

onMounted(() => {
  console.log('Do stuff related to appSubTitle')
})

/*
  Counter
*/
// Reactive object
const counterData = reactive({
    count: 0,
    title: 'My counter'
})

//example of watcher. since our counter above is not in a ref, we cant do watch(count). It's in a nested data property, so we have to use a getter to grab the nested data property.
watch(() => counterData.count, (newCount, oldCount) => {
  if (newCount === 20) {
    console.log('Way to go, you made it to 20!')
  }
})

//computed property example
const oddOrEven = computed(() => {
  if (counterData.count % 2 === 0) return 'even'
  return 'odd'
})

//examle of event being pulled in ('e')
const increaseCounter = (amount, e) => {
  counterData.count += amount
}

const decreaseCounter = amount => {
  counterData.count -= amount
}

onMounted(() => {
  console.log('Do stuff related to Counter')
})

onBeforeMount(() => {
  console.log('onBeforeMount')
})


onBeforeUnmount(() => {
  console.log('onBeforeUnmount')
})

onUnmounted(() => {
  console.log('onUnmounted')
})

onUpdated(() => {
  console.log('onUpdated')
})

/*
  Local Directives
*/
const vColorchange = {
  mounted: (el, binding) => {
    el.style.color = binding.value
  }
}

;

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
