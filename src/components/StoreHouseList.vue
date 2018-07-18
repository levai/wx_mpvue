<template>
  <div class="store-house-list">
    <div @click="goBookList(index,StoreHouseItem.title)" class="list-item"  v-for="(StoreHouseItem,index) in storehouseList" :key="StoreHouseItem">
      <img class="img-item" :src="StoreHouseItem.bookCovers[0]" >
      <div class="text">
        <div class="title">{{ StoreHouseItem.title }}</div>
        <div class="totalBooks"><span>{{ StoreHouseItem.totalBooks }}</span>册</div>
      </div>
    </div>
  </div>
</template>

<script>
import config from '@/config'
export default {
  props: ['storehouseList'],
  methods: {
    goBookList (index, title) {
      wx.navigateTo({
        url: '../bookslist/main?id=' + this.storehouseList[index].categoryId + '&url=' + config.libraryUrl + '&title=' + title
      })
    }
  }
}
</script>

<style scoped lang="less">
.store-house-list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 15px;
.list-item {
  display: flex;
  padding: 8px;
  width: 48.5%;
  background: #F7FAFA;
  border: 1px solid #E1E4E4;
  box-sizing: border-box;
  margin-bottom: 10px;
  border-radius: 3px;
  .img-item {
    width: 50px;
    height: 70px;
  }
  .text{
    text-align: left;
    margin-left: 30px;
    margin-top:10px;
    .title {
      font-size: 13px;
      margin-bottom:10px;
    }
    .totalBooks {
      font-size: 12px;
      span{
        color: #2B9AFF;
      }
    }
  }
}
}
</style>
