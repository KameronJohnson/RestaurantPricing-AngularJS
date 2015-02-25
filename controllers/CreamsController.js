restaurantPricing.controller('CreamsCtrl', function CreamsCtrl($scope, CreamFactory, PizzaFactory) {
  $scope.creams = CreamFactory.creams;
  $scope.CreamFactory = CreamFactory;
});
