<template>
    <div class="modals">
        <h1>Modals</h1>
        <div>
            <label for="">Show dark modal?</label>
            <input v-model="showDarkModals" type="checkbox">
        </div>
        <button @click="showModal = true">Show Modal</button>
        <component 
            v-model="showModal"
            :is="showDarkModals ? ModalDark : Modal"
            title="My Modal title (via prop)"
        >
            <template #subTitle>My new subtitle</template>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis vel nam, nemo odio temporibus ea, enim
                numquam rerum expedita, voluptatem quidem pariatur? Doloremque dolore aperiam voluptatem aut totam non quae!
            </p>
        </component>
    </div>
</template>

<script setup>
/*
    imports
*/
import { ref } from 'vue'
import Modal from '@/components/Modal.vue'
import ModalDark from '@/components/ModalDark.vue'

/*
    modals
*/
const showDarkModals = ref(false)
const showModal = ref(false)

;

</script>
