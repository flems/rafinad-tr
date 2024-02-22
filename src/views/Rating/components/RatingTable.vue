<template>
  <div class="rating-table" v-if="data && data.length">
    <table class="rating-table__table">
      <thead class="rating-table__head">
        <th class="rating-table__cell rating-table__cell--head">Место</th>
        <th class="rating-table__cell rating-table__cell--head">UID</th>
        <th class="rating-table__cell rating-table__cell--head">Прогресс</th>
        <th class="rating-table__cell rating-table__cell--head">Уровень</th>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in data"
          :key="index"
        >
          <td class="rating-table__cell rating-table__cell--first">
            <span
              class="rating-table__trend"
              :class="{ 'rating-table__trend--down': item.prev_position < item.id }"
              v-if="item.prev_position !== item.id && item.prev_position !== null"
            ></span>
            <span v-html="item.id"></span>
          </td>
          <td class="rating-table__cell">
            <span :class="{ 'small': item.sugar_id?.length > 4 }" v-html="item.sugar_id"></span>
          </td>
          <td class="rating-table__cell">
            <span v-html="`${item.percentage}`"></span>
          </td>
          <td class="rating-table__cell">
            <progress-bar :data="item" progress-bar-size="s" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import ProgressBar from './ProgressBar.vue'

defineProps({
  data: {
    type: Array,
    default: () => []
  }
})
</script>

<style lang="scss">
.rating-table {
  --fontSize: 36px;
  --cellPadding: 8px 24px;
  
  @media (max-width: 1300px) {
    --fontSize: 28px; 
    --cellPadding: 8px 16px;
  }
  
  @media (max-width: 1150px) {
    --fontSize: 22px; 
  }

  @media (max-width: 768px) {
    --cellPadding: 8px;
  }
}
.rating-table {
  font-size: var(--fontSize);
  font-family: var(--font-secondary);
  overflow: auto;

  &::-webkit-scrollbar {
    height: 5px;
    width: 5px;
    background: rgba(222, 222, 222, 0.5);
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(135, 132, 132, 0.6);
    border-radius: 4px;
  }


  &__trend {
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 50% 50%;
    width: 20px;
    height: 20px;
    display: block;
    background-image: url(/images/trend-up.png);
    flex-shrink: 0;
    // margin: 0 auto;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 24px;

    @media (max-width: 768px) {
        width: 12px;
        height: 12px;
        left: 16px;
    }
    
    &--down {
      background-image: url(/images/trend-down.png);
    }
  }

  &__table {
    width: 100%;
    min-width: 810px;
  }

  &__head {
    th {
      padding-bottom: 16px;
    }
  }

  &__cell {
    width: 14%;
    min-width: 90px;
    text-align: left;
    padding: var(--cellPadding);
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: 120px;
    position: relative;

    &--first {
      padding-left: 72px;

      @media (max-width: 768px) {
        padding-left: 44px;
      }
    }

    @media (max-width: 1150px) {
      width: 12%;
    }

    .small {
      font-size: 0.75em;
    }

    &:last-child {
      width: auto;
      max-width: none;
    }
  }
}
</style>