let timer;
let seconds = 0;

function updateDisplay() {
    let hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
    let mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    let secs = String(seconds % 60).padStart(2, '0');
    document.getElementById("display").textContent = hrs + ":" + mins + ":" + secs;
};
document.getElementById("start").onclick = function() {
    if (!timer) {
        timer = setInterval(() => {
            seconds++;
            updateDisplay();
        }, 1000);

    }
};
document.getElementById("stop").onclick = function() {
    clearInterval(timer);
    timer = null;

};
document.getElementById("reset").onclick = function() {
    clearInterval(timer);
    timer = null;
    seconds = 0;
    updateDisplay();

};