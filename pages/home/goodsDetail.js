//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    imgUrls: [
  'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
  'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
  'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    scrollHeight:600
  },
  onShareAppMessage: function () {
    return {
      title: '兵哥的小程序app',
      desc: '欢迎大家进入兵哥的小程序',
      path: "/pages/home/home"
    }
  },
  onLoad: function () {
    var that = this
    try {
      var res = wx.getSystemInfoSync();
      var height = res.windowHeight;
      var scrollHeight = height;
      that.setData({
        scrollHeight:scrollHeight
      })
    } catch (e) {
      // Do something when catch error
      console.log(e);
    }
  },
  changeIndicatorDots: function(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function(e) {
    this.setData({
      duration: e.detail.value
    })
  }
})