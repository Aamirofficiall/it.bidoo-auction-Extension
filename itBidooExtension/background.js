chrome.browserAction.onClicked.addListener(function() {
    chrome.windows.create({'url': 'redirect.html', 'type': 'popup'}, function(window) {
    });
 });