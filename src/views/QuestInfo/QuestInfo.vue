<template>
  <div class="quest-info">
    <div class="container">
      <div class="quest-info__wrapper">
        <h2 class="white-text">Квестовый топ</h2>
        <div class="quest-info__content">
          <ui-card>
            <p>В&nbsp;этом году ценные призы можно получить не&nbsp;только попав на&nbsp;первые 10&nbsp;мест рейтига, но&nbsp;и&nbsp;за&nbsp;выполнение различных квестов.</p>
            <p>
              Новая механика уже с&nbsp;апреля! Берите квесты в&nbsp;<a href="#">Таверне Rafinad</a> и&nbsp;получайте дполнительные призы!
            </p>
          </ui-card>
        </div>
      </div>
      <div class="quest-info__img"></div>
    </div>
  </div>
</template>

<script setup>
import UiCard from '@/components/UiCard/UiCard.vue'
</script>
<style lang="scss">
.quest-info {
  .container {
    position: relative;
  }

  p + p {
    margin-top: 1.3em;
  }

  a {
    text-decoration: none;
    color: var(--textRed);

    &:hover {
      text-decoration: underline;
    }
  }

  &__wrapper {
    position: relative;
    z-index: 2;
  }

  &__content {
    width: 50%;

    @media (max-width: 1024px) {
      width: 100%;
    }
  }

  &__img {
    background: url(/images/quest-info.png);
    background-repeat: no-repeat;
    background-size: contain;
    width: 80%;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(17%, -50%);
    aspect-ratio: 1073/531;
    max-width: 1150px;
    z-index: 1;

    @media (max-width: 1024px) {
      width: 180%;
      transform: translate(22%, -50%);
    }

    @media (max-width: 480px) {
      width: 220%;
      transform: translate(34%, -40%);
    }
  }
}
</style>