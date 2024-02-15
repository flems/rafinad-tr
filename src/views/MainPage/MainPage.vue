<template>
    <div class="home">
      <div class="home__banner">
        <div class="home__container">
          <Banner />

            <div class="dragon-video">
              <video autoplay muted playsinline loop>
                <source src="/files/dragon.webm" type="video/webm">
              </video>
              <span class="cristals">
                <span class="cristals__item1"></span>
                <span class="cristals__item2"></span>
              </span>
            </div>
        </div>
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
import { onMounted } from 'vue'

onMounted(() => {
  window.addEventListener('scroll', () => {
    document.body.style.cssText += `--scrollTop: ${window.scrollY}px`
  })
})
</script>

<style lang="scss">

@keyframes levitate-animation {
    0% {
        transform: translateZ(0) rotate(0);
    }

    to {
        transform: translate3d(0,-10px,0) rotate(1deg);
    }
}

.home {
  overflow: hidden;
  
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

  .dragon-video {
    --index: calc(2vw + 1vh);
    position: absolute;
    z-index: 2;
    top: 0;
    left: 100%;
    transform: rotate(5deg) translate(-70%, 0%);
    transform: rotate(5deg) translate3d(-70%, calc(var(--scrollTop)/10), 0);
    // pointer-events: none;
    width: calc(var(--index) * 35);
    max-width: 1920px;
    
    @media (max-width: 600px) {
      transform: rotate(5deg) translate(-68%, 0%);
    }

    video {
      width: 100%;
    }

    .cristals {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      
      &__item1 {
        animation: levitate-animation 5s ease-in-out infinite alternate;
        position: relative;
        aspect-ratio: 575/735;
        width: 14%;
        position: absolute;
        right: 30%;
        bottom: -4%;

        &:before {
          content: "";
          background-image: url(/images/crystal-1.png);
          background-repeat: no-repeat;
          background-size: contain;
          display: block;
          width: 100%;
          height: 100%;
          transform: rotate(-52deg);
          // transform: rotate(-52deg) translate3d(calc(var(--scrollTop)/-7), calc(var(--scrollTop)/13), 0);
          z-index: 2;
        }
      }

      &__item2 {
        aspect-ratio: 575/735;
        width: 12%;
        position: absolute;
        right: 22%;
        bottom: -8%;
        animation: levitate-animation 4s ease-in-out infinite alternate;

        &:after {
          content: "";
          background-image: url(/images/crystal-1.png);
          background-repeat: no-repeat;
          background-size: contain;
          display: block;
          width: 100%;
          height: 100%;
          // transform: rotate(-28deg);
          // transform: rotate(-28deg) translate3d(calc(var(--scrollTop)/200), calc(var(--scrollTop)/7), 0);
          z-index: 3;
        }
      }

    }
  }

  &__banner {
    position: relative;
    z-index: 1;

    .banner {
      // transform: translate3d(0, calc(var(--scrollTop)/15), 0);
    }
  }

  &__mechanics {
    padding-top: 120px;
    padding-bottom: 160px;
    z-index: 2;
    position: relative;

    @media (max-width: 768px) {
      padding-top: 80px;
      padding-bottom: 80px;
    }

    .mech-cristal {
      position: absolute;
      width: 15%;
      right: 100%;
      top: 50%;
      animation: levitate-animation 4s ease-in-out infinite alternate;

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
        // transform: rotate(22deg) translate3d(calc(var(--scrollTop) / 200), calc(var(--scrollTop) / 20 ), 0);
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

    @media (max-width: 768px) {
      padding-bottom: 80px;
    }

    @media (max-width: 480px) {
      padding-bottom: 40px;
      margin-bottom: 0;
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