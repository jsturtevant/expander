'use strict';
/**
 * Created by jsturtevant on 1/18/14.
 */
var options = {};

chrome.runtime.sendMessage({method: "getOptions"}, function(response) {
    options = response.options;

    Mousetrap.bind(options.shortcutKey, function(e) {
        var textboxes = selectElements();
        expandAlShortCutOccurrences(textboxes);
        return false;
    });
});

function expandAlShortCutOccurrences(elements) {
    elements.forEach(function (element) {
        replaceAllShortcuts(element);
    });
};

function replaceAllShortcuts(textbox) {
    options.shortcuts.forEach(function (shortcut) {
        var string = textbox.value;
        textbox.value = string.replace(shortcut.key, shortcut.value);
    });
};

function selectElements() {
    var elementList = document.querySelectorAll('input[type=text], textarea');
    var textboxes = Array.prototype.slice.call(elementList, 0);
    return textboxes;
};

Mousetrap.stopCallback =function(e, element, combo) {
    // if the element has the class "mousetrap" then no need to stop
    if ((' ' + element.className + ' ').indexOf(' mousetrap ') > -1) {
        return false;
    }

    // stop for input, select, and textarea
    return  element.tagName == 'SELECT' || (element.contentEditable && element.contentEditable == 'true');
};

