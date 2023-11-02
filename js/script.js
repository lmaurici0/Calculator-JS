var num1 = "";
var op = "";
var resp = '';

function calc(value) {
  var screen = document.getElementById("header");
  num1 += value;
  screen.innerText = num1;
}

function clearHeader() {
  op = ""
  num1 = ""
  var screen = document.getElementById("header");
  screen.innerText = ""
}

function calcular() {
  var screen = document.getElementById("header");
  resp = eval(num1);
  screen.innerText = resp;
}