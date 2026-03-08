Page({
  data: {
    currentPlate: '粤B12345',
    membership: {
      level: 'VIP',
      remainTimes: 8,
      expireAt: '2026-04-01'
    },
    quickActions: [
      { name: '扫码启动', path: '/pages/scan/index' },
      { name: '附近网点', path: '/pages/map/index' },
      { name: '会员中心', path: '/pages/member/index' },
      { name: '团购核销', path: '/pages/scan/index?tab=coupon' }
    ]
  },

  goAction(e) {
    wx.navigateTo({ url: e.currentTarget.dataset.path });
  }
});
