<template>
  <div class="container search-page">
    <!-- 搜索框 S -->
   <div class="search-top">
      <Search @results="getResults"  :placeholder="placeholder" :focus="true"></Search>
   </div>
    <!-- 搜索框 E -->
  <!-- 搜索结果列表 S -->
  <SearchBookList :booklist="booklist" v-for="booklist in booklistData" :key="booklist">
    {{ item }}
  </SearchBookList>
  <!-- 搜索结果列表 S -->
  </div>
</template>

<script>
  import { searchRequest } from '@/utils'
  import config from '@/config'
  import Search from '@/components/Search'
  import SearchBookList from '@/components/SearchBookList'

  export default {
    components: {
      Search,
      SearchBookList
    },
    data () {
      return {
        placeholder: '请输入书名或作者名',
        booklistData: '',
        PostData: {
          keyword: '圣墟',
          start: 0,
          end: 19
        }
      }
    },
    mounted () {

    },
    methods: {
      async getSearchResults (data) {
        const resultsData = await searchRequest(config.searchUrl, data)
        this.booklistData = resultsData.booklist
        console.log(this.booklistData)
      },
      getResults (data) {
        // this.PostData.keyword = data
        this.getSearchResults(this.PostData)
      }
    },
    // 上拉加载更多
    onReachBottom () {
      console.log(1)
      // this.PostData.start += 20
      this.PostData.end += 20
      var booksData = this.booklistData
      this.getSearchResults(this.PostData)
      var x = booksData.concat(this.booklistData)
      this.booklistData = x
    }
  }
</script>

<style scoped lang="less">
.search-page {
  padding-top:140rpx;
  .search-top{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: #fff;
  }
}

</style>
