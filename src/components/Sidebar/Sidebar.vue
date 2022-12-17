<template>
    <div class="sidebar">
        <div class="sidebar__item" v-for="(bar, idx) in sidebar" :key="idx" :class="bar.active && 'active'" >
            <template v-if="bar?.show.includes(route.name)">
                <div class="sidebar__item__label" @click="(bar.active = !bar.active)">
                    <span class="label__icon" v-html="Icon.downOne"></span>{{bar.label}}
                </div>
                <ul class="sidebar__item__list">
                    <li v-for="(item, key) in bar.items" :key="key">
                        <template v-if="item.type == 'link'">
                            <a :href="item.link" target="_blank">
                                <span class="link__icon" v-if="!!item.icon" v-html="item.icon"></span> 
                                {{item.label}}
                            </a>
                        </template>
                        <span v-else>
                            {{item.label}}
                        </span>
                    </li>
                </ul>
            </template>
        </div>
    </div>
    <!-- <div v-html="phone"></div>
    {{phone}} -->
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue'
import { useSidebarStore } from '@/stores/sidebar.store'
import { Icon } from '@/assets/constants.js'
import { RouteRecordName } from 'vue-router';

const SidebarStore = useSidebarStore();
const sidebar = computed(() => SidebarStore.menu)

// const props = defineProps({
//     route: {
//         type: Object,
//     }
// })

const props = defineProps<{
    route: RouteRecordName
}>()

</script>

<style lang="scss">
@import 'src/assets/scss/colors.scss';

.sidebar {
    width: 300px;
    border-right: 1px solid $border;

    &__item {
        &__label {
            padding: 10px 20px;
            color: $white;
            border-bottom: 1px solid $border;
            cursor: pointer;

            .label__icon {
                padding-right: 5px;
            }
        }

        &__list {
            padding: 0px 35px;
            overflow: hidden;
            max-height: 0;
            border-bottom: 1px solid $border;

            transition: all 0.4s ease-out;

            li {
                padding-bottom: 8px;

                &:last-child {
                    padding-bottom: 0;
                }

                .link__icon {
                    padding-right: 8px;
                    display: flex;
                    align-items: center;
                    svg {
                        filter: invert(44%) sepia(37%) saturate(366%) hue-rotate(169deg) brightness(96%) contrast(84%);
                        width: 16px;
                        height: 16px;
                    }
                }

                a {
                    color: $text-grey;
                    text-decoration: none;
                    display: flex;
                    align-items: center;

                    &:hover {
                        color: $text-hover;
                    }
                }
            }
        }

        &.active {
            .sidebar__item__list {
                padding: 10px 35px;
                max-height: 200px;
            }
            .sidebar__item__label {
                .label__icon {
                    svg {
                        transform: scale(1, -1);
                    }
                }
            }
        }
    }
}
</style>