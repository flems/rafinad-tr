<template>
  <div class="user-progress" v-if="data">
      <step
        class="prizes__step"
        :progress="item.progress"
        progress-bar-size="s"
        v-for="(item, index) in steps"
        :key="index"
        :last="index === steps.length - 1"
      >
        <template #number>
          <number
            class="user-progress__number"
            size="m"
            :active="item.active"
            :text="index === steps.length - 1"
          >
            {{  item.name }}
          </number>
        </template>
      </step>
  </div>
</template>

<script setup>
import Number from '@/components/Number/Number.vue'
import Step from '@/components/Step/Step.vue'
import { computed } from 'vue'

const stepsBase = [
    {
      name: 1,
      progress: 0,
      active: false
    },
    {
      name: 2,
      progress: 0,
      active: false
    },
    {
      name: 3,
      progress: 0,
      active: false
    },
    {
      name: 4,
      progress: 0,
      active: false
    },
    {
      name: 'top',
      progress: 0,
      active: false
    }
]
const steps = computed(() => {
  return stepsBase.map((item, index) => {
    const newItem = Object.assign({}, item)
    if (+props.data.lvl > index + 1) {
      newItem.active = true
      newItem.progress = '100'
    }
    if (+props.data.lvl === index + 1) {
      newItem.active = +props.data.percentage !== 0
      newItem.progress = +props.data.percentage <= 100 ? props.data.percentage : '100'
    }
    
    return newItem
  })
})

const props = defineProps({
  data: Object
})
</script>

<style lang="scss">
.user-progress {
  display: flex;
  gap: 16px;

  &__number {
    margin-right: 8px;
  }

  .prizes__step {
    width: 20%;
  }
}
</style>
