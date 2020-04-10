<script>
export default {
  onLaunch: function (options) {
    console.log(options.query.openid)
    if (options.query.openid) {
      uni.setStorageSync('ReferralUserId', options.query.openid)
    } else {
      uni.setStorageSync('ReferralUserId', 0)
    }
    // console.log('App Launch')
  },
  onShow: function () {
    // console.log('App Show')
  },
  onHide: function () {
    // console.log('App Hide')
  }
}
</script>

<style>
/*每个页面公共css */
page {
  background-color: #f9f9f9;
}
</style>