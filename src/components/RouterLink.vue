<template>
	<div @click="handleRouter">
		<slot></slot>
	</div>
</template>
<script>
import { inject } from 'vue'
export default {
	props: {
		to: {
			type: String,
			default: '/'
		}
	},
	setup(props) {
		const $routes = inject('$route')
		const handleRouter = href => {
			$routes.push(props.to)
		}
		return {
			handleRouter
		}
	}
}
</script>