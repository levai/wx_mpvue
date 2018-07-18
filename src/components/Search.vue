<template>
  <div class="search">
    <div class="icon"></div>
    <input v-model="keyword" :disabled="disabled" confirm-type="search"
    :focus='focus' class="input" type="text" name="" id=""
    :placeholder="placeholder"
    @confirm="getResults(e)"
    >
  </div>
</template>

<script>
  export default {
    props: {
      placeholder: {
        type: String,
        default: '搜索'
      },
      disabled: {
        type: Boolean,
        default: false
      },
      focus: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        keyword: ''
      }
    },
    methods: {
      getResults (e) {
        this.$emit('results', this.keyword)
      }
    }
  }
</script>

<style scoped lang="less">
.search{
  display: flex;
  margin: 15px ;
  padding: 0 15px;
  height: 80rpx;
  line-height: 80rpx;
  background: #F2F2F2;
  border-radius: 3px;
  .icon{
    width: 32rpx;
    height: 100%;
    margin-right: 5px;
    background: url(../../static/icon/icon_search.png) no-repeat center;
    background-size: 32rpx 32rpx;
  }
  .input {
    flex: 1;
    color: #999;
    height: 100%;
    font-size: 12px;
  }
}
</style>
