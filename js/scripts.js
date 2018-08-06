var gramsToOunces = function(grams) {
  return grams * 0.03527396;
};

var ouncesToGrams = function(ounces) {
  return ounces * 28.34952313;
};

var gallonsToLiters = function(gallons) {
  return gallons * 3.785411784;
};

var litersToGallons = function(liters) {
  return liters / 3.785411784;
};

var mlToTsp = function(ml) {
  return ml / 4.928922;
};

var tspToMl = function(tsp) {
  return tsp * 4.928922;
}

var inputNumber = parseFloat(prompt("Enter a number: "));

alert(gramsToOunces(inputNumber));
alert(ouncesToGrams(inputNumber));
alert(gallonsToLiters(inputNumber));
alert(litersToGallons(inputNumber));
alert(mlToTsp(inputNumber));
alert(tspToMl(inputNumber));
