(function(){
		// 数据
		var data = [
			{img: 1, h2: "Careay", h3: "HOME"},
			{img: 2, h2: "Loving", h3: "ABOUT"},
			{img: 3, h2: "Hateing", h3: "BLOG"},
			{img: 4, h2: "Fucking", h3: "FRIEND"},
			{img: 5, h2: "Friendly", h3: "DUET"},
			{img: 6, h2: "CaptionH2", h3: "SEEKER"}
		];
		// 通用方法
		var g = function(id){
			if (id.substr(0, 1) == ".") {
				return document.getElementsByClassName(id.substr(1));
			}else{
				return document.getElementById(id);
			};
		};
		// 构建html
		function addSlider(){
			// 获取模板
			var tempMain = g('tempMain').innerHTML.replace(/^\s*/, '').replace(/\s*$/, '');
			var tempCtrl = g('tempCtrl').innerHTML.replace(/^\s*/, '').replace(/\s*$/, '');
			//定义最终模板变量
			var outMain = [];
			var outCtrl = [];
			//遍历，构建最终输出HTML
			for(i in data){
				var _htmlMain = tempMain.replace( /{{index}}/g, data[i].img).replace( /{{h2}}/g, data[i].h2).replace( /{{h3}}/g, data[i].h3);
				var _htmlCtrl = tempCtrl.replace( /{{index}}/g, data[i].img);
				outMain.push(_htmlMain);
				outCtrl.push(_htmlCtrl);
			}
			g('tempMain').innerHTML = outMain.join('');
			g('tempCtrl').innerHTML = outCtrl.join('');
		};
		//切换方法
		function switchSlider(n){
			var main = g('main-' + n);
			var ctrl = g('control-' + n);
			var clearMain = g('.main-i');
			var clearCtrl = g('.control-i');
			for (var i = 0; i < clearCtrl.length; i++) {
				clearCtrl[i].className = clearCtrl[i].className.replace('active', '');
				clearMain[i].className = clearMain[i].className.replace('active', '');
			};
			main.className += ' active';
			ctrl.className += ' active';
		}
		window.onload = function(){
			addSlider();
			switchSlider(1);
		};
})()
