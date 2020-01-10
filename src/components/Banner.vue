<template>
	<div class="swiper-container">
		<div class="swiper-wrapper">
			<div class="swiper-slide">
				<img class="banner" src="../assets/images/1.jpg" alt="banner1" />
			</div>
			<div class="swiper-slide">
				<img class="banner" src="../assets/images/2.jpg" alt="banner2" />
			</div>
			<div class="swiper-slide">
				<img class="banner" src="../assets/images/3.jpg" alt="banner3" />
			</div>
		</div>
		<!-- 如果需要分页器 -->
		<div class="swiper-pagination"></div>
	</div>
</template>
<script>
import Swiper from 'swiper'
export default {
	setup() {},
	mounted() {
		var mySwiper = new Swiper('.swiper-container', {
			loop: true, // 循环模式选项

			// 如果需要分页器
			pagination: {
				el: '.swiper-pagination'
			}
		})
	}
}
</script>
<style>
.swiper-container {
	width: 100%;
	height: 200px;
}
.banner {
	width: 100%;
	height: 200px;
}
</style>