const api = require('../../services/api');

Page({
  data: {
    deviceCode: '',
    washModes: ['高压水枪', '泡沫', '清水', '风干'],
    selectedMode: '高压水枪',
    couponCode: ''
  },

  scanDevice() {
    wx.scanCode({
      success: (res) => this.setData({ deviceCode: res.result || 'DEV-DEMO-001' }),
      fail: () => this.setData({ deviceCode: 'DEV-DEMO-001' })
    });
  },

  chooseMode(e) {
    this.setData({ selectedMode: this.data.washModes[e.detail.value] });
  },

  startWash() {
    wx.showToast({ title: `已启动${this.data.selectedMode}`, icon: 'success' });
  },

  setCouponCode(e) {
    this.setData({ couponCode: e.detail.value.trim() });
  },

  async redeemCoupon() {
    const result = await api.redeemGroupCoupon(this.data.couponCode);
    wx.showToast({ title: result.message, icon: result.success ? 'success' : 'error' });
  }
});
