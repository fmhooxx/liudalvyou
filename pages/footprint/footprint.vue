<template>
	<!-- 我的足迹页面 -->
	<view>
		<view class="list" v-if="flag">
			<view class="list-left">
				<view class="left-title">宁波象山：一日豪华游 东方不老岛、海山不老岛大大我的</view>
				<view class="left-content">
					<image src="/static/images/banner.jpg"></image>
					<view class="content-text">
						<view>10人团</view>
						<view>2016-03-26 出发</view>
						<view>编号: <text>202003260012</text></view>
					</view>
				</view>
			</view>
			<view class="price">¥299</view>
		</view>
		<view class="footer" v-else>
			<image src="/static/images/chaxun.png"></image>
			<view>没有查询到相关足迹</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 控制有内容和没有内容页面之间的切换显示
				flag: true
			}
		},
		methods: {

		}
	}
</script>

<style>
	.list {
		background-color: #fff;
		padding: 26rpx 20rpx;
		margin: 8rpx 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #fff;
	}

	.list-left {
		width: 84%;
	}

	.left-title {
		font-size: 30rpx;
		font-weight: 500;
		color: #545454;
		white-space: nowrap;
		/*一行显示*/
		overflow: hidden;
		/*超出部分隐藏*/
		text-overflow: ellipsis;
		/*用...代替超出部分*/
	}

	.left-content {
		display: flex;
		margin-top: 20rpx;
	}

	.left-content image {
		width: 135rpx;
		height: 135rpx;
		border-radius: 10rpx;
		margin-right: 30rpx;
	}

	.content-text view {
		font-size: 28rpx;
		color: #545454;
		font-weight: 400;
	}

	.content-text :nth-child(2) {
		margin: 10rpx 0;
	}

	.price {
		font-size: 28rpx;
		color: #545454;
		font-weight: 400;
		margin-left: 20rpx;
		flex: 1;
	}

	.footer {
		margin-top: 200rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.footer image {
		width: 84rpx;
		height: 84rpx;
	}

	.footer view {
		margin-top: 40rpx;
		font-size: 28rpx;
		color: #545454;
	}
</style>