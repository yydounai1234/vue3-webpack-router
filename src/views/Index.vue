<template>
	<div v-title="'首页'">
		<header>
			<figure class="logo"></figure>
		</header>
		<section class="search-bar-wrap">
			<section class="search-bar">
				<aside class="search-icon"></aside>
				<aside class="search-val">请输入搜索关键字</aside>
			</section>
		</section>
		<Banner></Banner>
		<!-- <div>人物专栏</div>
		<div>浏览时间{{time}}秒</div>-->
		<div class="index-container">
			<div class="index-items">
				<div
					class="index-item"
					v-for="item in items.slice(0,3)"
					:key="item.href"
					@click="handleGoDetail"
				>
					<div class="title">
						<span>标题：</span>
						{{item.title}}
					</div>
					<div class="content">
						<span>内容：</span>
						{{item.content}}
					</div>
					<div class="violet">
						<span>作者：</span>
						{{item.violet}}
					</div>
				</div>
			</div>
			<div class="index-items">
				<div
					class="index-item"
					v-for="item in items.slice(3,5)"
					:key="item.href"
					@click="handleGoDetail"
				>
					<div class="title">
						<span>标题：</span>
						{{item.title}}
					</div>
					<div class="content">
						<span>内容：</span>
						{{item.content}}
					</div>
					<div class="violet">
						<span>作者：</span>
						{{item.violet}}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import Banner from '../components/Banner.vue'
import { computed, reactive, inject } from 'vue'
const a = {
	components: { Banner },
	setup() {
		const $routes = inject('$route')
		const items = reactive([
			{
				title: '#818##没想到有一天我也会发818,坐标8合1,拿好板凳',
				content:
					'#818##没想到有一天我也会发818,坐标8合1,拿好板凳吃瓜,废话不多说上图...',
				violet: 'dddkeanu',
				href: '/p/6261164282?pid=127600224405&cid=0#127600224405'
			},
			{
				title: '#剑网3指尖江湖#【微信三区扬州城】818近期火遍全区的楼外楼事件',
				content:
					'关于近期微信三区捡垃圾群众日常世界吃瓜并能引起了群嘲的楼外楼300r事件,今天前线瓜地小记者江户川乱步步就来给大家整理一下~(前排代售瓜子啤酒现切西瓜~)...',
				violet: '谷雨花未落',
				href: '/p/6220304373?pid=126995334468&cid=0#126995334468'
			},
			{
				title: '#818##没想到有一天我也会发818,坐标8合1,拿好板凳',
				content:
					'#818##没想到有一天我也会发818,坐标8合1,拿好板凳吃瓜,废话不多说上图...',
				violet: 'dddkeanu',
				href: '/p/6261164282?pid=127600224405&cid=0#127600224405'
			},
			{
				title: '#剑网3指尖江湖#【微信三区扬州城】818近期火遍全区的楼外楼事件',
				content:
					'关于近期微信三区捡垃圾群众日常世界吃瓜并能引起了群嘲的楼外楼300r事件,今天前线瓜地小记者江户川乱步步就来给大家整理一下~(前排代售瓜子啤酒现切西瓜~)...',
				violet: '谷雨花未落',
				href: '/p/6220304373?pid=126995334468&cid=0#126995334468'
			},
			{
				title: '#剑网3指尖江湖#【微信三区扬州城】818近期火遍全区的楼外楼事件',
				content:
					'关于近期微信三区捡垃圾群众日常世界吃瓜并能引起了群嘲的楼外楼300r事件,今天前线瓜地小记者江户川乱步步就来给大家整理一下~(前排代售瓜子啤酒现切西瓜~)...',
				violet: '谷雨花未落',
				href: '/p/6220304373?pid=126995334468&cid=0#126995334468'
			}
		])
		const handleGoDetail = () => {
			$routes.push('/detail')
		}
		return {
			items,
			handleGoDetail
		}
	}
}
export default a
</script>
<style scoped>
.index-container {
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	margin: 0 auto;
	padding-bottom: 0.3rem;
}
.index-items {
	width: 45%;
}

.index-item {
	margin-top: 0.2rem;
	box-shadow: 0px 0px 0.1rem #d44d44;
	border-radius: 0.2rem;
	padding: 0.2rem;
}
.title,
.content,
.violet {
	margin-bottom: 0.1rem;
}
.title span {
	color: #d44d44;
	font-weight: bold;
}
.content span {
	color: #d44d44;
	font-weight: bold;
}
.violet span {
	color: #d44d44;
	font-weight: bold;
}
header {
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 0.5rem;
}
.logo {
	width: 0.5rem;
	height: 0.5rem;
	background: url('../assets/images/logo.png') no-repeat 50%;
	background-size: 0.5rem;
	margin: 0.1rem;
}
.search-bar-wrap {
	box-sizing: border-box;
	background: #fff;
	cursor: pointer;
	position: sticky;
	top: -1px;
	left: 0;
	right: 0;
	z-index: 6;
	padding: 0.12rem;
	margin-bottom: 0.1rem;
}
.search-bar {
	padding: 0.16rem 0.1rem;
	background: #f5f5f5;
	border: 1px solid #e9e9e9;
	border-radius: 1.55rem;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
	display: flex;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
}
.search-icon {
	flex-shrink: 0;
	width: 0.2rem;
	height: 0.2rem;
	margin-top: 1px;
	background: url('../assets/images/search.png') no-repeat 50%;
	background-size: 0.2rem;
}
.search-val {
	color: #b3b3b3;
	font-size: 0.16rem;
	margin-left: 0.1rem;
}
</style>