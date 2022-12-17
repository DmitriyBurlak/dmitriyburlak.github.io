<template>
    <div class="About">
        <div class="wrapper">
            <h1>in development</h1>
        </div>
    </div>
   
   <!-- <prism-editor class="my-editor" v-model="code" :highlight="highlighter" line-numbers></prism-editor> -->
</template>

<script>
import { PrismEditor } from "vue-prism-editor";
import "vue-prism-editor/dist/prismeditor.min.css";
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-tomorrow.css'; // import syntax highlighting styles
export default {
    components: {
      PrismEditor
    },
    data: () => ({
        code: `/**
  * Обо мне
  * Frontend developer
  * 
  * 
  * 
  * 
  * 
  * 
  *  
  * 
  */`,
        lineNumbers: true
    }),
    methods: {
        highlighter(code) {
        return highlight(code, languages.js); //returns html
        }
    },
}
</script>

<style lang="scss">
@import 'src/assets/scss/colors.scss';

.About {
    height: 100%;
    .wrapper {
        padding: 15px 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }
}
.my-editor {
    .comment {
        
        color: $text-grey
    }
    // .prism-editor__line-number {
    //     color: rgb(156, 156, 156);
    // }
}
    
</style>