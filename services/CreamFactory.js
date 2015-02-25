restaurantPricing.factory("CreamFactory", function CreamFactory() {
  var creamFactory = {};
  creamFactory.creams = [];
  creamFactory.price = 0;


  creamFactory.addCream = function(){
    var cream = { type: creamFactory.creamType, price: creamFactory.creamPrice};
    creamFactory.creams.push(cream);
    creamFactory.creamType = null;
    creamFactory.creamPrice = null;
  }

  creamFactory.totalCream = function() {
    creamFactory.price = null;
    creamFactory.creams.forEach(function(cream) {
    creamFactory.price += 2;
    });
  };
  return creamFactory;
});
