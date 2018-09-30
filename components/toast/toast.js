/**
 * 提醒消息弹窗
 * @param   style       弹窗样式：1浮动中央，2吸附边缘   默认1
 * @param   text        提示内容
 * @param   duration    显示时间  为0则永久显示 单位：毫秒   默认2000
 * @param   flag        提示类型：success成功消息提示，warning警告消息提示，loading加载消息提示，none不显示   默认none
 * @param   bgc         自定义背景色    style=2生效，使用css颜色值表示，如：#ff0000，rgb(255,0,0)，rgba(255,0,0,0.5)    默认空
 * @param   tc          自定义文字色    style=2生效，使用css颜色值表示，如：#ff0000，rgb(255,0,0)，rgba(255,0,0,0.5)    默认空
 * @param   src         自定义图像    style=1生效
 * @param   url         跳转链接    style=2生效
 * @param   position    弹窗位置：top顶部，bottom底部，center中间；   默认center  style=2时center等同top
 */
const app = getApp();
var isPlainObject = obj => {
  for (var name in obj) {
    return false;
  }
  return true;
}
Component({
  properties: {
    detail: {
      type: Object,
      value: {
        text: '',
        flag: 'none',
        bgc: '',
        tc: '',
        src: '',
        url: '',
        style: 1,
        position: 'center',
        duration: 2000
      },
      observer: (newVal, oldVal) => {
        if (!isPlainObject(newVal)) {
          let pages = getCurrentPages();
          let page = pages[pages.length - 1];
          var duration = typeof parseInt(newVal.duration) == 'number' ? parseInt(newVal.duration) : 2000;
          if (duration > 0) {
            setTimeout(() => {
              page.setData({
                toast: {}
              })
            }, duration);
          }
        }
      }
    }
  },
  data: {

  },
  methods: {
    hideToast() {
      let pages = getCurrentPages();
      let page = pages[pages.length - 1];
      page.setData({
        toast: {}
      })
    },
    turnToPage() {
      var url = this.data.detail.url;
      if (url) {
        var tabBar = '';//tabBar页面,多个页面之间用逗号隔开
        if (tabBar.indexOf(url) != -1) {
          wx.switchTab({
            url: url,
          })
          return;
        }
        wx.navigateTo({
          url: url
        })
      }
    }
  }
})
