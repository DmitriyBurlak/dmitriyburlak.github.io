<template>
    <div class="app__wrapper">
        <Header />
        <Layout>
            <router-view></router-view>
        </Layout>
        <Footer />
		<db-notification />
    </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Layout from '@/components/Layout.vue';
import DbNotification from '@/components/UX/db-notification.vue';
</script>

<style lang="scss">
@import 'src/assets/scss/app.scss';

.app__wrapper {
  height: calc(100vh - 80px);
  background-color: $main;
  margin: 40px;
  border: 1px solid $border;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>