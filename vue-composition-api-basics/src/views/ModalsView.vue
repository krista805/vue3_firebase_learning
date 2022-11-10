<template>
    <div class="modals">
        <h1>Modals</h1>
        <button @click="showModal = true">Show Modal</button>
        <teleport to='body'>
            <div 
                v-if="showModal"
                class="modal"
            >
                <h1>This is are modal</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis vel nam, nemo odio temporibus ea, enim numquam rerum expedita, voluptatem quidem pariatur? Doloremque dolore aperiam voluptatem aut totam non quae!</p>
                <button @click="showModal = false">Hide Modal</button>
            </div>
        </teleport>
    </div>
</template>

<script setup>
/*
    imports
*/
import { ref } from 'vue'

/*
    modals
*/
const showModal = ref(false)

;

</script>

<style>
    .modal {
        background: beige;
        padding:10px;
        position:  absolute;
        left: 0;
        top: 0;
        width: 100%;
        height:100%;
        z-index: 1;
    }
</style>