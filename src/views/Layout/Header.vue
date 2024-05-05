<template>
  <header class="header">
    <div class="container header__container">
      <div class="header__login">
        <ui-link href="#" target="_blank">
          login
        </ui-link>
      </div>
      <div class="header__logo">
        <a href="#" target="_blank">
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
  font-size: 28px;

  .ui-link__underline {
    width: 230%;
  }

  @media (max-width: 1024px) {
    font-size: 24px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 320px) {
    padding: 16px 0;
    font-size: 14px;
  }

  &__container {
    display: flex;
    padding: 0 min(105px, 10%);
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

      @media (max-width: 1024px) {
        width: 120px;
      }

      @media (max-width: 768px) {
        width: 100px;
      }

      @media (max-width: 475px) {
        width: 80px;
      }
    }
  }
}
</style>