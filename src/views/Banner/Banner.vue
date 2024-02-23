<template>
  <div class="banner">
    <div class="banner__container">
      <div class="banner__eggs">
        <img src="/images/eggs.png" alt="">
      </div>

      <div class="banner__logo">
        <div class="banner-logo" :class="{ 'banner-logo--burned' : isBurned }">
          <img class="banner-logo__logo" src="/images/banner/logo.svg" alt="">
          <div class="banner-logo__hole">
            <img src="/images/banner/hole_2.png" alt="">
          </div>
      
          <video class="banner-logo__video-logo" autoplay muted playsinline loop preload="auto" ref="logoVideo">
            <source src="/files/logo.mov?url"  type='video/mp4; codecs="hvc1"'>
            <source src="/files/logo.webm" type="video/webm">
          </video>

          <video class="banner-logo__video-fire" ref="logoFireVideo" muted playsinline preload="auto">
            <source src="/files/fire.mov?url"  type='video/mp4; codecs="hvc1"'>
            <source src="/files/fire.webm" type="video/webm">
          </video>
        </div>
      </div>

      <div class="banner__dragon dragon-video">
        <video ref="dragonVideo" muted playsinline preload="auto">
          <source src="/files/dragon.mov?url" type='video/mp4; codecs="hvc1"'>
          <source src="/files/dragon.webm" type="video/webm">
        </video>
        <div class="dragon-video__crystals crystals">
          <div class="crystals__item crystals__item--1">
            <img class="crystals__img" src="/images/crystal-1.png" alt="">
          </div>
          <div class="crystals__item crystals__item--2">
            <img class="crystals__img" src="/images/crystal-2.png" alt="">
          </div>
          <div class="crystals__item crystals__item--3">
            <img class="crystals__img" src="/images/crystal-3.png" alt="">
          </div>
          <div class="crystals__item crystals__item--4">
            <img class="crystals__img" src="/images/crystal-2.png" alt="">
          </div>
        </div>
      </div>

      <div class="banner__link">
        <ui-link href="https://rafinad.io/" target="_blank" theme="red">
          Присоединиться к охоте
        </ui-link>
      </div>

      <div class="banner__timer">
        <timer />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch, computed } from 'vue'
import UiLink from '@/components/UiLink/UiLink.vue'
import Timer from '@/views/Timer/Timer.vue'

const isBurned = ref(false)
const logoFireVideo = ref()
const dragonVideo = ref()
const logoVideo = ref()

const isDragonVideoReady = ref(false)
const isLogoFireVideoReady = ref(false)
const isLogoVideoReady = ref(false)
const props = defineProps({
  loading: Boolean
})

const isReadyToStart = computed(() => {
  return !props.loading && isDragonVideoReady.value && isLogoFireVideoReady.value && isLogoVideoReady.value
})
const burn = () => {
  // общая задержа до начала анимации
  setTimeout(() => {
    dragonVideo.value.play()

    // задержка перед поджиганием лого
    setTimeout(() => {
      logoFireVideo.value.play()

      // задержка перед показом горящего лого
      setTimeout(() => {
        isBurned.value = true
      }, 500)
    }, 100)
  }, 1000)
}

onMounted (() => {
  dragonVideo.value.addEventListener('canplaythrough', function() {
    isDragonVideoReady.value = true
  })
  logoFireVideo.value.addEventListener('canplaythrough', function() {
    isLogoFireVideoReady.value = true
  })
  logoVideo.value.addEventListener('canplaythrough', function() {
    isLogoVideoReady.value = true
  })
})

watch(isReadyToStart, (newVal) => {
    if (newVal) burn()
})
</script>

