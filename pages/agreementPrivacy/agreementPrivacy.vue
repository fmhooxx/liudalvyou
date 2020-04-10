<template>
  <!-- 隐私政策页面 -->
  <view>
    1
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
        ID: 3,
      }
      GetSysContentByID(result).then((res) => {
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
