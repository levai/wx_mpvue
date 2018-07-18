<template>
  <div class="container">
    <!-- 导航 S -->
    <div class="top-nav ">
      <div class="nav-content">
        <div class="left">
          <span :class="{active:index===iscur}" @click="setCur(index)"  v-for="(nav,index) in navList" :key="nav">
            {{ nav }}
          </span>
        </div>
        <div @click="handleToBookCity" class="right text-primary ">
          书城
        </div>
      </div>
    </div>
    <!-- 导航 E -->
    <!-- banner S -->
    <div class="banner">
      <img :src="bannerData.imageUrl" mode='aspectFit'>
    </div>
    <!-- banner E -->
    <!-- 推荐列表 S -->
   <div v-for="recommend in recommendList" :key="recommend">
      <Card :recommend='recommend'></Card>
   </div>
    <!-- 推荐列表 S -->
    <div class="text-footer">
      已显示全部推荐书籍
    </div>
    <div @click="handleToBookCity" class="more-books">
      去书城看看吧 >
    </div>
  </div>
</template>

<script>
import config from '@/config'
import { get } from '@/utils'
import Card from '@/components/Card'

export default {
  components: {Card},
  data () {
    return {
      iscur: 0,
      bannerData: {},
      navList: ['男生', '女生'],
      recommendList: []
    }
  },
  methods: {
    init () {
      this.getHome(this.iscur)
    },
    async getHome (type) {
      // 获取推荐页书籍 默认男频道
      const homeData = await get(config.homeUrl, { type })
      this.recommendList = [homeData.currentBooks, homeData.pastBookList]
      this.bannerData = homeData.bannerData
    },
    setCur (index) {
      this.recommendList = ''
      this.bannerData = ''
      this.iscur = index
      this.getHome(this.iscur)
    },
    handleToBookCity () {
      wx.navigateTo({
        url: '../bookcity/main?type=' + this.iscur
      })
    }
  },
  created () {
    this.init()
  }
}
</script>

<style lang='less'>
.container{
  padding-top: 80rpx;
  background: #F7FAFA;
}
.top-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #fff;
  box-shadow: 0 1px 3px #eee;
  z-index: 111;
  .nav-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 90rpx;
    padding: 0 15px;
    .left {
      span {
        display: inline-block;
        color: #666464;
        margin-right: 15px;
        &.active {
          font-size: 16px;
          color: #333;
          border-bottom: 2px solid #0B96FC;
        }
      }
    }
  }
}
.banner {
  padding: 0 15px;
  img {
    width: 100%;
    height: 210rpx;
  }
}
.text-footer {
  font-size: 10px;
  color: #999;
  text-align: center;
  margin-bottom: 10px;
}
.more-books {
  font-size: 10px;
  color: #0B96FC;
  text-align: center;
  margin-bottom: 15px;
}
</style>
