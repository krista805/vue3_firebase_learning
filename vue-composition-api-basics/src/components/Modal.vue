<template>
        <teleport to='body'>
            <div class="modal">
                <h1>This is are modal</h1>
                <h3><slot name="subTitle"></slot></h3>
                <slot />
                <button>Hide Modal</button>
            </div>
        </teleport>
</template>

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