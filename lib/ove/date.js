exports.apply = function(scope, exports, runtime){
	var fDate = function (format) { 
		var o = { 
			"M+": this.getMonth() + 1, //month 
			"d+": this.getDate(), //day 
			"h+": this.getHours(), //hour 
			"m+": this.getMinutes(), //minute 
			"s+": this.getSeconds(), //second 
			"q+": Math.floor((this.getMonth() + 3) / 3), //quarter 
			"S": this.getMilliseconds() //millisecond 
		} 
		if (/(y+)/.test(format)) { 
			format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length)); 
		} 
		for (var k in o) { 
			if (new RegExp("(" + k + ")").test(format)) { 
				format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)); 
			} 
		} 
		return format; 
	}
	exports.date = {
		format: function(df, format){
			return fDate.call(df, format)
		},
		now: function(){
			return new Date
		},
		create: function(x){
			return new Date(x)
		}
	}
}