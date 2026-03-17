Page({
  data: {
    user: {
      name: '张晓明',
      phone: '+86 138 **** 5678'
    },
    services: [
      { name: '团购验券', icon: '🎫', bg: '#ebe6d4', path: '/pages/scan/index?tab=coupon' },
      { name: '账户充值', icon: '🪪', bg: '#f1e2de', path: '/pages/member/index' },
      { name: '停车领券', icon: '🅿️', bg: '#dee3f3', path: '/pages/member/index?tab=parking' },
      { name: '洗车教程', icon: '▶️', bg: '#eadcf2', path: '/pages/profile/index?tab=tutorial' }
    ],
    stores: [
      {
        name: '廊坊大厂厂祁各庄八百户二分店',
        distance: '47.12KM',
        price: '7元/10分钟',
        total: '总舱位5',
        inUse: '使用中1',
        address: '廊坊市大厂回族自治县祁各庄镇'
      },
      {
        name: '大厂祁各庄小八百户店',
        distance: '47.95KM',
        price: '7元/10分钟',
        total: '总舱位5',
        inUse: '使用中1',
        address: '廊坊市大厂回族自治县小八百户'
      },
      {
        name: '廊坊大厂夏店102国道双星园对面',
        distance: '55.97KM',
        price: '7元/10分钟',
        total: '总舱位5',
        inUse: '使用中1',
        address: '廊坊市大厂回族自治县102国道'
      }
    ]
  },

  goAction(e) {
    const { path } = e.currentTarget.dataset;
    wx.navigateTo({ url: path });
  },

  navigateStore(e) {
    const { index } = e.currentTarget.dataset;
    const store = this.data.stores[index];
    wx.showToast({
      title: `导航到${store.name}`,
      icon: 'none'
    });
  },

  onTapNotice() {
    wx.showToast({ title: '暂无新通知', icon: 'none' });
  },

  onTapSearch() {
    wx.navigateTo({ url: '/pages/map/index' });
  }
});
