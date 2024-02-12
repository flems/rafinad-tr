<template>
<div class="prizes-first" ref="container">
  <step
    class="prizes-first__step"
    :score="item.score"
    :progress="item.progress || '0'"
    v-for="(item, index) in stepData"
    :key="item.key"
    :class="{ 'prizes__step--last': stepData.length - 1 === index }"
    :last="stepData.length - 1 === index"
  >
  <template #number>
      <number
        size="l"
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
</template>

<script setup>
import Number from '@/components/Number/Number.vue'
import Step from '@/components/Step/Step.vue'
import verge from 'verge'
import { onMounted, ref } from 'vue'

const props = defineProps({
  steps: Array,
  progress: Object
})

const container = ref(null)
const viewportOffset = -250
const stepData = ref(props.steps.slice())

const isInView = () => {
  if (!container.value) return
  
  if (verge.inY(container.value, viewportOffset)) {
    return true
  }

  return false
}


onMounted(() => {
  window.addEventListener('scroll', () => {
    if (isInView()) {
      stepData.value = stepData.value.map(item => {
        item.progress = props.progress[item.key]
        return item
      })
    }
  })
})
</script>

<style lang="scss">
.prizes-first {
  $parent: &;

  position: relative;
  display: flex;
  gap: 4px;

  &__step {
    flex-grow: 1;
    width: calc(80%/2);
    flex-shrink: 0;

    &--last {
      width: max-content;
    }
  }
}
</style>