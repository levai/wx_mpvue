<template>
  <div class="book">
    <!-- 书籍图片 S -->
    <img class="cover" :src="book.cover" >
    <!-- 书籍图片 E -->

    <!-- 书名 S -->
    <div class="title">{{book.title}}</div>
    <!-- 书名 E -->

    <!-- 作者及书籍分类 S -->
    <div class="author">
      {{book.author}} | {{book.category}}
    </div>
    <!-- 作者及书籍分类 E -->

    <!-- 书籍收藏及评分 S -->
    <div class="desc">
      <div class="desc-item">
        {{book.favorcount}}
        <span>收藏</span>
      </div>
      <div class="desc-item">
        {{book.readcount}}
        <span>读过</span>
      </div>
      <div class="desc-item">
        {{book.score}}分
        <span>评分</span>
      </div>
    </div>
    <!-- 书籍收藏及评分 E -->

    <!-- 书籍描述 S  -->
    <div class="intro">
      <p @click="handleIsHide" :class="{hide:isHide}">{{book.intro}} <span :class="{rote:!isHide}" class="icon-sj"></span></p>
    </div>
    <!-- 书籍描述 E  -->

    <!-- 查看目录 S -->
    <div class="foot" @click="openDir">
      <div class="left">
        <div class="look">查看目录</div>连载于{{book.lastChapterId}}章
      </div>
      <div class="right">更新于{{book.updatetime}} ></div>
    </div>
    <!-- 查看目录 E -->

  </div>
</template>

<script>
  export default {
    props: ['book'],
    data () {
      return {
        isHide: true,
        isOpen: true
      }
    },
    methods: {
      handleIsHide () {
        this.isHide = !this.isHide
      },
      openDir () {
        this.$emit('listeningOpen', this.isOpen)
      }
    }
  }
</script>

<style lang='less' scoped>
.book {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 15px;
  font-size: 14px;
  .cover {
    display: block;
    width: 70px;
    height: 100px;
    box-shadow: 0 0 2px #eee;
  }
  .title {
    font-size: 20px;
    font-weight: bold;
    margin: 15px 0;
  }
  .author {
    font-size: 12px;
    color: #999;
    margin-bottom: 20px;
  }
  .desc {
    display: flex;
    width: 100%;
    justify-content: space-around;
    padding-bottom: 15px;
    border-bottom: 1px solid #eee;
    .desc-item{
      text-align: center;
    }
    span {
      display: block;
      font-size: 10px;
      color: #999;
    }
  }
  .intro {
    margin: 15px 0;
     padding-bottom: 15px;
    border-bottom: 1px solid #eee;
    p {
      position: relative;
      font-size: 12px;
      color: #777;
      &.hide{
        overflow : hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }
      .icon-sj {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 20rpx;
        height: 24rpx;
        background: url(../../static/icon/icon_sj.png) no-repeat center;
        background-size: 20rpx 20rpx;
        background-color: #fff;
        &.rote{
          transform: rotate(180deg)
        }
      }
    }
  }
  .foot {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding-bottom: 15px;
    .left {
      display: flex;
      align-items: center;
      font-size: 12px;
      color: #999;
      .look {
        font-size: 14px;
        color: #333;
        margin-right: 10px;
      }
    }
    .right {
      font-size: 12px;
      color: #999;
    }
  }
}
</style>
