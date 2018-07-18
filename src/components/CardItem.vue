<template>
  <div class="card-item">
    <div class="head">
      <div class="images">
        <img :src="bookItem.cover" mode='aspectFit'>
      </div>
      <div class="desc">
        <h2>{{bookItem.title}}</h2>
        <span class="author">{{bookItem.author}}</span>
        <div class="info">
          读过<span class="readcount">{{bookItem.readcount}}</span> | 评分<span class="score">{{bookItem.score}}</span>
        </div>
        <div class="lastChapterName">{{bookItem.lastChapterName}}</div>
      </div>
    </div>
    <p class="intro">
      {{bookItem.intro}}
    </p>
    <div v-if="bookItem.mark!=null" class="mark">
      <span v-for="mark in bookItem.mark" :key='mark'>{{mark}}</span>
    </div>
    <div v-if="bookItem.slogan!=null" class="slogan">{{bookItem.slogan}}</div>
    <div class="footer">
      <div  @click="goBookReadPage(bookItem.bid,bookItem.title)" class="btn">免费阅读<span>{{bookItem.price}}</span></div>
      <div @click="handleAddBook" class="icon" :class="{active:isAdd===true}"></div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['bookItem'],
    data () {
      return {
        isAdd: false
      }
    },
    methods: {
      handleAddBook () {
        this.isAdd = true
        console.log(1)
      },
      goBookReadPage (bid, title) {
        wx.navigateTo({
          url: '../bookreading/main?bid=' + bid + '&title=' + title
        })
      }
    }
  }
</script>

<style lang='less'>
  .card-item {
    position: relative;
    padding: 15px;
    background: #fff;
    box-shadow: 0 5px 5px solid #777;
    border-radius: 4px;
    margin-bottom: 15px;
    overflow: hidden;
    .head {
      display: flex;
      margin-bottom: 5px;
      .desc {
        margin-left: 15px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        h2 {
          font-size: 16px;
          font-weight: bold;
          margin-bottom: 20rpx;
        }
        .author {
          display: block;
          font-size: 12px;
          color: rgb(163, 160, 160);
          margin-bottom: 10rpx;
        }
        .readcount {
          color: #0B96FC;
        }
        .score {
          color: #F69D3E;

        }
        .lastChapterName {
          margin-top: 10px;
          font-size: 12px;
        }
      }
    }
    .images {
      position: relative;
      z-index: 11;
      img {
        width: 200rpx;
        height: 290rpx;
      }
    }
    .intro {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
       margin-bottom: 10px;
    }
    .mark {
      margin-bottom: 15px;
      span {
        display: inline-block;
        color: #999;
        font-size: 10px;
        border: 1px solid #999999;
        margin-right: 5rpx;
        padding: 0 5rpx;
      }
    }
    .slogan {
      font-size: 13px;
      color: #F69D3E;
      text-align: center;
      margin-bottom: 15px;
    }
    .footer {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
      .btn {
        width: 84%;
        height: 60rpx;
        line-height: 60rpx;
        text-align: center;
        color: #fff;
        border-radius: 40rpx;
        background: #0B96FC;
        span {
          font-size: 10px;
          text-decoration:line-through
        }
      }
      .icon {
        width: 60rpx;
        height:60rpx;
        margin-right: 5px;
        background-image: url(../../static/icon/icon_addbook_active.png) ;
        background-color: #eee;
        background-repeat: no-repeat;
        background-position: center;
        border-radius: 50%;
        background-size: 32rpx 32rpx;
        &.active{
          background-image: url(../../static/icon/icon_addbook.png) ;
        }
      }
    }
  }
</style>
