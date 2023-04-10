var input = require("fs").readFileSync("stdin", "utf8");

var linhas = input.split('\n');

var pi = parseFloat(3.14159);
var raio = parseFloat(linhas);
var area = (raio * raio * pi);
console.log("A=" + area.toFixed(4));