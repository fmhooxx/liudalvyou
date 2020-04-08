<template>
  <!-- 退款页面 -->
  <view class="confirmation-order">
    <view class="order-head">
      <!-- 头部区域 -->
      <view class="head">宁波象山: 一日豪华游 东方不老岛、海山仙子岛，享受自然原原生态</view>
      <view class="order-common order-num">
        退款原因:
        <text class="reason">阿水答复哈是的撒很大斯达舒阿点哈偶很多事打电话你说的等哈的还是爱德华萨达萨达撒萨达萨达撒发生过大点击</text>
      </view>
      <view class="order-common">
        申请时间:
        <text>{{time}}</text>
      </view>
      <view class="order-common">
        退款金额:
        <text>¥299</text>
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
    <!-- 退款进程 -->
    <view class="refund-footer">
      <view>退款进程</view>
      <view class="refun-footer-state">退款中</view>
    </view>
    <view class="shelter"></view>
    <view class="next">
      <view class="next-one">
        <image src="/static/images/zixun.png"></image>
      </view>
      <view style="line-height: 50rpx;">联系客服</view>
    </view>
  </view>
</template>

<script>
export default {
  data () {
    return {
      // 当前的时间、日期
      time: null,
      // 支付凭证
      voucherNumber: ""
    };
  },
  methods: {
    // 去支付订单页面
    goPaymentOrder () {
      uni.navigateTo({
        url: "/pages/paymentOrder/paymentOrder"
      });
    },
    // 获取当前的日期
    getTime () {
      var date = new Date(),
        year = date.getFullYear(),
        month = date.getMonth() + 1,
        day = date.getDate(),
        hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours(),
        minute =
          date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(),
        second =
          date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
      month >= 1 && month <= 9 ? (month = "0" + month) : "";
      day >= 0 && day <= 9 ? (day = "0" + day) : "";
      var timer =
        year +
        "-" +
        month +
        "-" +
        day +
        " " +
        hour +
        ":" +
        minute +
        ":" +
        second;
      this.time = timer;

      return timer;
    },
  },
  onLoad (options) {
    this.voucherNumber = options.voucherNumber;
    this.getTime();
  }
};
</script>

<style>
/* 头部区域 */
.order-head {
  background-color: #fff;
  box-sizing: border-box;
  padding: 30rpx 30rpx 30rpx 50rpx;
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
.reason {
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
.order-common {
  margin: 10rpx 0;
  font-size: 28rpx;
  color: #818181;
}

.order-common text {
  margin-left: 30rpx;
}

.order-num {
  margin-bottom: 20rpx;
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
.refund-footer {
  padding: 15rpx 50rpx 15rpx 50rpx;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
}
.refund-footer view {
  font-size: 32rpx;
  color: #525252;
  font-weight: 500;
}
.refund-footer .refun-footer-state {
  font-size: 28rpx;
  color: #d03434;
}
.shelter {
  width: 100%;
  height: 98rpx;
}

.next {
  position: fixed;
  bottom: 0;
  height: 98rpx;
  line-height: 98rpx;
  text-align: center;
  width: 100%;
  font-size: 20rpx;
  background-color: #f0c462;
  color: #fff;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.next image {
  width: 100%;
  height: 100%;
}
.next-one {
  width: 46rpx;
  height: 46rpx;
}
</style>