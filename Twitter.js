
var isActive;

window.onfocus = function () { 
  isActive = true; 
}; 

window.onblur = function () { 
  isActive = true; 
  var timer = window.setInterval(TwitterLogout, 6000);

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