<template>
  <div class="ui-card"
    :class="{
      'ui-card--interactive': interactive,
      'ui-card--full-height': fullHeight,
    }"
  >
    <div class="ui-card__container">
      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps({
  interactive: {
    type: Boolean
  },
  fullHeight: {
    type: Boolean
  }
})
</script>

<style lang="scss">
.ui-card {
  background-image: url(/images/card-paper.webp);
  background-repeat: no-repeat;
  background-size: 100% 100%;

  &--interactive {
    cursor: pointer;
  }

  &__full-height {
    height: 100%;
  }
  
  &__container {
    padding: clamp(32px, 7.5%, 72px);
    padding-bottom: clamp(48px, 12%, 96px);
    
    @media (max-width: 1279px) {
      padding: clamp(32px, 5%, 72px);
      padding-bottom: clamp(48px, 8%, 96px);
    }

    @media (max-width: 600px) {
      padding: 32px 20px;
    }
  }
}
</style>