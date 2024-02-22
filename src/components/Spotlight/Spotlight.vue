<template>
    <div class="spotlight">
        <span class="spotlight__item spotlight__item--3"></span> -->
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
    opacity: 0;
    transition: 1s;

    &:after {
        content: '';
        width: 120%;
        padding-top: 100%;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        background-image: url(/images/spotlight.png);
        background-repeat: no-repeat;
        background-size: contain;
        background-position: 50% 50%;
    }

    // это вариант глючит в сафари, поэтому просто картинкой
    // &__item {
    //     display: block;
    //     background-color: rgba(255, 255, 255, 0.8);
    //     filter: blur(150px);
    //     position: absolute;
    //     width: 100%;
    //     height: 100%;
    //     padding-top: 100%;
    //     bottom: 0;
    //     // transition: opacity 0.7s, transform 0.5s linear 0.2s;
    //     transform-origin: top;
        
    //     &--1 {
    //         clip-path: polygon(-10% 0, -2% 0%, 100% 100%, 14% 100%);
    //         transform-origin: top left;
    //         opacity: 1;
    //     }

    //     &--2 {
    //         clip-path: polygon(41% 0, 52% 0, 84% 100%, 14% 100%);
    //         opacity: 1;
    //     }

    //     &--3 {
    //         clip-path: polygon(102% 0, 112% 0, 84% 100%, 0 100%);
    //         opacity: 1;
    //         transform-origin: top right;
    //     }
    // }
}
</style>