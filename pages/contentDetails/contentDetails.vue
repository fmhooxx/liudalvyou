<template>
	<!-- 图文详情页面 -->
	<view>
		<!-- 头部照片区域 -->
		<view class="banner">
			<image src="../../static/images/banner.jpg" mode="aspectFit"></image>
			<view class="banner-content">
				<view class="banner-title">宁波象山：一日豪华游 东方不老岛、海山 仙子国</view>
				<view class="banner-price">¥299起/人</view>
			</view>
		</view>
		<!-- 订单相关信息 -->
		<view class="order-box">
			<view>产品编号:<text>2315452</text></view>
			<view>出发到达:<text>绍兴-宁波</text></view>
			<view>出游天数:<text>1天；跟团游</text></view>
			<view>交通方式:<text>大巴接送</text></view>
			<view>住宿标准:<text>无</text></view>
			<view>经典景点:<text>象山</text></view>
		</view>
		<!-- 线路特色 -->
		<view class="characteristic">
			<view class="characteristic-title">线路特色</view>
			<rich-text :nodes="textVal"></rich-text>
		</view>
		<!-- 行程介绍 -->
		<view class="introduce">
			<view class="introduce-title">行程介绍</view>
			<view class="introduce-text">此行程为出发地参团</view>
			<view class="introduce-content">
				<view>绍兴-宁波</view>
				<view>集合地点: <text>8:10</text></view>
				<view>集合地点: <text>诸暨市车站门口</text></view>
				<view>具体行程:</view>
				<view>【9:30】到达景点，由导游统一办理入园门票，入园后自由活动</view>
				<view>【11:00】享用团队餐：特色餐厅，享受海边鲜美海鲜大餐</view>
				<view>【12:00】自由活动，可前往海边拍照观赏【19:00】观赏夜景，享受自然夜景风光</view>
				<view>【20:00】集合返回绍兴，结束愉快旅程</view>
			</view>
		</view>
		<!-- 费用介绍 -->
		<view class="cost">
			<view class="cost-title">费用介绍</view>
			<view class="cost-contain">费用包含:</view>
			<view class="cost-content">
				<view>【用餐】象山酒店（不含早餐）</view>
				<view>【接送】大巴接送</view>
				<view>【门票】行程中注明的景点门票</view>
				<view>【导游】当地中文导游服务</view>
			</view>
			<view class="cost-tips">温馨提示:
				<text>象山的特色客栈房间数量较少，如遇旺季满房或酒店装修等不可抗力因素，线路会升级更换同类型的特色客栈，随之的附加服务（早餐与接送机相关等）也会进行调整。</text>
			</view>
			<view class="cost-contain">费用不含:</view>
			<view class="cost-content">
				<view>【购物】行程中出现的消费情况，游客自行消费买单</view>
				<view>【餐费】散客行程不含餐费，请自愿跟导购自理团餐或自备干粮</view>
			</view>
		</view>
		<!-- 购买须知区域 -->
		<view class="notice">
			<view class="notice-title">购买须知</view>
			<view class="cost-contain">退订政策</view>
			<view class="cost-content">
				<view>1.在行程开始前7天以外取消订单，退还费用100%；</view>
				<view>2.在行程开始前3天以外7天以内取消，退还费用50%；</view>
				<view>3.在行程开始前3天以内取消订单，费用不予退还。</view>
				<view>4.由于不可抗拒力因素产生退订，请联系客服，另行处理。</view>
			</view>
			<View class="cost-contain">温馨提示</View>
			<view class="cost-content">
				<view>
					【证件】请随身携带身份证，
				</view>
				<view>【其他】建议购买旅游意外保险，行程中需保护好自身人身、财产安全</view>
				<view>【衣物】现在早晚温差较大（12~15摄氏度），请带好保暖衣物，贴身衣物好选择速干材质，便于排汗预防感冒</view>
			</view>
		</view>
		<view class="guarantee">
			<image src="/static/images/baohu.png"></image>
			<view>全程预定保障，雄登康陪您安全出游</view>
		</view>
		<!-- 固定定位区域 -->
		<view class="location-copy"></view>
		<view class="location">
			<view class="location-one" @click="goMakePhoneCall">
				<view style="height: 28rpx;">
					<image src="/static/images/zixun.png"></image>
				</view>
				<view>咨询</view>
			</view>
			<button class="location-two" open-type="getUserInfo" @getuserinfo="open">立即购买</button>
		</view>
		<!-- 弹出层区域 -->
		<uniPopup ref="popup" type="center">
			<view class="box">
				<view class="box-title common">提示</view>
				<view class="box-content common">
					<view>系统检测到您未登录账号</view>
					<view>请先登录</view>
				</view>
				<view class="box-footer common" @click="goLogin">去登录</view>
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
				// 线路特色富文本的内容
				textVal: '<h1>这是富文本内容</h1>',
				// 暂时的临时数据 后期去掉
				id: '',
			}
		},
		methods: {
			// 判断是否登录了 登录了下单 未去登录页面
			open() {
				// uni.login({
				// 	provider: 'weixin',
				// 	success: (res) => {
				// 		console.log(res)
				// 		this.getUser()
				// 	}
				// });
				// 去选择出行时间 / 人数页面
				uni.navigateTo({
					url: '/pages/choice/choice'
				});
			},
			// 获取用户信息
			getUser() {
				uni.getUserInfo({
					provider: 'weixin',
					success: (res) => {
						console.log(res)
						if (res.errMsg == 'getUserInfo:ok') {
							this.$refs.popup.open()
						}
					},
					fail: err => {
						console.log(err)
					}
				});
			},
			// 去登录页面
			goLogin() {
				uni.navigateTo({
					url: '/pages/login/login'
				});
			},
			// 拨打号码
			goMakePhoneCall() {
				uni.makePhoneCall({
					phoneNumber: '17855355076' //仅为示例
				});
			}
		},
		onLoad() {}
	}
