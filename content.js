
if(document != null){
	var button = document.createElement("button");
	button.style.cursor = "pointer";
	button.appendChild(document.createTextNode("YouTubeNotes"));
	button.addEventListener('click', function(){
		var a = addPanel();
		console.log(a);
	});
	document.getElementById('watch8-secondary-actions').appendChild(button);
}	
function addPanel(){
	var a = document.getElementById("mainPanel");
	if(a != null)
		return a;
	var videoContainer = document.getElementsByClassName("ytp-iv-video-content")[0];
	var sidePanel = document.createElement("div");
	sidePanel.appendChild(document.createElement("p").appendChild(document.createTextNode("dkjshdg")));
	sidePanel.id = "mainPanel";
	var theatreMode = document.getElementsByClassName("ytp-size-button")[0];
	theatreMode.onclick = function(){
		sidePanel.style.display = "none";
	}
	var fullMode = document.getElementsByClassName("ytp-fullscreen-button")[0];
	fullMode.onclick = function(){
		sidePanel.style.display = "none";
	}
	var sideBar = document.getElementById("watch7-sidebar-contents");
	sideBar.insertBefore(sidePanel, sideBar.firstChild);
	return sidePanel;
}

chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse){
		alert('sfkjsd');
		if(request.greeting == "hello"){
			sendResponse({farewell : "goodbye!!"});
		}
	}
);