var trexImg = document.getElementsByClassName("t-rex")[0];
var jumpBtn = document.getElementById("jump-btn");
var startBtn = document.getElementById("start-btn");
var spike = document.getElementById("spikeIcon");

var count = 1;
var inc = 0;

startBtn.addEventListener("click", function () {
    spike.classList.add("start-anim");
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
        trexY = rect.top;
        spikeX = rect2.left;
        spikeY = rect2.top;
        if (spikeY == trexY) {
            spike.style.animationPlayState = "paused";
            trexImg.classList.add("t-rex-failed");
            setTimeout(() => {
                spike.style.animationPlayState = "running";
                spike.classList.remove("start-anim");

                trexImg.classList.remove("t-rex-failed");
            }, 2000);
        }
        else {
            count++;
            inc = 200;
            positionOfTrexSpike();

        }

    }, (3800) + inc);
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

