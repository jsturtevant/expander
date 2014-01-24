/**
 * Created by jsturtevant on 1/18/14.
 */
var DEFAULT_SHORTCUT_KEY = 'ctrl+shift+k';

var defaultOptions = {
    shortcuts: [
        {key: "", value:""}
    ],
    shortcutKey: DEFAULT_SHORTCUT_KEY
};

var myApp = angular.module('myApp', []);
myApp.factory('Data', function() {
    var optionsJSON = localStorage["optionsstore"];
    if (!optionsJSON){
        return defaultOptions;
    }
    else{
        return JSON.parse(optionsJSON);
    }
})

function OptionsCtrl($scope, Data){
    $scope.options = Data;

    $scope.AddShortcut = function(){
      $scope.options.shortcuts.push({key: "", value:""})
    };

    $scope.Save = function(){
        localStorage["optionsstore"] = JSON.stringify($scope.options);
    };
};
