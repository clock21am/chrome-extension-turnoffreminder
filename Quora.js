var timer;
window.onblur = function () { 
 
clearInterval(timer);
   timer = window.setInterval(logout, 6000);

}; 

document.onclick= function() {
clearInterval(timer);
timer = window.setInterval(logout, 6000);
};

document.onmousemove = function() {
clearInterval(timer);
timer = window.setInterval(logout, 6000);
};


document.onkeydown = function() {
clearInterval(timer);
timer = window.setInterval(logout, 6000);
};
document.onscroll = function() {
clearInterval(timer);
timer = window.setInterval(logout, 6000);
};

window.onfocus = function () { 
clearInterval(timer);
timer = window.setInterval(logout, 6000);
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
