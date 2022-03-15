<template>
	<div id="app">
		Clicked: {{ count }} times, count is {{ evenOrOdd }}.
		<CounterActions/>
	</div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import CounterActions from './CounterActions.vue';

export default {
	components: { CounterActions },
	setup() {
		const store = useStore()

		return {
			count: computed(() => store.state.count),
			evenOrOdd: computed(() => store.getters.evenOrOdd),
			increment: () => store.dispatch('increment'),
			decrement: () => store.dispatch('decrement'),
			incrementIfOdd: () => store.dispatch('incrementIfOdd'),
			incrementAsync: () => store.dispatch('incrementAsync')
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
