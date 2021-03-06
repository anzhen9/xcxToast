const app = getApp()

Page({
  data: {
    toastTemp: {
      text: '',
      flag: 'none',
      bgc: '',
      tc: '',
      src: '',
      url: '',
      style: 1,
      position: 'center',
      duration: 2000
    }
  },
  
  onLoad: function () {
    
  },
  selectStyle(e){
    var toastTemp = this.data.toastTemp;
    toastTemp.style = e.detail.value;
    this.setData({
      toastTemp: toastTemp
    })
  },
  changeText(e){
    var toastTemp = this.data.toastTemp;
    toastTemp.text = e.detail.value;
    this.setData({
      toastTemp: toastTemp
    })
  },
  changeDuration(e){
    var toastTemp = this.data.toastTemp;
    toastTemp.duration = e.detail.value;
    this.setData({
      toastTemp: toastTemp
    })
  },
  selectFlag(e){
    var toastTemp = this.data.toastTemp;
    toastTemp.flag = e.detail.value;
    this.setData({
      toastTemp: toastTemp
    })
  },
  changeBgc(e) {
    var toastTemp = this.data.toastTemp;
    toastTemp.bgc = e.detail.value;
    this.setData({
      toastTemp: toastTemp
    })
  },
  changeTc(e) {
    var toastTemp = this.data.toastTemp;
    toastTemp.tc = e.detail.value;
    this.setData({
      toastTemp: toastTemp
    })
  },
  changeStyle(e){
    this.setData({
      style: e.detail.value
    })
  },
  changeSrc(e) {
    var toastTemp = this.data.toastTemp;
    toastTemp.src = e.detail.value ? '/images/demo.gif' : '';
    this.setData({
      toastTemp: toastTemp
    })
  },
  changeUrl(e) {
    var toastTemp = this.data.toastTemp;
    toastTemp.url = e.detail.value ? '/pages/logs/logs' : '';
    this.setData({
      toastTemp: toastTemp
    })
  },
  selectPosition(e) {
    var toastTemp = this.data.toastTemp;
    toastTemp.position = e.detail.value;
    this.setData({
      toastTemp: toastTemp
    })
  },
  showToast(){
    app.showToast(this.data.toastTemp,()=>{
      console.group('封装了个回调',new Date())
      console.log('有空扔组件里，现在先放在app.js封装里')
    });
  }
})
