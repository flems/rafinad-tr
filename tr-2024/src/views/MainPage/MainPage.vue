<template>
    <div class="home">
      <div class="home__banner">
          <Banner :loading="loading"/>
      </div>

      <div class="home__mechanics">
        <mechanics  />
      </div>
      <div class="home__sponsors">
        <sponsors />
      </div>
      <div class="home__jam-prizes">
        <prizes class="home__prizes-desk" />
        <prizes-mobile class="home__prizes-mob" />
      </div>
      <div class="home__quest-info">
        <quest-info-vue />
      </div>
      <div class="home__rating">
        <rating />
      </div>
      
  </div>
</template>

<script setup>
import Banner from '@/views/Banner/Banner.vue'
import Mechanics from '@/views/Mechanics/Mechanics.vue'
import Prizes from '@/views/Prizes/Prizes.vue'
import PrizesMobile from '@/views/Prizes/PrizesMobile.vue'
import QuestInfoVue from '@/views/QuestInfo/QuestInfo.vue'
import Rating from '@/views/Rating/Rating.vue'
import Sponsors from '@/views/Sponsors/Sponsors.vue'

defineProps({
  loading: Boolean
})
</script>

<style lang="scss">
.home {
  overflow: hidden;

  &__banner {
    padding-bottom: 160px;

    @media (max-width: 768px) {
      padding-bottom: 80px;
    }

    @media (max-width: 480px) {
      padding-bottom: 40px;
    }
  }
  
  &__container {
    max-width: 1440px;
    margin: 0 auto;
    position: relative;
  }

  &__sponsors {
    padding-bottom: 160px;

    @media (max-width: 768px) {
      padding-bottom: 80px;
    }
  }

  &__prizes-desk {
    @media (max-width: 768px) {
      display: none;
    }
  }

  &__prizes-mob {
    display: none;

    @media (max-width: 768px) {
      display: block;
    }
  }

  &__mechanics {
    padding-top: 120px;
    padding-bottom: 160px;
    z-index: 2;
    position: relative;

    @media (max-width: 768px) {
      padding-top: 60px;
      padding-bottom: 60px;
    }

    .container {
      position: relative;
    }

    .mech-cristal {
      position: absolute;
      width: 16%;
      right: 100%;
      top: 50%;
      animation: levitate-animation 4s ease-in-out infinite alternate;
      z-index: -1;
      min-width: 100px;
      will-change: transform;

      @media (max-width: 768px) {
        top: 40%;
      }

      &:before {
        content: '';
        background-image: url(/images/crystal-2.png);
        background-repeat: no-repeat;
        background-size: contain;
        aspect-ratio: 610/767;
        display: block;
        width: 100%;
        height: 100%;
        transform: rotate(22deg) translateY(-50%) translateX(50%);
        z-index: -1;
      }
    }

  }

  &__jam-prizes {
    position: relative;
    z-index: 3;
    padding-bottom: 160px;
    margin-bottom: 40px;

    &:after {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      width: 100%;
      height: 120%;
      transform: translateY(-44%);
      background-image: url(/images/bg-prizes_2.png);
      background-repeat: no-repeat;
      background-size: 100% 100%;
      background-position: 50% 50%;
      z-index: -1;
    }

    .prizes {
      position: relative;
      z-index: 2;
    }

    @media (max-width: 768px) {
      padding-bottom: 80px;
    }

    @media (max-width: 480px) {
      padding-bottom: 40px;
      margin-bottom: 0;
    }
  }
  
  &__quest-info {
    padding-bottom: 160px;
    position: relative;
    z-index: 3;

    &:after {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      width: 100%;
      height: 180%;
      max-height: 1100px;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.75) 20%, rgb(0, 0, 0) 45%, rgba(0, 0, 0, 0) 75%);
      z-index: -1;
    }

    @media (max-width: 768px) {
      padding-bottom: 80px;
    }
  }

  &__rating {
    position: relative;
    z-index: 3;
    
    > .mp-rating .container {
      position: relative;

      &:before {
        content: '';
        background-image: url(/images/sword.png);
        background-repeat: no-repeat;
        background-size: contain;
        aspect-ratio: 610/767;
        width: 22%;
        display: block;
        position: absolute;
        left: 100%;
        top: 50%;
        transform: rotate(-8deg) translateY(-50%) translateX(-50%);
        z-index: -1;
      }
    }
  }
}
</style>