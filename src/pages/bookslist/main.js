import Vue from 'vue'
import bookslist from './bookslist.vue'

const app = new Vue(bookslist)
app.$mount()

export default {
  config: {
    enablePullDownRefresh: true,
    backgroundTextStyle: 'dark'
  }
}
