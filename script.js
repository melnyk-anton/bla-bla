function splitString(stringToSplit, separator) {
    var arrayOfStrings = stringToSplit.split(separator);
    return arrayOfStrings;
  }
  function sum(x, y) {
    return x + y;
  }
  function sub(x, y) {
    return x - y;
  }
  function mult(x, y) {
    return x * y;
  }
  function div(x, y) {
    return x / y;
  }
  function sqrt(x) {
    return Math.sqrt(x);
  }
  function pow(x, y) {
    return Math.pow(x, y);
  }
  function fac(n) {
    return n != 1 ? n * fac(n - 1) : 1;
  }
  function fib(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
      let c = a + b;
      a = b;
      b = c;
    }
    return b;
  }
  
  let elements = document.getElementsByClassName("funct_bloc");
  
  for (let i = 0; i <= 7; i++) {
    elements[i].addEventListener("click", () => {
      for (let g = 0; g <= 7; g++) {
        elements[g].style.boxShadow = "none";
      }
      elements[i].style.boxShadow = "4px 5px  10px white,-4px -5px  10px white";
    });
  }
  
  let sum2 = document.getElementById("sum");
  let sub2 = document.getElementById("sub");
  let mult2 = document.getElementById("mult");
  let div2 = document.getElementById("div");
  let sqrt2 = document.getElementById("sqrt");
  let pow2 = document.getElementById("pow");
  let fac2 = document.getElementById("fac");
  let fib2 = document.getElementById("fib");
  let text1 = document.getElementById("input");
  let text2 = document.getElementById("answer");
  let startButton = document.getElementById("start");
  let do2 = 0;
  
  sum2.addEventListener("click", function () {
    do2 = 1;
    text1.value = "";
    text2.value = "";
  });
  sub2.addEventListener("click", function () {
    do2 = 2;
    text1.value = "";
    text2.value = "";
  });
  mult2.addEventListener("click", function () {
    do2 = 3;
    text1.value = "";
    text2.value = "";
  });
  div2.addEventListener("click", function () {
    do2 = 4;
    text1.value = "";
    text2.value = "";
  });
  sqrt2.addEventListener("click", function () {
    do2 = 5;
    text1.value = "";
    text2.value = "";
  });
  pow2.addEventListener("click", function () {
    do2 = 6;
    text1.value = "";
    text2.value = "";
  });
  fac2.addEventListener("click", function () {
    do2 = 7;
    text1.value = "";
    text2.value = "";
  });
  fib2.addEventListener("click", function () {
    do2 = 8;
    text1.value = "";
    text2.value = "";
  });
  startButton.addEventListener("click", function () {
    let a = [];
    a = splitString(text1.value, " ");
    if (do2 === 1) text2.value = parseInt(a[0], 10) + parseInt(a[1], 10);
    else if (do2 === 2) text2.value = parseInt(a[0], 10) - parseInt(a[1], 10);
    else if (do2 === 3) text2.value = parseInt(a[0], 10) * parseInt(a[1], 10);
    else if (do2 === 4) text2.value = parseInt(a[0], 10) / parseInt(a[1], 10);
    else if (do2 === 5) text2.value = sqrt(parseInt(a[0], 10));
    else if (do2 === 6) text2.value = pow(parseInt(a[0], 10), parseInt(a[1], 10));
    else if (do2 === 7) text2.value = fac(parseInt(a[0], 10));
    else if (do2 === 8) text2.value = fib(parseInt(a[0], 10) - 1);
  });
  