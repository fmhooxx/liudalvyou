<template>
  <!-- 退款中页面 -->
  <view>
    <!-- 头部区域 -->
    <view class="head-box">
      <view class="head-title">
        宁波象山：一日豪华游 东方不老岛、海 山仙子国，享受自然原生态
      </view>
      <view class="head-content">
        <view>
          订单编号:
          <text>202003260000</text>
        </view>
        <view>
          下单编号:
          <text>2020-03-26 14:00</text>
        </view>
        <view>
          出发日期:
          <text>2020-03-28</text>
        </view>
        <view>
          商品编号:
          <text>2345678</text>
        </view>
      </view>
    </view>
    <!-- 退款原因区域 -->
    <view class="refund">
      <view class="refund-common">退款原因</view>
      <textarea placeholder="请输入退款原因"
                placeholder-class="placeholder-refund"
                auto-height
                v-model="refundText" />
      </view>
    <!-- 退款金额 -->
    <view class="refund-price">
      <view class="refund-common">退款金额</view>
      <view class="refund-footer">
        <view>
          成人
          <text>¥299*1</text>
        </view>
        <view class="total">
          合计
          <text>¥299</text>
        </view>
      </view>
    </view>
    <!-- 固定定位区域 -->
    <view class="location-copy"></view>
    <view class="location">
      <button class="location-one" @click="goContact">
        <view style="height: 28rpx;">
          <image src="/static/images/zixun.png"></image>
        </view>
        <view>咨询</view>
      </button>
      <button class="location-two" @click="refund">立即退款</button>
    </view>
  </view>
</template>

<script>
export default {
  data () {
    return {
      // 退款原因
      refundText: '',
    }
  },
  methods: {
    refund () {
      uni.showModal({
        content: '是否确定退款?',
        confirmColor: '#4EB4A0',
        success: (res) => {
          if (res.confirm) {
            uni.navigateTo({
              url: '/pages/refundDetails/refundDetails',
            })
          } else if (res.cancel) {
          }
        },
      })
    },
    // 去客服页面
    goContact () {
      uni.switchTab({
        url: '/pages/contact/contact',
      })
    },
  },
}
</script>

<style>
/* 头部区域 */
.head-box {
  margin: 4rpx 0;
  padding: 40rpx 0 15rpx 50rpx;
  background-color: #fff;
}
.head-title {
  font-size: 36rpx;
  color: #525252;
  font-weight: 500;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
.head-content {
  margin-top: 10rpx;
}
.head-content view {
  font-size: 28rpx;
  color: #818181;
  margin: 8rpx 0;
}
/* 退款原因区域 */
.refund {
  background-color: #fff;
  padding: 17rpx 0 42rpx 50rpx;
}
.refund-common {
  font-size: 32rpx;
  color: #525252;
  font-weight: 500;
}
.placeholder-refund {
  font-size: 32rpx;
  color: #c1c1c1;
}
.refund textarea {
  font-size: 32rpx;
  line-height: 50rpx;
  width: 80%;
  margin-top: 22rpx;
  border-radius: 10rpx;
  border: 1rpx solid #bfbfbf;
  padding: 10rpx 0 10rpx 15rpx;
}
/* 退款金额 */
.refund-price {
  margin-top: 4rpx;
  background-color: #fff;
  padding: 19rpx 0 20rpx 50rpx;
}
.refund-footer view {
  font-size: 28rpx;
  color: #525252;
  margin: 8rpx 0;
}
.refund-footer text {
  margin-left: 80rpx;
}
.refund-footer .total {
  color: #d03434;
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
  padding-top: 1rpx;
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
  margin-top: 10rpx;
  width: 46rpx;
  height: 46rpx;
}
.location-one::after {
  width: 0;
  height: 0;
  border-radius: 0;
  border-bottom: none;
}
.location-one > view {
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
  border-radius: 0;
}
</style>
