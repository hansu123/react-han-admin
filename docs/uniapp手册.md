#uniapp

#### tab切换

一般用于登录后回到tab页面

```javascript
uni.switchTab({
url: "../my/my"
});
```





注意点

###

props对象默认

数组要写成Array，不要写成Object不然会报错

```js
props: {
			ListData: {
				type: Array,
				default(){
					return []
				}
			}
},
```

dom操作



不支持vue的自定义命令





####下拉刷新

pages.json中的style添加下拉属性

```js
"style": {
"navigationBarTitleText": "点检",
"enablePullDownRefresh": true
}
```

组件中添加对应方法

```js
 onPullDownRefresh() {
        
        setTimeout(function () {
            uni.showToast({
							title:"已是最新数据"
						});
            uni.stopPullDownRefresh();
						
        }, 1000);
}
```

跳转之前的页面

```js
uni.navigateBack({
delta:1
})
```





####自定义导航栏

demo

```js
"style": {
"app-plus": {
"bounce": "none", //关闭窗口回弹效果
"titleNView": {
"buttons": [ //原生标题栏按钮配置,
{
	
		"type":"menu",
		"float":"right"
},
{
		"type":"back",
		"float":"left"
		}
]
}}
}
```

titleNview配置

* 添加文本（附带下拉icon）

```
 "text":"北京市","fontSize":"14","select":true,"width":"auto"
```

* 添加原生按钮

```js
"buttons": [ //原生标题栏按钮配置,
{
	
		"type":"menu",
		"float":"right"
},
{
		"type":"back",
		"float":"left"
		}
]
```

* 自定义图片

```js
"tags":[{"tag":"img","src":"./static/icons/QQ.png","position": {"right":"20upx","top":"10upx","width":"30px","height":"30px"}}]
```

导航button点击事件(只有button可以)

可以在对应页面监听：

```js
onNavigationBarButtonTap(ret) {
			// console.log(JSON.stringify(ret))
			this.isShowMenu = !this.isShowMenu;
},
```

更多功能请参考

[uniapp导航设计](<https://uniapp.dcloud.io/collocation/pages?id=app-plus>)



