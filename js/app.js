(function () {
    var app = angular.module('eatForLunch', []);
    app.controller('MenuController', MenuControllerFactory());
    MenuControllerFactory.$inject = ['$scope'];
})();