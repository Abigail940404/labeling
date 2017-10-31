var masker;
var position;
var wId = 'w';
var index = 0;
var startX = 0, startY = 0;
var flag = false;
var rectLeft = "0px", rectTop = "0px", rectHeight = "0px", rectWidth = "0px";
var arr;
DrawRectangle = function(id){
	  masker = document.getElementById(id);
//    document.oncontextmenu=function() {    
//       return true;    
//    };//禁用右键         
//    IMG = document.getElementById(id);          
//    masker = document.createElement("div");  
//    masker.id = id;  
//    //position = getAbsolutePosition(this.IMG);    
//    masker.style.width = IMG.style.width;  
//    masker.style.height = IMG.style.height;  
//    masker.style.left = IMG.style.left;  
//    masker.style.top = IMG.style.top;  
//    masker.style.backgroundImage = IMG.style.backgroundImage;    
//    IMG.parentNode.appendChild(masker); 
//    console.log(masker)
//    IMG.parentNode.removeChild(IMG);
      
//    position = getAbsolutePosition(this.IMG);    
//    masker.style.width = position.width + "px";  
//    masker.style.height = position.height + "px";  
//    masker.style.left = position.left;  
//    masker.style.top = position.top;  
//    masker.style["background-image"] = "url("+this.IMG.src+")";  
//    this.masker = masker;  
//    this.IMG.parentNode.appendChild(masker);  
//    this.IMG.parentNode.removeChild(this.IMG);
};  

getAbsolutePosition = function(obj){    
	var t = obj.offsetTop;    
	var l = obj.offsetLeft;    
	var w = obj.offsetWidth;    
	var h = obj.offsetHeight;    
		
	while (obj = obj.offsetParent) {    
		t += obj.offsetTop;    
		l += obj.offsetLeft;    
	}    
		
	return {    
		top: t,    
		left: l,    
		width: w,    
		height: h    
	};  
} 
function myFunction(){
	flag = true;
	if(evt.clientX>=masker.offsetLeft||evt.clientY>=masker.offsetTop){
		var evt = window.event;
		var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
		var scrollLeft = document.body.scrollLeft || document.documentElement.scrollLeft;
		startX = evt.clientX + scrollLeft;
		startY = evt.clientY + scrollTop;
		index++;
		var div = document.createElement("div");
		div.id = wId + index;
		div.className = "div";
		div.style.marginLeft = startX + "px";
		div.style.marginTop = startY + "px";
		masker.appendChild(div);
		pos1.innerHTML +=" ("+startX+","+(startY - 50)+")";
	}
	
};   
document.onmousedown = function(){
	try{
	var evt = window.event || e;
	//限定在图的区域内
	if((evt.clientX>=masker.offsetLeft)&&(evt.clientX<=(masker.offsetLeft+parseInt(masker.style.width)))
	    &&(evt.clientY>=masker.offsetTop)&&(evt.clientY<=(masker.offsetTop+parseInt(masker.style.height)))){
		flag = true;			
		var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
		var scrollLeft = document.body.scrollLeft || document.documentElement.scrollLeft;
		startX = evt.clientX + scrollLeft;
		startY = evt.clientY + scrollTop;
		index++;
		var div = document.createElement("div");
		div.id = wId + index;
		div.className = "div";
		div.style.marginLeft = startX + "px";
		div.style.marginTop = startY + "px";
		masker.appendChild(div);
		//pos1.innerHTML +=" ("+startX+","+(startY - masker.offsetTop)+")";
		//console.log("clientY: "+evt.clientY+" offsetTop: "+masker.offsetTop);
		//console.log(scrollLeft);
	}
	}catch(e){
		alert("mousedown:"+e);
	}
	
};

document.onmouseup = function(e){
	var evt = window.event || e;
	if(flag){
	try{
		if((evt.clientX>=masker.offsetLeft)&&(evt.clientX<=(masker.offsetLeft+parseInt(masker.style.width)))
	    &&(evt.clientY>=masker.offsetTop)&&(evt.clientY<=(masker.offsetTop+parseInt(masker.style.height)))){
		masker.removeChild(m(wId + index));
		var div = document.createElement("div");
		div.className = "rect";
		div.style.marginLeft = (rectLeft - masker.offsetLeft) + "px";
		div.style.marginTop = (rectTop - masker.offsetTop) + "px";
		div.style.width = rectWidth+ "px";
		div.style.height = rectHeight+ "px";
		masker.appendChild(div);
		//pos2.innerHTML+=" 长: "+ rectWidth +" 高: "+rectHeight;
		hold();
		}else{
			masker.removeChild(m(wId + index));
		}
	}catch(e){
		alert("mouseup:"+e);
	}
	flag = false;
	}
}
document.onmousemove = function(e){
	if(flag){
		try{
		var evt = window.event || e;
		var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
		var scrollLeft = document.body.scrollLeft || document.documentElement.scrollLeft;
		rectLeft = startX - evt.clientX - scrollLeft > 0 ? evt.clientX + scrollLeft : startX;
		rectTop = startY - evt.clientY - scrollTop > 0 ? evt.clientY + scrollTop : startY;
		rectHeight = Math.abs(startY - evt.clientY - scrollTop);
		rectWidth = Math.abs(startX - evt.clientX - scrollLeft);
		m(wId + index).style.marginLeft = rectLeft+ "px";
		m(wId + index).style.marginTop = rectTop+ "px";
		m(wId + index).style.width = rectWidth+ "px";
		m(wId + index).style.height = rectHeight+ "px";
		}catch(e){
		  alert("mousemove:"+e);
		}	
	}
}
hold = function(){
	arr = {
	"startX":startX - masker.offsetLeft,
	"startY":startY - masker.offsetTop,
	"rectWidth":rectWidth,
	"rectHeight":rectHeight
};
	arr = JSON.stringify(arr);
	localStorage.setItem("temp", arr);
	console.log(localStorage.getItem("temp"));
}	
var m = function(id){
	return document.getElementById(id);
}