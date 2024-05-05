<template>
  <div class="mp-rating" v-if="data.length && isEnable">
    <div class="container mp-rating__wrapper">
      <h2 class="white-text">ТОП участников</h2>
        <div class="mp-rating__container">
          <rating-table :data="data" />
        </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import RatingTable from './components/RatingTable.vue'
import { exampleData } from './exampleData.js'

const data = ref(exampleData)
</script>

<style lang="scss">
.mp-rating {
  &__container {
    background-image: url(/images/rating/table-bg.webp);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    padding: clamp(32px, 7.5%, 72px);
    padding-bottom: clamp(48px, 12%, 96px);
    
    @media (max-width: 1279px) {
      padding: clamp(32px, 5%, 72px);
      padding-bottom: clamp(48px, 8%, 96px);
    }

    @media (max-width: 600px) {
      padding: 32px 20px;
    }
  }
}
</style>