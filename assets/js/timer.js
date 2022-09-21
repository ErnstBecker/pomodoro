// Importing SweetAlert2
import Swal from '/node_modules/sweetalert2/src/sweetalert2.js'


// Variables for the timer buttons
let playTimer = document.querySelector('#play');
let breakTimer = document.querySelector('#break');

// Timer text
// It's the time on the screen, the format of the time is MM:SS
let timerTxt = document.querySelector('.time');

// Starting the timer
function startTimer(duration, display) {
    let timer = duration;

    // Button for stop the timer change the value of time for 0
    let stopTimer = document.querySelector('#stop');
    stopTimer.addEventListener('click', function(){
        timer = 0;
    })

    // setInterval function that run the timer every 1000ms
    var myInterval = setInterval(function() {
        // Time conversion
        let minutes = parseInt(timer / 60, 10);
        let seconds = parseInt(timer % 60, 10);

        // Time format
        // If the minutes or seconds is lower than 10, add a zero before the num
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        // Display on HTML page the time
        display.textContent = minutes + ":" + seconds;

        // Sound for when time is up
        let ring = new Audio('assets/sound/ring.mp3');

        // Alert from SweetAlert2
        function alert(){
            Swal.fire({
                title: 'The time is over!',
                icon: 'success',
                confirmButtonText: 'OK'
            })
        }

        // Function for when the time runs out
        // That clearInterval, change the time text for "00:00", play the sound
        // Enable the button and alert that the time is up
        function timesUp(){
            clearInterval(myInterval);
            // Play the sound, and show the alert
            ring.play();
            alert()
            // Enabling the buttons
            document.getElementById("play").disabled = false;
            document.getElementById("break").disabled = false;
        }

        // Decreasing time to zero
        if (--timer <= -1) {
            timesUp();
        }

    }, 1000) // Run every 1000ms
}

// Calculate timer duration in seconds
var duration = function (minutes) {
    return 60 * minutes;
}

// Runs the timer for the "pomodoro time"
playTimer.addEventListener('click', function(){
    // The duration() is used for place the minutes,
    // and the duration() will convert the minutes to seconds
    startTimer(duration(25), timerTxt);
    disableButton();
})

// Runs the timer for the "break time"
breakTimer.addEventListener('click', function(){
    // The duration() is used for place the minutes,
    // and the duration() will convert the minutes to seconds
    startTimer(duration(5), timerTxt);
    disableButton();
})

// Disable buttons
// So you can't keep running the function all the time
function disableButton(){
    playTimer.disabled = "true";
    breakTimer.disabled = "true";
}
