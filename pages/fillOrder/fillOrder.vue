<template>
  <!-- 填写订单页面 -->
  <view>
    <form>
      <view class="list">
        <!-- 每个单独的盒子区域 -->
        <view class="list-item">
          <view class="item-title">游客信息</view>
          <!-- 成人区域 -->
          <view class="item-common"
                v-for="(item, index) in adultNum"
                :key="index">
            <!-- 姓名区域 -->
            <view class="uname-box">
              <view class="uname-content">
                <view>姓名</view>
                <input placeholder="请输入姓名"
                       type="text"
                       placeholder-class="placeholder-common"
                       v-model="adultArray[index]" />
              </view>
              <view>成人</view>
            </view>
            <!-- 性别区域 -->
            <!-- <view class="gender">
							<view>性别</view>
							<input type="text" placeholder="请输入性别" placeholder-class="placeholder-common" :name="index" />
            </view>-->
            <!-- <view class="gender-box">
							<view>请选择性别</view>
							<radio-group @change="radioChane">
								<label class="gender">
									<view v-for="(item, index) in gender" :key="index">
										<radio color="#4EB4A0" :value="item.id" />
										<text>{{item.text}}</text>
									</view>
								</label>
							</radio-group>
            </view>-->
            <!-- 身份证区域 -->
            <view class="card-box">
              <view>身份证</view>
              <input placeholder="请输入身份证号"
                     type="idcard"
                     placeholder-class="placeholder-common"
                     v-model="adultArrayId[index]" />
            </view>
          </view>
          <!-- 儿童区域 -->
          <view class="item-common"
                v-for="(item, index) in childrenNum"
                :key="index">
            <!-- 姓名区域 -->
            <view class="uname-box">
              <view class="uname-content">
                <view>姓名</view>
                <input placeholder="请输入姓名"
                       type="text"
                       placeholder-class="placeholder-common"
                       v-model="childrenArray[index]" />
              </view>
              <view>儿童</view>
            </view>
            <!-- 身份证区域 -->
            <view class="card-box">
              <view>身份证</view>
              <input placeholder="请输入身份证号"
                     type="idcard"
                     placeholder-class="placeholder-common"
                     v-model="childrenArrayId[index]" />
            </view>
          </view>
        </view>
        <!-- 预订人信息区域 -->
        <view class="reserve">
          <view class="reserve-title">预订人信息</view>
          <view>
            <view class="reserve-content">
              <view>姓名</view>
              <input placeholder="请输入姓名"
                     type="text"
                     placeholder-class="placeholder-common"
                     v-model="reserve.reserveUname" />
            </view>
            <view class="reserve-content">
              <view>手机号</view>
              <input placeholder="请输入手机号"
                     type="number"
                     placeholder-class="placeholder-common"
                     v-model="reserve.reserveTel" />
            </view>
            <view class="reserve-content">
              <view>备注</view>
              <input placeholder="备注内容"
                     type="number"
                     placeholder-class="placeholder-common"
                     v-model="reserve.reserveRemarks" />
            </view>
          </view>
        </view>
        <view class="shelter"></view>
        <!-- <view class="next" @click="goConfirmationOrder">下一步</view> -->
        <view form-type="submit"
              class="next">
          <view class="next-price">¥{{amountTotal}}</view>
          <view class="next-text"
                @click="goConfirmationOrder">支付</view>
        </view>
      </view>
    </form>
  </view>
</template>

