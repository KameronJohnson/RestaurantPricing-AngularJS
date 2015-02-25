restaurantPricing.controller('PizzasCtrl', function PizzasCtrl($scope, PizzaFactory) {
  $scope.pizzas = PizzaFactory.pizzas;
  $scope.PizzaFactory = PizzaFactory;
});
