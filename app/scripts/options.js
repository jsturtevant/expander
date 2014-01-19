/**
 * Created by jsturtevant on 1/18/14.
 */


// Saves options to localStorage.
function save_options() {
    var keyElement = document.getElementById("expandKey");
    var valueElement = document.getElementById("expandValue");

    var options = {};
    options.shortcuts =[];
    options.shortcuts.push({'key': keyElement.value, 'value': valueElement.value});
    localStorage["options"] = JSON.stringify(options);

    // Update status to let user know options were saved.
    var status = document.getElementById("status");
    status.innerHTML = "Options Saved.";
    setTimeout(function() {
        status.innerHTML = "";
    }, 750);
}

// Restores select box state to saved value from localStorage.
function restore_options() {
    var optionsJSON = localStorage["options"];
    var options = JSON.parse(optionsJSON);

    var keyElement = document.getElementById("expandKey");
    var valueElement = document.getElementById("expandValue");

    keyElement.value = options.shortcuts[0].key;
    valueElement.value = options.shortcuts[0].value;
}
document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#save').addEventListener('click', save_options);