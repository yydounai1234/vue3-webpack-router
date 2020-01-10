<template>
	<div class="warp">
		<div class="item">
			<RouterView></RouterView>
		</div>
		<div class="nav">
			<RouterLink to="/" class="koko">首页</RouterLink>
			<RouterLink to="/find">发现</RouterLink>
			<RouterLink to="/search">搜索</RouterLink>
			<RouterLink to="/mine">我的</RouterLink>
		</div>
	</div>
</template>

<script>
import RouterLink from './components/RouterLink.vue'
import RouterView from './components/RouterView.vue'
import { computed, ref } from 'vue'

export default {
	mounted() {
		console.log('页面加载')
	},
	components: { RouterView, RouterLink },
	setup() {
	}
}
</script>
<style>
.warp {
	height: 100%;
	display: flex;
	flex-direction: column;
}
.item {
	height: 90%;
}
.nav {
	display: flex;
	justify-content: space-around;
	align-items: center;
	color: red;
	height: 10%;
}
</style>