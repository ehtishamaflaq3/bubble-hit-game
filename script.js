// bubble making
function makeingbubble() {
    let clutter = "";
    for (let i = 0; i <= 180; i++) {
        let rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;
    }
    let pbtm = document.querySelector("#panelbottom").innerHTML = clutter;
};
// hit making
let hitrn;
function getnewhit() {
    hitrn = Math.floor(Math.random() * 10);
    let hitvalue = document.querySelector("#hitvalue").innerHTML = hitrn;
}
// time setting
let timerr = 60;
function timersetting() {
    let timer = setInterval(function () {
        if (timerr > 0) {
            timerr--;
            document.querySelector("#timervalue").innerHTML = timerr;
        }
        else {
            clearInterval(timer);
            document.querySelector("#panelbottom").innerHTML=`Game Over`;
        }
    }, 1000);
};
///////score setting
let score = 0;
function scoresetting() {
    score = score + 10;
    document.querySelector("#scorevalue").innerHTML = score;
};
// bubbling logic
document.querySelector("#panelbottom").addEventListener("click",function(dets){
    if (!dets.target.classList.contains("bubble")) return;
    var clickednum=Number(dets.target.textContent);
    if(clickednum===hitrn){
        makeingbubble();
        scoresetting();
        getnewhit();
    }
});
//////////function calling
getnewhit();
timersetting();
makeingbubble();
// scoresetting();