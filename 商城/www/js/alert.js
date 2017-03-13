function Alert(message, action){
	this.message = message
	this.action = action
	
//	首先传入一个函数而不执行它
//	在内部保留这个函数，当内部处理完毕之后再回过头来调用这个函数
//	通知外部已经完成处理
//	这种函数通常称为回调函数 callback
}

Alert.prototype.showMask = function(){
	document.documentElement.style.overflow = 'hidden'
	
//	没有直接指定style样式，而是只指定了样式类名称
//	将样式分离到单独的样式表中：
//	可以随时修改样式而不需要修改代码
//	即使不懂代码也可以修改样式
//	js代码量也减少了
	var mask = document.createElement('div')
	mask.className = 'modal-mask'
	document.body.appendChild(mask)
}
Alert.prototype.showBody = function(){
	var box = document.createElement('div')
	box.className = 'modal-box'
	document.body.appendChild(box)
	
	// 保持对弹出框引用
	// 以便之后控制弹出框或从弹出框获取信息
	this.ele = box
	
	var msg = document.createElement('div')
	msg.className = 'modal-message'
	msg.innerText = this.message
	box.appendChild(msg)
	
	// 允许在消息文字下方显示更多内容
	this.showContent(box)	
	
	var btnBox = document.createElement('div')
	btnBox.className = 'modal-button-box'
	box.appendChild(btnBox)
}

// Alert不需显示更多内容，
// 但子类可以决定显示更多内容
Alert.prototype.showContent = function (box) {
	
}

Alert.prototype.showButton = function(){
	var btn = document.createElement('div')
	btn.innerText = '确定'
	document.querySelector('.modal-button-box').appendChild(btn)
	
//	var action = this.action.bind(this)
//	var close = this.close
	var self = this
	
	btn.onclick = function(ev){
		//关闭弹出层
		self.close()
		
//		判断self.action是否有值，并是否是一个函数
		if(typeof self.action === 'function'){
			self.action()
		}
		
//		因为事件处理函数中的this指向当前监听事件的标签
//		所以在这个函数中无法使用this表示Alert对象
//		但是我们可以使用一个变量来代替this！
//		这个变量就是self
	}
	
//	btn.onclick = this.action.bind(this)
}
Alert.prototype.close = function(){
	var mask = document.querySelector('.modal-mask')
	var box = document.querySelector('.modal-box')
	
	document.body.removeChild(mask)
	document.body.removeChild(box)
	
	document.documentElement.style.overflow = 'auto'
}
Alert.prototype.show = function(){
	this.showMask()
	this.showBody()
	this.showButton()
//	将创建遮罩层、弹出框等代码分成小函数
//	以方便在Confirm中调用，从而减少代码重复
}
