<template>
  <!-- 个人中心页面 -->
  <view>
    <!-- 头像昵称区域 -->
    <view class="head">
      <view v-if="isnickName"
            class="head-box">
        <image :src="avatarUrl"></image>
        <view>{{nickName}}</view>
      </view>
      <view v-else
            class="head-box">
        <image src="/static/images/logo.jpg"></image>
        <view @click="open">登录/注册</view>
      </view>
    </view>
    <view class="list">
      <view @click="goOrderList">我的订单</view>
      <view @click="goTrip">我的行程</view>
      <view @click="goFootprint">我的足迹</view>
      <view @click="goAgreement">用户协议</view>
      <view @click="goRecommend">推荐列表</view>
      <view @click="goSetUp">设置</view>
    </view>
    <view class="sign-out"
          @click="signOut"
          v-if="isnickName">退出登录</view>
    <!-- 登录的弹框 -->
    <login ref="login"></login>
  </view>
</template>

<script>
import login from "../../components/login/login"
export default {
  components: {
    login
  },
  data () {
    return {
      // 用户昵称
      nickName: '',
      // 用户头像
      avatarUrl: ''
    }
  },
  methods: {
    // 打开弹窗
    open () {
      // this.$ref.loginOpen()
      this.$refs.login.loginOpen()
    },
    // // 关闭弹窗
    close () {
      this.$refs.login.loginClose()
    },
    // 去我的足迹页面
    goFootprint () {
      if (uni.getStorageSync('openid')) {
        uni.navigateTo({
          url: '/pages/footprint/footprint'
        });
      } else {
        this.$refs.login.loginOpen()
      }
    },
    // 去我的行程页面
    goTrip () {
      if (uni.getStorageSync('openid')) {
        uni.navigateTo({
          url: '/pages/trip/trip'
        });
      } else {
        this.$refs.login.loginOpen()
      }
    },
    // 去我的订单页面
    goOrderList () {
      if (uni.getStorageSync('openid')) {
        uni.navigateTo({
          url: '/pages/orderList/orderList'
        });
      } else {
        this.$refs.login.loginOpen()
      }
    },
    // 去推荐列表页面
    goRecommend () {
      if (uni.getStorageSync('openid')) {
        uni.navigateTo({
          url: '/pages/recommendList/recommendList'
        });
      } else {
        this.$refs.login.loginOpen()
      }
    },
    // 去用户协议与声明页面
    goAgreement () {
      uni.navigateTo({
        url: '/pages/agreement/agreement'
      });
    },
    // 确定退出
    signOut () {
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
          } else if (res.cancel) {
          }
        }
      })
    },
    // 去设置页面
    goSetUp () {
      uni.navigateTo({
        url: '/pages/setUp/setUp'
      });
    },
  },
  computed: {
    isnickName () {
      if (this.nickName == '') {
        return false
      }
      return true
    }
  },
  onLoad () {

  },
  onShow () {
    this.nickName = uni.getStorageSync('nickName')
    this.avatarUrl = uni.getStorageSync('avatarUrl')
    // this.$refs.popup.close()
    this.$refs.login.loginClose()
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
</style>