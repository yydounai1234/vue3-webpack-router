<template>
	<div v-title="'我的'" class="mine">
		<div class="card">
			<div class="detail">
				<div class="avator"></div>
				<div>登录/注册</div>
			</div>
			<div class="total">
				<div>
					<span>故事总数</span>
				</div>
				<div>
					<span>作者总数</span>
				</div>
				<div>
					<span>收藏总数</span>
				</div>
			</div>
		</div>
		<div class="card">
			<span>我的收藏</span>
		</div>
		<div class="card">
			<span>设置</span>
		</div>
	</div>
</template>
<script>
export default {
	setup() {
		return {}
	}
}
</script>
<style lang="less" scoped>
.mine {
	background: #e5e5e5;
	height: 100%;
	padding-top: 0.2rem;
	box-sizing: border-box;
}
.card {
	border-radius: 0.2rem;
	margin: 0 0.2rem 0.2rem;
	box-sizing: border-box;
	box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1),
		0 18px 20px -10px rgba(0, 0, 0, 0.03), 0 18px 20px -10px rgba(0, 0, 0, 0.03),
		0 10px 20px -10px rgba(0, 0, 0, 0.03);
	padding: 0.25rem 0;
	text-indent: 0.23rem;
	font-size: 0.22rem;
	background: white;
	.detail {
		height: 1.2rem;
		display: flex;
		align-items: center;
		.avator {
			border-radius: 50%;
			height: 1rem;
			width: 1rem;
			background: red;
			border-radius: 50%;
		}
    }
    .total{
        margin-top:0.2rem;
        display:flex;
        justify-content: space-around;
    }
}
</style>