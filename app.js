var livehours = document.getElementById('livehours');
var liveminutes = document.getElementById('liveminutes');
var liveseconds = document.getElementById('liveseconds');
var ampm = document.getElementById('ampm');

// =================Live Date Start===================

setInterval(function(){
    var date = new Date();
    livehours.innerText = date.getHours();
    liveminutes.innerText = date.getMinutes();
    liveseconds.innerText = date.getSeconds();
   
    if(livehours.innerText >= 12){
        ampm.innerText = 'PM';
    } else {
        ampm.innerText = 'AM';
    }
    if(parseInt(livehours.innerText) >= 13){
        var hourz = parseInt(livehours.innerText);
        hourz = hourz - 12;
        livehours.innerText = hourz;
    }    
    if(livehours.innerText.length <= 1){
        livehours.innerText = '0' + livehours.innerText
    }
    if(liveminutes.innerText.length <= 1){
        liveminutes.innerText = '0' + liveminutes.innerText
    }
    if(liveseconds.innerText.length <= 1){
        liveseconds.innerText = '0' + liveseconds.innerText
    }
    
}, 1000)

// =================Live Date End===================



var hours = document.getElementById('hours');
var minutes = document.getElementById('minutes');
var seconds = document.getElementById('seconds');
var miliseconds = document.getElementById('miliseconds');
var playButton = document.getElementById('play');
var stopButton = document.getElementById('stop');
var resetButton = document.getElementById('reset');

var stopwatchInterval; // To store interval for stopwatch
var timeInterval; // To store interval for updating time
var startTime; // To store the start time
var isRunning = false; // To track whether the stopwatch is running or paused

playButton.addEventListener('click', play);
stopButton.addEventListener('click', stop);
resetButton.addEventListener('click', reset);

function play() {
    if (!isRunning) {
        startTime = new Date(); // Store the current time as the start time
        isRunning = true; // Set the stopwatch to running state
        
        stopwatchInterval = setInterval(updateStopwatch, 50); // Update milliseconds continuously
        timeInterval = setInterval(updateTime, 1000); // Update seconds and minutes every second
    }

}

function updateStopwatch() {
    var currentTime = new Date();
    var elapsedMilliseconds = currentTime - startTime; // Calculate elapsed time
    var millisecondsStr = (elapsedMilliseconds % 1000).toString(); // Extract milliseconds
    miliseconds.innerText = millisecondsStr.padStart(3, '0').slice(0, 2); // Display only 2 digits
}

function updateTime() {
    var currentTime = new Date();
    var elapsedSeconds = Math.floor((currentTime - startTime) / 1000); // Calculate elapsed seconds
    
    // Update seconds
    seconds.innerText = (elapsedSeconds % 60).toString().padStart(2, '0');
    
    // Update minutes
    var elapsedMinutes = Math.floor(elapsedSeconds / 60);
    minutes.innerText = (elapsedMinutes % 60).toString().padStart(2, '0');
    
    // Update hours
    var elapsedHours = Math.floor(elapsedMinutes / 60);
    hours.innerText = elapsedHours.toString().padStart(2, '0');
}

function stop() {
    clearInterval(stopwatchInterval); // Stop the stopwatch interval
    clearInterval(timeInterval); // Stop the time update interval
    isRunning = false; // Set the stopwatch to paused state
}

function reset() {
    clearInterval(stopwatchInterval); // Stop the stopwatch interval
    clearInterval(timeInterval); // Stop the time update interval
    isRunning = false; // Set the stopwatch to paused state
    hours.innerText = '00';
    minutes.innerText = '00';
    seconds.innerText = '00';
    miliseconds.innerText = '00';
}

