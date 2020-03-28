<template>
	<!-- 推荐页面 -->
	<view>
		<view class="list">
			<view class="list-item" @click="goContentDetails">
				<image src="/static/images/banner.jpg"></image>
				<view class="title">【<text>捕鱼</text>】跟随渔民感受渔村生活</view>
				<view class="content">丰富而古老的她文化和鱼文化孕育出了象山独特的风情。</view>
			</view>
			<view class="list-item" @click="goContentDetails">
				<image src="/static/images/haidiao.jpg"></image>
				<view class="title">【<text>捕鱼</text>】跟随渔民感受渔村生活</view>
				<view class="content">丰富而古老的她文化和鱼文化孕育出了象山独特的风情。</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			goContentDetails() {
				uni.navigateTo({
					url: '/pages/contentDetails/contentDetails'
				});
			}
		}
	}
</script>

<style>
	.list-item {
		width: 696rpx;
		height: 480rpx;
		margin: 0 auto 20rpx;
		border-radius: 10rpx;
		background-color: #fff;
	}

	.list-item image {
		border-radius: 10rpx 10rpx 0 0;
		width: 696rpx;
		height: 353rpx;
	}

	.list-item view {
		white-space: nowrap;
		/*一行显示*/
		overflow: hidden;
		/*超出部分隐藏*/
		text-overflow: ellipsis;
		/*用...代替超出部分*/
	}

	.title {
		font-size: 36rpx;
		color: #525252;
		margin: 10rpx 0 10rpx 33rpx;
	}

	.content {
		font-size: 22rpx;
		color: #737C84;
		margin-left: 22rpx;
	}
</style>