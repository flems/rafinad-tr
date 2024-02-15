<template>
  <nav class="footer-nav">
    <ul class="footer-nav__list">
      <li
        class="footer-nav__item"
        v-for="(item, index) in data"
        :key="index"
      >
        <a :href="item.link" class="footer-nav__link" target="_blank">
          <img class="footer-nav__icon" :src="item.icon" alt="" v-if="item.icon">
          <span v-html="item.name"></span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
defineProps({
  data: {
    type: Array,
    default: () => []
  }
})
</script>

<style lang="scss">
.footer-nav {
  &__list {
    margin: 0;
    padding: 0;
    margin-top: -12px;
  }

  &__item {
    margin-top: 12px;
  }

  &__link {
    color: #FDFDFD;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.25;
    text-decoration: none;
    padding-bottom: 1px;
    display: flex;
    align-items: flex-start;
    
    span {
      // transition: box-shadow 0.2s ease-in;
    }
    
    &:hover {
      text-decoration: underline;
      // span {
      //   box-shadow: inset 0 -1px 0 0 currentColor;
      // }
    }
  }

  &__icon {
    width: 20px;
    height: 20px;
    margin-right: 8px;
    flex-shrink: 0;
    display: block;
    margin-top: -0.1em;
  }
}
</style>