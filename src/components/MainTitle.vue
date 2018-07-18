<template>
  <div class="main-title">
    <div class="title">{{title}}</div>
    <div  class="more-allwo">{{more}}</div>
  </div>
</template>

<script>
  export default {
    props: ['title', 'more']
  }
</script>

<style scoped lang="less">
.main-title{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 15px 10px;
  .title {
    font-size: 18px;
  }
  .more-allwo {
    color: #999;
    font-size: 12px;
  }
}
</style>
