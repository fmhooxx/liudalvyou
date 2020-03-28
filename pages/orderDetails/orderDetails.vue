<template>
	<!-- 订单详情页面 -->
	<view class="confirmation-order">
		<view class="order-head">
			<!-- 头部区域 -->
			<view class="head">宁波象山: 一日豪华游 东方不老岛、海山仙子岛，享受自然原原生态</view>
			<view class="order-common order-num">订单编号:
				<text>202003260001</text>
			</view>
			<view class="order-common order-num">下单时间:
				<text>2020-03-26 14:06</text>
			</view>
			<view class="order-common order-num">出发时间:
				<text>2020-03-28 9:06</text>
			</view>
			<view class="order-common">商品编号:
				<text>123456</text>
			</view>
		</view>
		<!-- 预定人信息 -->
		<view class="order-head">
			<view class="order-title">预订人信息</view>
			<view class="order-content">
				<text>预订人</text>
				<text class="common-text">雄登康</text>
			</view>
			<view class="order-content">
				<text>手机号</text>
				<text class="common-text">17812345689</text>
			</view>
		</view>
		<!-- 游客信息 -->
		<view class="order-head">
			<view class="order-title">游客信息</view>
			<view class="order-content">
				<text>姓名</text>
				<text class="common-text">雄登康(成人)</text>
			</view>
			<view class="order-content">
				<text>身份证</text>
				<text class="common-text">342425178564852115</text>
			</view>
		</view>
		<!-- 费用明细 -->
		<view class="order-head">
			<view class="order-title">费用明细</view>
			<view class="order-content">
				<text>成人</text>
				<text class="common-text">¥299<text>*</text>1</text>
			</view>
			<view class="order-content">
				<text>儿童</text>
				<text class="common-text">¥199<text>*</text>1</text>
			</view>
			<view class="order-content order-footer">
				<text>合计</text>
				<text class="common-text">¥498</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		methods: {

		}
	}
</script>

<style>
	/* 头部区域 */
	.order-head {
		background-color: #fff;
		box-sizing: border-box;
		padding: 30rpx;
		margin-bottom: 10rpx;
	}

	.head {
		font-size: 36rpx;
		font-weight: 500;
		color: #525252;
		margin-bottom: 20rpx;
		text-overflow: -o-ellipsis-lastline;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		-webkit-box-orient: vertical;
	}

	.order-common {
		font-size: 28rpx;
		color: #818181
	}

	.order-common text {
		margin-left: 30rpx;
	}

	.order-num {
		margin-bottom: 10rpx;
	}

	.go-data {
		height: 60rpx;
		line-height: 60rpx;
		padding-left: 30rpx;
		background-color: #fff;
		margin: 20rpx 0;
	}

	/* 相同的 title */
	.order-title {
		font-size: 32rpx;
		color: #525252;
		font-weight: 500;
		margin-bottom: 20rpx;
	}

	/* 相同的 content */
	.order-content {
		font-size: 28rpx;
		color: #525252;
		margin: 20rpx 0;
		display: flex;
		justify-content: space-between;
	}

	/* 相同的 text */
	.common-text {
		width: 82%;
	}

	.order-footer {
		color: red;
	}
</style>