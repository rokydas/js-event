// kono ekta element e addEventListener add korle oi element er jonno kaj hobe, sathe tar parent e o addEventListener er kaj hoye jabe. ei auto kaj kore fela ta ke off korte je step ta nite hoi seta holo propagatingBubble. 

// event.stopPropagation() ei function ta use korle shudhu oi element ta te eventAddListener kaj korbe tar mane first element tar background gray color hobe but tar parent element gulate addEventListener kaj korbe na tar mane "full list checked" ei message ta show korbe na. 

// ekhane amra stopPropagation diye kaj korsi. jodi amra event.stopImmediatePropagation(); use kori tahole se to tar parent class er addEventListener ke off korbe sathe tar ashe pasher joto addEventListener ase tader ke o off kore dibe. 

document.getElementById('first').addEventListener('click', function(){
    document.getElementById('first').style.backgroundColor = 'gray';
    event.stopPropagation(); 
})

document.getElementById('container').addEventListener('click', function(){
    console.log("full list clicked");
})

