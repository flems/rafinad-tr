<template>
    <div
        class="sponsor-card"
        :class="[
            `sponsor-card--size-${size}`
        ]"
    >
        <div class="sponsor-card__wrapper">
            <div class="sponsor-card__img"></div>
            <div class="sponsor-card__content">
                <div class="sponsor-card__logo">
                    <img :src="logo" alt="">
                </div>
                <p class="sponsor-card__title" v-html="title"></p>
                <div class="sponsor-card__text" v-html="text"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    size: {
        type: String,
        default: 'l',
        validator: prop => ['s', 'm', 'l', 'xl'].includes(prop)
    },
    logo: {
        type: String
    },
    title: {
        type: String
    },
    text: {
        type: String
    }
})
</script>

<style lang="scss">
.sponsor-card {
    --bgImage: url('/images/bg-sponsor-card.png');
    
    &--size-xl {
        --dagonImg: url('/images/sponsor-dragon-1.png');
        --mixBlendMode: darken;
        --titleFontSize: 32px;
        --textFontSize: 20px;
        --contentPadding: 48px 0 48px 72px;

        @media (max-width: 1024px) {
            --contentPadding: 32px 0 32px 64px;
        }

        @media (max-width: 768px) {
            --contentPadding: 24px 0 24px 48px;
            --textFontSize: 16px;
            --titleFontSize: 24px;
        }

        @media (max-width: 480px) {
            --titleFontSize: 18px;
            --contentPadding: 24px 0 24px 24px;
        }
    }

    &--size-l {
        --dagonImg: url('/images/sponsor-dragon-2.png');
        --mixBlendMode: luminosity;
        --titleFontSize: 25px;
        --textFontSize: 17px;
        --contentPadding: 32px 32px 32px 0;
    }
    
    &--size-m {
        --dagonImg: url('/images/sponsor-dragon-3.png');
        --mixBlendMode: luminosity;
        --titleFontSize: 18px;
        --textFontSize: 15px;
        --contentPadding: 24px 32px 24px 0;
    }
    
    &--size-s {
        --dagonImg: url('/images/sponsor-dragon-4.png');
        --mixBlendMode: luminosity;
        --titleFontSize: 18px;
        --textFontSize: 15px;
        --contentPadding: 16px 24px 16px 0;
    }
}

.sponsor-card {
    background-image: var(--bgImage);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    display: flex;

    &:after {
        content: '';
        padding-top: 30%;
    }

    &--size-xl {
        .sponsor-card__wrapper {
            flex-direction: row-reverse;
        }

        .sponsor-card__img {
            margin-right: 32px;

            @media (max-width: 480px) {
                margin-right: 16px;
            }
        }
    }

    &__img {
        background-image: var(--dagonImg);
        background-repeat: no-repeat;
        background-size: contain;
        background-position: 50% 50%;
        mix-blend-mode: var(--mixBlendMode);
        width: 40%;
        height: 100%;
        flex-shrink: 0;
    }

    &__wrapper {
        display: flex;
        width: 100%;
    }

    &__content {
        padding: var(--contentPadding);
        font-size: var(--textFontSize);
        flex-grow: 1;
    }

    &__logo {
        margin-bottom: 8px;

        img {
            max-width: 100%;
            max-height: 80px;
            display: block;
        }
    }

    &__title {
        font-family: var(--font-secondary);
        font-size: var(--titleFontSize);
        margin-bottom: 0.5em;
        margin-top: 0.5em;
        line-height: 1;
    }

    &__text {
        // @media (max-width: 768px) {
        //     font-size: 16px;
        // }

        @media (max-width: 480px) {
            display: none;
        }
    }
}
</style>