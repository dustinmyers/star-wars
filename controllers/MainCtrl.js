app.controller('MainCtrl', ['$scope', 'dataService', function($scope, dataService) {

    $scope.getDemHeroes = function() {
        dataService.heroSender().then(function(response) {
            console.log('response: ',response);
            $scope.heroes = response;
        });
    };

    $scope.getDemHeroes();

}]); //end MainCtrl