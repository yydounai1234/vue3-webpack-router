<template>
	<div class="warp">
		<div class="item">
			<RouterView></RouterView>
		</div>
		<div class="nav" v-if="current === '/' || current === '/mine'">
			<RouterLink to="/">
				<div v-if="current === '/'" class="nav-item">
					<img class="nav-img" src="./assets/images/home-active.png" alt="首页" />
					<span>首页</span>
				</div>
				<div v-else class="nav-item">
					<img v-if="current === '/'" class="nav-img" src="./assets/images/home-active.png" alt="首页" />
					<img class="nav-img" src="./assets/images/home.png" alt="首页" />
					<span>首页</span>
				</div>
			</RouterLink>
			<RouterLink to="/mine">
				<div v-if="current === '/mine'" class="nav-item">
					<img class="nav-img" src="./assets/images/mine-active.png" alt="我的" />
					<span>我的</span>
				</div>
				<div v-else class="nav-item">
					<img class="nav-img" src="./assets/images/mine.png" alt="我的" />
					<span>我的</span>
				</div>
			</RouterLink>
		</div>
	</div>
</template>

<script>
import RouterLink from './components/RouterLink.vue'
import RouterView from './components/RouterView.vue'
import { computed, ref, watch, inject } from 'vue'

export default {
	components: { RouterView, RouterLink },
	setup() {
		const current = ref('/mine')
		const $routes = inject('$route')
		watch(() => {
			current.value = $routes.current.value
		})
		return {
			current
		}
	}
}
</script>
<style scoped lang="less">
.warp {
	overflow: hidden;
	height: 100%;
	display: flex;
	flex-direction: column;
	.item {
		overflow-y: scroll;
		height: calc(100% - 52px);
	}
	.nav {
		display: flex;
		justify-content: space-around;
		align-items: center;
		font-weight: bold;
		height: 52px;
		box-shadow: 0 -11px 32px rgba(0, 0, 0, 0.08);
		/deep/ .router-normal {
			color: #9a9a9a;
		}
		/deep/ .router-active {
			color: #d44d44;
		}
		.nav-item {
			display: flex;
			flex-direction: column;
			font-size: 14px;
			width: 50vw;
			align-items: center;
			.nav-img {
				height: 27px;
			}
		}
	}
}
</style>