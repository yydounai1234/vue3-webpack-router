<template>
	<component :is="routedComponent"></component>
</template>
<script>
import { computed, ref, inject } from 'vue'
export default {
	setup(props, content) {
		const $routes = inject('$route')
		const current = ref(window.location.pathname)
		const routedComponent = computed(() => {
			return $routes.routes[current.value]
		})
		const pushEffect = $routes.onpush(url => {
			current.value = url
		})
		return {
			current,
			routedComponent,
			pushEffect,
			$routes
		}
	},
	unmounted() {
		// 清除监听
		this.$routes.clear(this.pushEffect)
    },
}
</script>