<script>
export default {
  data () {
    return {
      // 成人人数
      adultNum: null,
      // 儿童人数
      childrenNum: null,
      // 成人区域的姓名输入框的输入内容
      adultArray: [],
      // 成人区域的身份证输入框的输入内容
      adultArrayId: [],
      // 儿童区域的姓名输入框的输入内容
      childrenArray: [],
      // 儿童区域的身份证输入框的输入内容
      childrenArrayId: [],
      // 预订人信息
      reserve: {
        // 姓名
        reserveUname: "",
        // 手机号
        reserveTel: "",
        // 备注
        reserveRemarks: ""
      },
      // 传递过来的商品的 id
      ProductId: "",
      // 传递过来的 日期
      fulldate: "",
      // 支付凭证
      voucherNumber: "",
      // 订单 id
      orderId: '',
      // 用户的 openid
      openid: '',
      // 订单总额
      amountTotal: ''
    };
  },
  methods: {
    // 提交表单
    formSubmit (e) {
      // console.log(adultArrayStr);
      // console.log(adultArrayIdStr);
      // console.log(childrenArrayStr);
      // console.log(childrenArrayIdStr);
      // 成人姓名
      var adultArrayStr = this.adultArray.join(",");
      // 成人身份证
      var adultArrayIdStr = this.adultArrayId.join(",");
      // 儿童姓名
      var childrenArrayStr = this.childrenArray.join(",");
      // 儿童身份证
      var childrenArrayIdStr = this.childrenArrayId.join(",");
      var unames = adultArrayStr + "," + childrenArrayStr;
      var Ids = adultArrayIdStr + "," + childrenArrayIdStr;
      this.$http
        .post("/api/WeiXinApplet.ashx", {
          action: "SubmmitOrder",
          productId: this.ProductId,
          openDate: this.fulldate,
          UserNames: unames,
          IDCards: Ids,
          Contact: this.reserve.reserveUname,
          ContactPhone: this.reserve.reserveTel,
          Remark: this.reserve.reserveRemarks,
          userID: uni.getStorageSync('UserId'),
          minUserCount: this.childrenNum,
          maxUserCount: this.adultNum
        })
        .then(res => {
          // console.log(res)
          if (res.data.status == "true") {
            this.voucherNumber = res.data.voucherNumber;
            // 调用支付接口
            this.payment()
          }
        });
    },
    // 去确认订单页面
    goConfirmationOrder () {
      // for (var i = 0; i < this.adultArrayId.length; i++) {
      //   console.log(this.adultArrayId[i].length)
      // }
      if (this.adultNum != 0) {
        var number = this.adultNum;
      } else if (this.childrenNum != 0) {
        var number = this.childrenNum;
      } else {
        var number = this.adultNum + this.childrenNum;
      }
      var total = this.adultArray.length + this.childrenArray.length;
      if (
        total == number &&
        this.reserve.reserveUname !== "" &&
        this.reserve.reserveTel.length == 11
      ) {
        this.formSubmit()
      } else if (this.reserve.reserveTel.length != 11) {
        uni.showToast({
          title: "请输入十一位的手机号码",
          duration: 2000,
          icon: "none"
        });
      } else {
        uni.showToast({
          title: "请将信息填写完整",
          duration: 2000,
          icon: "none"
        });
      }
    },
    payment () {
      this.$http.post('/api/WeiXinPay.ashx', {
        action: 'Pay',
        voucherNumber: this.voucherNumber,
        OpenId: this.openid
      }).then(res => {
        uni.requestPayment({
          provider: 'wxpay',
          timeStamp: res.data.timeStamp,
          nonceStr: res.data.nonceStr,
          package: 'prepay_id=' + res.data.prepay_id,
          signType: 'MD5',
          paySign: res.data.paySign,
          success: (res) => {
            console.log(res)
            if (res.errMsg == 'requestPayment:ok') {
              uni.reLaunch({
                url: '/pages/paymentResult/paymentResult'
              })
            } else {
              console.log('支付失败')
            }
          },
          fail: (err) => {
            uni.showToast({
              title: '支付失败',
              duration: 2000,
              icon: 'none',
              mask: true,
              success: () => {
                setTimeout(() => {
                  uni.reLaunch({
                    url: '/pages/orderList/orderList?active=' + 0
                  })
                }, 1500)
              }
            });
          }
        });
      })
    }
  },
  onLoad (options) {
    this.adultNum = parseInt(options.adultNum);
    this.childrenNum = parseInt(options.childrenNum);
    console.log(this.adultNum)
    console.log(this.childrenNum)
    this.ProductId = options.ProductId;
    this.fulldate = options.fulldate;
    this.openid = uni.getStorageSync('openid')
    this.amountTotal = options.amountTotal
  }
};
</script>

