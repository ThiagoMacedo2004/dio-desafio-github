"use strict";
var btn = document.getElementById('btn');
var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
function somar(num1, num2) {
    return num1 + num2;
}
btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', function () {
    console.log(somar(Number(input1.value), Number(input2.value)));
});
