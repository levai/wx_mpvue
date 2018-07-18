import Vue from 'vue'
import bookreading from './bookreading.vue'

const app = new Vue(bookreading)
app.$mount()

export default {
  config: {
    backgroundColor: '#eee'
  }
}
