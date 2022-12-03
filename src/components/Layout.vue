<template>
    <div class="layout">
        <Sidebar :route="route" v-if="route.name !== 'main'" />
        <div class="content" :class="route.name == 'main' && 'flex'">
            <div class="topbar" :class="route.name !== 'main' && 'show'">
                <!-- массив в который я буду подпушивать ссылки для навигации придумать как его обработать закрытие и тд -->

            </div>
            <slot></slot>
        </div>
    </div>
</template>

<script>

import Sidebar from './Sidebar/Sidebar.vue';
import { useRoute } from 'vue-router';

export default {
    components: { Sidebar },
    data() {
        return {
            route : useRoute(),
        }
    }
}
</script>

<style lang="scss">
    .layout {
        display: flex;
        height: 100vh;
    }
    .content {
        width: calc(100% - 300px);
        height: 100%;
    }
    .flex {
        display: flex;
        align-items: center;
        width: 100%;
    }
    .topbar {
        border-bottom: 1px solid #1e2d3d;
        width: 100%;
        height: 38px;
        display: none;

        &.show {
            display: block;
        }
    }
</style>