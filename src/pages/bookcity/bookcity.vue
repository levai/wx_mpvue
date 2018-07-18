<template>
  <div class="container">
    <!-- 搜索 S -->
    <div @click="goToSearch">
      <Search :disabled="true" :placeholder="placeholder"></Search>
    </div>
    <!-- 搜索 E -->

    <!-- 排行榜 S -->
    <MainTitle title='排行榜' more="更多 >"></MainTitle>
    <RankList :datas="rankList"></RankList>
    <!-- 排行榜 E -->

    <!-- 书单 S -->
    <MainTitle title='书单' more=""></MainTitle>
    <SheetList  :sheetList='sheetList'></SheetList>
    <!-- 书单 E -->

    <!-- 书库 S -->
    <MainTitle title='书库' more="更多 >"></MainTitle>
    <StoreHouseList :storehouseList='storehouseList'></StoreHouseList>
    <!-- 书库 E -->

  </div>
</template>

<script>
  import config from '@/config'
  import { get } from '@/utils'
  import Search from '@/components/Search'
  import RankList from '@/components/RankList'
  import MainTitle from '@/components/MainTitle'
  import SheetList from '@/components/SheetList'
  import StoreHouseList from '@/components/StoreHouseList'

  export default {
    components: {
      Search,
      RankList,
      MainTitle,
      SheetList,
      StoreHouseList
    },
    data () {
      return {
        placeholder: '搜索',
        rankList: '',
        sheetList: '',
        storehouseList: ''
      }
    },
    mounted () {
      this.init()
    },
    methods: {
      init () {
        this.type = this.$root.$mp.query.type || 0
        this.getBookCity(this.type)
      },
      async getBookCity (type) {
        // 获取推荐页书籍 默认男频道
        const bookCityData = await get(config.bookCityUrl, {type})
        this.rankList = bookCityData.rankList
        this.sheetList = bookCityData.sheetList
        this.storehouseList = bookCityData.storehouseList
        console.log(bookCityData)
      },

      goToSearch () {
        wx.navigateTo({
          url: '../search/main'
        })
      }
    }
  }
</script>

<style scoped>
.container {
  margin-bottom: 30px;
}
</style>
