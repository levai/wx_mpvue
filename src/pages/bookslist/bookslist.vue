<template>
  <div class="book-list-page">
    <xLoading :is-show='isLoading'></xLoading>
    <BookList  v-if="!isLoading" :booklist='bookitem' v-for="bookitem in booklistData" :key="bookitem"></BookList>
    <xLoading :is-icon="isIcon" :is-show='isMore' :loading-title="moreTitle"></xLoading>
  </div>
</template>

<script>
  import {
    get
  } from '@/utils'
  import BookList from '@/components/BookList'
  import xLoading from '@/components/xLoading'
  export default {
    components: {
      BookList,
      xLoading
    },
    data () {
      return {
        booklistData: '',
        isLoading: true,
        isMore: false,
        isIcon: true,
        moreTitle: '上拉加载更多',
        url: '',
        Data: {
          id: '',
          pageNo: 1,
          pageSize: 20
        }
      }
    },
    mounted () {
      this.init()
    },
    methods: {
      init () {
        // 页面初始化
        this.Data.pageNo = 1
        this.isLoading = true
        this.isMore = false
        this.isIcon = true
        this.Data.id = this.$root.$mp.query.id
        this.url = this.$root.$mp.query.url
        this.title = this.$root.$mp.query.title
        this.getBookColumn(this.Data)
        this.setTitle()
      },
      async getBookColumn (Data) {
        var that = this
        const bookColumnData = await get(that.url, Data)
        that.isLoading = false
        that.isMore = true
        var next = bookColumnData.bookList
        if (this.Data.pageNo === 1) {
          this.booklistData = bookColumnData.bookList
        } else {
          if (bookColumnData.nextPage) {
            this.booklistData = this.booklistData.concat(next)
          } else {
            that.moreTitle = '已全部加载...'
            that.isIcon = false
            return false
          }
        }
      },
      setTitle () {
        if (!this.title) {
          return false
        }
        wx.setNavigationBarTitle({
          title: this.title
        })
      }

    },
    onShow () {

    },
    onPullDownRefresh () {
      this.Data.pageNo = 1
      wx.showNavigationBarLoading() // 在标题栏中显示加载
      this.getBookColumn(this.Data)
      wx.hideNavigationBarLoading() // 完成停止加载
      wx.stopPullDownRefresh() // 停止下拉刷新
    },
    onReachBottom () {
      this.Data.pageNo += 1
      this.moreTitle = '上拉加载更多'
      this.getBookColumn(this.Data)
    }
  }
</script>

<style scoped>
  .book-list-page {
    padding: 15px 0;
  }
</style>
