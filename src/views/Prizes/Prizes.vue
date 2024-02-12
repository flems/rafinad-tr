<template>
  <div class="prizes">
    <div class="container">
      <h2 class="white-text">Джемовые призы</h2>
      <div class="prizes-row">
        <div class="prizes-nameplates">
          <div class="prizes-nameplates__item">
            <div class="prizes-nameplate">
              <span class="prizes-nameplate__text">1&nbsp;000&nbsp;000 <br>рублей</span>
            </div>
          </div>
          <div class="prizes-nameplates__item">
            <div class="prizes-nameplate">
              <span class="prizes-nameplate__text">600&nbsp;000 <br>рублей</span>
            </div>
          </div>
          <div class="prizes-nameplates__item">
            <div class="prizes-nameplate">
              <span class="prizes-nameplate__text">400&nbsp;000 <br>рублей</span>
            </div>
          </div>
        </div>
        <div class="prizes-item">
          <img src="/images/prizes/1.png" alt="">
        </div>
        <div class="prizes-item">
          <img src="/images/prizes/2.png" alt="">
        </div>
        <div class="prizes-item">
          <img src="/images/prizes/3.png" alt="">
        </div>
      </div>
      <div class="prizes-row">
        <div class="prizes-nameplates">
          <div class="prizes-nameplates__item">
            <div class="prizes-nameplate">
              <span class="prizes-nameplate__text">300&nbsp;000 <br>рублей</span>
            </div>
          </div>
          <div class="prizes-nameplates__item">
            <div class="prizes-nameplate">
              <span class="prizes-nameplate__text">Золотой слиток<br>100&nbsp;г.</span>
            </div>
          </div>
          <div class="prizes-nameplates__item">
            <div class="prizes-nameplate">
              <span class="prizes-nameplate__text">???</span>
            </div>
          </div>
        </div>
        <div class="prizes-item">
          <img src="/images/prizes/4.png" alt="">
        </div>
        <div class="prizes-item">
          <img src="/images/prizes/5.png" alt="">
        </div>
        <div class="prizes-item">
          <img src="/images/prizes/6.png" alt="">
        </div>
      </div>
      <div class="prizes-row">
        <div class="prizes-nameplates prizes-nameplates--4">
          <div class="prizes-nameplates__item">
            <div class="prizes-nameplate">
              <span class="prizes-nameplate__text">iPhone&nbsp;15 <br>Pro&nbsp;Max </span>
            </div>
          </div>
          <div class="prizes-nameplates__item">
            <div class="prizes-nameplate">
              <span class="prizes-nameplate__text">iPad&nbsp;Pro <br>(2022)</span>
            </div>
          </div>
          <div class="prizes-nameplates__item">
            <div class="prizes-nameplate">
              <span class="prizes-nameplate__text prizes-nameplate__text--small">Samsung Galaxy <br>Z&nbsp;Flip5</span>
            </div>
          </div>
          <div class="prizes-nameplates__item">
            <div class="prizes-nameplate">
              <span class="prizes-nameplate__text">Apple Watch <br>Series&nbsp;9</span>
            </div>
          </div>
        </div>
        <div class="prizes-item">
          <img src="/images/prizes/7.png" alt="">
        </div>
        <div class="prizes-item">
          <img src="/images/prizes/8.png" alt="">
        </div>
        <div class="prizes-item">
          <img src="/images/prizes/9.png" alt="">
        </div>
        <div class="prizes-item">
          <img src="/images/prizes/10.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.prizes {
  padding-bottom: 160px;
}

.prizes-nameplates {
  display: flex;
  position: absolute;
  width: 100%;
  top: 100%;
  z-index: -1;
  transform: translateY(-10%);

  &--4 {
    padding: 0 4% 0 7%;
    gap: 8%;
  }

  &__item {
    flex-shrink: 1;
    flex-grow: 1;
    width: 16%;
    display: flex;
    justify-content: center;
  }
}

.prizes-nameplate {
  font-family: var(--font-secondary);
  color: #fff;
  font-size: 36px;
  background-image: url(/images/nameplate.png);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 50% 50%;
  aspect-ratio: 256/194;
  display: inline-block;
  width: 290px;
  max-width: 100%;
  position: relative;

  &__text {
    position: absolute;
    bottom: 13%;
    left: 50%;
    width: 75%;
    white-space: nowrap;
    transform: translateX(-50%);
    text-align: center;
    line-height: 1;

    &--small {
      font-size: 0.85em;
    }
  }
}


.prizes-item {
  position: relative;
  z-index: 2;
  flex-shrink: 1;
  flex-grow: 1;
  width: 33.3%;

  img {
    width: 100%;
    display: block;
  }
}

.prizes-row {
  position: relative;
  display: flex;
  margin-left: -9%;
  margin-right: -9%;

  & + & {
    margin-top: 300px;
  }

  &:before {
    content: '';
    position: absolute;
    width: auto;
    height: 330px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%) translateY(30%);
    aspect-ratio: 1686/270;
    background-image: url(/images/shelf.png);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 50% 50%;
  }
}
</style>