<style lang="scss">
.banner {
  &__eggs {
    position: absolute;
    z-index: 20;
    transform: translateX(-70%) translateY(40%);
    left: 0;
    bottom: 0;
    width: 17%;

    img {
      width: 100%;
    }
  }

  &__container {
    position: relative;
    padding-top: min(130px, 20%);
    padding-bottom: min(120px, 20%);
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
    background-image: url(/images/banner/scroll-full_2.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;

    &:after {
      content: '';
      width: 124%;
      background-image: url(/images/banner/scroll-end_2.png);
      background-repeat: no-repeat;
      background-position: 50% 50%;
      background-size: contain;
      display: block;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%) translateY(70%);
      aspect-ratio: 1295 / 147;
    }
  }

  &__logo {
    width: 65%;
    margin: 0 auto;
    padding-right: 10%;
  }

  &__dragon {
    position: absolute;
    top: -18%;
    right: -43%;
    transform: rotate(11deg) translate3d(0, 0, 0);
    width: 130%;
    pointer-events: none;
    z-index: 2;
    
    @media (max-width: 1380px) {
      right: -38%;
      top: -15%;
    }

    @media (max-width: 1280px) {
      top: -10%;
    }

    @media (max-width: 768px) {
      top: 0%;
    }

    video {
      width: 100%;
      display: block;
    }
  }

  &__link {
    padding-top: 24px;
    text-align: center;
    font-size: 38px;

    @media (max-width: 1024px) {
      font-size: 32px;
    }

    @media (max-width: 768px) {
      font-size: 24px;
    }

    @media (max-width: 600px) {
      padding-top: 32px;
      font-size: 14px;
    }

    @media (max-width: 320px) {
      font-size: 12px;
    }
  }

  &__timer {
    position: absolute;
    bottom: 4%;
    left: 0;
    z-index: 10;
    transform: rotate(-8deg);
    mix-blend-mode: darken;
  }
}

.banner-logo {
  $parent: &;

  position: relative;
  width: 100%;

  &--burned {
    #{$parent}__hole,
    #{$parent}__video-logo {
      opacity: 1;
    }

    #{$parent}__logo {
      mix-blend-mode: soft-light;
    }
  }

  &__hole {
    opacity: 0;
    transition: opacity 0.3s;
    mix-blend-mode: darken;

    img {
      width: 100%;
    }
  }

  &__gif-logo {
    width: 150%;
    position: absolute;
    top: 53%;
    left: 59%;
    transform: translate3d(-50%, -50%, 0);
    z-index: 3;
    mix-blend-mode: normal;
    max-width: none;
  }

  &__logo {
    width: 51.5%;
    position: absolute;
    top: 45.5%;
    left: 62%;
    transform: translate3d(-50%, -50%, 0);
    z-index: 3;
    mix-blend-mode: normal;
  }

  &__video-logo {
    opacity: 0;
    transition: opacity 0.3s;
    position: absolute;
    top: 53.5%;
    left: 58.5%;
    transform: translate3d(-50%, -50%, 0);
    width: 110%;
    pointer-events: none;
  }

  &__video-fire {
    position: absolute;
    top: 53.5%;
    left: 58.5%;
    transform: translate3d(-50%, -50%, 0);
    width: 150%;
    pointer-events: none;
    z-index: 5;
  }
}

.dragon-video {
  &__crystals {
    position: absolute;
    bottom: 0;
    right: 0;
  }

  &__gif {
    display: block;
    width: 100%;
    transform: translateX(-10%);
  }
}

.crystals {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 41%;
  max-width: 800px;
  padding-top: 15%;

  &__item {
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 50% 50%;
    width: 30%;
    position: absolute;
    top: 0;
    left: 0;
    will-change: transform;

    img {
      width: 100%;
      display: block;
      animation: levitate-animation 4s ease-in-out infinite alternate;
    }
    
    &--1 {
      transform: rotate(-50deg);
      width: 30%;
      z-index: 3;
      left: -6%;
    }
    
    &--2 {
      transform: rotate(23deg);
      left: 15%;
      top: 30%;
      z-index: 3;
    }
    
    &--3 {
      transform: rotate(-14deg);
      z-index: 2;
      left: 33%;
      width: 34%;
      top: 4%;
    }
    
    &--4 {
      transform: rotate(44deg);
      z-index: 3;
      left: 54%;
      width: 34%;
      top: 14%;
    }
  }
}
</style>