</script>

<style>
	/* 头部照片区域 */
	.banner {
		background-color: #fff;
		margin-bottom: 16rpx;
	}

	.banner image {
		height: 400rpx;
		width: 100%;
	}

	.banner-content {
		padding: 0 32rpx 24rpx 32rpx;
	}

	.banner-title {
		font-size: 36rpx;
		color: #525252;
		text-overflow: -o-ellipsis-lastline;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		-webkit-box-orient: vertical;
	}

	.banner-price {
		font-size: 40rpx;
		color: #F0C462;
		margin-top: 10rpx;
	}

	/* 订单相关信息 */
	.order-box {
		width: 100%;
		height: 254rpx;
		margin-bottom: 16rpx;
		background-color: #fff;
		box-sizing: border-box;
		padding: 26rpx 48rpx 24rpx;
	}

	.order-box view {
		font-size: 20rpx;
		color: #525252;
		margin: 7rpx 0;
	}

	.order-box text {
		font-size: 20rpx;
		color: #525252;
		margin-left: 10rpx;
	}

	/* 线路特色区域 */
	.characteristic {
		background-color: #fff;
		padding: 22rpx 50rpx;
		box-sizing: border-box;
		margin-bottom: 16rpx;
	}

	.characteristic-title {
		font-size: 30rpx;
		color: #373737;
		text-align: center;
	}

	/* 行程介绍区域 */
	.introduce {
		padding: 22rpx 50rpx;
		background-color: #fff;
		margin-bottom: 16rpx;
	}

	.introduce-title {
		font-size: 30rpx;
		color: #373737;
		text-align: center;
		margin-bottom: 10rpx;
	}

	.introduce-text {
		font-size: 18rpx;
		color: #373737;
		text-align: center;
	}

	.introduce-content {
		font-size: 20rpx;
		color: #797979;
	}

	.introduce-content view {
		margin: 8rpx;
	}

	/* 费用介绍 */
	.cost {
		padding: 22rpx 50rpx;
		background-color: #fff;
		margin-bottom: 16rpx;
	}

	.cost-title {
		text-align: center;
	}

	.cost-contain {
		color: #4EB4A0;
		font-size: 20rpx;
	}

	.cost-content {
		font-size: 20rpx;
		color: #797979;
	}

	.cost-content view {
		margin: 10rpx 0;
	}

	.cost-tips {
		font-size: 20rpx;
		color: #4D4D4D;
	}

	.cost-tips text {
		font-size: 20rpx;
		color: #797979;
	}

	/* 购买须知区域 */
	.notice {
		padding: 22rpx 50rpx;
		background-color: #fff;
		margin-bottom: 16rpx;
	}

	.notice-title {
		text-align: center;
	}

	.guarantee {
		height: 56rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.guarantee image {
		width: 30rpx;
		height: 30rpx;
		margin-right: 10rpx;
	}

	.guarantee view {
		font-size: 20rpx;
		color: #4EB4A0;
	}

	/* 固定定位区域 */
	.location-copy {
		width: 100%;
		height: 98rpx;
	}

	.location {
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 98rpx;
		line-height: 98rpx;
		display: flex;
		background-color: #fff;
		border-top: 1rpx solid #eee;
	}

	.location-one {
		width: 316rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}

	.location-one image {
		width: 46rpx;
		height: 46rpx;
	}

	.location-one>view {
		font-size: 20rpx;
		color: #737c84;
	}

	.location-two {
		text-align: center;
		width: 434rpx;
		font-size: 40rpx;
		color: #fff;
		background-color: #f0c462;
		padding: 0;
		border-radius: 0;
	}

	.location-two::after {
		width: 0;
		height: 0;
	}

	/* 弹出层区域 */
	.box {
		width: 448rpx;
		height: 300rpx;
		background-color: #fff;
		border-radius: 20rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.box-title {
		margin-top: 30rpx;
		font-size: 28rpx;
		color: #000;
		font-weight: 500;
	}

	.box-content {
		font-size: 28rpx;
		color: #acacac;
	}

	.box-footer {
		font-size: 28rpx;
		color: #5e6c96;
		font-weight: 500;
		height: 84rpx;
		line-height: 84rpx;
		border-top: 1rpx solid #ccc;
	}

	.common {
		text-align: center;
	}
</style>