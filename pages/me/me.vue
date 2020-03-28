<template>
	<!-- 个人中心页面 -->
	<view>
		<!-- 头像昵称区域 -->
		<view class="head">
			<image src="/static/images/logo.jpg"></image>
			<view @click="goLogin">登录/注册</view>
		</view>
		<view class="list">
			<view @click="goOrderList">我的订单</view>
			<view @click="goTrip">我的行程</view>
			<view @click="goFootprint">我的足迹</view>
			<view @click="goSetUp">设置</view>
		</view>
		<view class="sign-out" @click="signOut">退出登录</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		methods: {
			// 去登录页面
			goLogin() {
				uni.navigateTo({
					url: '/pages/login/login'
				});
			},
			// 去我的足迹页面
			goFootprint() {
				uni.navigateTo({
					url: '/pages/footprint/footprint'
				});
			},
			// 去我的行程页面
			goTrip() {
				uni.navigateTo({
					url: '/pages/trip/trip'
				});
			},
			// 去我的订单页面
			goOrderList() {
				uni.navigateTo({
					url: '/pages/orderList/orderList'
				});
			},
			// 确定退出
			signOut() {
				uni.showModal({
					content: '是否退出登录',
					confirmColor: '#59b9a6',
					success: (res) => {
						if (res.confirm) {
							console.log('用户点击确定');
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				})
			},
			// 去设置页面
			goSetUp() {
				uni.navigateTo({
					url: '/pages/setUp/setUp'
				});
			}
		}
	}
</script>

<style>
	.head {
		height: 200rpx;
		display: flex;
		align-items: center;
		background-color: #fff;
	}

	.head image {
		margin: 0 40rpx;
		width: 86rpx;
		height: 86rpx;
		border-radius: 50%;
		background-color: #fff;
	}

	.head>view {
		font-size: 28rpx;
		color: #545454;
	}

	.list {
		margin-top: 20rpx;
		background-color: #fff;
	}

	.list view {
		width: 100%;
		height: 110rpx;
		line-height: 110rpx;
		border-bottom: 1rpx solid #f5f5f5;
		padding-left: 40rpx;
		font-size: 28rpx;
		color: #545454;
	}

	.sign-out {
		width: 100%;
		height: 110rpx;
		line-height: 110rpx;
		text-align: center;
		color: #5e5e5e;
		font-size: 28rpx;
		margin-top: 24rpx;
		background-color: #fff;
	}
</style>