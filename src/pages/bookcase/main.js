import Vue from 'vue'
import bookcase from './bookcase'

const app = new Vue(bookcase)
app.$mount()

export default {
  config: {
    navigationBarTitleText: '个人主页'
  }
}
