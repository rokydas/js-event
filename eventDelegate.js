// List remove korar jonno
// let items = document.getElementsByClassName('item');
// for (let i = 0; i < items.length; i++) {
//     var item = items[i];
//     item.addEventListener('click', function(event){
//         console.log(this);
//         console.log(event.target.innerText);
//         event.target.parentNode.removeChild(event.target);
//     })
// }

//List add korar jonno
document.getElementById('addNew').addEventListener('click', function(event){
    var itemParent = document.getElementById('myList');
    var newItem = document.createElement('li');
    newItem.innerText = "Brand New Item";
    itemParent.appendChild(newItem);
})

document.getElementById('myList').addEventListener('click', function(event){
    console.log(this, event.target); 
    
    // ekhane this er madhyome myList tag ta ke mane parent ta ke identify kortese ar event.target er madhyome myList er modhye kon list ta ke click kora hoise setake identify kortese. 

    //jodi parent er parent ba onek uporer kauke listener add kora hoi ar ekdom vitorer child ke click ba event kora hoi tahole this er madhyome oi parent ta ke dekhabe ar event.target er madhyome ekdom vitorer child ta ke show korbe. 

    event.target.parentNode.removeChild(event.target);

    // ekhane sob ceye vitorer je element ta pawa gese seta ke remove kora hoise. 
})

/*
event.target.parentNode.removeChild(event.target);
etar kaj hosse je element er event call kora hoise orthath, jake click kora hobe, takei remove kore fela hobe. eta ekta erokom ghotona j jar madhyome job pabe, job e dhuke boss ke bujung vhajung bujai je job pete help korse tar cakri takei remove kore fela. 

ekhane amra list add korar jonno 1 ta block liksi. arekta block liksi list remove korar jonno. 2 part e thik moto kaj kortese. kintu ami je element gula ke add kortesi segula ke remove kora jasse na. karon, se remove er block e dhukte pare ni. tai er jonno abar listener add korte hote pare. kintu amra sei ekoi kaj abar na kore amra ager list remove korar part ta ke comment kore di. erpor tader sobar parent ke mane myList er modhye ekta listener add kore dite pari. 

*/