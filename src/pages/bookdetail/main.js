import Vue from 'vue'
import bookdetail from './bookdetail.vue'

const app = new Vue(bookdetail)
app.$mount()

export default {
  config: {
    navigationBarTitleText: '',
    backgroundTextStyle: 'dark',
    navigationBarBackgroundColor: '#fff',
    navigationBarTextStyle: 'black',
    onReachBottomDistance: 0
  }
}
