<template>
    <div class="spotlight">
        <span class="spotlight__item spotlight__item--1"></span>
        <span class="spotlight__item spotlight__item--2"></span>
        <span class="spotlight__item spotlight__item--3"></span>
    </div>
</template>

<script setup>
</script>

<style lang="scss">
.spotlight {
    width: 100%;
    height: 100%;
    position: absolute;
    filter: blur(8px);
    opacity: 0.1;
    transition: 1s;

    &:before {
        content: '';
        position: absolute;
        width: 117%;
        // background: red;
        padding-top: 35%;
        transform: translateX(-50%);
        left: 50%;
        clip-path: polygon(0% 0, 100% 0%, 95% 100%, 4% 100%);
        bottom: 131%;
    }


    &__item {
        display: block;
        background-color: rgba(255, 255, 255, 0.8);
        filter: blur(150px);
        position: absolute;
        width: 100%;
        height: 100%;
        padding-top: 100%;
        bottom: 0;
        transition: opacity 0.7s, transform 0.5s linear 0.2s;
        transform-origin: top;
        
        &--1 {
            // animation: glide 3s ease-in-out 1s infinite alternate;
            clip-path: polygon(-10% 0, -2% 0%, 100% 100%, 14% 100%);
            transform-origin: top left;
            transform: rotateZ(1deg);
            opacity: 0.5;
        }

        &--2 {
            clip-path: polygon(41% 0, 52% 0, 84% 100%, 14% 100%);
            opacity: 0.5;
        }

        &--3 {
            clip-path: polygon(102% 0, 112% 0, 84% 100%, 0 100%);
            opacity: 0.5;
            transform-origin: top right;
            transform: rotateZ(-1deg);
        }
    }

    // &:hover {
    //     opacity: 0.55;
        
    //     .spotlight__item--1 {
    //         transform: rotateZ(-1deg);
    //     }
    //     .spotlight__item--3 {
    //         transform: rotateZ(1deg);
    //     }
    // }
}
</style>