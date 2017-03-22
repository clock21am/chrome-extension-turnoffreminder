var timer = window.setInterval(logout, 6000);

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