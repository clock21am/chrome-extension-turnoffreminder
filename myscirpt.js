function launch() {
 chrome.app.window.create('popup.html',{
             innerBounds: {
             	 width: 500,
                 height: 415
             },
             
});
}
chrome.app.runtime.onLaunched.addListener(launch);
