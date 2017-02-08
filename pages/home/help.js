// pages/home/help.js
Page({
  data:{
    pageHeight: '400',
    animationData: {}
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
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
    /*var animation = wx.createAnimation({
      duration: 1000,
        timingFunction: 'ease',
    })
    this.animation = animation
    animation.scale(2,2).rotate(45).step()
    this.setData({
      animationData:animation.export()
    })
    setTimeout(function() {
      animation.translate(30).step()
      this.setData({
        animationData:animation.export()
      })
    }.bind(this), 1000)*/
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})