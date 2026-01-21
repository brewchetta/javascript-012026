function createTimer(minutes=20) {
    const timer = document.createElement("div")
    timer.id = "return-at"
    const initialTime = new Date()
    const targetTime = new Date( initialTime.getTime() + (minutes * 60000) )

    timer.textContent = `Return at ${targetTime.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })} EST`

    document.body.prepend(timer)
}