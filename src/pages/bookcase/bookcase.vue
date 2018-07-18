<template>
  <div class="bookcase-page">
    <div class="userinfo">
      <div class="user-avatar">
        <open-data type="userAvatarUrl"></open-data>
      </div>
      <div class="user-nickname">
        <!-- <open-data type="userCity" lang="zh_CN"></open-data> -->
        <open-data type="userNickName"></open-data>
        <div class="info">个人主页</div>
      </div>
      <div class="icon-arrow">></div>
    </div>
  </div>
</template>

<script>
  // import config from '@/config'
  // import {
  //   post
  // } from '@/utils'
  export default {
    data () {
      return {

      }
    },
    onShow () {
      this.init()
    },
    methods: {
      init () {
        this.getBookDetail()
      },
      async getBookDetail () {
        // const bookDetailData = await post(config.addbook)
        // console.log(bookDetailData)
      }
    }
  }
</script>

<style lang="less">
  .bookcase-page {
    margin: 0 15px;
  }
  .userinfo {
    position: relative;
    display: flex;
    align-items: center;
    padding: 15px;
    border: 1px solid #eee;
    border-radius: 6px;
    box-shadow: 0px 1px 50px rgba(0, 0, 0, 0.1);
    .user-avatar {
      display: block;
      width: 80rpx;
      height: 80rpx;
      border-radius: 50%;
      margin-right: 20rpx;
      border: 2px solid #fff;
      box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
      overflow: hidden;
    }
    .user-nickname {
      font-size: 14px;
      .info {
        color: #999;
        font-size: 10px;
      }
    }
    .icon-arrow {
      position: absolute;
      right: 15px;
      font-size: 12px;
      color: #999;
    }
  }
</style>
