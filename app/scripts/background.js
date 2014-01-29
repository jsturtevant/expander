'use strict';

chrome.runtime.onInstalled.addListener(function (details) {
    console.log('previousVersion', details.previousVersion);
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.method == "getOptions")
        sendResponse({options: JSON.parse(localStorage[LOCAL_STORAGE_KEY])});
    else
        sendResponse({});
});