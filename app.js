//app.js
App({
  onLaunch: function () {
    
  },
  globalData: {
    userInfo: null
  },
  showToast: function (param, callback) {
    var pages = getCurrentPages();
    var currentPage = pages[pages.length - 1];
    var toast = {
      text: param.text || '',
      flag: param.flag || 'none',
      bgc: param.bgc || '',
      tc: param.tc || '',
      src: param.src || '',
      url: param.url || '',
      style: param.style || 1,
      position: param.position || 'center',
      duration: param.duration || 2000
    };
    if (typeof callback == 'function') {
      currentPage.setData({
        toast: toast
      }, callback);
    } else {
      currentPage.setData({
        toast: toast
      });
    }
  },
})