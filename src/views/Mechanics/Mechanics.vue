<template>
  <div class="mechanics">
    <div class="container">
      <div class="mech-cristal"></div>
      <h2 class="white-text">Механика конкурса</h2>
      <div class="mechanics__cards">
        <ui-card
          interactive
          full-height
          class="mechanics__card"
          @mouseleave="onMouseleave"
          @mouseenter="onMouseenter(item.key)"
          v-for="(item, index) in cards"
          :key="item.key"
        >
            <h3 class="mechanics__title" v-html="item.title"></h3>
            <p v-html="item.detail"></p>
            <prizes-card
              class="mechanics__cards-prizes"
              :steps="getSteps(item.key)"
              :progress="getProgress(item.key)"
              :key="`prizes-card--${item.key}`"
              :mix-blend-mode-darken="index !== 0"
            />
        </ui-card>
      </div>
      <ui-card class="mechanics__progress">
        <prizes
          :steps="steps"
          :progress-data="progress"
        />
      </ui-card>
    </div>
  </div>
</template>

<script setup>
import UiCard from '@/components/UiCard/UiCard.vue'
import { ref } from 'vue'
import Prizes from './components/Prizes.vue'
import PrizesCard from './components/PrizesCard.vue'

const cards = [
  {
    key: 'one',
    title: 'Зарабатывай Сахарки',
    detail: 'За&nbsp;каждые заработанные <span class="red-text">100 рублей</span> начисляется <b>10 сахарков</b>. По&nbsp;спонсорским офферам начисляется 20, 30 и&nbsp;даже 40 сахарков в&nbsp;зависимости от&nbsp;спонсора!'
  },
  {
    key: 'two',
    title: 'Получай кешбэк',
    detail: 'Вы <span class="red-text">гарантированно получаете кешбэк</span>, достигая чек-пойнта. <span class="red-text">Больше трафика&nbsp;&mdash; круче кешбэк</span>, неважно когда ты подключился в&nbsp;игру и&nbsp;кто сегодня в&nbsp;ТОПе!'
  },
  {
    key: 'three',
    title: 'Попадай в&nbsp;топ',
    detail: 'Начиная с&nbsp;<span class="red-text">4-го уровня вы начинаете бороться за место в&nbsp;ТОПе</span>, где среди лучших 10 участников будет распределен призовой фонд <span class="red-text">более&nbsp;3&nbsp;000&nbsp;000 рублей.</span>'
  },
]

const progress = ref({
  first: '0',
  second: '0',
  third: '0',
  fourth: '0',
  fifth: '0'
})

const steps = [
  {
    key: 'first',
    name: '1',
    icon: '/images/mech/step1-icon.png',
    score: '100&nbsp;000'
  },
  {
    key: 'second',
    name: '2',
    icon: '/images/mech/step2-icon.png',
    score: '400&nbsp;000'
  },
  {
    key: 'third',
    name: '3',
    icon: '/images/mech/step3-icon.png',
    score: '1&nbsp;000&nbsp;000'
  },
  {
    key: 'fourth',
    name: '4',
    icon: '/images/mech/step4-icon.png',
    score: '1&nbsp;500&nbsp;000'
  },
  {
    key: 'fifth',
    name: 'top',
    icon: '/images/mech/step5-icon.png',
    score: ''
  },
]

const getSteps = (step) => {
  if (step === 'one') return JSON.parse(JSON.stringify(steps.slice(0, 3)))
  return JSON.parse(JSON.stringify(steps.slice(2, 5)))
}

const getProgress = (step) => {
  return {
    first: step === 'one'? '85' : '100',
    second: ['two', 'three'].includes(step) ? '100' : '0',
    third: ['two', 'three'].includes(step) ? '100' : '0',
    fourth: step === 'one' ? '0' : step === 'two' ? '25' : '100',
    fifth: ['one', 'two'].includes(step) ? '0' : '100'
  }
}

const onMouseenter = step => {
  progress.value = getProgress(step)
}

const onMouseleave = () => {
  progress.value = {
    first: '0',
    second: '0',
    third: '0',
    fourth: '0'
  }
}
</script>

<style lang="scss">
.mechanics {
  &__cards {
    display: flex;
    gap: 20px;

    .ui-card {
      width: 33.3%;
      flex-grow: 1;

      @media (max-width: 768px) {
        width: 100%;
      }
    }

    @media (max-width: 1024px) {
      gap: 10px 16px;
    }

    @media (max-width: 768px) {
      flex-wrap: wrap;
    }

    @media (max-width: 600px) {
      margin-left: -16px;
      margin-right: -16px;
      width: auto;
      padding: 0 4px;
    }
  }

  &__progress {
    margin-top: 32px;

    @media (max-width: 1024px) {
      margin-top: 16px;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }

  &__card {
    opacity: 0.8;
    // transition: opacity 0.2s ease-in;

    &:hover {
      opacity: 1;
    }

    @media (max-width: 768px) {
      opacity: 1;
      pointer-events: none;
    }
  }

  &__cards-prizes {
    margin-top: 32px;
    display: none !important;
    
    @media (max-width: 768px) {
      display: flex !important;
    }

    @media (max-width: 475px) {
      margin-top: 24px;
    }
  }
}
</style>