$(window).mouseleave(function(event) {
  if (event.toElement == null) {
		window.setTimeout(TwitterLogout,5000);    
  }
})
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