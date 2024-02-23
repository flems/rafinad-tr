<template>
  <div
    class="prizes-step"
    :class="{
      'prizes-step--active': progress !== '0',
      'prizes-step--last': last
    }"
  >
    <div class="prizes-step__icon" v-if="$slots.icon" :class="{ 'mix-blend-mode-darken' : mixBlendModeDarken}">
      <slot name="icon" />
    </div>
    <div class="prizes-step__container">
      <div class="prizes-step__number">
        <slot name="number"/>
      </div>
      <div class="prizes-step__progress" v-if="!last">
        <progress-bar :progress="progress" :size="progressBarSize" />
        <div class="prizes-step__score" v-if="score">
          <span v-html="score"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ProgressBar from '@/components/ProgressBar/ProgressBar.vue'

defineProps({
  score: String,
  last: Boolean,
  mixBlendModeDarken: Boolean,
  progress: {
    type: [String, Number],
    default: '0',
  },
  progressBarSize: {
    type: String,
    default: 'm',
    validator: prop => ['m', 's'].includes(prop)
  }
})
</script>

<style lang="scss">
$transition: 0.1s linear;
$transitionWidth: 0.25s linear 0s;

.prizes-step {
  $parent: &;
  width: max-content;

  &__container {
    display: flex;
    align-items: center;
  }

  &__icon {
    width: 90px;
    height: 90px;
    display: flex;
    align-items: flex-end;
    margin-bottom: 6px;
    mix-blend-mode: hard-light;

    @media (max-width: 1279px) {
      width: 70px;
      height: 70px;
    }

    @media (max-width: 1024px) {
      width: 60px;
      height: 60px;
    }

    @media (max-width: 475px) {
      width: 32px;
      height: 32px;
    }

    img,
    svg {
      height: 100%;
      object-fit: contain;
      width: 100%;
    }
  }

  &__number {
    flex-shrink: 0;
  }

  &__progress {
    flex-grow: 1;
    position: relative;

    @media (max-width: 600px) {
      margin-bottom: -24px;
    }
  }

  &__score {
    font-family: var(--font-secondary);
    color: var(--textRed);
    font-weight: 500;
    font-size: 18px;
    line-height: 1.4;
    margin-top: 16px;
    padding-left: 6px;
    padding-right: 6px;
    display: flex;
    justify-content: center;
    align-content: center;

    @media (max-width: 600px) {
      margin-top: 4px;
      font-size: 16px;
    }

    @media (max-width: 475px) {
      margin-top: 4px;
      font-size: 14px;
      padding: 0;
    }

    &:after {
      content: '';
      display: block;
      width: 24px;
      height: 28px;
      flex-shrink: 0;
      background-image: url("data:image/svg+xml,%3Csvg width='25' height='28' viewBox='0 0 25 28' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M11.9357 0.154705C12.2847 -0.0515682 12.7134 -0.0515682 13.0608 0.154705L23.8798 6.54739C23.8977 6.5567 23.9154 6.56653 23.9329 6.57688L23.9374 6.57995C24.2849 6.78623 24.5 7.16645 24.5 7.57745V20.4233C24.5 20.8343 24.2849 21.2145 23.9374 21.4208L13.6289 27.512L13.0928 27.8272L13.0817 27.8341L13.0618 27.8461C12.7128 28.0523 12.2841 28.0508 11.9352 27.8445L1.06409 21.4208C0.715105 21.2145 0.5 20.8343 0.5 20.4218V7.57592C0.50024 7.51009 0.505915 7.44505 0.516729 7.38139C0.57281 7.04757 0.77127 6.75164 1.0631 6.57841L11.9357 0.154705ZM13.6291 24.843L13.6276 14.6664L22.2423 9.57726V19.7554L13.6291 24.843Z' fill='%239F0101'/%3E%3C/svg%3E%0A");
      background-size: contain;
      background-repeat: no-repeat;
      background-position: 50% 50%;
      margin-left: 8px;
      margin-top: -0.2em;

      @media (max-width: 600px) {
        margin-left: 4px;
        width: 18px;
        height: 22px;
        margin-top: 0;
      }
    }
  }
}
</style>