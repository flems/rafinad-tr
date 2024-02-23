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
            <!-- по другим спонсора не доделано и было поставлено на паузу -->
            <!-- <div class="mp-sponsors__row mp-sponsors__row--2">
                <div class="mp-sponsors__col">
                    <sponsor-card
                        size="l"
                        logo="/images/sponsors/rosbank.png"
                        title="Алмазный дракон"
                        text="За каждые заработанные 100 рублей начисляется 10 сахарков. По спонсорским офферам начисляется 20, 30 и даже 40 сахарков в зависимости от спонсора!"
                    />
                </div>
                <div class="mp-sponsors__col">
                    <sponsor-card
                        size="l"
                        logo="/images/sponsors/rosbank.png"
                        title="Алмазный дракон"
                        text="За каждые заработанные 100 рублей начисляется 10 сахарков. По спонсорским офферам начисляется 20, 30 и даже 40 сахарков в зависимости от спонсора!"
                    />
                </div>
            </div>
            <div class="mp-sponsors__row mp-sponsors__row--3">
                <div class="mp-sponsors__col">
                    <sponsor-card
                        size="m"
                        logo="/images/sponsors/rosbank.png"
                        title="Алмазный дракон"
                        text="За каждые заработанные 100 рублей начисляется 10 сахарков. По спонсорским офферам начисляется 20, 30 и даже 40 сахарков в зависимости от спонсора!"
                    />
                </div>
                <div class="mp-sponsors__col">
                    <sponsor-card
                        size="m"
                        logo="/images/sponsors/rosbank.png"
                        title="Алмазный дракон"
                        text="За каждые заработанные 100 рублей начисляется 10 сахарков. По спонсорским офферам начисляется 20, 30 и даже 40 сахарков в зависимости от спонсора!"
                    />
                </div>
                <div class="mp-sponsors__col">
                    <sponsor-card
                        size="m"
                        logo="/images/sponsors/rosbank.png"
                        title="Алмазный дракон"
                        text="За каждые заработанные 100 рублей начисляется 10 сахарков. По спонсорским офферам начисляется 20, 30 и даже 40 сахарков в зависимости от спонсора!"
                    />
                </div>
            </div>
            <div class="mp-sponsors__row mp-sponsors__row--3">
                <div class="mp-sponsors__col">
                    <sponsor-card
                        size="s"
                        logo="/images/sponsors/rosbank.png"
                        title="Алмазный дракон"
                        text="За каждые заработанные 100 рублей начисляется 10 сахарков. По спонсорским офферам начисляется 20, 30 и даже 40 сахарков в зависимости от спонсора!"
                    />
                </div>
                <div class="mp-sponsors__col">
                    <sponsor-card
                        size="s"
                        logo="/images/sponsors/rosbank.png"
                        title="Алмазный дракон"
                        text="За каждые заработанные 100 рублей начисляется 10 сахарков. По спонсорским офферам начисляется 20, 30 и даже 40 сахарков в зависимости от спонсора!"
                    />
                </div>
            </div> -->
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

        &--2 {
            column-gap: 32px;

            .mp-sponsors__col {
                width: 50%;
            }
        }

        &--3 {
            column-gap: 32px;

            .mp-sponsors__col {
                width: 33.3%;
            }
        }
    }
}
</style>