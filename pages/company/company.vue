<template>
	<view>
		<!-- 预订人信息区域 -->
		<view class="reserve">
			<view class="reserve-title">预订人信息</view>
			<view>
				<view class="reserve-content">
					<view>公司名</view>
					<input placeholder="请输入公司名" placeholder-class="placeholder-common" />
				</view>
				<view class="reserve-content">
					<view>姓名</view>
					<input placeholder="请输入姓名" placeholder-class="placeholder-common" />
				</view>
				<view class="reserve-content">
					<view>手机号</view>
					<input placeholder="请输入手机号" placeholder-class="placeholder-common" />
				</view>
			</view>
		</view>
		<!-- 电话区域 -->
		<view style="margin-top: 20rpx;">
			<view class="common tel" @click="goMakePhoneCall">请联系VIP客服</view>
		</view>
		<view class="shelter"></view>
		<view class="next" @click="goConfirmationOrder">下一步</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			// 去确认订单页面
			goConfirmationOrder() {
				uni.navigateTo({
					url: '/pages/confirmationOrder/confirmationOrder'
				})
			},
			// 拨打号码
			goMakePhoneCall() {
				uni.makePhoneCall({
					phoneNumber: '17855355076' //仅为示例
				});
			}
		}
	}
</script>

<style>
	/* 预订人信息区域 */
	.reserve {
		box-sizing: border-box;
		padding: 30rpx;
		background-color: #fff;
	}

	.reserve-title {
		font-size: 36rpx;
		color: #545454;
	}

	.reserve-content {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 20rpx 0;
	}

	.reserve-content input {
		width: 81%;
		padding: 8rpx;
		font-size: 26rpx;
		color: #525252;
		border: 1rpx solid #e5e5e5;
	}

	.reserve-content view {
		font-size: 26rpx;
		color: #525252;
	}

	/* 电话区域 */
	.common {
		font-size: 32rpx;
		color: #737C84;
		width: 700rpx;
		height: 98rpx;
		background-color: #fff;
		box-shadow: 0rpx 9rpx 16rpx 0rpx rgba(234, 234, 234, 0.5);
	}

	.tel {
		line-height: 98rpx;
		text-align: center;
		margin: 20rpx auto;
	}

	.next {
		position: fixed;
		bottom: 0;
		height: 98rpx;
		line-height: 98rpx;
		text-align: center;
		width: 100%;
		font-size: 36rpx;
		background-color: #F0C462;
		color: #fff;
		z-index: 1;
	}

	.shelter {
		width: 100%;
		height: 98rpx;
	}
</style>