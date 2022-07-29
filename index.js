var trexImg = document.getElementsByClassName("t-rex")[0];
var jumpBtn = document.getElementById("jump-btn");

jumpBtn.addEventListener("click", function () {

    trexImg.classList.add("t-rex-anim");

    setTimeout(function () {
        trexImg.classList.remove("t-rex-anim");
    }, 500)
});

document.addEventListener("keypress", function (event) {
    var text = event.key;

    if (text == "space") {
        trexImg.classList.add("t-rex-anim");

        setTimeout(function () {
            trexImg.classList.remove("t-rex-anim");
        }, 500)
    }
})

