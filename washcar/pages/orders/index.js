const api = require('../../services/api');

Page({
  data: { orders: [] },
  async onShow() {
    const orders = await api.getOrders();
    this.setData({ orders });
  }
});
