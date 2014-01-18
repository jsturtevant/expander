/**
 * Created by jsturtevant on 1/18/14.
 */


// Saves options to localStorage.
function save_options() {
    var keyElement = document.getElementById("expandKey");
    var valueElement = document.getElementById("expandValue");
    var key = keyElement.value;
    localStorage["expandKey"] =key;

    key = valueElement.value;
    localStorage["expandValue"] =key;

    // Update status to let user know options were saved.
    var status = document.getElementById("status");
    status.innerHTML = "Options Saved.";
    setTimeout(function() {
        status.innerHTML = "";
    }, 750);
}

// Restores select box state to saved value from localStorage.
function restore_options() {
    var key = localStorage["expandKey"];
    var value = localStorage["expandValue"];

    var keyElement = document.getElementById("expandKey");
    var valueElement = document.getElementById("expandValue");

    keyElement.value = key;
    valueElement.value = value;
}
document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#save').addEventListener('click', save_options);