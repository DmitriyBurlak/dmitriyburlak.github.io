<template>
    <div class="layout">
        <Sidebar />
        <div class="main">
            <slot></slot>
        </div>
    </div>
</template>

<script>

import Sidebar from './Sidebar/Sidebar.vue';
import Main from '../views/Main.vue';
export default {
    components: { Sidebar, Main },
    // data() {
    //     return {
    //         route : useRoute()
    //     }
    // }
}
</script>

<style>
    .layout {
        display: flex;
        height: 100vh;
    }

</style>