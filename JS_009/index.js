// deel 1
function square1(number1, number2) {


    const sqn1 = number1 * number1;
    const sqn2 = number2 * number2;
    const sumsq = sqn1 + sqn2;
    const sqsum = sumsq * sumsq;
    return sqsum;
}
result1 = square1(2, 3);
console.log(result1);


// deel 2
const square2 = function (number3, number4) {
    const sumsq2 = (number3 * number3) + (number4 * number4);
    const sqsum2 = sumsq2 * sumsq2
    return sqsum2;
};
result2 = square2(2, 3);
console.log(result2);

// deel 3
const square3 = (number5, number6) => {
    const sumsq3 = (number5 * number5) + (number6 * number6);
    const sqsum3 = sumsq3 * sumsq3
    return sqsum3;
};
result3 = square3(2, 3);
console.log(result3);


// voorbeeld verschildende functies
// function declararion
function sayHello() {
    console.log("hello 1");
}
sayHello();
// function expression
const sayHello2 = function () {
    console.log("Hello 2");
};
sayHello2();
// arrow Function ( also a function expression)
const sayHello3 = () => {
    console.log("Hello 3")
};
