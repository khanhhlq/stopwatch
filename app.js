const start_btn = document.querySelector('#start')
const pause_btn = document.querySelector('#pause')
const stop_btn = document.querySelector('#stop')
const start_all_btn = document.querySelector('#startAll')
const stop_all_btn = document.querySelector('#stopAll')

let minutes = document.querySelector("#minutes")
let seconds = document.querySelector("#seconds")
let tens = document.querySelector("#tens")

let appendMinutes = 00
let appendSeconds = 00
let appendTens = 00
let Interval

let interval = null

start_btn.addEventListener("click", () => {
    clearInterval(Interval)
    Interval = setInterval(startTimer, 10)
})

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

const startTimer = () => {
    appendTens++

    if (appendTens <= 9){
        tens.innerHTML = ""
        tens.innerHTML = "0" + appendTens
    }

    if (appendTens > 9){
        tens.innerHTML = ""
        tens.innerHTML = appendTens
    }

    if (appendTens > 99){
        appendSeconds++
        seconds.innerHTML = ""
        seconds.innerHTML = "0" + appendSeconds
        appendTens = 0
        tens.innerHTML = ""
        tens.innerHTML = "0" + 0
    }

    if (appendSeconds <= 9){
        seconds.innerHTML = ""
        seconds.innerHTML = "0" + appendSeconds
    }

    if (appendSeconds > 9){
        seconds.innerHTML = ""
        seconds.innerHTML = appendSeconds
    }

    if (appendSeconds > 99){
        minutes++
        seconds.innerHTML = ""
        seconds.innerHTML = "0" + appendSeconds
        appendSeconds = 0
        seconds.innerHTML = ""
        seconds.innerHTML = "0" + 0
    }

    if (appendMinutes <= 9){
        minutes.innerHTML = ""
        minutes.innerHTML = "0" + appendMinutes
    }

    if (appendMinutes > 9){
        minutes.innerHTML = ""
        minutes.innerHTML = appendMinutes
    }
}