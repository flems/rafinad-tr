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
import { onBeforeMount, ref } from 'vue'
import RatingTable from './components/RatingTable.vue'

const data = ref([])


const isEnable = window?.__VUE_STATE__?.enableTable

const getData = () => {
  fetch('https://rafinad.io/api/v1/bonuspoint/top_data/',
    {
      headers: {
        'Authorization': 'Token 0042287fbcd916971408c84312cdebc668c00b38',
      },
      method: 'GET'
    })
    .then(response => {
      return response.json()
    })
    .then(res => {
      data.value = res
    })
    .catch(error => {
      console.error(error);
    })
}

onBeforeMount(() => {
  if (isEnable) {
    getData()
  }
})
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