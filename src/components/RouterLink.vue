<template>
	<div @click="handleClickLink" class="router-normal" :class="{'router-active':active}">
		<slot></slot>
	</div>
</template>
<script>
import { inject, ref, watch } from 'vue'
export default {
	props: {
		to: {
			type: String,
			default: '/'
		},
	},
	setup(props) {
		const $routes = inject('$route')
		const active = ref(false)
		const handleClickLink = href => {
			$routes.push(props.to)
		}
		watch(() => {
			if (props.to === $routes.current.value) {
				active.value = true
			} else {
				active.value = false
			}
		})
		return {
			handleClickLink,
			active
		}
	}
}
</script>
<style scoped>
</style>