console.log(45);
// ekhon amra dekhbo amader function ki kaje lagbe. 
let numbers = [5, 12, 89, 18, 8];

for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if(element % 2 != 0){
        console.log(element*2);
    }
    else{
        console.log(element);
    }
}