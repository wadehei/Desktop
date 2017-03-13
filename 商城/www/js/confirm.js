function Confirm(message, action1, action2){
	Alert.call(this, message, action1)
	this.cancelAction = action2
}

Confirm.prototype = Object.create(Alert.prototype)
Confirm.prototype.constructor = Confirm

//重写showButton方法，在按扭框中生成“确定”和“取消”按扭
Confirm.prototype.showButton = function(){
	var btnBox = document.querySelector('.modal-button-box')
	var separator = document.createElement('span')
	separator.className = 'modal-separator'
	btnBox.appendChild(separator)
	
	var action1 = document.createElement('span')
	action1.innerText = '确定'
	action1.className = 'modal-left-button'
	btnBox.appendChild(action1)
	
	var action2 = document.createElement('span')
	action2.innerText = '取消'
	action2.className = 'modal-right-button'
	btnBox.appendChild(action2)
	
	var me = this
	action1.onclick = function(){
		me.close()
		if(typeof me.action === 'function'){
			me.action()
		}
	}
	action2.onclick = function(){
		me.close()
		if(typeof me.cancelAction === 'function'){
			me.cancelAction()
		}
	}
}
