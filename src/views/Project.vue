<template>
<div class="Project">
  <div class="wrapper">
    <h1>in development</h1>
  </div>

<!-- <prism-editor class="my-editor" v-model="code" :highlight="highlighter" line-numbers></prism-editor> -->

</div>

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
        code: 'console.log("Hello World") /* test */',
        lineNumbers: true
    }),
    methods: {
        highlighter(code) {
        return highlight(code, languages.js); //returns html
        }
    }
}
</script>

<style lang="scss">
.Project {
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
  line-height: 1.5;
  padding: 5px;
}

// optional
// .prism-editor__textarea:focus {
//   outline: none;
// }
</style>