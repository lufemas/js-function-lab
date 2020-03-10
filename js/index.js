
let ex1DOM = document.querySelector(`#ex1`);
let ex2DOM = document.querySelector(`#ex2`);
let ex3DOM = document.querySelector(`#ex3`);
let ex4DOM = document.querySelector(`#ex4`);

// 1. Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
function halfNumber(num){
    return num/2;
}

console.log(halfNumber(20));

ex1DOM.textContent = `halfNumber(20) = ${halfNumber(20)}`;


// 2. Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
function percentOf(num1, num2){
    return (num1/num2)*100;
}

console.log(percentOf(10,50));

ex2DOM.textContent = `percentOf(10,50) = ${percentOf(10,50)}%`;


// 3. Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
//      EXTRA CHALLENGE: Round the result so there are only two digits after the decimal.
function areaOfCircle(r){
    return Math.round((Math.PI*r**2)*100)/100;
}

console.log(areaOfCircle(3));

ex3DOM.textContent = `areaOfCircle(3) = ${areaOfCircle(3)} u^2`



// 4. Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier
//      1. Take half of the number and store the result.
//      2. Square the result of #1 and store that result. 
//      3. Calculate the area of a circle with the result of #2 as the radius.   
//      4. Calculate what percentage that area is of the squared result (#3).

function mixedFunction(num){
    let halfNum =  halfNumber(num);
    let squareHalfNum = halfNum**2;
    let circleArea = areaOfCircle(squareHalfNum);
    let areaPercentage = Math.round(percentOf(circleArea, squareHalfNum)*100)/100;
    return areaPercentage;
}

console.log(mixedFunction(5));

ex4DOM.textContent = (` mixedFunction(5) = ${mixedFunction(5)}`);
