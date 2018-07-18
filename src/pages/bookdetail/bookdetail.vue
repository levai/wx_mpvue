<template>
  <div v-if="isLoading" class="book-detail">
    <!-- 书本详情 S -->
    <BookDetail :book='book' @listeningOpen="listeningOpen"></BookDetail>
    <!-- 书本详情 E -->
    <div class="h-line"></div>
    <!-- 评论详情 S -->
    <CommentList :comment-list="commentList"></CommentList>
    <!-- 评论详情 E -->

    <!-- 底部导航 S -->
    <div class="bottom-nav">
      <div @click="goBookReadPage(book.bid,book.title)" class="btn btn-b">阅读</div>
      <div class="btn btn-add">加入书架</div>
    </div>
    <!-- 底部导航 E -->

   <!-- Directory S -->
    <div class="directory-box" v-if="isOpen" @click="closeDir">
      <scroll-view class="directory-list" scroll-y style="height: 100%;width:75%;"
      :scroll-into-view='intoView'
      :scroll-top='scrolltop'
      :enable-back-to-top="true">
        <p class="chapterName"
          @click="goToBookChapter(item)"
          v-for="item in bookDirectory" :id="'S'+item.cid" :key="item">
          {{item.chapterName}}
        </p>
      </scroll-view>
    </div>
  <!-- Directory E -->

  </div>
</template>

<script>
import config from '@/config'
import { get, showLoading, hideLoading } from '@/utils'
import BookDetail from '@/components/BookDetail'
import CommentList from '@/components/CommentList'

export default {
  components: {
    BookDetail,
    CommentList
  },
  data () {
    return {
      bookDirectory: '',
      intoView: '',
      book: {},
      isLoading: false,
      isOpen: false
    }
  },
  onShow () {
    this.init()
  },
  methods: {
    init () {
      this.isLoading = false
      this.bid = this.$root.$mp.query.type || 468021
      this.getBookDetail(this.bid)
      this.getBookDirectory(this.bid)
    },
    async getBookDetail (bid) {
      showLoading('加载中')
      const bookDetailData = await get(config.bookDetailsUrl, {bid})
      hideLoading()
      this.book = bookDetailData.book
      this.commentList = bookDetailData.commentList
      this.isLoading = true
      console.log(this.book)
    },
    async getBookDirectory (bid) {
      showLoading('加载中')
      const bookDirectoryData = await get(config.bookDirectory, {
        bid
      })
      this.bookDirectory = bookDirectoryData
      console.log(bookDirectoryData)
      hideLoading()
    },
    closeDir () {
      this.isOpen = false
      wx.setNavigationBarTitle({
        title: ''
      })
    },
    listeningOpen (data) {
      this.isOpen = data
      wx.setNavigationBarTitle({
        title: '目录'
      })
    },
    goToBookChapter (item) {
      console.log(this.bid, this.book.title, item.cid)
      wx.navigateTo({
        url: '../bookreading/main?bid=' + this.bid + '&title=' + this.book.title + '&cid=' + item.cid
      })
    },
    goBookReadPage (bid, title) {
      wx.navigateTo({
        url: '../bookreading/main?bid=' + bid + '&title=' + title
      })
    }
  }
}
</script>

<style lang="less" scoped>
.book-detail{
  padding-bottom: 90rpx;
}
.h-line {
  width: 100%;
  height: 10px;
  background: #eee;
}
.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100rpx;
  line-height: 100rpx;
  background: #fff;
  border-top: 1px solid #eee;
  padding: 0 5px;
  .btn {
    width: 45%;
    height: 70rpx;
    line-height: 70rpx;
    border-radius: 40rpx;
    text-align: center;
    font-size: 14px;
    color: #fff;
  }
  .btn-b {
    background: #0096ED;
  }
  .btn-add {
    color: #333;
  }
}
 .directory-box {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .2);
    .directory-list {
     background: #fff;
     .chapterName {
       font-size: 12px;
       margin: 0 10px;
       padding: 5px 0;
       border-bottom: 1px solid #eee;
     }
    }
  }
</style>
