<template>
  <div class="card">
    <div class="title">
      {{recommend.title}}
    </div>
    <CardItem v-for="bookItem in recommend.bookList" :key="bookItem" :bookItem='bookItem'></CardItem>
  </div>
</template>

<script>
import CardItem from '@/components/CardItem'
export default {
  props: ['recommend'],
  components: {
    CardItem
  }
}
</script>

<style lang='less'>
.card {
  padding: 0 15px;
  .title {
    font-size: 18px;
    font-weight: 300;
    margin-bottom: 10px;
  }
}
</style>
