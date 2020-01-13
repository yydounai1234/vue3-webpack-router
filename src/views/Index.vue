<template>
	<div v-title="'首页'">
		<Banner></Banner>
		<div>人物专栏</div>
		<div>浏览时间{{time}}秒</div>
		<div class="index-container">
			<div class="index-items">
				<div class="index-item" v-for="item in items.slice(0,3)" :key="item.href">
					<div>{{item.title}}</div>
					<div>{{item.content}}</div>
					<div>{{item.violet}}</div>
				</div>
			</div>
			<div class="index-items">
				<div class="index-item" v-for="item in items.slice(3,5)" :key="item.href">
					<div>{{item.title}}</div>
					<div>{{item.content}}</div>
					<div>{{item.violet}}</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import Banner from '../components/Banner.vue'
import setTime from '../common/time'
import { computed, reactive } from 'vue'
export default {
	components: { Banner },
	setup() {
		const timeSetup = setTime()
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
		return {
			items,
			...timeSetup
		}
	}
}
</script>
<style scoped>
.index-container {
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	margin: 0 auto;
}
.index-items {
	width: 45%;
}

.index-item {
	margin-top: 10px;
	box-shadow: 0px 0px 5px rgb(92, 173, 255);
	border-radius: 10px;
	padding: 10px;
}
</style>