<template>
	<!-- 支付订单页面 -->
	<view>
		<view class="head">
			<view>应付金额</view>
			<view class="num">¥498</view>
		</view>
		<view class="footer" @click="goPaymentResult">微信支付</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			// 去支付结果页面
			goPaymentResult() {
				uni.navigateTo({
					url: '/pages/paymentResult/paymentResult'
				});
			}
		}
	}
</script>

<style>
	.head {
		width: 100%;
		height: 228rpx;
		padding-top: 60rpx;
		text-align: center;
		background-color: #fff;
		box-sizing: border-box;
	}

	.num {
		margin-top: 20rpx;
	}

	.head view {
		font-size: 40rpx;
		color: #525252;
	}

	.footer {
		margin: 20rpx auto;
		font-size: 40rpx;
		color: #fff;
		width: 690rpx;
		height: 85rpx;
		line-height: 85rpx;
		text-align: center;
		background-color: #f0c462;
	}
</style>