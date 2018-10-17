# 微信小程序Toast自定义组件

之前写过一个自定义组件[地址在这](https://blog.csdn.net/anzhen9/article/details/80593542)

今天重新写了一个，在第一个样式基础上新增了一个样式。

需要的参数比之前的多很多，后期可能会考虑优化

## 2018-10-17 更新
新增了个自定义样式cs使用的时候直接写在toast标签里就行,内容直接写css样式：<br>
注意:使用此标签后detail内的position自动失效；<br>
```xml
<button catchtap="showToast">显示</button>
<toast detail="{{toast}}" cs="width:690rpx;top:10rpx;left:30rpx;"></toast>
```
## 用法

在需要的页面的JSON里引入<br>
```json
{
    "usingComponents": {
    "toast": "(你的文件目录)/toast/toast"
  }
}
```
对应页面wxml中<br>
```xml
<button catchtap="showToast">显示</button>
<toast detail="{{toast}}"></toast>
```
对应页面js的data里toast空对象放不放都行<br>
在需要弹窗的方法里进行setData操作即可<br>
```js
Page({
    data:{

    },
    onLoad: function (options) {

    },
    showToast: function(){
        this.setData({
            toast: {
                text: '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
                flag: 'success',
                tc: '#000000',
                bgc:  '#ffffff',
                src: '/images/demo.gif',
                url: '/pages/logs/logs',
                style: 2,
                position: 'bottom',
                duration: 2000
            }
        })
    }
})
```
toast的参数多了不少，由当时的3个参数增加到9个参数<br>
emmmmmmmm后(lan)期(de)优化<br>
下边是各参数的定义，在toast自定义组件的js里也有介绍，demo里也有用法<br>
<table>
    <tr>
        <td>字段</td>
        <td>描述</td>
    </tr>
    <tr>
        <td>style</td>
        <td>弹窗样式：1浮动中央，2吸附边缘   默认1</td>
    </tr>
    <tr>
        <td>text</td>
        <td>提示内容</td>
    </tr>
    <tr>
        <td>duration</td>
        <td>显示时间  为0则永久显示 单位：毫秒   默认2000</td>
    </tr>
    <tr>
        <td>flag</td>
        <td>提示类型：success成功消息提示，warning警告消息提示，loading加载消息提示，none不显示   默认none</td>
    </tr>
    <tr>
        <td>bgc</td>
        <td>自定义背景色    style=2生效，使用css颜色值表示，如：#ff0000，rgb(255,0,0)，rgba(255,0,0,0.5)    默认空</td>
    </tr>
    <tr>
        <td>tc</td>
        <td>自定义文字色    style=2生效，使用css颜色值表示，如：#ff0000，rgb(255,0,0)，rgba(255,0,0,0.5)    默认空</td>
    </tr>
    <tr>
        <td>src</td>
        <td>自定义图像    style=1生效</td>
    </tr>
    <tr>
        <td>url</td>
        <td>跳转链接    style=2生效</td>
    </tr>
    <tr>
        <td>position</td>
        <td>弹窗位置：top顶部，bottom底部，center中间；   默认center  style=2时center等同top</td>
    </tr>
</table>
