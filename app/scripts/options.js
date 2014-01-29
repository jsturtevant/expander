/**
 * Created by jsturtevant on 1/18/14.
 */
var DEFAULT_SHORTCUT_KEY = 'ctrl+shift+k';
var LOCAL_STORAGE_KEY = 'optionsStore'

var defaultOptions = {
    shortcuts: [
        {key: "", value:""}
    ],
    shortcutKey: DEFAULT_SHORTCUT_KEY
};

var optionsApp = angular.module('optionsApp', []);

optionsApp.factory('OptionsData', function() {
    var optionsJSON = localStorage[LOCAL_STORAGE_KEY];

    if (!optionsJSON){
        return defaultOptions;
    }
    else{
        return JSON.parse(optionsJSON);
    }
});

function OptionsCtrl($scope, OptionsData){
    $scope.options = OptionsData;

    $scope.AddShortcut = function(){
      $scope.options.shortcuts.push({key: "", value:""})
    };

    $scope.Save = function(){
        localStorage[LOCAL_STORAGE_KEY] = JSON.stringify($scope.options);
    };
};
