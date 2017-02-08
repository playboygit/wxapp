//my.js
//获取应用实例
var app = getApp()
Page({
  data: {
    pageHeight: '400'
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    var that = this
    try {
      var res = wx.getSystemInfoSync();
      var height = res.windowHeight;
      that.setData({
        pageHeight:height
      })
    } catch (e) {
      // Do something when catch error
      console.log(e);
    }
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      that.setData({
        userInfo:userInfo
      })
    })
  },
  changeImg:function(){
    var that = this
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePath = res.tempFilePaths[0];
        app.getUserInfo(function(userInfo){
          userInfo.avatarUrl = tempFilePath;
          that.setData({
            userInfo:userInfo
          })
        })
      }
    })
  },
  goHelp:function(){
    wx.navigateTo({
      url: '/pages/home/help'
    })
  }
})
