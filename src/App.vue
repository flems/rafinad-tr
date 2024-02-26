<template>
  <div class="global-wrapper">
    <transition name="fade" mode="out-in">
      <div v-if="loading" class="loader-wrapper">
        <preloader />
      </div>
    </transition>
    <header-layout />
    <main class="main">
      <main-page :loading="loading" />
    </main>
    <footer-layout />
  </div>
</template>

<script setup>
import Preloader from "@/components/Preloader/Preloader.vue";

import FooterLayout from "./views/Layout/Footer.vue";
import HeaderLayout from "./views/Layout/Header.vue";
import MainPage from "./views/MainPage/MainPage.vue";
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue";
const loading = ref(true);

const handleLoad = () => {
  setTimeout(() => {
    loading.value = false;
  }, 1000)
};

onMounted(() => {
  nextTick(() => {
    window.addEventListener("load", (event) => {
      handleLoad();
    });
  });
});

onBeforeUnmount(() => {
  window.removeEventListener("load", (event) => {
    handleLoad();
  });
});
</script>

<style scoped>
.loader-wrapper {
  z-index: 999;
  align-items: center;
  background: #121317;
  display: flex;
  font-size: 32px;
  height: 100%;
  justify-content: center;
  left: 0;
  opacity: 1;
  position: fixed;
  top: 0;
  width: 100%;
}
</style>
