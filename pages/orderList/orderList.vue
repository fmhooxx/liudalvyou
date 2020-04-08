<template>
  <!-- 订单列表页面 -->
  <view>
    <view v-if="flag">
      <!-- tab 栏区域 -->
      <view class="tab">
        <view v-for="(item) in tabsList"
              :key="item.id"
              :class="active == item.id ? 'selection': ''"
              @click="tabsChange(item.id)">{{item.text}}
        </view>
      </view>
      <!-- tab 栏下面的内容 -->
      <view class="list"
            v-for="(item, index) in 4"
            :key="index">
        <view class="list-item">
          <view class="list-left">
            <view class="left-title">宁波象山：一日豪华游 东方不老岛、海山不老岛大大我的</view>
            <view class="left-content">
              <image src="/static/images/banner.jpg"></image>
              <view class="content-text">
                <view>10人团</view>
                <view>2016-03-26 出发</view>
                <view class="price">¥299</view>
              </view>
            </view>
          </view>
          <view class="list-right">
            <view @click="refund">退款</view>
            <!-- <view v-if="active == 0 ? true : false"
                  @click="goOrderDetails">查看</view>
            <view v-if="active == 1 ? true : false"
                  @click="refund">退款</view>
            <view v-if="active == 2 ? true : false"
                  style="color: #4EB4A0;"
                  @click="goPaymentOrder">支付</view>
            <view v-if="active == 3 ? true : false"
                  class="refund">退款中</view> -->
            <image src="/static/images/right-arrow.png"></image>
          </view>
        </view>
      </view>
    </view>
    <view class="footer"
          v-else>
      <image src="/static/images/chaxun.png"></image>
      <view>没有查询到相关足迹</view>
    </view>
  </view>
</template>

<script>
export default {
  data () {
    return {
      // tab 栏数据
      tabsList: [{
        text: '已完成',
        id: 0
      },
      {
        text: '待出行',
        id: 1
      },
      {
        text: '待支付',
        id: 2
      },
      {
        text: '退款单',
        id: 3
      },
      ],
      // 默认选中项
      active: 0,
      // 控制有内容和没有内容页面之间的切换显示
      flag: true
    }
  },
  methods: {
    // 点击 tab 栏时 触发
    tabsChange (id) {
      this.active = id
    },
    // 去订单详情页面
    goOrderDetails () {
      uni.navigateTo({
        url: '/pages/orderDetails/orderDetails'
      });
    },
    // 去支付页面
    goPaymentOrder () {
      uni.navigateTo({
        url: '/pages/paymentOrder/paymentOrder'
      });
    },
    // 去我的行程
    goTrip () {
      uni.navigateTo({
        url: '/pages/trip/trip'
      });
    },
    // 去退款页面
    refund () {
      uni.navigateTo({
        url: '/pages/refund/refund'
      });
    }
  }
}
</script>

<style>
/* tab 栏区域 */
/* 选中的文字颜色 */
.selection {
  color: #4eb4a0 !important;
  border-bottom: 4rpx solid #4eb4a0 !important;
  transition: all 0.3s;
}

.tab {
  height: 90rpx;
  background-color: #fff;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.tab view {
  height: 100%;
  font-size: 28rpx;
  color: #545454;
  line-height: 90rpx;
  border-bottom: 4rpx solid transparent;
}

/* tab 栏下面的内容 */
.list {
  background-color: #fff;
  /* padding: 26rpx 20rpx; */
  margin: 8rpx 0;
}
.list-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.list-left {
  width: 80%;
  padding: 26rpx 20rpx;
}

.left-title {
  font-size: 30rpx;
  font-weight: 500;
  color: #545454;
  white-space: nowrap;
  /*一行显示*/
  overflow: hidden;
  /*超出部分隐藏*/
  text-overflow: ellipsis;
  /*用...代替超出部分*/
}

.left-content {
  display: flex;
  margin-top: 20rpx;
}

.left-content image {
  width: 135rpx;
  height: 135rpx;
  border-radius: 10rpx;
  margin-right: 30rpx;
}

.content-text view {
  font-size: 28rpx;
  color: #545454;
  font-weight: 400;
}

.content-text :nth-child(2) {
  margin: 10rpx 0;
}

.content-text .price {
  font-size: 28rpx;
  color: #d03434;
  font-weight: 400;
}

.list-right {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10rpx;
}

.list-right view {
  font-size: 28rpx;
  color: #545454;
  margin-right: 10rpx;
}

.list-right image {
  width: 25rpx;
  height: 25rpx;
}

/* 无内容区域 */
.footer {
  margin-top: 200rpx;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.footer image {
  width: 84rpx;
  height: 84rpx;
}

.footer view {
  margin-top: 40rpx;
  font-size: 28rpx;
  color: #545454;
}

.refund {
  width: 116rpx;
  height: 243rpx;
  line-height: 243rpx;
  text-align: center;
  background-color: #e8e8e8;
  font-size: 28rpx;
  color: #636363;
}
</style>