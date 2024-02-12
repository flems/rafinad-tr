<template>
  <div class="number"
    :class="[
      {
        'number--active': active,
        'number--text': text,
      },
      `number--size-${size}`
    ]"
  >
    <span class="number__text">
      <slot />
    </span>
    <Border class="number__border" :active="active" :id="id"/>
  </div>
</template>

<script setup>
import Border from './Border.vue'

defineProps({
  active: {
    type: Boolean,
    default: false
  },
  id: {
    type: String,
  },
  text: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: 'l',
    validator: prop => ['l', 'm'].includes(prop)
  },
  text: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="scss">
.number {
  --textColor: var(--textBlack);

  &--active {
    --textColor: var(--textRed);
  }
  
  &--size-l {
    --fontSize: 70px;
    --size: 88px;

    @media (max-width: 1279px) {
      --fontSize: 52px;
      --size: 70px;
    }

    @media (max-width: 600px) {
      --fontSize: 40px;
      --size: 50px;
    }

    @media (max-width: 475px) {
      --fontSize: 32px;
      --size: 40px;
    }
  }

  &--size-m {
    --fontSize: 32px;
    --size: 40px;
  }
  
  &--text {
    --textColor: #E10000;
    
    &.number--size-l {
      --fontSize: 48px;

      @media (max-width: 1024px) {
        --fontSize: 36px;
      }

      @media (max-width: 600px) {
        --fontSize: 24px;
      }
    }


    &.number--size-m {
      --fontSize: 24px;
    }

    path {
      fill: currentColor;
    }
  }
}

.number {
  $parent: &;
  width: max-content;
  position: relative;
  font-family: var(--font-gothic);
  color: var(--textColor);
  font-size: var(--fontSize);
  transition: color 0.1s;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  width: var(--size);
  height: var(--size);

  &__text {
    margin-top: -0.05em;
  }
  
  &__border {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>