<template>
    <div class="mp-sponsors">
        <div class="container mp-sponsors__container">
            <div class="mp-sponsors__row mp-sponsors__row--head">
                <h2 class="mp-sponsors__title white-text">Спонсоры</h2>
                <div class="mp-sponsors__col mp-sponsors__col--diamond">
                    <sponsor-card
                        size="xl"
                        logo="/images/rafinad-logo-color.svg"
                        title=""
                        text="Тянется след из огня, скоро прибудут драконы."
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import SponsorCard from '@/components/SponsorCard/SponsorCard.vue'
</script>

<style lang="scss">
.mp-sponsors {
    &__title {
        flex-grow: 1;
        margin-bottom: 0;
    }

    &__container {
        display: flex;
        flex-direction: column;
        row-gap: 48px;
    }

    &__row {
        display: flex;
        justify-content: center;
        row-gap: 64px;

        &--head {
            align-items: flex-end;
            row-gap: 32px;

            @media (max-width: 1024px) {
                flex-wrap: wrap;
            }

            .mp-sponsors__col {
                width: 75%;

                @media (max-width: 1024px) {
                    width: 100%;
                }
            }
        }
    }
}
</style>