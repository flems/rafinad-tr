<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__container">
        <div class="row">
          <div class="col-12 col-md-6 col-xl-3 col-lg-4">
            <div class="footer__logo-wrapper">
              <a href="https://rafinad.io/" target="_blank"><img class="footer__logo" src="/images/rafinda-logo-white.svg" alt=""></a>
              <p class="footer__copyright">©️ 2024 Rafinad  ИНН 561654684</p>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-8 offset-xl-1 offset-lg-0">
            <div class="footer__links-container">
              <div class="footer__nav">
                <p class="footer__title">Документация</p>
                <footer-nav :data="footerMenu"/>
              </div>
              <div class="footer__nav">
                <p class="footer__title">Наши социальные сети</p>
                <footer-nav :data="socialList"/>
              </div>
            </div>
            <p class="footer__copyright footer__copyright--mobile">©️ 2023 Rafinad  ИНН 561654684</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import FooterNav from '@/components/FooterNav'

const footerMenu = [
  {
    link: 'https://rafinad.io/static/web/trafficjam2023/rules.pdf',
    name: 'Публичная оферта'
  },
  {
    link: 'https://rafinad.io/static/web/trafficjam2022/politics.pdf',
    name: 'Политика конфиденциальности'
  },
  {
    link: 'https://rafinad.io/faq/',
    name: 'Вопрос-ответ'
  }
]

const socialList = [
  {
    link: 'https://t.me/rafinad_channel',
    name: 'Telegram',
    icon: '/images/icons/telegram.svg'
  },
  {
    link: 'https://vk.com/rafinad_cpa',
    name: 'Вконтакте',
    icon: '/images/icons/vk.svg'
  },
  {
    link: 'http://tenchat.ru/rafinadio',
    name: 'TenChat',
    icon: '/images/icons/tenchat.svg'
  },
  // {
  //   link: 'http://instagram.com/rafinad.io',
  //   name: 'Та самая соцсеть',
  //   icon: '/images/icons/inst.svg'
  // }
]
</script>

<style lang="scss">
.footer {
  border-bottom: none;
  position: relative;
  z-index: 1;
  padding-top: 100px;

  @media (max-width: 480px) {
    padding-top: 60px;
  }

  &:after {
    content: '';
    display: block;
    width: 100%;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 50%, rgb(0, 0, 0) 100%);
    // padding-top: 20%;
    height: 100%;
    bottom: 0;
    left: 0;
    position: absolute;
    z-index: -1;
  }

  &__logo-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 100%;
    justify-content: space-between;

    margin-bottom: 32px;
  }

  &__copyright {
    font-size: 16px;
    color: #6B6B6B;

    @media (max-width: 768px) {
      display: none;
    }

    &--mobile {
      display: none;

      @media (max-width: 768px) {
        display: block;
        margin-top: 20px;
      }
    }
  }

  &__nav {
    max-width: 260px;
  }

  &__title {
    font-family: var(--font-secondary);
    font-size: 24px;
    line-height: 1.4;
    text-transform: uppercase;
    color: #9E9E9E;
    padding-bottom: 20px;

    @media (max-width: 768px) {
      font-size: 18px;
    }
  }
  
  &__container {
    padding: 60px 8%;
    
    @media (max-width: 1000px) {
      padding: 60px;
    }

    @media (max-width: 992px) {
      padding: 40px;
    }

    @media (max-width: 480px) {
      padding: 0;
      padding-bottom: 40px;
    }
  }

  &__logo {
    img {
      width: 124px;
      display: block;
    }
  }

  &__links-container {
    display: flex;
    gap: 160px;
    
    @media (max-width: 1440px) {
      gap: 90px;
    }

    @media (max-width: 992px) {
      flex-direction: column;
      gap: 32px;
    }

    @media (max-width: 768px) {
      gap: 20px;
      flex-direction: column;
    }
  }
}
</style>
