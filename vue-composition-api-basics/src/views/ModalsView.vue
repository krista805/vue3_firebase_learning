<template>
    <div class="modals">
        <h1>Modals</h1>
        <button @click="showModal = true">Show Modal</button>
        <Modal 
            v-if="showModal"
            @hideModal ="showModal = false"
            title="My Modal title (via prop)"
        >
            <template #subTitle>My new subtitle</template>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis vel nam, nemo odio temporibus ea, enim
                numquam rerum expedita, voluptatem quidem pariatur? Doloremque dolore aperiam voluptatem aut totam non quae!
            </p>
        </Modal>
    </div>
</template>

<script setup>
/*
    imports
*/
import { ref } from 'vue'
import Modal from '@/components/Modal.vue'

/*
    modals
*/
const showModal = ref(false)

;

</script>
