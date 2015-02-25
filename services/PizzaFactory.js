restaurantPricing.factory("PizzaFactory", function PizzaFactory() {
  var pizzaFactory = {};
  pizzaFactory.pizzas = [];
  pizzaFactory.price = 0;


  pizzaFactory.addPizza = function(){
    var pizza = { type: pizzaFactory.pizzaType, price: pizzaFactory.pizzaPrice};
  pizzaFactory.pizzas.push(pizza);
  pizzaFactory.pizzaType = null;
  pizzaFactory.pizzaPrice = null;
}

  pizzaFactory.totalPizza = function() {
    pizzaFactory.price = null;
    pizzaFactory.pizzas.forEach(function(pizza) {
      pizzaFactory.price += 5;
    });
  };
  return pizzaFactory;
});
