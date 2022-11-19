<template>
        <teleport to='body'>
            <div 
                v-if="modelValue"
                class="modal">
                <!-- can also use props.title -->
                <h1>{{ title }}</h1>
                <h3><slot name="subTitle"></slot></h3>
                <slot />
                <button @click="$emit('update:modelValue', false)">Hide Modal</button>
            </div>
        </teleport>
</template>

<script setup>
/*
    props
*/
const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false
    },
    title: {
        type: String,
        default: 'No title specified'
    }
})
// how to access props within script
console.log(props.title)

/*
    emits
*/
const emit = defineEmits([
    'update:modelValue'
])

/*
    handle button click
*/
// const handleButtonClick = () => {
//     emit('update:modelValue', false)
// }



;

</script>

<style>
.modal {
    background: beige;
    padding: 10px;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
}
</style>