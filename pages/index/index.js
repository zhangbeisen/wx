Page({

  /**
   * 页面的初始数据
   */
  data: {
    //被点击首页导航的索引
    currentIndexNav:0,
    //首页导航栏数据
    navList:[],
    //轮播图数据
    swiperLists:[],
    videoList:[]
    
  },
  activeNav(e){
    this.setData({
      currentIndexNav:e.target.dataset.index
    })
  },
  getNavList(){
    let that = this;
    //使用小程序内置发送方法
    wx.request({
      url:"https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/navList",
      success(res){
        // console.log(res)
        if(res.data.code === 0){
          that.setData({
            navList : res.data.data.navList
          })
        }
      }
    })
  },
  getSwipetList(){
    let that = this;
    wx.request({
      url:"https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/swiperList",
      success(res){
        // console.log(res)
        if(res.data.code === 0){
          that.setData({
            swiperLists : res.data.data.swiperList
          })
        }
      }
    })
  },
  getVideoList(){
    let that = this;
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videosList',
      success(res){
        // console.log(res)
        if(res.data.code === 0){
          that.setData({
            videoList: res.data.data.videosList
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //1 获取首页导航数据
    this.getNavList(),
    //2 获取轮播图数据
    this.getSwipetList(),
    //3 获取视频列表
      this.getVideoList()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})