Page({
  data: {
    plans: [
      { name: '月卡', price: 29, desc: '每月10次洗车' },
      { name: '次卡', price: 99, desc: '10次洗车有效期180天' },
      { name: 'VIP会员', price: 199, desc: '每次优惠/优先使用/积分翻倍' }
    ],
    rechargeActivities: [
      '充100送20',
      '充300送80'
    ]
  },

  buyPlan(e) {
    const plan = e.currentTarget.dataset.plan;
    wx.showToast({ title: `已下单${plan.name}`, icon: 'success' });
  }
});
