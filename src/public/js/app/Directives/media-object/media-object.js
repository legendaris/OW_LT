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
                      '    <div class="media-object-image-container">' +
                      '        <img src="{{ctrl.post.imgSrc}}" width="320" height="180" />' +
                      '        <div class="media-object-title-container">' +
                      '            <a class="biglink" href="{{ctrl.post.link}}">{{ctrl.post.title}}</a>' +
                      '        </div>' +
                      '        <div data-ng-if="ctrl.post.subtitle" class="media-object-subtitle-container">{{ctrl.post.subtitle}}</div>' +
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