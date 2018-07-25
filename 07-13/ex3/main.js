/* 1. Create a function that logs the result of adding two numbers that were passed in as arguments.
2. Create another function that logs the result of subtracting two numbers that were passed in as arguments.
3. Invoke each function a couple times with different argument values. */

function calc(num1, num2) {
    let num3 = num1 + num2
    let num4 = num1 - num2
    console.log(`${num1} + ${num2} = ${num3}`)
    console.log(`${num1} - ${num2} = ${num4}`)
}

function add(num1, num2) {
    let numA = num1 + num2
    console.log(`${num1} + ${num2} = ${numA}`)
}

function sub(num1, num2) {
    let numB = num1 - num2
    console.log(`${num1} + ${num2} = ${numB}`)
}

function calculate(num1,num2,operator) {
    operator(num1,num2)
}

calculate(1,3,sub)