import {computed, ref} from 'vue';
import {defineStore} from 'pinia';

export const useCountStore = defineStore('count', function () {
    const count = ref(0);
    const evenOrOdd = computed(() => count.value % 2 === 0 ? 'even' : 'odd');

    const increment = () => count.value++

    return {
        count,
        evenOrOdd,
        increment,
        decrement: () => count.value--,
    }
})
