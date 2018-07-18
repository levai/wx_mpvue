
// http 请求工具函数
export function get (url, data) {
  return request(url, 'GET', data)
}
export function post (url, data) {
  return request(url, 'POST', data)
}

function request (url, method, data) {
  return new Promise((resolve, reject) => {
    wx.showNavigationBarLoading()
    wx.request({
      data,
      method,
      url: url,
      success: function (res) {
        // 请求成功
        if (res.data.code === 0) {
          resolve(res.data.data)
          wx.hideNavigationBarLoading()
        } else { // 请求失败
          showModal('失败', res.data.data)
          reject(res.data)
          wx.hideNavigationBarLoading()
        }
      }
    })
  })
}

export function searchRequest (url, data) {
  return new Promise((resolve, reject) => {
    wx.showNavigationBarLoading()
    wx.request({
      data,
      method: 'GET',
      url: url,
      success: function (res) {
        // 请求成功
        if (res.data.code === 0) {
          resolve(res.data)
          wx.hideNavigationBarLoading()
        } else { // 请求失败
          showModal('失败', '搜索失败')
          reject(res.data)
          wx.hideNavigationBarLoading()
        }
      }
    })
  })
}

export function showSuccess (text) {
  wx.showToast({
    title: text,
    icon: 'success'
  })
}

export function showLoading (text) {
  wx.showLoading({
    title: text
  })
}
export function hideLoading () {
  wx.hideLoading()
}

export function showModal (title, content) {
  wx.showModal({
    title,
    content,
    showCancel: false
  })
}
