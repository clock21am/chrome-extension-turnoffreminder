var timer;
window.onblur = function () { 
 
clearInterval(timer);
   timer = window.setTimeout(FacebookLogout, 6000);

}; 

document.onclick= function() {
clearInterval(timer);
timer = window.setTimeout(FacebookLogout, 6000);
};

document.onmousemove = function() {
clearInterval(timer);
timer = window.setTimeout(FacebookLogout, 6000);
};


document.onkeydown = function() {
clearInterval(timer);
timer = window.setTimeout(FacebookLogout, 6000);
};


window.onfocus = function () { 
clearInterval(timer);
timer = window.setTimeout(FacebookLogout, 6000);
};

function FacebookLogout() {

	//var insertedNodes = [];
	
	var logout;
    
    var observer = new WebKitMutationObserver(function(mutations) {
             mutations.forEach(function(mutation) {
             for (var i = 0; i < mutation.addedNodes.length; i++)
                      insertedNodes.push(mutation.addedNodes[i]);
                       console.log(mutation.addedNodes[i]);
             })
             
             logout = document.getElementsByClassNvar timer;
window.onblur = function () { 
 
clearInterval(timer);
   timer = window.setTimeout(FacebookLogout, 6000);

}; 

document.onclick= function() {
clearInterval(timer);
timer = window.setTimeout(FacebookLogout, 6000);
};

document.onmousemove = function() {
clearInterval(timer);
timer = window.setTimeout(FacebookLogout, 6000);
};


document.onkeydown = function() {
clearInterval(timer);
timer = window.setTimeout(FacebookLogout, 6000);
};


window.onfocus = function () { 
clearInterval(timer);
timer = window.setTimeout(FacebookLogout, 6000);
};

function FacebookLogout() {

	//var insertedNodes = [];
	
	var logout;
    
    var observer = new WebKitMutationObserver(function(mutations) {
             mutations.forEach(function(mutation) {
             for (var i = 0; i < mutation.addedNodes.length; i++)
                      insertedNodes.push(mutation.addedNodes[i]);
                       console.log(mutation.addedNodes[i]);
             })
             
             logout = document.getElementsByClassName("_w0d")[0];

             if(logout!=null){
    	             observer.disconnect();
			         console.log("llll");
			         logout.submit();
	         }
    
            
    
    });
     observer.observe(document, { 
    	            childList: true,
    	            subtree : true,
    	            characterData: true,
    	            attributes: true
    });

	var logoutbutton = document.getElementById("userNavigationLabel");
	
	if(logoutbutton == null){
		 
		 console.log("it is nessa's code");
	
	} else {
		
		//alert("we need to logout now");
		logoutbutton.click();
	}
    
}
     
    ame("_w0d")[0];

             if(logout!=null){
    	             observer.disconnect();
			         console.log("llll");
			         logout.submit();
	         }
    
            
    
    });
     observer.observe(document, { 
    	            childList: true,
    	            subtree : true,
    	            characterData: true,
    	            attributes: true
    });

	var logoutbutton = document.getElementById("userNavigationLabel");
	
	if(logoutbutton == null){
		 
		 console.log("it is nessa's code");
	
	} else {
		
		alert("we need to logout now");
		logoutbutton.click();
	}
    
}
     
    
