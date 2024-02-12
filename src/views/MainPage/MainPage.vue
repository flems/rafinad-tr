<template>
    <div class="home">
      <div class="home__banner">
        <div class="home__container">
          <Banner />

          <video class="dragon-video" autoplay muted playsinline loop>
            <source src="/files/dragon.webm" type="video/webm">
          </video>
        </div>
      </div>
      <div class="home__mechanics">
        <mechanics  />
      </div>
      <div class="home__jam-prizes">
        <prizes />
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
import QuestInfoVue from '@/views/QuestInfo/QuestInfo.vue'
import Rating from '@/views/Rating/Rating.vue'
</script>

<style lang="scss">
.home {
  overflow: hidden;
  
  &__container {
    max-width: 1440px;
    margin: 0 auto;
    position: relative;
  }

  .dragon-video {
    --index: calc(2vw + 1vh);
    position: absolute;
    z-index: 2;
    top: 0;
    left: 100%;
    transform: rotate(5deg) translate(-70%, 0%);
    pointer-events: none;
    width: calc(var(--index) * 35);
    max-width: 1920px;

    @media (max-width: 600px) {
      transform: rotate(5deg) translate(-68%, 0%);
    }
  }

  &__banner {
    position: relative;
    z-index: 1;
  }

  &__mechanics {
    padding-top: 120px;
    padding-bottom: 160px;
    z-index: 2;
    position: relative;
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
      background-image: url(/images/bg-prizes.png);
      background-repeat: no-repeat;
      background-size: 100% 100%;
      background-position: 50% 50%;
      z-index: -1;
    }

    .prizes {
      position: relative;
      z-index: 2;
    }
  }
  
  &__quest-info {
    // padding-top: 120px;
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
      background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.75) 20%, rgb(0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%);
      z-index: -1;
      // background: #000;
    }
  }

  &__rating {
    position: relative;
    z-index: 3;
  }
}
</style>