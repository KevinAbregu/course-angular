"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var age = 12.1;
var userName = "Max";
var isInstructor = true;
var hobbies = ['Sports', 'Cooking'];
var person = {
    name: "Max",
    age: 32
};
var people = [person, { name: "wow", age: 32 }];
// type inference
var course = 'React - The Complete Guide';
course = 9;
function suma(a, b) {
    return a + b;
}
function print(value) {
    console.log(value);
}
function insertAtBeginning(array, value) {
    var newArray = __spreadArray([value], array, true);
    return newArray;
}
var demoArray = [1, 2, 3];
var updatedArray = insertAtBeginning(demoArray, -2);
print(updatedArray);
