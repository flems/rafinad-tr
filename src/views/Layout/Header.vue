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
  padding: 48px 0;
  color: var(--textBlack);
  font-size: 30px;

  &__container {
    display: flex;
    padding: 0 120px;
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
      width: 140px;
      display: block;
    }
  }
}
</style>