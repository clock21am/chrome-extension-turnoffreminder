window.setTimeout(FacebookLogout,1000);

function FacebookLogout() {
	var observer = new MutationObserver(function(mutations) {
    	 mutations.forEach(function(mutation)) {
    	 	 console.log(mutation.type);
    	 });
    });
    var config = { 
           attributes: true,
           childList: true,
           characterData: true
    };
    observer.observe(loginform,config);
	var accountsettings = document.getElementById("userNavigationLabel");
	if(accountsettings === null) {
			alert("Oops we are experencing some error");
    } else {
            alert("You need to logout now");
    	    accountsettings.click();
            var logout = document.getElementById("js_18").querySelectorAll('[data-gt]');
            for( var i = 0; i < logout.length; i++) {
            	    var self = logout[i];
                    var att = self.getAttribute('data-gt');
                    var attjson = JSON.parse(att);
                    if(attjson.logout_menu_click === "menu_logout") {
                    	 logout[i].click();
                    	 break;
                    }  
            }
    }
    observe.disconnect();
}

     
    