<template>
	<!-- 填写订单页面 -->
	<view>
		<view class="list">
			<!-- 每个单独的盒子区域 -->
			<view class="list-item">
				<view class="item-title">游客信息</view>
				<!-- 成人区域 -->
				<view class="item-common" v-for="(item, index) in adultNum" :key="index">
					<!-- 姓名区域 -->
					<view class="uname-box">
						<view class="uname-content">
							<view>姓名</view>
							<input placeholder="请输入姓名" type="text" placeholder-class="placeholder-common" />
						</view>
						<view>成人</view>
					</view>
					<!-- 性别区域 -->
					<view class="gender">
						<view>性别</view>
						<input type="text" placeholder="请输入性别" placeholder-class="placeholder-common" />
					</view>
					<!-- 身份证区域 -->
					<view class="card-box">
						<view>身份证</view>
						<input placeholder="请输入身份证号" type="idcard" placeholder-class="placeholder-common" />
					</view>
				</view>
				<!-- 儿童区域 -->
				<view class="item-common" v-for="(item, index) in childrenNum" :key="index">
					<!-- 姓名区域 -->
					<view class="uname-box">
						<view class="uname-content">
							<view>姓名</view>
							<input placeholder="请输入姓名" type="text" placeholder-class="placeholder-common" />
						</view>
						<view>儿童</view>
					</view>
					<!-- 身份证区域 -->
					<view class="card-box">
						<view>身份证</view>
						<input placeholder="请输入身份证号" type="idcard" placeholder-class="placeholder-common" />
					</view>
				</view>
			</view>
			<!-- 预订人信息区域 -->
			<view class="reserve">
				<view class="reserve-title">预订人信息</view>
				<view>
					<view class="reserve-content">
						<view>姓名</view>
						<input placeholder="请输入姓名" type="text" placeholder-class="placeholder-common" />
					</view>
					<view class="reserve-content">
						<view>手机号</view>
						<input placeholder="请输入手机号" type="number" placeholder-class="placeholder-common" />
					</view>
					<view class="reserve-content">
						<view>房间数</view>
						<input placeholder="请输入需要预定的房间数量" type="number" placeholder-class="placeholder-common" />
					</view>
				</view>
			</view>
			<view class="shelter"></view>
			<view class="next" @click="goConfirmationOrder">下一步</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 成人人数
				adultNum: null,
				// 儿童人数
				childrenNum: null
			};
		},
		methods: {
			// 去确认订单页面
			goConfirmationOrder() {
				uni.navigateTo({
					url: '/pages/confirmationOrder/confirmationOrder'
				})
			}
		},
		onLoad(options) {
			if (options.adultNum !== undefined && options.childrenNum !== undefined) {
				this.adultNum = parseInt(options.adultNum);
				this.childrenNum = parseInt(options.childrenNum);
			} else {
				this.adultNum = 1
				this.childrenNum = 1
			}
		}
	};
</script>

<style>
	/* 每个单独的盒子区域 */
	.list-item {
		width: 100%;
		box-sizing: border-box;
	}

	.item-title {
		font-size: 36rpx;
		color: #545454;
		margin: 20rpx;
	}

	.item-common {
		background-color: #fff;
		margin-bottom: 20rpx;
		padding: 30rpx;
	}

	.placeholder-common {
		font-size: 26rpx;
		color: #8e8e8e;
	}

	/* 姓名区域 */
	.uname-box {
		display: flex;
		justify-content: space-between;
		margin: 20rpx 0;
	}

	.uname-box>view {
		font-size: 26rpx;
		color: #525252;
	}

	.uname-content {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.uname-content input {
		border: 1rpx solid #e5e5e5;
		padding: 8rpx;
	}

	.uname-content view {
		width: 34%;
		font-size: 28rpx;
		color: #525252;
	}

	/* 性别区域 */
	.gender {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.gender view {
		font-size: 28rpx;
		color: #525252;
	}

	.gender input {
		border: 1rpx solid #e5e5e5;
		padding: 8rpx;
		width: 82%;
	}

	/* 身份证区域 */
	.card-box {
		margin-top: 30rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.card-box view {
		margin-right: 12rpx;
		font-size: 28rpx;
		color: #525252;
	}

	.card-box input {
		font-size: 26rpx;
		color: #525252;
		border: 1rpx solid #e5e5e5;
		padding: 8rpx;
		width: 82%;
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
</style>