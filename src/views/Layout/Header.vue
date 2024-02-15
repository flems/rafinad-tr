<template>
  <header class="header">
    <div class="container header__container">
      <div class="header__login">
        <ui-link href="https://rafinad.io/" target="_blank">
          login
        </ui-link>
      </div>
      <div class="header__logo">
        <a href="https://rafinad.io/" target="_blank">
          <img src="/images/rafinad-logo.svg" alt="Rafinad">
        </a>
      </div>
      <div class="header__nav"></div>
    </div>
  </header>
</template>

<script setup>
import UiLink from '@/components/UiLink/UiLink.vue'
</script>

<style lang="scss">
.header {
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  padding: min(calc(var(--index) * 2.1), 48px) 0;
  color: var(--textBlack);
  font-size: min(calc(var(--index) * 1.5), 32px);

  @media (max-width: 475px) {
    padding: 16px 0;
  }

  &__container {
    display: flex;
    padding: 0 calc(var(--index) * 5);
    max-width: var(--small-container-width);
    margin: 0 auto;
  }

  &__login,
  &__nav {
    width: 50%;
  }


  &__logo {
    flex-shrink: 0;
    
    img {
      width: min(calc(var(--index) * 6), 140px);
      display: block;
    }
  }
}
</style>