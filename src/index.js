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

  var zeroNumbers = 0;
  var res = 1;
  for (var i = 0; i < numberArr.length; i++) {
    if (factorialArr[i] === 1) {
      for (var j = 5; j <= numberArr[i]; j = j + 5) {
        zeroNumbers++;
        if (j == 25 || j == 50 || j == 75 || j == 100) {
          zeroNumbers++;
        }
      }
    } else {
      res = multiply(res, factorial(numberArr[i]));
    }
  }
  var j = res.length - 1;
  while (res[j] === '0' && j !== 0) {
    if (res[j] === '0') {
      zeroNumbers++;
    }
    j--;
  }
  return zeroNumbers;
}

function factorial(n) {
  return (n >= 2) ? multiply(n, factorial(n - 2)) : 1;
}

function multiply(a, b) {
  var first = a.toString();
  var second = b.toString();
  if (first.length < second.length) {
    var temp = second;
    second = first;
    first = temp;
  }
  var a1 = first.split('');
  var a2 = second.split('');
  var arr = [];
  var rlen = a1.length + a2.length;
  var i, j;

  for (i = 0; i < rlen; i++) {
    arr[i] = 0;
  }

  for (i = 0; i < a2.length; i++) {
    for (j = 0; j < a1.length; j++) {
      arr[1 + j + i] += a1[j] * a2[i];
    }
  }

  for (i = rlen - 1; i > 0; i--) {
    if (arr[i] >= 10) {
      arr[i - 1] += Math.floor(arr[i] / 10);
      arr[i] %= 10;
    }
  }

  if (arr[0] == 0) {
    delete arr[0];
  }


  return arr.join('');
}
