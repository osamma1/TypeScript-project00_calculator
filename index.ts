const add = (a: number, b: number): number => a + b;
const subtract = (a: number, b: number): number => a - b;
const multiply = (a: number, b: number): number => a * b;
const divide = (a: number, b: number): number => {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
};

console.log("Add: ", add(2, 3));
console.log("Subtract: ", subtract(5, 2));
console.log("Multiply: ", multiply(4, 3));
console.log("Divide: ", divide(10, 2));
