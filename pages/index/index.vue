<template>
	<!-- 首页页面 -->
	<view>
		<!-- 轮播图区域 -->
		<view class="banner">
			<swiper indicator-dots indicator-color="rgba(255,255,255)" indicator-active-color="#8ed0a2" autoplay circular>
				<block v-for="(item, index) in 4" :key="index">
					<swiper-item>
						<image src="/static/images/banner.jpg" mode="scaleToFill"></image>
					</swiper-item>
				</block>
			</swiper>
		</view>
		<!-- 图文区域 -->
		<view class="content" @click="goContentDetails">
			<view class="img-box">
				<image class="content-img" src="/static/images/introduce.jpg"></image>
				<view class="content-content">
					<view class="content-title">东方不老岛、海山仙子国</view>
					<view class="content-footer">丰富而古老的她文化和渔文化孕育出了象山独特的风情</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {};
		},
		methods: {
			// 去图文详情页面
			goContentDetails() {
				uni.navigateTo({
					url: "/pages/contentDetails/contentDetails"
				});
			}
		}
	};
</script>

<style>
	page {
		background-color: #f9f9f9;
	}

	/* 轮播图区域 */
	.banner {
		padding: 0 30rpx;
	}

	.banner swiper {
		height: 400rpx;
	}

	.banner image {
		width: 100%;
		height: 100%;
		border-radius: 10rpx;
	}


	.img-box {
		margin: 22rpx auto 0;
		width: 700rpx;
		height: 500rpx;
		border-radius: 10rpx;
		/* background-color: green; */
		box-shadow: 0 9rpx 16rpx 0 rgba(234, 234, 234, 0.5);
	}

	/* 图文区域 */
	.content-img {
		height: 344rpx;
		width: 100%;
		border-radius: 10rpx 10rpx 0 0;
	}

	.content-content {
		margin-left: 20rpx;
	}

	.content-title {
		font-size: 40rpx;
		color: #525252;
		margin: 16rpx 0 8rpx 0;
		white-space: nowrap;
		/*一行显示*/
		overflow: hidden;
		/*超出部分隐藏*/
		text-overflow: ellipsis;
	}

	.content-footer {
		font-size: 22rpx;
		color: #737c84;
		white-space: nowrap;
		/*一行显示*/
		overflow: hidden;
		/*超出部分隐藏*/
		text-overflow: ellipsis;
	}
</style>