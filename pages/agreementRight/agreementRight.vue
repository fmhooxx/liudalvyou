<template>
  <!-- 权利声明页面 -->
  <view>
    <shareButton></shareButton>
  </view>
</template>

<script>
import shareButton from '../../components/shareButton/shareButton'
import { GetSysContentByID } from '../api/agreement'
export default {
  components: {
    shareButton,
  },
  data() {
    return {
      content: '',
    }
  },
  methods: {
    getAgreement() {
      var result = {
        action: 'GetSysContentByID',
        ID: 1,
      }
      GetSysContentByID(result).then((res) => {
        console.log(res)
        if (res.data.status == true) {
          this.content = res.data.Data
        }
      })
    },
  },
  onLoad() {
    // 获取权利声明页面
    this.getAgreement()
  },
}
</script>

<style></style>
