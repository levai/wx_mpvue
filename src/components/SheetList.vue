<template>
  <div>
    <div @click="goBookList(i)" class="sheet-list" v-for="(sheetItem,i) in sheetList" :key='i'>
    <div class="txt">
      <h3 class="bsName">{{sheetItem.bsName}}</h3>
      <div class="bsIntro">{{sheetItem.bsIntro}}</div>
    </div>
    <div class="images">
      <div class="img-item" :class="'img-item-'+index" v-for="(imgItem,index) in sheetItem.bookList" :key="imgItem" :style="{backgroundImage: 'url(' + imgItem.cover + ')'}" >
        {{ item }}
      </div>
    </div>
  </div>
  </div>
</template>

<script>
  import config from '@/config'
  export default {
    props: ['sheetList'],
    methods: {
      goBookList (index) {
        wx.navigateTo({
          url: '../bookslist/main?id=' + this.sheetList[index].bsid + '&url=' + config.booklistUrl + '&title=' + '书单'
        })
      }
    }
  }
</script>

<style scoped lang='less'>
.sheet-list {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin:15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
  .txt {
    display: flex;
    flex-direction: column;
    margin-right: 25px;
    justify-content: space-between;
    .bsName {
      width: 200px;
      overflow:hidden;
      text-overflow:ellipsis;
      white-space:nowrap;
    }
    .bsIntro {
      color: #999;
      font-size: 13px;
      overflow : hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
  .images {
    position: relative;
    width: 290px;
    height: 160rpx;
    .img-item {
      position: absolute;
      bottom: 0;
      width: 120rpx;
      height: 100%;
      background-size: cover;
    }
    .img-item-1{
      left: 0;
      width: 90rpx;
      height: 80%;
      opacity: .2;
    }
    .img-item-0{
      left: 50%;
      transform: translateX(-50%);
      z-index: 99;
      bottom: -1px;
    }
     .img-item-2{
      width: 100rpx;
      height: 90%;
      right: 0;
       opacity: .4;
    }
  }
}
</style>
