App({
  globalData: {
    userInfo: null,
    token: '',
    currentVehicle: '粤B12345',
    apiBaseUrl: 'https://api.carwash.example.com'
  },

  onLaunch() {
    const logs = wx.getStorageSync('logs') || [];
    logs.unshift(Date.now());
    wx.setStorageSync('logs', logs);
  }
});
