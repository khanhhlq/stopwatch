let clock = {
    data:[
        {
            id: 0,
            minutes: 0,
            seconds: 0,
            tens: 0,
            interval: [],
            appendMinutes: 0,
            appendSeconds: 0,
            appendTens: 0
        },
        {
            id: 1,
            minutes: 0,
            seconds: 0,
            tens: 0,
            appendMinutes: 0,
            appendSeconds: 0,
            appendTens: 0
        },
        {
            id: 2,
            minutes: 0,
            seconds: 0,
            tens: 0,
            appendMinutes: 0,
            appendSeconds: 0,
            appendTens: 0
        },
        {
            id: 3,
            minutes: 0,
            seconds: 0,
            tens: 0,
            appendMinutes: 0,
            appendSeconds: 0,
            appendTens: 0
        },
        {
            id: 4,
            minutes: 0,
            seconds: 0,
            tens: 0,
            appendMinutes: 0,
            appendSeconds: 0,
            appendTens: 0
        }  
    ]
}

localStorage.setItem("clocks", JSON.stringify(clock.data))