<template>
  <div class="home">
    <h3>{{ counter.title }}</h3>
    <h5 ref="appSubTitleRef">{{ appSubTitle }}</h5>
    <div>
      <button class="btn">--</button>
      <button class="btn">-</button>
      <span class="counter" v-colorchange="'red'">{{ counter.count }}</span>
      <button class="btn">+</button>
      <button class="btn">++</button>
    </div>

    <p>This counter is odd/even</p>

    <div class="edit">
      <h4>Edit counter title:</h4>
      <input v-model="counter.title" type="text" v-autofocus>
    </div>

  </div>
</template>

<script setup>
/*
  imports
*/
import { ref, onMounted } from 'vue'
import { useCounterStore } from '@/stores/counter';
import { vAutofocus } from '@/directives/vAutofocus'

/*
  App subtitle
*/
// Non reactive way to render data. Sometimes better to do vs reactive for performance reasons
const appSubTitle = 'An amazing sub title'

const appSubTitleRef = ref(null)

onMounted(() => {
  appSubTitleRef.value
  console.log(`The app title is ${appSubTitleRef.value.offsetWidth} px wide`)
})

/*
  Counter
*/
const counter = useCounterStore()


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
