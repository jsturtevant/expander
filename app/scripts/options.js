/**
 * Created by jsturtevant on 1/18/14
 */
var DEFAULT_SHORTCUT_KEY = 'ctrl+shift+k';
var LOCAL_STORAGE_KEY = 'optionsStore'

var defaultOptions = {
    shortcuts: [
        {key: "", value:""}
    ],
    cssSelectors: [{value:""}],
    shortcutKey: DEFAULT_SHORTCUT_KEY,
    includeIFrames: true
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

optionsApp.directive("showhide", function() {
    return function(scope, element, attrs) {
        element.bind("mouseover", function() {
            element.css("cursor", "pointer");
            element.css('color', "blue");
        })

        element.bind("mouseleave", function() {
            if (!element.hasClass('elementshown')){
                element.css('color', "");
            }
        });

        element.bind("click", function() {
         var bodyelement = document.getElementById(attrs.showhide);
            angular.element(bodyelement).toggleClass('hidden');
            element.toggleClass('elementshown');
        });
    };
});

function OptionsCtrl($scope, OptionsData, $timeout){
    $scope.options = OptionsData;

    $scope.AddShortcut = function(){
        $scope.options.shortcuts.push({key: "", value:""})
    };

    $scope.AddSelector = function(){
        $scope.options.cssSelectors.push({value: ""})
    };

    $scope.Save = function(){
        localStorage[LOCAL_STORAGE_KEY] = JSON.stringify($scope.options);

        $scope.message = 'Changes saved!';
        $timeout(function() {
            $scope.message = null;
        }, 5 * 1000);
    };

    $scope.Delete = function (index){
        $scope.options.shortcuts.splice(index,1);
    };

    $scope.DeleteSelector = function (index){
        $scope.options.cssSelectors.splice(index,1);
    };
};
