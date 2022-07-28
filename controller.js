let main = document.querySelector(".main")

for (let i = 0; i < 5; i++){
    console.log("sussess")
    main.innerHTML += `
    <div class="clock">
        <span id="minutes">00</span>:
        <span id="seconds">00</span>:
        <span id="tens">00</span>
        <button onclick="startBtn(`+ i +`)">Start</button>
        <button id="pause">Pause</button>
        <button id="stop">Stop</button>
    </div>
`
}