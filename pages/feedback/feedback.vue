<template>
	<!-- 意见反馈页面 -->
	<view>
		<view class="head">请写下您的宝贵意见，这将帮助我们完善产品，更好地为您服务</view>
		<view style="position: relative;">
			<textarea placeholder="请输入您的宝贵意见" placeholder-class="textClass" class="opinion" v-model="textVal"
				maxlength="200"></textarea>
			<image @click.stop="remove" v-if="isImg" class="img" src="../../static/images/quxiao.png"></image>
		</view>
		<view class="number">200字以内</view>
		<view class="footer" @click="submit">确认提交</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 多行输入框输入的内容
				textVal: ''
			}
		},
		methods: {
			// 清除多行输入框内的内容
			remove() {
				this.textVal = ''
			},
			// 完成提交并返回
			submit() {
				uni.showModal({
					content: '提交成功',
					showCancel: false,
					confirmText: '返回',
					confirmColor: '#59b9a6',
					success: (res) => {
						if (res.confirm) {
							uni.switchTab({
								url: '/pages/me/me'
							});
						}
					}
				});
			}
		},
		computed: {
			isImg() {
				if (this.textVal == '') {
					return false
				}
				return true
			}
		},
	}
</script>

<style>
	.head {
		margin-top: 8rpx;
		height: 138rpx;
		width: 100%;
		font-size: 28rpx;
		color: #545454;
		padding: 36rpx 50rpx;
		box-sizing: border-box;
		background-color: #fff;
	}

	.textClass {
		font-size: 26rpx;
		color: #c4c4c4;
	}

	.opinion {
		width: 690rpx;
		height: 386rpx;
		font-size: 26rpx;
		color: #545454;
		background-color: #fff;
		margin: 20rpx auto;
		padding: 40rpx 20rpx;
		box-sizing: border-box;
		border-radius: 10rpx;
	}

	.img {
		position: absolute;
		bottom: 20rpx;
		right: 45rpx;
		width: 38rpx;
		height: 38rpx;
	}

	.number {
		font-size: 22rpx;
		color: #bababa;
		margin-left: 52rpx;
	}

	.footer {
		margin: 28rpx auto;
		width: 690rpx;
		height: 85rpx;
		line-height: 85rpx;
		text-align: center;
		color: #fff;
		font-size: 32rpx;
		background-color: #59b9a6;
	}
</style>