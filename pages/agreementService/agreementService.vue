<template>
  <!-- 服务协议页面 -->
  <view>
    11
  </view>
</template>

<script>
import { GetSysContentByID } from '../api/agreement'
export default {
  data() {
    return {
      content: '',
    }
  },
  methods: {
    getAgreement() {
      var result = {
        action: 'GetSysContentByID',
        ID: 2,
      }
      GetSysContentByID(result).then((res) => {
        console.log(res)
        if (res.data.status == true) {
          this.content = res.data.Data
          console.log(this.content)
        }
      })
    },
  },
  onLoad() {
    this.getAgreement()
  },
}
</script>

<style></style>
