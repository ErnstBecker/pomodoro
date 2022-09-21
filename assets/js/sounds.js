// Variables of Buttons
let rainBtn = document.querySelector('#rain');
let fireBtn = document.querySelector('#fire');
let trainBtn = document.querySelector('#train');
let windBtn = document.querySelector('#wind');
let waterBtn = document.querySelector('#water');
let talkBtn = document.querySelector('#talk');

// Changing the background based on the theme clicked
// Rainy sound
rainBtn.addEventListener('click', () =>{
    document.body.style.backgroundImage = "url('assets/img/rain.gif')";
});

// Fire sound
fireBtn.addEventListener('click', () =>{
    document.body.style.backgroundImage = "url('assets/img/fire.gif')";
});

// Trains sound
trainBtn.addEventListener('click', () =>{
    document.body.style.backgroundImage = "url('assets/img/train.gif')";
});

// Windy sound
windBtn.addEventListener('click', () =>{
    document.body.style.backgroundImage = "url('assets/img/wind.gif')";
});

// Water sound
waterBtn.addEventListener('click', () =>{
    document.body.style.backgroundImage = "url('assets/img/water.gif')";
});

// Talk sound
talkBtn.addEventListener('click', () =>{
    document.body.style.backgroundImage = "url('assets/img/talk.gif')";
});
