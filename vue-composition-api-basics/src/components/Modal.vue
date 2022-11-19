<template>
        <teleport to='body'>
            <div class="modal">
                <!-- can also use props.title -->
                <h1>{{ title }}</h1>
                <h3><slot name="subTitle"></slot></h3>
                <slot />
                <button @click="handleButtonClick">Hide Modal</button>
            </div>
        </teleport>
</template>

<script setup>
/*
    props
*/
const props = defineProps({
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
    'hideModal'
])

/*
    handle button click
*/
const handleButtonClick = () => {
    emit('hideModal')
}



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