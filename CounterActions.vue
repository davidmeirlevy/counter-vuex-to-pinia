<template>
  <div>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">Increment if odd</button>
    <button @click="incrementAsync">Increment async</button>
  </div>
</template>

<script>
import { useCountStore } from './compositions/count';
import { useComplexCount } from './compositions/complex-count';

export default {
  setup() {
    const { increment, decrement } = useCountStore();

    const { incrementIfOdd, incrementAsync } = useComplexCount();

    return {
      increment,
      decrement,
      incrementIfOdd,
      incrementAsync,
    }
  }
}
</script>
<style scoped>
button {
  font-size: 1em;
  margin: 0.2em;
  padding: 0.5em;
}
</style>
