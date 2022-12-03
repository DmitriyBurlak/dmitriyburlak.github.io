<template>
   <div class="Contact">
      <div class="wrapper">
         <h1>in development</h1>
      </div>

      <!-- contact

      {{count}} - {{test}} 
      <br>
      <br>
      {{stores.suppliers}} -->
       
   </div>
</template> 

<script setup lang="ts">
 
import { Res } from '../test'
 
import {useElectroQueueStore} from '../stores/electro-queue.store'
// import { useCounterStore } from '../stores/count'

const stores = useElectroQueueStore()

import { ref } from 'vue'
 
    
  
// export default { 
//    setup() {
      const count = ref<number>(6)
      const test = ref('444')

      const dsdsdf: Res = {
         app: 'd4343',
         tr: 4
      }
     console.log(dsdsdf, 'dsdsdf');
     

</script>

<style lang="scss">
.Contact {
    height: 100%;
    .wrapper {
        padding: 15px 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }
}
</style>