const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const hours = document.querySelector('.hours');
const startButton = document.querySelector("[data-action=start]");
const stopButton = document.querySelector("[data-action=stop]");
const resetButton = document.querySelector("[data-action=reset]");
let timeTimer = 0;
let isRunning = false;
let interval;

function startTimer(){

    if(isRunning) return;

    isRunning = true;
    interval = setInterval(calculateTime, 1000);    
}

function stopTimer(){
    if(!isRunning) return;

    isRunning = false;
    clearInterval(interval);
}

function resetTimer(){
    stopTimer();

    timeTimer = 0;
    minutes.innerText = '00';
    seconds.innerText = '00';
    hours.innerText = '00';
}

function calculateTime(){
    timeTimer++;

    const numOfMinutes = Math.floor(timeTimer / 60);
    const numOfSeconds = timeTimer % 60;
    const numOfHours = numOfMinutes % 60;

    minutes.innerText = addZero(numOfMinutes);
    seconds.innerText = addZero(numOfSeconds);
    hours.innerText = addZero(numOfHours);
}

function addZero(num){
    return (num >= 10) ? num : '0'+num;
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);