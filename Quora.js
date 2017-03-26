

var isActive;
var timer;
window.onblur = function () { 
  isActive = true; 
clearInterval(timer);
   timer = window.setInterval(logout, 6000);

}; 


window.onfocus = function () { 
  isActive = true; 
clearInterval(timer);

 timer = window.setInterval(logout, 600000);


document.onmousemove = function() {
clearInterval(timer);
   timer = window.setInterval(logout, 60000);
}

document.onmouseout = function() {
clearInterval(timer);
   timer = window.setInterval(logout, 6000);
}

};
function logout() {
	var toggledownbutton = document.getElementsByClassName("selector_input text")[0];
	if(toggledownbutton==null){
		console.log("ok");
	}
	else{
		var signoutform = document.getElementsByTagName("form")[0];
		if(signoutform==null){
			alert("cannot logout");
		}else{
			signoutform.submit();
		}
	}
}
