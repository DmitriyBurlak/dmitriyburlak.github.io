<template>
  <div class="LightCode">
    <ul class="LightCode__rows">
        <li v-for="row in colRows" :key="row">{{ row }}</li>
    </ul>
    <div class="LightCode__code" ref="blockCode" v-html="code"></div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, onMounted, ref, computed, watch } from 'vue';
    const props = defineProps({
        code: String
    })

    const blockCode = ref();
    // const colRows = ref(0);
    const rows = ref([]);


    watch(() => props.code, (newVal) => {
        rows.value = blockCode.value.textContent.split("\n");
        // colRows.value = rows.value.length
        console.log(rows.value, 'watch');
        
        // colRows.value = rows.value.length;

        // rows.value.forEach((row) => {
        //     enumerationArray(row);
        // })

        // console.log(newVal, 'watch');
    });

    let colRows = computed(() => !!blockCode.value && (blockCode.value.textContent.split("\n").length))




    // let test = ref('')

    const enumerationArray = (row: string) => {
        console.log(row, row.includes('console.log'), row.indexOf('console.log'), row.replace('console','log'));

        // test.value += `
        // ${!!row ? '<span>' + row + '</span>' : ''}`
        
        // console.log(test.value, 'test.values');
        

        
    // var result = input;
    // var listItem = document.createElement('li');
    // listItem.textContent = result;
    // list.appendChild(listItem);

        // str.match(/\d+$/ig)
    }

    // onMounted(() => {
    //     rows.value = blockCode.value.textContent.split("\n");
    //     colRows.value = rows.value.length;

    //     rows.value.forEach((row) => {
    //         enumerationArray(row);
    //     })
    // })
</script>

<style lang="scss">
    .LightCode {
        display: flex;
        align-items: flex-start;

        &__code {
            white-space: pre-wrap;
            padding-left: 15px;
        }

        &__rows {
            li {
                padding: 0 10px;
            }
        }
    }
</style>