// DOM: Khởi tạo biến, gán phương thức
//      querySelector, id của thẻ main
let main = document.querySelector(".main")

// Khởi tạo giao diện (Render)
for (let i of clock.data){
    main.innerHTML += `
    <div class="clock">
        <span id="minutes">${i.minutes}</span>:
        <span id="seconds">${i.seconds}</span>:
        <span id="tens">${i.tens}</span>
        <button id="start" onclick="startBtn(`+ i.id +`)">Start</button>
        <button id="pause" onclick="pauseBtn(`+ i.id +`)">Pause</button>
        <button id="stop" onclick="stopBtn(`+ i.id +`)">Stop</button>
    </div>
    `
}

// Khởi tạo biến, để tạo giá trị ban đầu
let Interval = [],

// DOM: Khởi tạo biến, gán tất cả bằng phương
//      thức querySelector, id của những thẻ 
//      span có bên index.html
    tens = document.querySelectorAll("#tens"),
    seconds = document.querySelectorAll("#seconds"),
    minutes = document.querySelectorAll("#minutes")
    
// Lắng nghe sự kiện (click) của button và chạy hàm
let startBtn = (index) => {
    clearInterval(Interval[index])
    Interval[index] = setInterval(() => {
        startTimer(index)
    }, 10)
}

let pauseBtn = (index) => {
    clearInterval(Interval[index])
}

let stopBtn = (index) => {
    clearInterval(Interval[index])
    clock.data[index].appendMinutes = "00"
    clock.data[index].appendSeconds  = "00"
    clock.data[index].appendTens  = "00"
    minutes[index].innerHTML = clock.data[index].appendMinutes
    seconds[index].innerHTML = clock.data[index].appendSeconds
    tens[index].innerHTML = clock.data[index].appendTens
}


// Hàm xử lí đếm giờ của button Start
let startTimer = (index) => {
    switch(index){
        case index:
            clock.data[index].appendTens++

            // Phần trăm giây (Tens)
            if (0 < clock.data[index].appendTens && clock.data[index].appendTens <= 9)
                tens[index].innerHTML = "0" + clock.data[index].appendTens

            if (9 < clock.data[index].appendTens && clock.data[index].appendTens <= 99)
                tens[index].innerHTML = clock.data[index].appendTens

            if (clock.data[index].appendTens > 99)
                clock.data[index].appendTens = 0,
                tens[index].innerHTML = "0" + clock.data[index].appendTens,
                clock.data[index].appendSeconds++,
                seconds[index].innerHTML = "0" + clock.data[index].appendSeconds

            // Giây (Seconds)

            if (0 < clock.data[index].appendSeconds && clock.data[index].appendSeconds <= 9)
                seconds[index].innerHTML = "0" + clock.data[index].appendSeconds

            if (9 < clock.data[index].appendSeconds && clock.data[index].appendSeconds <= 59)
                seconds[index].innerHTML = clock.data[index].appendSeconds

            if (clock.data[index].appendSeconds > 59)
                clock.data[index].appendSeconds = 0,
                seconds[index].innerHTML = "0" + clock.data[index].appendSeconds,
                clock.data[index].appendMinutes++,
                minutes[index].innerHTML = "0" + clock.data[index].appendMinutes

            // Phút (Minutes)
            if (0 < clock.data[index].appendMinutes && clock.data[index].appendMinutes <= 9)
                minutes[index].innerHTML = "0" + clock.data[index].appendMinutes

            if (9 < clock.data[index].appendMinutes && clock.data[index].appendMinutes <= 99)
                minutes[index].innerHTML = clock.data[index].appendMinutes

            break;
    }
}

// DOM: Khởi tạo biến, gán tất cả bằng phương
//      thức querySelector, id của những button 
//      có bên index.html

let startAll = document.querySelector("#startAll")
let stopAll = document.querySelector("#stopAll")

startAll.addEventListener("click", () => {
    for (let i = 0; i < clock.data.length; i++)
        startBtn(i)
})


stopAll.addEventListener("click", () => {
    for (let i = 0; i < clock.data.length; i++)
        stopBtn(i)
})


