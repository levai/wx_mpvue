<template>
  <div class="book-list">
    <div class="left">
      <img :src="img" >
    </div>
    <div class="right">
      <p class="title">{{booklist.title}}</p>
      <p class="intro">{{booklist.intro}}</p>
      <div class="foot">
        <div class="author"><span class="icon"></span><span>{{booklist.author}}</span></div>
        <div class="tags">
         <span v-for="tag in tags" :key="tag">
           {{ tag }}
         </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
 import { get } from '@/utils'
 import config from '@/config'
 export default {
   props: {
     booklist: {
       type: Array,
       default: []
     }
   },
   data () {
     return {
       img: ''
     }
   },
   computed: {
     tags () {
       var tag1 = this.booklist.categoryInfoV4.split(':').join(',').split(',')[4]
       if (this.booklist.tag) {
         var tag2 = this.booklist.tag.split(':').join(',').split(',')[1]
         return [tag1, tag2]
       }
       return [tag1]
     }
   },
   methods: {
     async getBooksImg (bid) {
       const ImgData = await get(config.bookDetailsUrl, {bid})
       console.log(ImgData)
       this.img = ImgData.book.cover
     }
   },
   mounted () {
     this.getBooksImg(this.booklist.bid)
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
  .left{
    img {
      display: block;
      width: 100rpx;
      height: 100%;
    }
  }
  .right {
    margin-left: 15px;
    .title {
      font-size: 14px;
    }
    .intro {
      font-size: 10px;
      color: #777;
      overflow : hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      margin: 5px 0;
    }
    .foot {
      display: flex;
      justify-content: space-between;
      .author {
        display: flex;
        align-items: center;
        font-size: 10px;
        color: #999;
        vertical-align: top;
        .icon {
          display: inline-block;
          width: 16rpx;
          height: 100%;
          margin-right: 5px;
          background: url(../../static/icon/icon_author.png) no-repeat center;
          background-size: 16rpx 16rpx;
        }
      }
      .tags {
        span{
          font-size: 10px;
          color: #999;
          border:1px solid #999;
          padding: 0 5px;
          margin-left: 5px;
        }
      }
    }
  }
}
</style>
