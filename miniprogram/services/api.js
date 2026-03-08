const mockStations = [
  { id: 'S001', name: '南山科技园自助洗车点', distance: '1.2km', status: '空闲', lat: 22.5405, lng: 113.9345 },
  { id: 'S002', name: '后海滨路洗车站', distance: '2.8km', status: '使用中', lat: 22.5231, lng: 113.9432 },
  { id: 'S003', name: '白石洲智能洗车站', distance: '3.1km', status: '故障', lat: 22.5361, lng: 113.9541 }
];

const mockOrders = [
  { id: 'O2026001', station: '南山科技园自助洗车点', mode: '泡沫+高压水枪', amount: 9, payType: '会员扣次', time: '2026-03-01 09:14' },
  { id: 'O2026002', station: '后海滨路洗车站', mode: '清水冲洗', amount: 15, payType: '微信支付', time: '2026-02-26 18:22' }
];

function request(data) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), 300);
  });
}

module.exports = {
  getStations: () => request(mockStations),
  getOrders: () => request(mockOrders),
  redeemGroupCoupon: (code) =>
    request({ success: /^TG/.test(code), message: /^TG/.test(code) ? '核销成功，设备已启动' : '券码无效' })
};
