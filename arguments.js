function addNumbers(num1, num2){
    console.log(arguments);
    // arguments.push(15); error
    // console.log(arguments[4]); undefined
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i];
    }
    //return num1 + num2;
    return sum;
}

var result =  addNumbers(5, 10, 15, 20);
console.log(result);