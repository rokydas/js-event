function handleClick(){
    console.log('Someone clicked me');
}

function handleMove(){
    console.log('Mouse is on me');
}

let first = document.getElementById('first');
first.onclick = function(){
    console.log("First button clicked");
}

function secondClick(){
    document.body.style.backgroundColor = 'gray';
}

let second = document.getElementById('second');
second.onclick = secondClick; 
//ekhane secondClick er por () dewa jabe na. dile function ta ekhanei call hoye jabe. amra cai ekhane ei function ta run na hoye function ta second.onClink e set hok. 

function thirdClick(){
    document.body.style.backgroundColor = 'lightgray';
}

let third = document.getElementById('third');
third.addEventListener('click', thirdClick);

document.getElementById('fourth').addEventListener('click', function(){
    document.body.style.backgroundColor = 'tomato';
})