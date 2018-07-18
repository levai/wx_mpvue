<template>
  <div class="book-list" @click="goBookDeatil(booklist.bid)">
    <div class="left">
      <img :src="booklist.cover" >
    </div>
    <div class="right">
      <p class="title">{{booklist.title}}</p>
      <p class="intro">{{booklist.intro}}</p>
      <div class="foot">
        <div class="author"><span class="icon"></span><span>{{booklist.author}}</span></div>
        <div class="tags">
           {{ booklist.category }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
 export default {
   props: {
     booklist: {
       type: Array,
       default: []
     }
   },
   data () {
     return {
     }
   },
   methods: {
     goBookDeatil (bid) {
       wx.navigateTo({
         url: '../bookdetail/main?type=' + bid
       })
     }
   },
   mounted () {
   }
 }
</script>

<style lang="less" scoped>
.book-list {
  margin: 0 15px 15px;
  padding-bottom: 15px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
  &:last-child{
    margin-bottom: 0;
  }
  .left{
    img {
      display: block;
      width: 120rpx;
      height: 100%;
    }
  }
  .right {
    flex: 1;
    margin-left: 15px;
    .title {
      font-size: 14px;
    }
    .intro {
      width: 270px;
      font-size: 12px;
      color: #777;
      overflow : hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      margin: 5px 0;
      word-break:break-all;
    }
    .foot {
      display: flex;
      justify-content: space-between;
      .author {
        display: flex;
        align-items: center;
        font-size: 11px;
        color: #999;
        vertical-align: top;
        .icon {
          display: inline-block;
          width: 32rpx;
          height: 100%;
          margin-right: 5px;
          background: url(../../static/icon/icon_author.png) no-repeat center;
          background-size: 32rpx 32rpx;
        }
      }
      .tags {
        font-size: 10px;
        color: #999;
        border:1px solid #999;
        padding: 0 5px;
        margin-left: 5px;
      }
    }
  }
}
</style>
