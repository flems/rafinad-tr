<template>
  <a
    class="ui-link"
    :class="`ui-link--theme-${theme}`"
    :href="href"
  >
    <slot />
    <UnderlineSvg class="ui-link__underline"/>
  </a>
</template>

<script setup>
import UnderlineSvg from './Underline.vue'

defineProps({
  href: {
    type: String
  },
  theme: {
    type: String,
    default: 'dark',
    validator: prop => ['dark', 'red'].includes(prop)
  }
})
</script>

<style lang="scss">
.ui-link {
  --colorDefault: var(--textBlack);
  --colorHover: var(--textRed);
  
  &--theme-red {
    --colorDefault: var(--textRed);
    --colorHover: var(--textBlack);
  }
}
.ui-link {
  position: relative;
  display: inline-block;
  font-family: var(--font-secondary);
  padding-bottom: 8px;
  color: var(--colorDefault);
  text-decoration: none;
  transition: color var(--transition);

  &:hover {
    color: var(--colorHover);
  }

  &__underline {
    width: 80%;
    aspect-ratio: 147/6;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    pointer-events: none;
    fill: currentColor;
    transition: fill var(--transition);

    @media (max-width: 475px) {
      width: 100%;
      min-width: 3em;
    }
  }
}
</style>