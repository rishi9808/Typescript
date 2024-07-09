"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
    // return "hello"
}
// addTwo("12")
addTwo(1);
var upper = function (str) {
    return str.toUpperCase();
};
// upper(1)
upper("hi");
function signUp(name, age, email) { }
var loginUser = function (name, email, age) {
    if (age === void 0) { age = 10; }
};
loginUser("r", "rishi");
//void
function consoleError(err) {
    console.log(err);
}
consoleError("error");
function handleError(err) {
    throw new Error(err);
}
