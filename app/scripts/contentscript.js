'use strict';
/**
 * Created by jsturtevant on 1/18/14.
 */
var key = "";
var value = "";

chrome.runtime.sendMessage({method: "getOptions"}, function(response) {
    key = response.options.shortcuts[0].key;
    value = response.options.shortcuts[0].value;
});

Mousetrap.stopCallback =function(e, element, combo) {

    // if the element has the class "mousetrap" then no need to stop
    if ((' ' + element.className + ' ').indexOf(' mousetrap ') > -1) {
        return false;
    }

    // stop for input, select, and textarea
    return  element.tagName == 'SELECT' || element.tagName == 'TEXTAREA' || (element.contentEditable && element.contentEditable == 'true');
}

Mousetrap.bind('ctrl+shift+k', function(e) {
    //document.body.style.backgroundColor="red";

    var elementList = document.querySelectorAll('input[type=text]');
    var textboxes = Array.prototype.slice.call(elementList,0);
    textboxes.forEach(function(textbox){
        var string = textbox.value;

        if (string.match(key)){
            var newValue = string.replace(key, value);
            textbox.value = newValue;
        }
    });

    return false;
});