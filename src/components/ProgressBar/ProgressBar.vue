<template>
  <div
    class="progress-bar"
    :class="[
      `progress-bar--size-${size}`,
      { 'progress-bar--full': progress >= 100 }
    ]"
    :style="`--progress: ${progress}%`"
  >
    <div class="progress-bar__fill"></div>
  </div>
</template>

<script setup>
defineProps({
  progress: String,
  size: {
    type: String,
    default: 'm',
    validator: prop => ['m', 's'].includes(prop)
  }
})
</script>

<style lang="scss">
.progress-bar {
  &--size-m {
    --height: 24px;
    --borderWidth: 4px;
  }

  &--size-s {
    --height: 18px;
    --borderWidth: 3px;
  }
}

.progress-bar {
  height: var(--height);
  width: 100%;
  position: relative;

  @media (max-width: 600px) {
    height: 20px;
  }
  
  &:after,
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    
    top: 0;
    left: 0;
  }

  &:before {
    background-image: url(/images/progress-bar.png);
    transition: opacity 0;
    transition-delay: 0s;
  }

  &:after {
    background-image: url(/images/progress-bar-red.png);
    opacity: 0;
    transition: opacity 0;
    transition-delay: 0s;
  }

  &--full {
    &:before {
      opacity: 0;
      transition: opacity 0;
      transition-delay: 0.2s;
    }

    &:after {
      opacity: 1;
      transition: opacity 0;
      transition-delay: 0.2s;
    }
  }

  &__fill {
    display: block;
    z-index: 2;
    overflow: hidden;
    position: absolute;
    top: var(--borderWidth);
    left: var(--borderWidth);
    height: calc(100% - (var(--borderWidth) * 2));
    width: calc(var(--progress) - (var(--borderWidth) * 2));
    border-radius: 8px;
    transition: width var(--transition);

    &:after {
      content: '';
      height: 100%;
      background-image: url(/images/progress-bar-fill.png);
      display: block;
      background-size: 100% 100%;
      background-repeat: no-repeat;
    }
  }
}
</style>