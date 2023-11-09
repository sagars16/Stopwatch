var seconds = 0;
var tens = 0;

var modSeconds = document.getElementById('seconds');
var modTens = document.getElementById('tens');
var startButton = document.getElementById('start-button');
var stopButton = document.getElementById('stop-button');
var resetButton = document.getElementById('reset-button');
var interval;

function startTime(){
    tens++;

    if(tens < 9){
        modTens.innerHTML = "0" + tens;
    }
    if(tens > 9){
        modTens.innerHTML = tens;
    }
    if(tens > 99){
        seconds++;
        modSeconds.innerHTML = "0" + seconds;
        tens = 0;
        modTens.innerHTML = "0" + 0;
    }
    if(seconds > 9){
        modSeconds.innerHTML = seconds;
    }
}

startButton.onclick = function(){
    if(interval) {
        clearInterval(interval);
    }
    interval = setInterval(startTime, 10);
};

stopButton.onclick = function(){
    clearInterval(interval);
};

resetButton.onclick = function(){
    clearInterval(interval);
    tens = "00";
    seconds = "00";
    modSeconds.innerHTML = seconds;
    modTens.innerHTML = tens;

};