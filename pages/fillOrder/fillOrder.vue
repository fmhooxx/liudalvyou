<template>
  <!-- 填写订单页面 -->
  <view>
    <form @submit="formSubmit">
      <view class="list">
        <!-- 每个单独的盒子区域 -->
        <view class="list-item">
          <view class="item-title">游客信息</view>
          <!-- 成人区域 -->
          <view class="item-common" v-for="(item, index) in adultNum" :key="index">
            <!-- 姓名区域 -->
            <view class="uname-box">
              <view class="uname-content">
                <view>姓名</view>
                <input
                  placeholder="请输入姓名"
                  type="text"
                  placeholder-class="placeholder-common"
                  v-model="adultArray[index]"
                />
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
              <input
                placeholder="请输入身份证号"
                type="idcard"
                placeholder-class="placeholder-common"
                v-model="adultArrayId[index]"
              />
            </view>
          </view>
          <!-- 儿童区域 -->
          <view class="item-common" v-for="(item, index) in childrenNum" :key="index">
            <!-- 姓名区域 -->
            <view class="uname-box">
              <view class="uname-content">
                <view>姓名</view>
                <input
                  placeholder="请输入姓名"
                  type="text"
                  placeholder-class="placeholder-common"
                  v-model="childrenArray[index]"
                />
              </view>
              <view>儿童</view>
            </view>
            <!-- 身份证区域 -->
            <view class="card-box">
              <view>身份证</view>
              <input
                placeholder="请输入身份证号"
                type="idcard"
                placeholder-class="placeholder-common"
                v-model="childrenArrayId[index]"
              />
            </view>
          </view>
        </view>
        <!-- 预订人信息区域 -->
        <view class="reserve">
          <view class="reserve-title">预订人信息</view>
          <view>
            <view class="reserve-content">
              <view>姓名</view>
              <input
                placeholder="请输入姓名"
                type="text"
                placeholder-class="placeholder-common"
                v-model="reserve.reserveUname"
              />
            </view>
            <view class="reserve-content">
              <view>手机号</view>
              <input
                placeholder="请输入手机号"
                type="number"
                placeholder-class="placeholder-common"
                v-model="reserve.reserveTel"
              />
            </view>
            <view class="reserve-content">
              <view>备注</view>
              <input
                placeholder="备注内容"
                type="number"
                placeholder-class="placeholder-common"
                v-model="reserve.reserveRemarks"
              />
            </view>
          </view>
        </view>
        <view class="shelter"></view>
        <!-- <view class="next" @click="goConfirmationOrder">下一步</view> -->
        <button form-type="submit" class="next" @click="goConfirmationOrder">下一步</button>
      </view>
    </form>
  </view>
</template>

<script>
export default {
  data() {
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
      }
    };
  },
  methods: {
    // 成人区域表单提交的内容
    formSubmit(e) {
      // console.log(this.adultArray)
      // console.log(this.adultArrayId)
      // console.log(this.childrenArray)
      // console.log(this.childrenArrayId)
      // 成人区域
      var adult1 = [];
      for (var i = 0; i < this.adultArray.length; i++) {
        // console.log(this.adultArray[i])
        // console.log(this.adultArrayId[i])
        var a = this.adultArray[i];
        var b = this.adultArrayId[i];
        var adult2 = {
          uname: a,
          IDcard: b
        };
        adult1.push(adult2);
      }
      // 儿童区域
      var children1 = [];
      for (var i = 0; i < this.childrenArray.length; i++) {
        var a = this.childrenArray[i];
        var b = this.childrenArrayId[i];
        var children2 = {
          uname: a,
          IDcard: b
        };
        children1.push(children2);
      }
      console.log(adult1);
      console.log(children1);
    },
    // 去确认订单页面
    goConfirmationOrder() {
      if (isNaN(this.adultNum)) {
        var number = this.childrenNum;
      } else if (isNaN(this.childrenNum)) {
        var number = this.adultNum;
      } else {
        var number = this.adultNum + this.childrenNum;
      }
      var total = this.adultArray.length + this.childrenArray.length;
      if (
        total == number &&
        this.reserve.reserveUname !== "" &&
        this.reserve.reserveTel !== ""
      ) {
        uni.navigateTo({
          url: "/pages/confirmationOrder/confirmationOrder"
        });
      } else {
        uni.showToast({
          title: "请将信息填写完整",
          duration: 2000,
          icon: "none"
        });
      }
    }
  },
  onLoad(options) {
    this.adultNum = parseInt(options.adultNum);
    this.childrenNum = parseInt(options.childrenNum);
    // if (options.adultNum !== undefined && options.childrenNum !== undefined) {
    // 	var adultResult = parseInt(options.adultNum)
    // 	var childrenResult = parseInt(options.childrenNum)
    // 	for (var i = 0; i < adultResult; i++) {
    // 		var arr1 = {
    // 			num: adultResult,
    // 			id: i
    // 		}
    // 		this.adultNum.push(arr1)
    // 		// this.adultNum.push(i)
    // 	}
    // 	for (var i = 0; i < childrenResult; i++) {
    // 		var arr2 = {
    // 			num: childrenResult,
    // 			id: i
    // 		}
    // 		this.childrenNum.push(arr2)
    // 		// this.childrenNum.push(i)
    // 		console.log(this.adultNum)
    // 		console.log(this.childrenNum)
    // 	}
    // } else {
    // 	this.adultNum = 1
    // 	this.childrenNum = 1
    // }
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
  background-color: #f0c462;
  color: #fff;
  z-index: 999;
  border-radius: 0;
}

.next::after {
  border: none;
  border-radius: 0;
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