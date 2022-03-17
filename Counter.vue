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