<style>
/* 每个单独的盒子区域 */
.list-item {
  width: 100%;
  box-sizing: border-box;
}

.item-title {
  font-size: 36rpx;
  color: #545454;
  margin: 20rpx;
}

.item-common {
  background-color: #fff;
  margin-bottom: 20rpx;
  padding: 30rpx;
}

.placeholder-common {
  font-size: 26rpx;
  color: #8e8e8e;
}

/* 姓名区域 */
.uname-box {
  display: flex;
  justify-content: space-between;
  margin: 20rpx 0;
}

.uname-box > view {
  font-size: 26rpx;
  color: #525252;
}

.uname-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.uname-content input {
  border: 1rpx solid #e5e5e5;
  padding: 8rpx;
}

.uname-content view {
  width: 34%;
  font-size: 28rpx;
  color: #525252;
}

/* 性别区域 */
.gender-box {
  display: flex;
  font-size: 28rpx;
  color: #525252;
}

.gender-box > view {
  margin-right: 40rpx;
}

.gender {
  display: flex;
  align-items: center;
}

.gender view {
  font-size: 28rpx;
  color: #525252;
}

.gender input {
  border: 1rpx solid #e5e5e5;
  padding: 8rpx;
  width: 82%;
  font-size: 26rpx;
  color: #525252;
}

.gender text {
  margin: 0 10rpx;
}

/* 身份证区域 */
.card-box {
  margin-top: 30rpx;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card-box view {
  margin-right: 12rpx;
  font-size: 28rpx;
  color: #525252;
}

.card-box input {
  font-size: 26rpx;
  color: #525252;
  border: 1rpx solid #e5e5e5;
  padding: 8rpx;
  width: 82%;
}

.next {
  position: fixed;
  bottom: 0;
  height: 98rpx;
  line-height: 98rpx;
  text-align: center;
  width: 100%;
  font-size: 36rpx;
  background-color: #fff;
  /* background-color: #f0c462; */
  /* color: #fff; */
  color: #525252;
  z-index: 999;
  border-radius: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1rpx solid #eee;
  padding: 0;
}
.next > view {
  width: 50%;
}
.next::after {
  border: none;
  border-radius: 0;
}
.next-price {
  font-size: 36rpx;
  color: red;
  border-right: 1rpx solid #eee;
}
.next-text {
  background-color: #f0c462;
  color: #fff;
  font-size: 36rpx;
}
.shelter {
  width: 100%;
  height: 98rpx;
}

/* 增加 */
.add-reduce {
  display: flex;
  justify-content: flex-end;
}

.reduce {
  margin-top: 20rpx;
}

.add {
  margin: 20rpx 30rpx;
}

.reduce .reduce-text {
  color: red;
  border: 2rpx solid red;
}

.add-reduce-text {
  font-size: 28rpx;
  color: #4eb4a0;
  width: 100rpx;
  height: 50rpx;
  line-height: 50rpx;
  border: 2rpx solid #4eb4a0;
  text-align: center;
  border-radius: 10rpx;
}

/* 预订人信息区域 */
.reserve {
  box-sizing: border-box;
  padding: 30rpx;
  background-color: #fff;
}

.reserve-title {
  font-size: 36rpx;
  color: #545454;
}

.reserve-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20rpx 0;
}

.reserve-content input {
  width: 81%;
  padding: 8rpx;
  font-size: 26rpx;
  color: #525252;
  border: 1rpx solid #e5e5e5;
}

.reserve-content view {
  font-size: 26rpx;
  color: #525252;
}
</style>