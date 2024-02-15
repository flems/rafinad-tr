<template>
  <div class="prizes">
    <div class="container">
      <h2 class="white-text">Джемовые призы</h2>
      <div class="prizes-row">
        <div class="prizes-nameplates">
          <div class="prizes-nameplates__item">
            <div class="prizes-nameplate">
              <span class="prizes-nameplate__text">
                <span class="prizes-nameplate__place">1 место</span>
                1&nbsp;000&nbsp;000 рублей
              </span>
            </div>
          </div>
          <div class="prizes-nameplates__item">
            <div class="prizes-nameplate">
              <span class="prizes-nameplate__text">
                <span class="prizes-nameplate__place">2 место</span>
                600&nbsp;000 рублей
              </span>
            </div>
          </div>
        </div>
        <div class="prizes-item">
          <img src="/images/prizes/1.png" alt="">
        </div>
        <div class="prizes-item">
          <img src="/images/prizes/2.png" alt="">
        </div>
      </div>
      <div class="prizes-row">
        <div class="prizes-nameplates">
          <div class="prizes-nameplates__item">
            <div class="prizes-nameplate">
              <span class="prizes-nameplate__text">
                <span class="prizes-nameplate__place">3 место</span>
                400&nbsp;000 рублей
              </span>
            </div>
          </div>
          <div class="prizes-nameplates__item">
            <div class="prizes-nameplate">
              <span class="prizes-nameplate__text">
                <span class="prizes-nameplate__place">4 место</span>
                300&nbsp;000 рублей
              </span>
            </div>
          </div>
        </div>
        <div class="prizes-item">
          <img src="/images/prizes/3.png" alt="">
        </div>
        <div class="prizes-item">
          <img src="/images/prizes/4.png" alt="">
        </div>
      </div>
      <div class="prizes-row">
        <div class="prizes-nameplates">
          <div class="prizes-nameplates__item">
            <div class="prizes-nameplate">
              <span class="prizes-nameplate__text">
                <span class="prizes-nameplate__place">5 место</span>
                Apple iMac&nbsp;24&nbsp;M1
              </span>
            </div>
          </div>
          <div class="prizes-nameplates__item">
            <div class="prizes-nameplate">
              <span class="prizes-nameplate__text">
                <span class="prizes-nameplate__place">6 место</span>
                MacBook Pro&nbsp;14"
              </span>
            </div>
          </div>
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
              <span class="prizes-nameplate__text prizes-nameplate__text--small">
                <span class="prizes-nameplate__place">7 место</span>
                iPhone&nbsp;15 Pro&nbsp;Max
              </span>
            </div>
          </div>
          <div class="prizes-nameplates__item">
            <div class="prizes-nameplate">
              <span class="prizes-nameplate__text prizes-nameplate__text--small">
                <span class="prizes-nameplate__place">8 место</span>
                iPad&nbsp;Pro (2022)
              </span>
            </div>
          </div>
        </div>
        <div class="prizes-item">
          <img src="/images/prizes/7.png" alt="" style="transform: translateX(-3%);">
        </div>
        <div class="prizes-item">
          <img src="/images/prizes/8.png" alt="">
        </div>
      </div>
      <div class="prizes-row">
        <div class="prizes-nameplates prizes-nameplates--4">
          <div class="prizes-nameplates__item">
            <div class="prizes-nameplate">
              <span class="prizes-nameplate__text prizes-nameplate__text--3-row prizes-nameplate__text--small">
                <span class="prizes-nameplate__place">9 место</span>
                Samsung Galaxy <br>Z&nbsp;Flip5
              </span>
            </div>
          </div>
          <div class="prizes-nameplates__item">
            <div class="prizes-nameplate">
              <span class="prizes-nameplate__text prizes-nameplate__text--small">
                <span class="prizes-nameplate__place">10 место</span>
                Apple Watch Series&nbsp;9
              </span>
            </div>
          </div>
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

  @media (max-width: 480px) {
    padding-bottom: 120px;
  }
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
  font-size: 20px;
  background-image: url(/images/nameplate.png);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 50% 50%;
  aspect-ratio: 256/194;
  display: inline-block;
  width: 190px;
  max-width: 100%;
  position: relative;

  @media (max-width: 400px) {
    font-size: 16px;
    width: 130px;
  }

  &__place {
    display: block;
    line-height: 1.2;
    color: #FFC700;
  }

  &__text {
    position: absolute;
    bottom: 17%;
    left: 50%;
    width: 75%;
    white-space: nowrap;
    transform: translateX(-50%);
    text-align: center;
    line-height: 1.1;

    @media (max-width: 400px) {
      bottom: 14%;
    }

    &--3-row {
      bottom: 12%;
    }

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
  
  @media (max-width: 1360px) {
    margin-left: -4%;
    margin-right: -4%;
  }

  & + & {
    margin-top: 180px;
    
    @media (max-width: 400px) {
      margin-top: 120px;
    }
  }

  &:before {
    content: '';
    position: absolute;
    width: auto;
    height: 130px;
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