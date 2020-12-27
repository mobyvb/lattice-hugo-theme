window.addEventListener('load', (event) => {
    if (localStorage["theme"] === "night") {
        setNight()
    }
})

var body = document.body

function toggleNight() {
    if (body.classList.contains("night")) {
        setDay()
    } else {
        setNight()
    }
}

function setNight() {
    body.classList.remove("day")
    body.classList.add("night")
    localStorage["theme"] = "night"
}

function setDay() {
    body.classList.remove("night")
    body.classList.add("day")
    localStorage["theme"] = "day"
}
