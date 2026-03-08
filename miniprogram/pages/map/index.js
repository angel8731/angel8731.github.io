const api = require('../../services/api');

Page({
  data: {
    stations: []
  },

  async onShow() {
    const stations = await api.getStations();
    this.setData({ stations });
  },

  navToStation(e) {
    const { lat, lng, name } = e.currentTarget.dataset;
    wx.openLocation({ latitude: Number(lat), longitude: Number(lng), name, scale: 16 });
  }
});
