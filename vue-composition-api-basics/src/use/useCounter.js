import { reactive, computed, watch, onBeforeMount, onMounted, onBeforeUnmount, onUnmounted, onUpdated, nextTick } from 'vue'

// Reactive object. Sets this globally outside of function below so the count remains the same between pages
const counterData = reactive({
    count: 0,
    title: 'My counter'
})

export function useCounter() {

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
    const increaseCounter = async (amount, e) => {
    counterData.count += amount
    await nextTick()
    console.log('do something when counter has updated in dom')
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

    return {
        counterData,
        oddOrEven,
        increaseCounter,
        decreaseCounter
    }
}