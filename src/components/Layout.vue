<template>
    <div class="layout">
        <Sidebar :route="route" />
        <div class="content" :class="route.name == 'main' && 'flex'">
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

<style>
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
</style>