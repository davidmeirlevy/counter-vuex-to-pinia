<template>
	<div>
		<button @click="increment">+</button>
		<button @click="decrement">-</button>
		<button @click="incrementIfOdd">Increment if odd</button>
		<button @click="incrementAsync">Increment async</button>
	</div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
	setup() {
		const store = useStore()

		return {
			evenOrOdd: computed(() => store.getters.evenOrOdd),
			increment: () => store.dispatch('increment'),
			decrement: () => store.dispatch('decrement'),
			incrementIfOdd: () => store.dispatch('incrementIfOdd'),
			incrementAsync: () => store.dispatch('incrementAsync')
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
