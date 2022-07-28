let main = document.querySelector(".main")

for (let i of clock.data){
    main.innerHTML += `
    <div class="clock">
        <span id="minutes">${i.minutes}</span>:
        <span id="seconds">${i.seconds}</span>:
        <span id="tens">${i.tens}</span>
        <button id="start" onclick="startBtn(`+ i.id +`)">Start</button>
        <button id="pause">Pause</button>
        <button id="stop" onclick="stopBtn(`+ i.id +`)">Stop</button>
    </div>
    `
}

let Interval = []

let startBtn = (index) => {
    clearInterval(Interval[index])
    Interval[index] = setInterval(() => {
        startTimer(index)
    }, 10)
}

let stopBtn = (index) => {
    clearInterval(Interval[index])
    console.log("stop")
}

let tens = document.querySelectorAll("#tens")
let seconds = document.querySelectorAll("#seconds")

let startTimer = (index) => {
    switch(index){
        case index:
            clock.data[index].appendTens++
            if (0 < clock.data[index].appendTens && clock.data[index].appendTens <= 9)
                tens[index].innerHTML = "0" + clock.data[index].appendTens

            if (9 < clock.data[index].appendTens && clock.data[index].appendTens <= 99)
                tens[index].innerHTML = clock.data[index].appendTens

            if (clock.data[index].appendTens > 99)
                clock.data[index].appendTens = 0,
                tens[index].innerHTML = "0" + clock.data[index].appendTens,
                clock.data[index].appendSeconds++,
                seconds[0].innerHTML = "0" + clock.data[index].appendSeconds

            if (0 < clock.data[index].appendSeconds && clock.data[index].appendSeconds <= 9)
                seconds.innerHTML = "0" + clock.data[index].appendSeconds

            break;
    }





//     // Giây
//     if (0 < appendSeconds && appendSeconds <= 9)
//         seconds.innerHTML = "0" + appendSeconds

//     if (9 < appendSeconds && appendSeconds <= 59)
//         seconds.innerHTML = appendSeconds

//     if (appendSeconds > 59)
//         appendSeconds = 0,
//         seconds.innerHTML = "0" + appendSeconds,
//         appendMinutes++,
//         minutes.innerHTML = "0" + appendMinutes

//     // Phút
//     if (0 < appendMinutes && appendMinutes <= 9)
//         minutes.innerHTML = "0" + appendMinutes

//     if (9 < appendMinutes && appendMinutes <= 99)
//         minutes.innerHTML = appendMinutes
}

