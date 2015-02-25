restaurantPricing.controller('TotalCtrl', function TotalCtrl($scope, CreamFactory, PizzaFactory){
  $scope.pizzas = PizzaFactory.pizzas;
  $scope.PizzaFactory = PizzaFactory;
  $scope.creams = CreamFactory.creams;
  $scope.CreamFactory = CreamFactory;
}
);
