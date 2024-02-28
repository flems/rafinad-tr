<template>
  <div class="global-wrapper">
    <transition name="fade" mode="out-in">
      <div v-if="loading" class="loader-wrapper">
        <preloader />
      </div>
    </transition>
    <header-layout />
    <main class="main">
      <main-page :loading="!isLoadingComplete" />
    </main>
    <footer-layout />
  </div>
</template>

<script setup>
import Preloader from "@/components/Preloader/Preloader.vue";

import FooterLayout from "./views/Layout/Footer.vue";
import HeaderLayout from "./views/Layout/Header.vue";
import MainPage from "./views/MainPage/MainPage.vue";
import { ref, onMounted, onBeforeUnmount, nextTick, onBeforeMount, computed } from "vue";
const loading = ref(true);


const handleLoad = () => {
  loading.value = false;
};

// на айфона не отрабатывал canplay и canplaythrough, браузеры могут игнорировать атрибуты preload на видео, поэтому видео грузится отдельно ajax запросом и после загрузки запускается анимация
const preloadVideo = (url, key) => {
  // Создаем новый объект XMLHttpRequest
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'arraybuffer';

  // Обработчик для события загрузки
  xhr.onload = function() {
      if (xhr.status === 200) {
          const blob = new Blob([xhr.response], { type: 'video/mp4' });
          // console.log(key, 'Video fully loaded');
          videoLoadedStatus.value[key] = true
      }
  };

  // Отправляем запрос на сервер
  xhr.send();
}

const isMobile = ref(false)
const videoLoadedStatus = ref({
  logo: false,
  fire: false,
  dragon: false
})

const loadAllVideos = () => {
  const videoNode = document.createElement('video');
  const videoMap = {
    logo: '/files/logo',
    fire: '/files/fire',
    dragon: '/files/dragon'
  }
  const videoMobileMap = {
    logo: '/files/logo-mob',
    fire: '/files/fire-mob',
    dragon: '/files/dragon-mob'
  }
  const videoType = videoNode.canPlayType('video/mp4; codecs="hvc1"') ? 'mov' : 'webm'

  
  Object.entries(isMobile.value ? videoMobileMap : videoMap).forEach(([key, value]) => {
    const videoUrl = `${value}.${videoType}`
    preloadVideo(videoUrl, key)
  })
}

const isLoadingComplete = computed(() => {
  return !Object.values(videoLoadedStatus.value).includes(false) && !loading.value
})

onMounted(() => {
  nextTick(() => {
    window.addEventListener("load", (event) => {
      handleLoad();
    });
  });
});

onBeforeMount(() => {
  isMobile.value = window.innerWidth < 1024
  loadAllVideos()
})

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
