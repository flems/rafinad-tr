<template>
  <div class="banner">
    <div class="banner__container">
      <div class="banner__wrapper">
        <BannerTitle class="banner__title" />

        <ui-link class="banner__link" theme="red" href="#">
          Присоединиться к охоте
        </ui-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import UiLink from '@/components/UiLink/UiLink.vue'
import BannerTitle from './components/Title.vue'
</script>

<style lang="scss">
.banner {
  display: flex;

  &__title {
    margin-top: -5%;
    margin-bottom: -5%;
  }

  &__link {
    font-size: 45px;
    white-space: nowrap;
    display: inline-block;
    position: absolute;
    bottom: 14%;
    left: 50%;
    transform: translateX(-45%);

    @media (max-width: 1023px) {
      font-size: 36px;
    }

    @media (max-width: 768px) {
      font-size: 24px;
    }
  }

  &__container {
    position: relative;
    max-width: var(--small-container-width);
    margin: 0 auto;

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
    padding-top: 7%;
    padding-bottom: 12%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    background-repeat: repeat-y;
    background-size: 100% auto;
    background-position: 50% 107%;
    position: relative;
    background-image: url(/images/banner/scroll.png);
  }
}
</style>