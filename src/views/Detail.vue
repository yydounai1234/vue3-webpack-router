<template>
	<!-- 最外层使用div包裹只要是防止编辑器警告 -->
	<div v-title="'详情'" class="detail">
		<div>
			<div v-html="content"></div>
		</div>
		<div class="bar">
			<div class="items">
				<div class="item" @click="handleShareDetail">
					<span>分享</span>
					<i class="icon iconfont icon-share_icon"></i>
				</div>
				<div class="item" @click="handleCollectDetail" :class="{'red':isShare}">
					<span>{{isShare? '取消收藏' : '收藏'}}</span>
					<i class="collect icon iconfont icon-shoucang"></i>
				</div>
			</div>
			<div class="items items2">
				<i class="time icon iconfont icon-shijian"></i>
				<span>{{computedTime}}</span>
			</div>
		</div>
	</div>
</template>
<script>
import setTime from '../common/time'
import { ref, computed } from 'vue'
export default {
	setup() {
		const time = setTime()
		const isShare = ref(false)
		const handleShareDetail = () => {
			console.log('分享页面')
		}
		const handleCollectDetail = () => {
			console.log('收藏页面')
			isShare.value = !isShare.value
		}
		const content = `&#x4E3A;&#x4E86;&#x4E0D;&#x8BA9;&#x961F;&#x53CB;&#x66DD;&#x5149; &#x628A;&#x961F;&#x53CB;&#x6253;&#x7801;&#x4E86;&#x3002;&#x81EA;&#x5DF1;&#x7684;&#x5C31;&#x4E0D;&#x6253;&#x4E86; &#x968F;&#x4FBF;&#x6765;&#x5BF9;&#x7EBF;&#x3002;&#x4E3B;&#x670D;&#x837B;&#x82B1; &#x6E29;&#x5BB8; &#x5341;&#x4E00;&#x70B9;&#x56DB;&#x5341;&#x5DE6;&#x53F3;&#x5F00;&#x7684;&#x767D;&#x5E1D;&#x5B97;&#x5E08;&#x4E0A;&#x4E0B; &#x597D;&#x4E0D;&#x5BB9;&#x6613;&#x7EC4;&#x9F50;&#x4E86; &#x6253;&#x4E86;&#x4E2A;&#x5B97;&#x5E08;&#x4E0A; &#x8BF4;&#x4E0B;&#x8BFE;&#x53BB;&#x5403;&#x996D;&#x4E86; &#x5C31;&#x9000;&#x7EC4; &#x8FD8;&#x5728;&#x4E16;&#x754C;&#x4E0A;&#x79C0;&#x4E00;&#x6CE2;&#x81EA;&#x5DF1;&#x4E0B;&#x4E86;&#x8BA9;&#x6211;&#x4EEC;&#x7EE7;&#x7EED;&#x6253;&#xFF1F;&#xFF1F;&#xFF1F;&#xFF1F;&#x8DF3;&#x8F66; OK&#x3002;&#x4F5C;&#x4E3A;&#x961F;&#x957F;&#x8DF3;&#x8F66; OK&#x3002; &#x4F60;&#x8FD8;&#x5728;&#x4E16;&#x754C;&#x79C0;&#x5565;&#x5462; &#x8DF3;&#x8F66;&#x5F88;&#x9A84;&#x50B2;&#xFF1F;&#x771F;&#x7684;&#x670D;&#x4E86;&#x3002; &#x56FE;&#x5728;&#x4E0B;&#x9762; &#x8BF7;&#x5404;&#x4F4D;&#x907F;&#x96F7;&#x3002;<img class="BDE_Image" src="https://imgsa.baidu.com/forum/w%3D580/sign=265c33be07fa513d51aa6cd60d6c554c/cc3d1d8a4710b9127f2f509cccfdfc0393452297.jpg" size="1672305" changedsize="true" width="560" height="410"><img class="BDE_Image" src="https://imgsa.baidu.com/forum/w%3D580/sign=f70c5e437d8b4710ce2ffdc4f3cfc3b2/b72c55f23a87e9507887550e1f385343faf2b4e9.jpg" size="1648492" changedsize="true" width="560" height="408"><img class="BDE_Image" src="https://imgsa.baidu.com/forum/w%3D580/sign=e43d5a45703e6709be0045f70bc69fb8/2401bb2b2834349b4080c8e7c6ea15ce37d3beff.jpg" size="1624906" changedsize="true" width="560" height="407"><img class="BDE_Image" src="https://imgsa.baidu.com/forum/w%3D580/sign=4686393cd2c451daf6f60ce386fc52a5/a068c2355982b2b78df198a63eadcbef76099b17.jpg" size="1412955" changedsize="true" width="560" height="420">            <img class="BDE_Smiley" width="30" height="30" changedsize="false" src="https://gsp0.baidu.com/5aAHeD3nKhI2p27j8IqW0jdnxx1xbK/tb/editor/images/client/image_emoticon66.png">&#x907F;&#x96F7;&#x8D34;up&#x4E00;&#x4E0B;            &#x4E0D;&#x77E5;&#x9053;&#x8DDF;9&#x697C;&#x4E00;&#x6837;&#x60F3;&#x7684;&#x4EBA;&#x6709;&#x591A;&#x5C11;&#x3002;&#x8FD9;&#x5C31;&#x662F;&#x91CE;&#x72D7;&#x54AC;&#x4F24;&#x4E86;&#x6211; &#x6211;&#x63D0;&#x9192;&#x4E00;&#x4E0B;&#x8857;&#x574A;&#x90BB;&#x5C45;&#x7ED5;&#x9053;&#x8D70; &#x4E8B;&#x60C5;&#x662F;&#x5C0F;&#x3002;&#x4F55;&#x5FC5;&#x7B49;&#x5230;&#x6700;&#x70E6;&#x7684;&#x90A3;&#x79CD;&#x54AC;&#x6B7B;&#x4E86;&#x4EBA;&#x7684;&#x60C5;&#x51B5; &#x518D;&#x7AD9;&#x51FA;&#x6765;&#x8BF4; &#x54E6;&#x8FD9;&#x72D7;&#x6211;&#x89C1;&#x8FC7;&#x3002;&#x5360;&#x7528;&#x5404;&#x4F4D;&#x770B;&#x5E16;&#x65F6;&#x95F4;&#x662F;&#x6211;&#x4E0D;&#x5BF9; &#x4F46;&#x662F;&#x540C;&#x670D;&#x770B;&#x89C1;&#x4E86; &#x7ED5;&#x9053;&#x4E00;&#x4E0B; &#x603B;&#x662F;&#x89C4;&#x907F;&#x98CE;&#x9669;&#x3002;`
		return {
			content,
			isShare,
			handleShareDetail,
			handleCollectDetail,
			...time
		}
	}
}
</script>
<style lang="less">
.detail {
	width: 100%;
	padding: 20px;
	box-sizing: border-box;
	.BDE_Image {
		width: 100%;
		height: auto;
		margin: 5px 0 10px;
	}
	.bar {
		position: fixed;
		padding: 0 20px;
		box-sizing: border-box;
		display: flex;
		justify-content: space-around;
		align-items: center;
		font-weight: bold;
		bottom: 0;
		left: 0;
		box-shadow: 0 -11px 32px rgba(0, 0, 0, 0.08);
		height: 52px;
		width: 100%;
		.items {
			display: flex;
			line-height: 52px;
			align-items: center;
			justify-content: flex-start;
			width: 50%;
			.item {
				display: flex;
				align-items: center;
				margin-right: 20px;
				i {
					margin-left: 5px;
					color: grey;
				}
				.collect {
					font-size: 0.3rem;
				}
			}
			.red {
				color: #d44d44;
				i {
					color: #d44d44;
				}
			}
		}
		.items2 {
			justify-content: flex-end;
			.time {
				padding: 0 5px 0 3px;
			}
		}
	}
}
</style>