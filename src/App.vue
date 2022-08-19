<template>
    <div class="app">
        <Header />
        <Layout>
            <router-view></router-view>
        </Layout>
        <Footer />
    </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Layout from './components/Layout.vue';

export default {
    components: {Header, Footer, Layout}
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

body {
  background-color: #010c15;
  font-family: 'Fira Code', monospace;
  font-size: 15px;
  color: #607B96;
}

.app {
  height: calc(100vh - 80px);
  background-color: #011627;
  margin: 40px;
  border: 1px solid #1E2D3D;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

// .layout {
//   width: 100%;
//   max-width: 1150px;
//   margin: 0 auto;
//   padding: 0 25px;
// }
</style>