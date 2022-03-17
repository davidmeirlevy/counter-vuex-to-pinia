import { useCountStore } from './count';

export function useComplexCount() {
	const store = useCountStore()

	return {
		incrementIfOdd: () => {
			if (store.evenOrOdd === 'odd') {
				store.increment();
			}
		},
		incrementAsync: () => {
			setTimeout(store.increment, 1000)
		}
	}
}
