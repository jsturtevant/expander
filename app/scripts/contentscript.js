'use strict';
/**
 * Created by jsturtevant on 1/18/14.
 */
var options = {};

chrome.runtime.sendMessage({method: "getOptions"}, function(response) {
    options = response.options

    Mousetrap.bind(options.shortcutKey, function(e) {
        var elementList = document.querySelectorAll('input[type=text]');
        var textboxes = Array.prototype.slice.call(elementList,0);
        textboxes.forEach(function(textbox){
            var string = textbox.value;

            if (string.match(options.shortcuts[0].key)){
                var newValue = string.replace(options.shortcuts[0].key,options.shortcuts[0].value);
                textbox.value = newValue;
            }
        });

        return false;
    });
});

Mousetrap.stopCallback =function(e, element, combo) {
    // if the element has the class "mousetrap" then no need to stop
    if ((' ' + element.className + ' ').indexOf(' mousetrap ') > -1) {
        return false;
    }

    // stop for input, select, and textarea
    return  element.tagName == 'SELECT' || element.tagName == 'TEXTAREA' || (element.contentEditable && element.contentEditable == 'true');
}

