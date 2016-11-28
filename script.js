chrome.runtime.onMessage.addListener(function(R,S,A) {
	alert(R);
});
/*window.setTimeout(myfunction,1000);
function myfunction() {
  www.facebook.com
 
  chrome.tabs.query({
  	  active:true,
  	  lastFocusedWindow: true
  	  }, function(tabs) {
            var tab = tabs[0];
            if(tab.url.test(/www.facebook.com/i)) {
             chrome.runtime.sendMessage("Your 10 minutes are over close, u need to lognout now");
            }

  	  } 		
  });
  if(facebook.test("www.facebook.com")) {
      chrome.runtime.sendMessage("Your 10 minutes are over close, u need to lognout now");

  }else if(Quora.test("/www.quora.com/")) {
       chrome.runtime.sendMessage("Your 10 minutes are over close, u need to lognout now");

  }else {
  	   chrome.runtime.sendMessage("Your 10 minutes are over close, u need to lognout now");

  }
}*/
