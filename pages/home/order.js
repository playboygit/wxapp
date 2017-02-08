//index.js
//基础数据
var goods_list = [{
          shop:"儿童乐园",
          num:"100",
          img_url:"images/goods.png"
      },
      {
          shop:"儿童乐园",
          num:"100",
          img_url:"images/goods.png"
      },
      {
          shop:"儿童乐园",
          num:"100",
          img_url:"images/goods.png"
      }
      ];
var goods_data = [{
          shop:"儿童乐园",
          num:"100",
          img_url:"images/goods.png"
      },
      {
          shop:"儿童乐园",
          num:"100",
          img_url:"images/goods.png"
      },
      {
          shop:"儿童乐园",
          num:"100",
          img_url:"images/goods.png"
      }
      ];
//获取应用实例
var app = getApp()
var goods_index = 0;
Page({
  data: {
    motto: 'app home',
    goods_list: goods_list,
    scrollTop: 100,
    scrollHeight:600
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
      var scrollHeight = height-60;
      that.setData({
        scrollHeight:scrollHeight
      })
    } catch (e) {
      // Do something when catch error
      console.log(e);
    }
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      console.log(userInfo)
      that.setData({
        userInfo:userInfo
      })
    })
    
  },
  loadGoods: function(){
    console.log(33333)
    wx.showToast({
      title: '数据加载中',
      icon: 'loading',
      duration: 1500,
      mask:true
    })
    if(goods_index<10){
        for(var i=0; i<goods_data.length; i++){
            goods_list.push(goods_data[i]);
        }
    }
    var that = this
    that.setData({
        goods_list:goods_list
      })
  },
  scrollLoad: function(e){
    console.log(44444)
      console.log(e)

  }
})
