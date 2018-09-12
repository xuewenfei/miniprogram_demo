var types = ['default', 'primary', 'warn']
var pageObject = {
  data: {
    defaultSize: 'default',
    primarySize: 'default',
    warnSize: 'default',
    disabled: false,
    plain: false,
    loading: false,
    id: "1"
  },
  onLoad: function(options) {
    console.log('life-cycle onLoad options', options)
    if(options['id']) {
      this.setData({id: options['id']})
    }
    // Do some initialize when page load.
  },
  onReady: function() {
    console.log('life-cycle onReady')
    // Do something when page ready.
  },
  onShow: function() {
    console.log('life-cycle onShow')
    // Do something when page show.
  },
  onHide: function() {
    console.log('life-cycle onHide')
    // Do something when page hide.
  },
  onUnload: function() {
    console.log('life-cycle onUnload')
    // Do something when page close.
  },
  onPullDownRefresh: function() {
    // Do something when pull down.
  },
  onReachBottom: function() {
    // Do something when page reach bottom.
  },
  onShareAppMessage: function () {
    // return custom share data when user share.
  },
  onPageScroll: function() {
    // Do something when page scroll
  },
  onTabItemTap(item) {
    console.log(item.index)
    console.log(item.pagePath)
    console.log(item.text)
  },
  gotoNew1: function () {
    wx.navigateTo({
      url: '/page/component/pages/life-cycle/life-cycle?id=1'//实际路径要写全
    })
  },
  gotoNew2: function () {
    wx.navigateTo({
      url: '/page/component/pages/life-cycle/life-cycle?id=2'//实际路径要写全
    })
  },
  // Event handler.
  viewTap: function() {
    this.setData({
      text: 'Set some data for updating view.'
    }, function() {
      // this is setData callback
    })
  },
  setDisabled: function(e) {
    this.setData({
      disabled: !this.data.disabled
    })
  },
  setPlain: function(e) {
    this.setData({
      plain: !this.data.plain
    })
  },
  setLoading: function(e) {
    this.setData({
      loading: !this.data.loading
    })
  }
}

for (var i = 0; i < types.length; ++i) {
  (function(type) {
    pageObject[type] = function(e) {
      var key = type + 'Size'
      var changedData = {}
      changedData[key] =
        this.data[key] === 'default' ? 'mini' : 'default'
      this.setData(changedData)
    }
  })(types[i])
}

Page(pageObject)
