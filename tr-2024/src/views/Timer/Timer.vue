<template>
  <div class="timer" v-if="day && hour && tmin">
    <p class="timer__title">
      <span v-if="!isCompetitionStarted">до<br>старта</span>
      <span v-else>до<br>окончания</span>
    </p>

    <div class="timer__container">
      <template v-if="day">
        <span
          class="timer__number timer__number--day"
          :class="{ 'timer__number--small' : day?.toString()?.length > 2 }"
        >
          <span v-html="day"></span>
          <span class="timer__text">д</span>
        </span>
      </template>
      
      <template v-if="hour">
        <span class="timer__number timer__number--hour" v-if="hour">
          <span v-html="hour"></span>
          <span class="timer__text">ч</span>
        </span>
      </template>

      <template v-if="tmin">
        <span class="timer__number timer__number--min">
          <span v-html="tmin"></span>
          <span class="timer__text">м</span>
        </span>
      </template>
      
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, computed, onUnmounted } from 'vue'


const timer = ref(null)
const timeend1 = new Date(2024, 2, 1, 12, 0, 0, 0)
const timeend2 = new Date(2024, 9, 31, 23, 59, 59, 0)
const tmin = ref(null)
const tsec = ref(null)

const isCompetitionStarted = computed(() => {
  return getCurrentDate() >= timeend1
})

const timeend = computed(() => {
  return isCompetitionStarted.value ? timeend2 : timeend1
})

const getCurrentDate = () => {
  const currentDate = new Date()
  currentDate.setTime(new Date().getTime() + new Date().getTimezoneOffset()*60*1000 + 3*60*60*1000)
  currentDate.setDate(new Date().getUTCDate())
  return currentDate
}

const hour = computed(() => {
  let thour = Math.floor((timeend.value - getCurrentDate()) / 1000 / 60 / 60) % 24
  if (thour < 0) thour = 0
  if (thour < 10) {
    thour = '0' + thour
  }
  return thour
})

const day = computed(() => {
  let today = Math.floor((timeend.value - getCurrentDate()) / 1000 / 60 / 60 / 24)
  if (today < 0) today = 0
  if (today < 10) {
      today = '0' + today
  }
  return today
})

const upd = () => {
  tsec.value = Math.floor((timeend.value - getCurrentDate()) / 1000) % 60
  if (tsec.value < 0) tsec.value = 0
  if (tsec.value < 10) {
      tsec.value = '0' + tsec.value
  }

  tmin.value = Math.floor((timeend.value - getCurrentDate()) / 1000 / 60) % 60
  if (tmin.value < 0) tmin.value = 0
  if (tmin.value < 10) {
      tmin.value = '0' + tmin.value
  }
}

const startTimer = () => {
  timer.value = setInterval(upd, 1000)
}

const stopTimer = () => {
  clearTimeout(timer.value)
}

onMounted(() => {
  upd()
  startTimer()
})

onUnmounted(() => {
  stopTimer()
})
</script>

<style lang="scss" scoped>
.timer {
  width: 9.6em;
  display: flex;
  font-size: 38px;
  font-family: var(--font-gothic);
  color: var(--textRed);

  @media (max-width: 1280px) {
    font-size: 32px;
  }

  @media (max-width: 1024px) {
    font-size: 28px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }

  @media (max-width: 420px) {
    font-size: 14px;
  }

  @media (max-width: 380px) {
    font-size: 12px;
  }

  @media (max-width: 360px) {
    font-size: 10px;
  }

  &:before {
    content: '';
    width: 100%;
    padding-top: 112%;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(/images/timer-bg.png);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 50% 50%;
    z-index: -1;
  }

  &__text {
    font-size: 0.6em;
    font-family: var(--font-secondary);

  }

  &__title {
    position: absolute;
    font-family: var(--font-secondary);
    line-height: 0.9;
    text-align: center;
    width: max-content;
    top: 23%;
    left: 50%;
    transform: translateX(-50%);
    font-size: 0.5em;
  }

  &__number {
    position: absolute;
    letter-spacing: -0.02em;
    width: 1.6em;
    text-align: center;

    &--small {
      font-size: 0.9em;
    }
    
    &--day {
      top: 46%;
      left: 29%;

      &.timer__number--small {
        top: 48%;
        left: 30%;
      }
    }

    &--hour {
      top: 38%;
      left: 42%;
    }

    &--min {
      top: 46.5%;
      right: 24%;
    }
  }
}
</style>