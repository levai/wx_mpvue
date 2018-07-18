<template>
  <div>
    <div class="chapterTitle">{{chapterTitle}}</div>
   <p class="txt" v-for="item in chapterContent" :key="item">
     {{ item }}
   </p>
  </div>
</template>

<script>
  export default {
    props: ['chapterContent', 'chapterTitle']
  }
</script>

<style scoped>
.chapterTitle {
  font-size: 22px;
  font-weight: bold;
}
.txt {
  line-height: 1.5;
  margin: 10px 0;
}
</style>
