<template>
    <div class="main">
        <div className='left'>
            <div className='about-me'>
                <span>Hi all. I am</span>
                <div className='name'>{{$store.state.name}}</div>
                <div className='post'>> Front-end developer</div>
            </div>
            <ul className='rows'>
                <li className='comment'>// complete the game to continue</li>
                <li  className='comment'>// you can also see it on my Github page</li>
                <li>const githubLink = “https://github.com/example/url”</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            test: 'test'
        }
    }

}
</script>

<style lang="scss">

.main {
  width: 100%;
  max-width: 1150px;
  margin: 0 auto;
  padding: 0 25px;
}

.about-me {
  color: #E5E9F0;
}

.about-me span {
  font-size: 18px;
}

.about-me .name {
  font-size: 62px;
  line-height: 70px;
}

.about-me .post {
  color: #4D5BCE;
  font-size: 32px;
  line-height: 50px;
}

.rows {
  padding-top: 80px;
  color: #E5E9F0;
}

.rows .comment {
  color: #607B96;
}
</style>