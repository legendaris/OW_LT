(function(ng) {

    'use strict';
    ng.module('lok_web').controller('HomepageController', HomepageController);
    
    function HomepageController() {
        var ctrl = this;
        
        ctrl.message = "Lietuvos Overwatch Koalicija";
    };    
    
})(angular);