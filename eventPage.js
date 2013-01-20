chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.executeScript(tab.tabId, { file: 'contentscript.js' }, function() {
		console.log('injected');
	});
});
