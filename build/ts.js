"use strict";
const num1El = document.getElementById("num1");
const num2El = document.getElementById("num2");
const addBtn = document.getElementById("add");
const resultEl = document.getElementById("result");
const add = (a, b) => {
    return a + b;
};
addBtn.addEventListener("click", () => {
    const num1 = +num1El.value;
    const num2 = +num2El.value;
    const result = add(num1, num2);
    resultEl.innerText = result.toString();
    // console.log("result", result)
});
