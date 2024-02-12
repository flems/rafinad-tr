<template>
  <div class="banner">
    <div class="banner__container">
      <div class="banner__wrapper">
        <BannerTitle class="banner__title" />

        <ui-link class="banner__link" theme="red" href="#">
          Присоединиться к охоте
        </ui-link>

        <div class="banner__timer">
          <timer />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import UiLink from '@/components/UiLink/UiLink.vue'
import BannerTitle from './components/Title.vue'
import Timer from '@/views/Timer/Timer.vue'
</script>

<style lang="scss">
.banner {
  display: flex;
  padding: 0 24px;

  &__timer {
    position: absolute;
    bottom: calc(var(--index) * 4);
    left: 0;
    z-index: 3;
    transform: rotate(-9deg);
    mix-blend-mode: darken;

    @media (max-width: 768px) {
      bottom: 32px;
    }
  }

  &__title {
    position: absolute;
    width: 98%;
  }

  &__link {
    font-size: calc(var(--index) * 2);
    white-space: nowrap;
    display: inline-block;
    position: absolute;
    bottom: 14%;
    left: 50%;
    transform: translateX(-45%);

    // @media (max-width: 1023px) {
    //   font-size: 36px;
    // }

    @media (max-width: 600px) {
      font-size: calc(var(--index) * 1);
    }
  }

  &__container {
    position: relative;
    max-width: var(--small-container-width);
    margin: 0 auto;
    width: 100%;
    aspect-ratio: 115 / 90;

    @media (max-width: 600px) {
      aspect-ratio: 90 / 92;
    }

    &:after {
      content: "";
      display: block;
      background-image: url(/images/banner/scroll-end.png);
      aspect-ratio: 1428/208;
      position: absolute;
      left: 50%;
      width: 128%;
      top: 100%;
      transform: translateY(-60%) translateX(-50%);
      z-index: 2;
      background-position: 50% 50%;
      background-size: contain;
      pointer-events: none;
    }
  }
  
  &__wrapper {
    padding-top: calc(var(--index) * 4);
    padding-bottom: calc(var(--index) * 6);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    background-repeat: repeat-y;
    background-size: 100% auto;
    background-position: 50% 66%;
    position: relative;
    background-image: url(/images/banner/scroll.png);

    // @media (max-width: 800px) {
    //   background-position: 50% 76%;
    // }

    // @media (max-width: 500px) {
    //   background-position: 50% 90%;
    // }

    // @media (max-width: 450px) {
    //   background-position: 50% 96%;
    // }

    // @media (max-width: 420px) {
    //   background-position: 50% 100%;
    // }

    // @media (max-width: 390px) {
    //   background-position: 50% 140%;
    // }

    @media (max-width: 600px) {
      background-position: 50% 186%;
    }
  }
}
</style>