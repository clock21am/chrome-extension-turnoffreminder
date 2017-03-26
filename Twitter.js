
var timer;
window.onblur = function () { 
 
clearInterval(timer);
   timer = window.setInterval(TwitterLogout, 6000);

}; 

document.onclick= function() {
clearInterval(timer);
timer = window.setInterval(TwitterLogout, 6000);
};

document.onmousemove = function() {
clearInterval(timer);
timer = window.setInterval(TwitterLogout, 6000);
};


document.onkeydown = function() {
clearInterval(timer);
timer = window.setInterval(TwitterLogout, 6000);
};
document.onscroll = function() {
clearInterval(timer);
timer = window.setInterval(TwitterLogout, 6000);
};

window.onfocus = function () { 
clearInterval(timer);
timer = window.setInterval(TwitterLogout, 6000);
};



function TwitterLogout() {
	var toggledownbutton = document.getElementById("user-dropdown-toggle");
	if(toggledownbutton==null){
		console.log("ok");
	}
	else{
		toggledownbutton.click();
		var signoutform = document.getElementById("signout-form");
		if(signoutform==null){
			alert("cannot logout");
		}else{
			signoutform.submit();
		}
	}
}
