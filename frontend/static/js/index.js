const stopwatch = document.getElementById('stopwatch')
const buttonStart = document.getElementById('button-start')
const buttonStop = document.getElementById('button-stop')
const buttonReset = document.getElementById('button-reset')
const secondsText = document.getElementById('seconds')
const tensText = document.getElementById('tens')

let seconds = 0
let tens = 0
let interval

buttonStart.onclick = () => {
    clearInterval(interval)
    interval = setInterval(startTimer, 10)
}

buttonStop.onclick = () => {
    clearInterval(interval)
}

buttonReset.onclick = () => {
    clearInterval(interval)

    tens = 0
    seconds = 0

    secondsText.innerHTML = "00"
    tensText.innerHTML = "00"
}

let startTimer = () => {
    tens = tens + 1

    if (tens <= 9) {
        tensText.innerHTML = "0" + tens
    }

    if (tens > 9) {
        tensText.innerHTML = tens
    }

    if (tens > 99) {
        seconds = seconds + 1
        if (seconds > 9) {
            secondsText.innerHTML = seconds.toString()
        }
        else
            secondsText.innerHTML = "0" + seconds.toString()

        tens = 0
        tensText.innerHTML = "0" + 0
    }

    if (tens > 9) {
        if (seconds < 10) {
            secondsText.innerHTML = "0" + seconds
        }
        else 
            secondsText.innerHTML = seconds
    }
}