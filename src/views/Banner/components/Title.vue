<template>
  <div class="banner-title">
    <div class="banner-title__container">
      <video class="banner-title__fire" autoplay muted playsinline>
        <source src="/files/fire.webm" type="video/webm">
      </video>
      <video autoplay muted playsinline loop>
        <source src="/files/logo.webm" type="video/webm">
      </video>
    </div>
  </div>
</template>

<style lang="scss">
.banner-title {
  width: 100%;
  position: relative;
  pointer-events: none;

  &__container {
    position: relative;
    opacity: 0.9;
    transform: translateX(2%);

    video {
      width: 100%;
    }
  }
  

  &__fire {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }

}
</style>