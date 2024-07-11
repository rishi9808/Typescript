"use strict";
// Union - allowing multiple data types for the variable
Object.defineProperty(exports, "__esModule", { value: true });
var data = 123;
data = "hello";
var Rishi = { name: "Rishi", id: 123 };
Rishi = { username: "r", id: 123 };
// union in function
function getDbId(id) {
    console.log("DB id is ".concat(id));
}
function getId(id) {
    // id.toLowerCase()  = results in error (it can be num also) ,so should you if condition
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
// UNION in Array
var data2 = [1, 2, "3"]; // make sure to add parenthesis ()
var arr = [true, 1, "2"];
//Union usecase
var status;
status = "start";
