const hoursElement = document.getElementById('hours');
const minsElement = document.getElementById('mins');
const secondsElement = document.getElementById('seconds');
let ul = document.querySelector("#record")

let sec = 0;
let min = 0;
let hrs = 0;

let interval = null; 

let status = 0;


function counting(){

    sec++;
    if(sec / 60 === 1){
        sec = 0;
        min++;
        if(min / 60 === 1){
            min = 0;
            hrs++;
        }
    }

    hoursElement.innerHTML = formetTime(hrs);
    minsElement.innerHTML = formetTime(min);
    secondsElement.innerHTML = formetTime(sec);
}


function formetTime(time) {
    return time < 10 ? (`0${time}`) : time;
}

document.getElementById("startStop").addEventListener("click", function starting() {

    if (status === 0) {
        interval = window.setInterval(counting, 1000);
        document.getElementById("startStop").innerHTML = "Stop";
        status = 1;
        console.log("clock started");
    }
    else {
        window.clearInterval(interval);
        document.getElementById("startStop").innerHTML = "Start";
        status = 0;
        console.log("clock stoped");

    }
})

document.getElementById("resetButton").addEventListener("click", function() {

    window.clearInterval(interval);
    sec = 0;
    min = 0;
    hrs = 0;
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("mins").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
    document.getElementById("startStop").innerHTML = "Start";

    //e.firstElementChild can be used.
    var child = ul.lastElementChild; 
    while (child) {
        ul.removeChild(child);
        child = ul.lastElementChild;
    }

    console.log("clock reset");
})

document.getElementById("logButton").addEventListener("click", function() {

    let li = document.createElement("li");
    ul.appendChild(li);
    li.appendChild(document.createTextNode(formetTime(hrs) + ":" + formetTime(min)  + ":" + formetTime(sec)));

    console.log("button check");
})
