<template>
<div class="prizes">
    <div class="prizes__container prizes__container--desktop">
      <step
        class="prizes__step"
        :score="item.score"
        v-for="(item, index) in steps"
        :key="item.key"
        :progress="progress[item.key]"
        :class="{ 'prizes__step--last': steps.length - 1 === index }"
        :last="steps.length - 1 === index"
        :mix-blend-mode-darken="index === 3"
      >
        <template #number>
          <number
            :active="progress[item.key] !== '0'"
            :text="item.key === 'fifth'"
            :key="`number-tablet-1-${item.key}`"
          >
            {{ item.name }}
          </number>
        </template>
        <template #icon>
          <img v-if="item.icon" :src="item.icon" alt="">
        </template>
      </step>
    </div>
    <div class="prizes__container prizes__container--tablet">
      <step
        class="prizes__step"
        :score="item.score"
        v-for="(item, index) in steps?.slice(0, 3)"
        :key="`tablet-1-${item.key}`"
        :progress="progress[item.key]"
        :last="steps?.slice(0, 3).length - 1 === index"
        :class="{
          'prizes__step--last': steps?.slice(0, 3).length - 1 === index,
        }"
      >
        <template #number>
          <number
            :active="progress[item.key] !== '0'"
            :text="item.key === 'fifth'"
            :id="`number-tablet-1-${item.key}`"
          >
            {{ item.name }}
          </number>
        </template>
        <template #icon>
          <img v-if="item.icon" :src="item.icon" alt="">
        </template>
      </step>
      <step
        class="prizes__step"
        :score="item.score"
        v-for="(item, index) in steps?.slice(2, 5)"
        :key="`tablet-2-${item.key}`"
        :progress="progress[item.key]"
        :last="steps?.slice(2, 5).length - 1 === index"
        :class="{
          'prizes__step--last': steps?.slice(2, 5).length - 1 === index,
        }"
        :mix-blend-mode-darken="index === 1"
      >
        <template #number>
          <number
            :active="progress[item.key] !== '0'"
            :text="item.key === 'fifth'"
            :id="`number-tablet-2-${item.key}`"
          >
            {{ item.name }}
          </number>
        </template>
        <template #icon>
          <img v-if="item.icon" :src="item.icon" alt="">
        </template>
      </step>
    </div>
</div>
</template>

<script setup>
import Number from '@/components/Number/Number.vue'
import Step from '@/components/Step/Step.vue'
import { ref, watch } from 'vue'

const props = defineProps({
  progressData: {
    type: Object,
    default: () => ({
      first: '0',
      second: '0',
      third: '0',
      fourth: '0'
    })
  },
  steps: Array
})

watch(() => props.progressData, (newprogressData) => {
  changreProgress(newprogressData)
})

const progress = ref({
  first: '0',
  second: '0',
  third: '0',
  fourth: '0',
  fifth: '0'
})

const timeoutIds = ref([])

const changreProgress = data => {
  const delay = 200
  if (data.first === '0') {
    timeoutIds.value.forEach(item => clearTimeout(item))
    progress.value = {
      first: '0',
      second: '0',
      third: '0',
      fourth: '0',
      fifth: '0'
    }
    return
  }
  let count = 0
  for (const key in data) {
    if (count === 0 ) count = 0.5
    const timeoutId = setTimeout(() => progress.value[key] = data[key], delay*count)
    timeoutIds.value.push(timeoutId)
    count++
  }
}
</script>

<style lang="scss">
.prizes {
  $parent: &;

  &__container {
    position: relative;
    display: flex;
    gap: 4px;

    &--desktop {
      @media (max-width: 1023px) {
        display: none;
      }
    }

    &--tablet {
      display: none;

      #{$parent}__step:not(.prizes__step--last) {
        width: calc(80%/2);
      }

      @media (max-width: 1023px) {
        display: flex;
        gap: 48px 24px;
        flex-wrap: wrap;
      }
    }
  }

  &__step {
    flex-grow: 1;
    width: calc(90%/4);
    flex-shrink: 0;

    &--last {
      width: max-content !important;
      flex-grow: 0;
    }
  }

  
}
</style>