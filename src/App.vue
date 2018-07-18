<script>
export default {
  created () {

  },
  mounted () {
    wx.showShareMenu({
      withShareTicket: true
    })
  }
}
</script>

<style lang="less">
// 公共样式
page {
  position: relative;
  width: 100%;
  min-height: 100%;
}
* {
  box-sizing: border-box;
}
.container {
  height: 100%;
  box-sizing: border-box;
  font-size: 14px;
}

.margin {
  margin: 0 15px;
}
.padding {
  padding: 0 15px;
}
.text-primary{
  color: #0B96FC;
}
.font-primary {
  font-size:20px;
}

</style>
