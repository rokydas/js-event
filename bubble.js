document.getElementById('first').addEventListener('click', function(){
    document.getElementById('first').style.backgroundColor = 'gray';
})

document.getElementById('container').addEventListener('click', function(){
    console.log("full list clicked");
})

// amra kono ekta element ke click korle shudhu click event ta je tar modhye jasse eta thik na. eta tar parent class er modhye o jabe. abar tar parent er parent er modhye o jabe. ebane uttoradhikar sutre jetei thakbe. 

// ekhane first list e click korle first list er background color change hoye gray hoye jasse, abar ekoi sathe console e "full list clicked" message dekhasse. tar mane first list e click korate tar parent ke o click korar kaj hoye gese. etai bubble. 