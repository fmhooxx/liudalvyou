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
      <view @click="goSetUp">设置</view>
      <view @click="goShare">分享</view>
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
            console.log(this.nickName)
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
    // 分享
    goShare () {
      if (uni.getStorageSync('UserId')) {
        uni.share({
          provider: "weixin",
          title: '分享',
          href: '/pages/me/me?UserId=' + uni.getStorageSync('UserId'),
          success: res => {
            console.log('成功', res)
          }
        })
      } else {
        this.$refs.popup.open()
      }
    }
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