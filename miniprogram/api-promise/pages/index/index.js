const app = getApp()
import { wxpromisify } from '../../utils/util'
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },
  onLoad( options ) {
    // wx.showToast({
    //   title: 'title',
    //   icon: 'loading...',//图标，支持"success"、"loading" 
    //   image: '/images/tan.png',//自定义图标的本地路径，image 的优先级高于 icon
    //   duration: 2000,//提示的延迟时间，单位毫秒，默认：1500 
    //   mask: false,//是否显示透明蒙层，防止触摸穿透，默认：false 
    //   success:function(r){
        
    //   },
    //   fail: function(e) {
        
    //   }
    // })
    // let _wxpromisify = wxpromisify(wx.showToast)
    // let obj = {
    //         title:"成功",
      
    //         icon: 'loading...',//图标，支持"success"、"loading" 
      
    //         image: '/images/tan.png',//自定义图标的本地路径，image 的优先级高于 icon
      
    //         duration: 2000,//提示的延迟时间，单位毫秒，默认：1500 
      
    //         mask: false,//是否显示透明蒙层，防止触摸穿透，默认：false 
      
    //         success:function(){},
      
    //         fail:function(){},
      
    //         complete:function(){}
    //       }
    // _wxpromisify(obj)
  },
  bindClick(){
    console.log(0)
    wx.reportAnalytics('test_example', {
      country: '中国',
      province: '海南省',
      city: '海口市',
      gender: '男'
    })
  }
})
