
// DOM: Khởi tạo biến, gán tất cả bằng phương
//      thức querySelector, id của những button 
//      có bên index.html
let start_btn = document.querySelector('.start')
let pause_btn = document.querySelector('#pause')
let stop_btn = document.querySelector('#stop')
let start_all_btn = document.querySelector('#startAll')
let stop_all_btn = document.querySelector('#stopAll')

// DOM: Khởi tạo biến, gán tất cả bằng phương thức
//      querySelector, id của thẻ span chứa mm:ss:tt
let minutes = document.querySelector("#minutes")
let seconds = document.querySelector("#seconds")
let tens = document.querySelector("#tens")

// Khởi tạo biến, để tạo giá trị ban đầu
let appendMinutes = 00
let appendSeconds = 00
let appendTens = 00
let Interval

// Lắng nghe sự kiện (click) của button và chạy hàm
const startBtn = (i) => {

    if ( i == 3) {
        clearInterval(Interval)
        Interval = setInterval(startTimer, 10)
    }
    if (i == 2){
        clearInterval(Interval)
        Interval = setInterval(startTimer, 10)
    }
}

pause_btn.addEventListener("click", () => {
    clearInterval(Interval)
})

stop_btn.addEventListener("click", () => {
    clearInterval(Interval)
    appendMinutes = "00"
    appendSeconds = "00"
    appendTens = "00"
    minutes.innerHTML = appendMinutes
    seconds.innerHTML = appendSeconds
    tens.innerHTML = appendTens
})

// Hàm xử lí đếm giờ của button Start
let startTimer = () => {
    appendTens++
   
    // Phần trăm giây
    if (0 < appendTens && appendTens <= 9){
        tens.innerHTML = "0" + appendTens
    }

    if (9 < appendTens && appendTens <= 99){
        tens.innerHTML = appendTens
    }

    if (appendTens > 99){
        appendTens = 0
        tens.innerHTML = "0" + appendTens
        appendSeconds++
        seconds.innerHTML = "0" + appendSeconds
    }

    // Giây
    if (0 < appendSeconds && appendSeconds <= 9){
        seconds.innerHTML = "0" + appendSeconds
    }

    if (9 < appendSeconds && appendSeconds <= 59){
        seconds.innerHTML = appendSeconds
    }

    if (appendSeconds > 59){
        appendSeconds = 0
        seconds.innerHTML = "0" + appendSeconds
        appendMinutes++
        minutes.innerHTML = "0" + appendMinutes
    }

    // Phút
    if (0 < appendMinutes && appendMinutes <= 9){
        minutes.innerHTML = "0" + appendMinutes
    }

    if (9 < appendMinutes && appendMinutes <= 99){
        minutes.innerHTML = appendMinutes
    }
}