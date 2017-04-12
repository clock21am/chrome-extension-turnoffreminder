var timer;
window.onblur = function () { 
 
clearInterval(timer);
   timer = window.setInterval(LinkedinLogout, 6000);

}; 

document.onclick= function() {
clearInterval(timer);
timer = window.setInterval(LinkedinLogout, 6000);
};

document.onmousemove = function() {
clearInterval(timer);
timer = window.setInterval(LinkedinLogout, 6000);
};


document.onkeydown = function() {
clearInterval(timer);
timer = window.setInterval(LinkedinLogout, 6000);
};


window.onfocus = function () { 
clearInterval(timer);
timer = window.setInterval(LinkedinLogout, 6000);
};

window.onscroll = function () { 
clearInterval(timer);
timer = window.setInterval(LinkedinLogout, 6000);
};


function LinkedinLogout() {
	var toggledownbutton = document.getElementById("nav-settings__dropdown-trigger");
	if(toggledownbutton==null){
		console.log("ok");
	}
	else{
		toggledownbutton.click();
		
		var signoutform = document.getElementsByTagName("a")[14];
		if(signoutform==null){
			alert("cannot logout");
		}else{
			signoutform.click();
		}
	}
}
