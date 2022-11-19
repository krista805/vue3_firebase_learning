<template>
  <div class="home">
    <h3>{{counterData.title}}</h3>
    <h5 ref="appSubTitleRef">{{ appSubTitle }}</h5>
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
import { ref, onMounted } from 'vue'
import { useCounter } from '@/use/useCounter';
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
const { counterData, oddOrEven, increaseCounter, decreaseCounter } = useCounter()


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
