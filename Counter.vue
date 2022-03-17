<template>
  <div id="app">
    Clicked: {{ count }} times, count is {{ evenOrOdd }}.
    <CounterActions/>
  </div>
</template>

<script>
import CounterActions from './CounterActions.vue';
import { useCountStore } from './compositions/count';
import { toRefs } from 'vue';

export default {
  components: { CounterActions },
  setup() {
    const store = useCountStore()
    const { count, evenOrOdd } = toRefs(store);
    return {
      count,
      evenOrOdd
    }
  }
}
</script>
<style>
body {
  background-color: #000;
  color: #fff;
  font-size: 3em;
}
</style>
