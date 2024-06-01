var add = function (a, b) { return a + b; };
var subtract = function (a, b) { return a - b; };
var multiply = function (a, b) { return a * b; };
var divide = function (a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
};
console.log("Add: ", add(2, 3));
console.log("Subtract: ", subtract(5, 2));
console.log("Multiply: ", multiply(4, 3));
console.log("Divide: ", divide(10, 2));
