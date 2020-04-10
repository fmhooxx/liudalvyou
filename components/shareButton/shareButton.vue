<template>
  <view class="share-button">
    <button class="btn"
            @click="open">
      <image class="img"
             src="/static/images/share.png"></image>
    </button>
    <login ref="login"></login>
    <uniPopup ref="popup">
      <button open-type="share"
              @click="Share">点击分享</button>
    </uniPopup>
  </view>
</template>

<script>
import login from "../../components/login/login"
import uniPopup from "@/components/uni-popup/uni-popup.vue"
export default {
  components: {
    login,
    uniPopup
  },
  data () {
    return {

    };
  },
  methods: {
    open () {
      // this.$refs.login.loginOpen()
      if (uni.getStorageSync('UserId')) {
        this.$refs.popup.open()
      } else {
        this.$refs.login.loginOpen()
      }
    },
    Share () {
      uni.share({
        provider: "weixin",
        title: '分享',
        href: '/pages/index/index?UserId=' + uni.getStorageSync('UserId'),
        success: res => {
          console.log('成功', res)
        }
      })
    }
  },
}
</script>

<style>
.share-button {
  position: fixed;
  top: 30%;
  right: 10%;
}
.btn {
  width: 60rpx;
  height: 60rpx;
  padding: 0;
}
.img {
  width: 100%;
  height: 100%;
}
.btn::after {
  width: 0;
  height: 0;
}
</style>
