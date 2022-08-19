<template>
    
   <prism-editor class="my-editor" v-model="code" :highlight="highlighter" line-numbers></prism-editor>
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
.my-editor {
    .comment {
        
        color: #607B96;
    }
    // .prism-editor__line-number {
    //     color: rgb(156, 156, 156);
    // }
}
    
</style>