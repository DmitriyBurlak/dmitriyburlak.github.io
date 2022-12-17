<template>
    <div class="main">
        <div className='left'>
            <div className='about-me'>
                <span>Hi all. I am</span>
                <div className='name'>{{ AboutMeStore.name }}</div>
                <div className='post'>{{ AboutMeStore.post }}</div>
            </div>
            <ul className='rows'>
                <li className='comment'>// You will be able to learn more about me and my personal page a little later</li>
                <!-- <li className='comment'>// you can also see it on my Github page</li>
                <li>const githubLink = “https://github.com/example/url”</li> -->
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useAboutMeStrore } from '../stores/about_me.store'
const AboutMeStore = useAboutMeStrore();
</script>

<style lang="scss">
@import 'src/assets/scss/colors.scss';
// 'src/css/mixins';

.main {
  width: 100%;
  max-width: 1150px;
  margin: 0 auto;
  padding: 0 25px;

  .about-me {
    color: $white;

    span {
      font-size: 18px;
    }

    .name {
      font-size: 62px;
      line-height: 70px;
    }

    .post {
      color: $blue;
      font-size: 32px;
      line-height: 50px;
    }
  }
}
.rows {
  padding-top: 80px;
  color: $white;

  .comment {
    color: $text-grey;
  }
}
</style>