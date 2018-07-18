<template>
  <div class="book-reading " :class="{darkNight:isDarkNight}">
    <div v-if="isData" @click.stop="openFiexdDir">
      <!-- content S -->
      <ReadingContent :chapterContent='chapterContent' :chapterTitle='chapterTitle'></ReadingContent>
      <!-- content E -->
      <!-- Directory S -->
      <div class="directory-box" v-if="isOpen" @click="closeDir">
        <scroll-view class="directory-list" scroll-y style="height: 100%;width:75%;" :scroll-into-view='intoView' :scroll-top='0' :enable-back-to-top="true">
          <p class="chapterName" @click="goBookChapter(item)" :class="{open:cid===item.cid}" v-for="item in bookDirectory" :id="'S'+item.cid" :key="item">
            {{item.chapterName}}
          </p>
        </scroll-view>
      </div>
      <!-- Directory E -->
      <!-- bottom Directory S -->
      <div class="bottom-directory">
        <div @click.stop="prevChapter" class="btn-prev" :class="{active:hasfirstChapter===true}">上一章</div>
        <div @click.stop="openDir" class="btn-directory">目录</div>
        <div @click.stop="nextChapter" class="btn-next" :class="{active:haslastChapter===true}">下一章</div>
      </div>
    </div>
    <!-- bottom Directory E -->
    <div :class="{active:isOpenFiexd===true}" class="fixed-dir">
      <div class="title">{{chapterTitle}}</div>
      <div class="progress-bar">
        <span @click.stop="prevChapter">上一章</span>
        <slider class="slider" activeColor="#333" block-color="#333" backgroundColor="#eee" @change.stop="sliderChange($event)" block-size="18" min="1" :max="chapterCount" :value='cid' step="1" />
        <span @click.stop="nextChapter">下一章</span>
      </div>
      <div class="dir">
        <div @click="openDir">目录</div>
        <div>设置</div>
        <div @click="DarkNight">夜间</div>
      </div>
    </div>
  </div>
</template>

<script>
  import config from '@/config'
  import {
    get,
    showLoading,
    hideLoading
  } from '@/utils'
  import ReadingContent from '@/components/ReadingContent'
  export default {
    components: {
      ReadingContent
    },
    data () {
      return {
        cid: 1,
        intoView: '',
        chapterContent: '',
        chapterTitle: '',
        chapterCount: '',
        bookDirectory: '',
        hasfirstChapter: true,
        haslastChapter: false,
        isData: false,
        isOpen: false,
        isOpenFiexd: false,
        isDarkNight: false
      }
    },
    mounted () {
      this.init()
    },
    methods: {
      init () {
        this.bid = this.$root.$mp.query.bid || ''
        this.title = this.$root.$mp.query.title || ''
        this.cid = this.$root.$mp.query.cid || 1
        this.intoView = 'S' + this.cid + '' || 'S1'
        wx.setNavigationBarTitle({
          title: this.title
        })
        this.getBookReading({
          bid: this.bid,
          cid: this.cid
        })
        this.getBookDirectory(this.bid)
      },
      async getBookDirectory (bid) {
        showLoading('加载中')
        const bookDirectoryData = await get(config.bookDirectory, {
          bid
        })
        this.bookDirectory = bookDirectoryData
        hideLoading()
      },
      async getBookReading (data) {
        this.isData = false
        this.goTop()
        showLoading('加载中')
        const readingData = await get(config.readingUrl, data)
        this.chapterContent = readingData.chapterContent.split('\r\n')
        this.chapterTitle = readingData.chapterTitle
        this.chapterCount = readingData.bookstart.chapterCount
        hideLoading()
        this.isData = true
      },
      goTop () {
        if (wx.pageScrollTo) {
          wx.pageScrollTo({
            scrollTop: 0,
            duration: 300
          })
        } else {
          wx.showModal({
            title: '提示',
            content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
          })
        }
      },
      prevChapter () {
        if (this.cid > 1) {
          this.cid--
          this.haslastChapter = false
          this.getBookReading({
            bid: this.bid,
            cid: this.cid
          })
          if (this.cid === 1) {
            this.hasfirstChapter = true
          }
        } else {
          this.hasfirstChapter = true
          this.cid = 1
          return false
        }
        this.intoView = 'S' + this.cid + ''
      },
      nextChapter () {
        if (this.cid < this.chapterCount) {
          this.cid++
          this.hasfirstChapter = false
          this.getBookReading({
            bid: this.bid,
            cid: this.cid
          })
          if (this.cid === this.chapterCount) {
            this.haslastChapter = true
          }
        } else {
          return false
        }
        this.intoView = 'S' + this.cid + ''
      },
      goBookChapter (item) {
        this.isOpen = false
        this.isOpenFiexd = false
        this.cid = item.cid
        this.intoView = 'S' + item.cid + ''
        this.getBookReading({
          bid: this.bid,
          cid: item.cid
        })
      },
      openDir () {
        this.isOpen = true
        this.isOpenFiexd = false
      },
      closeDir () {
        this.isOpen = false
        this.isOpenFiexd = true
      },
      openFiexdDir () {
        this.isOpenFiexd = !this.isOpenFiexd
      },
      sliderChange (e) {
        this.isOpenFiexd = true
        this.cid = e.mp.detail.value
        this.intoView = 'S' + this.cid + ''
        this.getBookReading({
          bid: this.bid,
          cid: this.cid
        })
      },
      DarkNight () {
        this.isDarkNight = !this.isDarkNight
      }
    },
    onUnload () {
      this.cid = 1
      this.hasfirstChapter = true
      this.haslastChapter = false
      this.isOpenFiexd = false
    }
  }
</script>

<style lang="less" scoped>
  .book-reading {
    position: absolute;
    padding: 15px;
    width: 100%;
    min-height: 100%;
    background: #eee;
    box-sizing: border-box;
  }
  .directory-box {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .2);
    .directory-list {
      background: #fff;
      .chapterName {
        font-size: 12px;
        margin: 0 10px;
        padding: 10px 0;
        border-bottom: 1px solid #eee;
      }
      .open {
        color: #0B96FC;
      }
    }
  }
  .bottom-directory {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 20px 0 0;
    >div {
      padding: 5px 20px;
      background: #fff;
      border-radius: 3px;
      border: 1px solid #999;
    }
    .active {
      color: #999;
    }
  }
  .fixed-dir {
    position: fixed;
    bottom: -100%;
    left: 0;
    width: 100%;
    padding: 10px 15px 0;
    background: #fff;
    box-sizing: border-box;
    transition: bottom .35s;
    &.active {
      bottom: 0;
    }
    .title {
      font-size: 12px;
      color: #999;
      text-align: center;
      padding: 5px 0;
    }
    .progress-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .slider {
        flex: 1;
      }
    }
    .dir {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 0;
      border-top: 1px #eee solid;
      >div {
        font-size: 14px;
        padding:  15px;
      }
    }
  }
  .darkNight {
    background: rgb(44, 44, 44);
    color: #eee;
    .bottom-directory {
      color: #333;
    }
    .directory-box {
      color: #eee;
      background: rgba(0, 0, 0, .2);
      .directory-list {
        background: #444;
      }
    }
    .fixed-dir {
      color: #eee;
      background: #444;
    }
  }
</style>
