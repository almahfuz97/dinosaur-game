var trexImg = document.getElementsByClassName("t-rex")[0];
var jumpBtn = document.getElementById("jump-btn");
var startBtn = document.getElementById("start-btn");
var spike = document.getElementById("spikeIcon");
var scoreNum = document.getElementById("num-id");

var count = 1;
var inc = 0;
var score = 0;

startBtn.addEventListener("click", function () {
    spike.classList.add("start-anim");
    count = 1;
    inc = 0;
    score = 0;
    scoreNum.innerHTML = score;

    positionOfTrexSpike();

});

function positionOfTrexSpike() {


    var trexX;
    var trexY;
    var spikeX;
    var spikeY;


    setTimeout(() => {

        let rect = trexImg.getBoundingClientRect();
        let rect2 = spike.getBoundingClientRect();

        trexX = rect.left;
        trexY = rect.bottom;
        spikeX = rect2.left;
        spikeY = rect2.bottom;
        if (spikeY == trexY) {
            spike.style.animationPlayState = "paused";
            trexImg.classList.add("t-rex-failed");
            // spike.classList.remove("start-anim");
            setTimeout(() => {
                spike.style.animationPlayState = "running";
                spike.classList.remove("start-anim");

                trexImg.classList.remove("t-rex-failed");
            }, 2000);
        }
        else {
            inc = 400;
            score++;
            scoreNum.innerHTML = score;
            positionOfTrexSpike();
        }
    }, (3600) + inc);
};

jumpBtn.addEventListener("click", function () {
    trexImg.classList.add("t-rex-anim");
    setTimeout(function () {
        trexImg.classList.remove("t-rex-anim");
    }, 500)
});

document.addEventListener("keypress", function (event) {
    var text = event.code;

    if (text == "Space") {
        trexImg.classList.add("t-rex-anim");
        setTimeout(function () {
            trexImg.classList.remove("t-rex-anim");
        }, 500);
    }

})

