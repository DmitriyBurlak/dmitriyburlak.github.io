import { defineStore } from 'pinia'

// interface CounterState {
//     count: number,
// }

export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0, name: 'Eduardo' }),
    actions: {
      increment() {
        this.count++
      },
    },
    // persist: {
    //     enabled: true
    // }
})
// export default useCounterStore
