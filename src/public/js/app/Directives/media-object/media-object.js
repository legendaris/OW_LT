(function (ng) {

    'use strict';

    ng.module('lok_web').directive('mediaObject', MediaObjectDirective);

    function MediaObjectDirective() {
        var ddo = {
            restrict: "EA",
            scope: {
                post: "=",
            },
            replace: true,
            controller: MediaObjectDirectiveController,
            controllerAs: 'ctrl',
            bindToController: true,
            template: '<div class="media-object">' +
                      '    <div ng-class="{\'media-object-inner\': ctrl.post.link}">' +
                      '        <a ng-if="ctrl.post.link" class="divlink" href="{{ctrl.post.link}}" alt="{{ctrl.post.title}}" target="_blank"></a>' +
                      '        <div class="media-object-image-container">' +
                      '            <img src="{{ctrl.post.imgSrc}}" width="320" height="180" />' +
                      '            <div class="media-object-title-container bordered-text">{{ctrl.post.title}}</div>' +
                      '        </div>' +
                      '        <div class="media-object-subtitle-container">{{ctrl.post.subtitle}}</div>' +
                      '    </div>' +
                      '</div>',
        };

        return ddo;
    }

    MediaObjectDirectiveController.$inject = ['$scope'];

    function MediaObjectDirectiveController($scope) {
        
    };

    MediaObjectDirectiveController.prototype = {
    };
})(angular);