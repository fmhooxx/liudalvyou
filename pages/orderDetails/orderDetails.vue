<template>
  <!-- 订单详情页面 -->
  <view class="confirmation-order">
    <view class="order-head">
      <!-- 头部区域 -->
      <view class="head">{{orderDetails.ProductName}}</view>
      <view class="order-common order-num">订单编号:
        <text>{{orderDetails.OrderID}}</text>
      </view>
      <view class="order-common order-num">下单时间:
        <text>{{orderDetails.AddTime}}</text>
      </view>
      <view class="order-common order-num">出发时间:
        <text>{{orderDetails.OpenDate}}</text>
      </view>
      <view class="order-common">商品编号:
        <text>{{orderDetails.chanpingbianhao}}</text>
      </view>
    </view>
    <!-- 预定人信息 -->
    <view class="order-head">
      <view class="order-title">预订人信息</view>
      <view class="order-content">
        <text>预订人</text>
        <text class="common-text">{{orderDetails.Contact}}</text>
      </view>
      <view class="order-content">
        <text>手机号</text>
        <text class="common-text">{{orderDetails.ContactPhone}}</text>
      </view>
    </view>
    <!-- 游客信息 -->
    <view class="order-head">
      <view class="order-title">游客信息</view>
      <view v-for="(item, index) in tourist"
            :key="index">
        <view class="order-content">
          <text>姓名</text>
          <text class="common-text">{{item.UserName}}</text>
        </view>
        <view class="order-content">
          <text>身份证</text>
          <text class="common-text">{{item.IDCard}}</text>
        </view>
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
        <text class="common-text">¥{{orderDetails.Amount}}</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data () {
    return {
      // 订单详情
      orderDetails: '',
      // 订单 id
      OrderID: '',
      // 游客信息
      tourist: ''
    }
  },
  methods: {
    GetProductOrderListByPage () {
      this.$http
        .post('/api/WeiXinApplet.ashx', {
          action: 'GetProductOrderListByPage',
          OrderID: this.OrderID,
          userID: uni.getStorageSync('UserId'),
        })
        .then((res) => {
          // console.log(res)
          if (res.data.status == true) {
            this.orderDetails = res.data.Data.Data[0]
            console.log(this.orderDetails)
          }
        })
    },
    GetProductOrderUserList () {
      this.$http.post('/api/WeiXinApplet.ashx', {
        action: 'GetProductOrderUserList',
        userID: uni.getStorageSync('UserId'),
        OrderID: this.OrderID
      }).then(res => {
        if (res.data.status == true) {
          this.tourist = res.data.Data
          console.log(this.tourist)
        }
      })
    }
  },
  onLoad (options) {
    this.OrderID = options.OrderID
    if (this.options == undefined) {
      // 获取详情内容
      this.GetProductOrderListByPage()
      // 获取游客信息
      this.GetProductOrderUserList()
    }
  },
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
  color: #818181;
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
