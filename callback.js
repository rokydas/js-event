function explainCallBack(name, age, task){
    console.log("Hello ", name);
    console.log("your age is ", age);
    //console.log("your task is ", task);
    task();
}

function washHand(){
    console.log('Wash hand with soap');
}

function takeShower(){
    console.log('Take Shower');
}

explainCallBack('Roky Das', 22, washHand);
explainCallBack('Showrav Das', 16, takeShower);

// callback function er kaj hosse ekta function er parameter hisebe arekta function ke pathai dewa, jate je function ke pathano hosse take je function e pathano hosse sei function theke call kora jai. 
