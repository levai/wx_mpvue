<template>
  <div class="rank-list">
    <swiper class="slider"
    :indicator-dots="true"
    indicator-color='#eee'
    indicator-active-color='#328CFF'
    :interval="3000"
    :duration="1000"
    :next-margin='35'
    :autoplay='true'
    :circular="true">
      <swiper-item @click="goBookList(index,item.title)" v-for="(item,index) in datas" :key="index">
        <div class="box">
          <div class="title">{{item.title}}</div>
          <div class="images">
            <img :class="'img-item-'+i" mode='aspectFit' v-for='(img,i) in item.bookCovers' :key='i' :src="img">
          </div>
        </div>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import config from '@/config'
  export default {
    props: ['datas'],
    methods: {
      goBookList (index, title) {
        if (!title) {
          title = 'QQ阅读'
        }
        wx.navigateTo({
          url: '../bookslist/main?id=' + this.datas[index].columnId + '&url=' + config.booksRankUrl + '&title=' + title
        })
      }
    }
  }
</script>

<style scoped lang="less">
  .rank-list {
    margin: 0 15px;

    .slider {
       height:320rpx;
      .box {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding:  5px;
         background: #F7FAFA;
         border-radius: 3px;
         margin-right: 5px;
        .title {
          width: 1em;
          height: 100%;
          font-size: 16px;
          font-weight: bold;
          margin: 0 10px 0 5px ;
        }
        .images {
         flex: 1;
          display: flex;
          justify-content: space-around;
          img {
            display: inline-block;
            width: 33.33%;
            height: 250rpx;
            margin-right: 10px;
            border-radius: 5px;
          }
          .img-item-1{
            transform:translateY(-5px)
          }
        }
      }
    }
  }
</style>
