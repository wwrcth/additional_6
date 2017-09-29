module.exports = function zeros(expression) {

  var arr = expression.split('*');

  var factorialArr = arr.map(function(number) {
    var pos = -1,
      counter = 0;
    while ((pos = number.indexOf("!", pos + 1)) !== -1) {
      if (pos !== -1) counter++;
    }
    return counter;
  });

  var numberArr = arr.map(function(number) {
    var pos = -1,
      counter = 0;

    while ((pos = number.indexOf("!", pos + 1)) !== -1) {
      if (pos !== -1) return number.substring(0, pos);
    }
  })

  var fifthfNumbers = 0;
  var secondNumbers = 0;

  for (var i = 0; i < numberArr.length; i++) {
    if (factorialArr[i] === 1) {
      for (var j = 1; j <= numberArr[i]; j++) {
        var number = j;
        while (number % 2 === 0) {
          if (number % 2 === 0) {
            number = number / 2;
            secondNumbers++;
          }
        }
        while (number % 5 === 0) {
          if (number % 5 === 0) {
            number = number / 5;
            fifthfNumbers++;
          }
        }
      }
    } else {
      if (numberArr[i] % 2 === 0) {
        for (var j = 2; j <= numberArr[i]; j = j + 2) {
          var number = j;
          while (number % 2 === 0) {
            if (number % 2 === 0) {
              number = number / 2;
              secondNumbers++;
            }
          }
          while (number % 5 === 0) {
            if (number % 5 === 0) {
              number = number / 5;
              fifthfNumbers++;
            }
          }
        }
      } else {
        for (var j = 1; j <= numberArr[i]; j = j + 2) {
          var number = j;
          while (number % 5 === 0) {
            if (number % 5 === 0) {
              number = number / 5;
              fifthfNumbers++;
            }
          }
        }
      }
    }
  }
  if (fifthfNumbers < secondNumbers) {
    return fifthfNumbers;
  } else {
    return secondNumbers;
  }
}
