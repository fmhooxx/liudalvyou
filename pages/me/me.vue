<template>
	<!-- 个人中心页面 -->
	<view>
		<!-- 头像昵称区域 -->
		<view class="head">
			<view v-if="isnickName" class="head-box">
				<image :src="avatarUrl"></image>
				<view>{{nickName}}</view>
			</view>
			<view v-else class="head-box">
				<image src="/static/images/logo.jpg"></image>
				<view @click="open">登录/注册</view>
			</view>
		</view>
		<view class="list">
			<view @click="goOrderList">我的订单</view>
			<view @click="goTrip">我的行程</view>
			<view @click="goFootprint">我的足迹</view>
			<view @click="goSetUp">设置</view>
		</view>
		<view class="sign-out" @click="signOut" v-if="isnickName">退出登录</view>
		<!-- 登录的弹框 -->
		<uniPopup ref="popup" type="center">
			<view class="popup">
				<view class="popup-title">您还未登录</view>
				<view class="popup-text">登录后可享受完整服务</view>
				<view class="popup-img">
					<image src='/static/images/logo1.jpg'></image>
				</view>
				<view class="popup-content">
					<view @click="close">暂不登录</view>
					<button class="btn" open-type="getUserInfo" @getuserinfo="goLogin">立即登陆</button>
				</view>
			</view>
		</uniPopup>
	</view>
</template>

<script>
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	export default {
		components: {
			uniPopup
		},
		data() {
			return {
				// 用户昵称
				nickName: '',
				// 用户头像
				avatarUrl: ''
			}
		},
		methods: {
			// 打开弹窗
			open() {
				this.$refs.popup.open()
				// uni.navigateTo({
				// 	url: '/pages/login/login'
				// });
			},

			// 关闭弹窗
			close() {
				this.$refs.popup.close()
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
							uni.clearStorageSync()
							uni.showToast({
									title: '退出成功',
									duration: 2000,
									icon: 'none',
									mask: true
								});
								this.nickName = ''
								console.log(this.nickName)
							} else if (res.cancel) {
						}
					}
				})
			},
			// 去设置页面
			goSetUp() {
				uni.navigateTo({
					url: '/pages/setUp/setUp'
				});
			},
			// 登录
			goLogin() {
				uni.login({
					provider: 'weixin',
					success: (res) => {
						var code = res.code
						this.$http.post('/api/WeiXinApplet.ashx', {
							action: "Login",
							code: code
						}).then(res => {
							console.log(res)
							if (res.data.status == 'true') {
								uni.setStorageSync('openid', res.data.openid)
								uni.setStorageSync('session_key', res.data.session_key)
								uni.setStorageSync('UserId', res.data.UserId)
								if (res.data.UserId) {
									this.getUser()
								}
							} else {
								uni.showToast({
									title: '获取信息异常，请稍后重新操作！',
									duration: 2000,
									icon: 'none'
								});
							}
						})
					}
				});
			},
			// 获取用户信息
			getUser() {
				uni.getUserInfo({
					provider: 'weixin',
					success: (res) => {
						console.log(res)
						if (res.errMsg == 'getUserInfo:ok') {
							uni.setStorageSync('avatarUrl', res.userInfo.avatarUrl)
							uni.setStorageSync('nickName', res.userInfo.nickName)
							this.$http.post('/api/WeiXinApplet.ashx', {
								action: 'UserBindInfo',
								UserId: uni.getStorageSync('UserId'),
								nickName: res.userInfo.nickName,
								gender: res.userInfo.gender,
								avatarUrl: res.userInfo.avatarUrl
							}).then(res => {
								console.log(res)
								if (res.data.status == 'true') {
									uni.navigateTo({
										url: '/pages/login/login'
									});
								}
							})
						}
					}
				});
			}
		},
		computed: {
			isnickName() {
				if (this.nickName == '') {
					return false
				}
				return true
			}
		},
		onLoad() {
			this.$refs.popup.close()
			this.nickName = uni.getStorageSync('nickName')
			this.avatarUrl = uni.getStorageSync('avatarUrl')
		}
	}
</script>

<style>
	.head {
		display: flex;
		align-items: center;
		height: 200rpx;
		background-color: #fff;
	}

	.head-box {
		display: flex;
		align-items: center;
	}

	.head-box image {
		margin: 0 40rpx;
		width: 86rpx;
		height: 86rpx;
		border-radius: 50%;
		background-color: #fff;
	}

	.head-box view {
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

	/* 登录的弹框 */
	.popup {
		/* width: 500rpx;
		height: 550rpx; */
		width: 440rpx;
		height: 465rpx;
		border-radius: 10rpx;
		background-color: #fff;
		padding: 34rpx 33rpx;
		box-sizing: border-box;
	}

	.popup view {
		text-align: center;
	}

	.popup-img {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 25rpx;
	}

	.popup-img image {
		width: 180rpx;
		height: 180rpx;
		border-radius: 50%;
	}

	.popup-title {
		font-size: 30rpx;
		color: #3b3b3b;
	}

	.popup-text {
		font-size: 26rpx;
		color: #a0a0a0;
		margin: 20rpx 0 40rpx 0;
	}

	.popup-content {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.btn {
		padding: 0;
		line-height: 58rpx;
		color: #fff;
		background-color: #4eb4a0;
		font-size: 30rpx;
		width: 160rpx;
		height: 58rpx;
		line-height: 58rpx;
		text-align: center;
		border-radius: 30rpx;
		border: 1rpx solid #4eb4a0;
	}

	.btn::after {
		width: 0;
		height: 0;
	}

	.popup-content :nth-child(1) {
		color: #626262;
		background-color: #fff;
		font-size: 30rpx;
		width: 160rpx;
		height: 58rpx;
		line-height: 58rpx;
		text-align: center;
		border-radius: 30rpx;
		border: 1rpx solid #d7d7d7;
	}
</style>