<template>
	<component :is="routedComponent"></component>
</template>
<script>
import { computed, ref, inject, watch } from 'vue'
export default {
	setup(props, content) {
		const $routes = inject('$route')
		const current = ref(window.location.pathname)
		const routedComponent = computed(() => {
			return $routes.routes[current.value]
		})
		watch(() => {
			// effect
			current.value = $routes.current.value
		})
		return {
			current,
			routedComponent,
			$routes
		}
	}
}
</script>