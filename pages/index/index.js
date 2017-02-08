//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'my Hello World',
    curSystem:"",
    curLocation:"湖北省武汉",
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    wx.showToast({
          title:"success",
          duration: 2000
        })
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
    /*wx.chooseLocation({
      success: function(res){
        // success
        that.setData({
          curLocation:res.address
        })
      },
      fail: function() {
        // faill,未选择地址会fail
        that.setData({
          curLocation:"无"
        })
      },
      complete: function() {
        // complete
      }
    })*/
    wx.getSystemInfo({
      success: function(res) {
        // success
        that.setData({
          curSystem:res.model
        })
      }
    })
  },
  goapp: function(){
    wx.showToast({
      icon: 'loading',
      duration: 2000,
      mask:true
    })
    wx.redirectTo({
      url: '../home/home',
      success: function(res){
        // success
        wx.showToast({
          title:"success",
          duration: 2000
        })
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  }
})
