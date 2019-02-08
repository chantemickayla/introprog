reset();
var animation;


var train = document.getElementById("train");
train.addEventListener("click", speedUp);

var stopButton = document.getElementById("stopButton");
stopButton.addEventListener("click", stopTrain);



function startTrain() {
    if (trainPosition < 360) {
        clearInterval(animation);
        console.log("start");
    }
}

function speedUp() {
    if (trainPosition >= 360) {
        reset();
    }
    if (trainSpeed > 10) {
        trainSpeed -= 10;
    }
    console.log("train speed: " + trainSpeed);

    clearInterval(animation);
    animation = setInterval(frame, trainSpeed);


    function frame() {
        trainPosition += 2;
        train.style.left = trainPosition + 'px';
        console.log(trainPosition);
        checkPosition(trainPosition);
    }
}

function checkPosition(currentPosition) {
    if (currentPosition === 360) {
        alert("Crash!");
        console.log("Crash!");
        clearInterval(animation);

    }
}


function stopTrain() {
    if (trainPosition < 360) {
        clearInterval(animation);
        console.log("Whew! That was close!");
    }
}

function reset() {
    trainPosition = 0;
    trainSpeed = 250;
}