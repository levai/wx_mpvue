// 配置项

const host = 'https://wxmini.reader.qq.com'

// #首页
// ?type=0 0 ：女生 1 ：男生
const homeUrl = host + '/custom/query/firstpage'

// # 书城
// ?type=0 0 ：女生 1 ：男生
const bookCityUrl = host + '/custom/query/bookstore/firstpage'

// # 排行榜
// ?id=500309&pageNo=2&pageSize=20
const booksRankUrl = host + '/column/query/booklist'

// #书库
// ?id=30013&pageNo=1&pageSize=20
const libraryUrl = host + '/category/query/booklist'

// #书单
// ?id=284624938962092&pageNo=1&pageSize=20
const booklistUrl = host + '/booksheet/query'

// # 书本详情页
// ?bid=19818084
const bookDetailsUrl = host + '/custom/query/bookdetail'

// # 阅读书籍
// ?bid=19818084&cid=1
const readingUrl = host + '/book/query/chapter/txt'

// # 书籍目录
// ?bid=14608738
// cid 第几章 chapterName章节名称 free=1 免费 0收费 purchased是否购买 1购买
const bookDirectory = host + '/book/query/chapterlist'

// # add增加书籍到书架
// post 请求
const addbook = 'https://active.reader.qq.com/cloud/commit?tid=0&__FORXCX=1'

// # 搜索书本
// keyword=圣墟&start=0&end=19
const searchUrl = 'https://newopensearch.reader.qq.com/wechat'

// # 转发分享配置
const shareUrl = host + 'ad/query/share/config'
const config = {
  homeUrl,
  bookCityUrl,
  booksRankUrl,
  libraryUrl,
  booklistUrl,
  bookDetailsUrl,
  readingUrl,
  bookDirectory,
  addbook,
  searchUrl,
  shareUrl
}
export default config
