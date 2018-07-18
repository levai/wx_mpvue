<template>
  <div class="comments-list">
    <div class="head-title">精彩评论</div>
    <div class="body-list" v-for="(commentItem,index) in commentList" :key="index">
      <img class="avatar" :src="commentItem.avatar">
      <div class="comment">
        <div class="top">
          <div class="nickname">{{commentItem.nickname}}</div>
          <div class="createtime">{{commentItem.createtime}}</div>
        </div>
        <div class="content">{{commentItem.content}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['commentList']
  }
</script>

<style lang="less" scoped>
  .comments-list {
    margin: 20px 15px 0;
    .head-title {
      font-size: 14px;
    }
    .body-list {
      font-size: 12px;
      display: flex;
      justify-content: space-between;
      padding: 15px 0;
      &:not(:last-child){
         border-bottom: 1px solid #eee;
      }
      .avatar {
        width: 80rpx;
        height: 80rpx;
        border-radius: 50%;
      }
    }
    .comment {
      flex: 1;
      margin-left: 15px;
      .top {
         display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
        .createtime {
          color: #999;
          font-size: 10px;
        }
      }
      .content {
        line-height: 1.5;
      }
    }
  }
</style>
