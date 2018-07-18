<template>
  <div v-if="isShow" class="loading" >
    <div v-if="isIcon" class="icon-loading"></div>{{loadingTitle}}
  </div>
</template>

<script>
  export default {
    props: {
      loadingTitle: {
        type: String,
        default: '加载中...'
      },
      isShow: {
        type: Boolean,
        default: true
      },
      isIcon: {
        type: Boolean,
        default: true
      }
    }
  }
</script>

<style lang="less" scoped>
.loading {
  width: 100%;
  background: #fff;
  display: flex;
  justify-content: center;
  font-size: 12px;
  color: #999;
  padding: 10px 0;
  .icon-loading{
    display: inline-block;
    margin-right: 5px;
    width: 32rpx;
    height: 32rpx;
    background: url(../../static/icon/icon_loading.png) no-repeat center;
    background-size: 32rpx 32rpx;
    animation: mymove 1s infinite linear ;
  }
}
@keyframes mymove
  {
    from {transform: rotate(0);}
    to {transform: rotate(360deg);}
  }
</style>
