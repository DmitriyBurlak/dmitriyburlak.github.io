<template>
    <div class="db-notifications">
        <div class="notification" v-for="(item, idx) in notificationList" :key="idx" :class="item && 'show'">
            <span class="notification__icon" v-if="!!item.icon" v-html="icons[item.icon]"></span> 
            {{ item.text }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Icon } from '@/assets/constants.js';
import { useNotify } from '@/stores/notify';

const icons: { [key: string]: string } = Icon;
const Notify = useNotify();
const notificationList = computed(() => Notify.notifications);
</script>

<style lang="scss">
@import 'src/assets/scss/colors.scss';
    .db-notification {
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
        position: absolute;

        .notification {
            border: 1px solid $border;
            padding: 8px 15px;
            border-radius: 10px;
            background-color: $main-dark;
        }
    }

    .db-notifications {
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        position: absolute;

        .notification {
            display: flex;
            align-items: center;
            border: 1px solid $border;
            padding: 8px 15px;
            border-radius: 10px;
            background-color: $main-dark;
            margin-bottom: 8px;
            transition: all 0.5s linear;
            transform: translateY(100px);

            &__icon {
                svg {
                    width: 25px;
                    height: 25px;
                    filter: invert(44%) sepia(37%) saturate(366%) hue-rotate(169deg) brightness(96%) contrast(84%);
                }
                margin-right: 10px;
            }

            &.show {
                transform: translateY(0);
            }

            &:last-child {
                margin-bottom: 0;
            }
        }
    }
</style>