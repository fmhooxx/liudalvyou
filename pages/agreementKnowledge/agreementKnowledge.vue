<template>
  <!-- 知识产权声明 -->
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
