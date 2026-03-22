var root = document.documentElement
var body = document.body

window.addEventListener('load', function() {
    // Enable transitions after initial theme is set (inline script in <head> handles the class)
    requestAnimationFrame(function() {
        requestAnimationFrame(function() {
            body.classList.add('transitions-ready')
        })
    })
})

function toggleNight() {
    if (root.classList.contains('day')) {
        setNight()
    } else if (root.classList.contains('night')) {
        setDay()
    } else {
        // No saved preference — invert the current OS preference
        if (window.matchMedia('(prefers-color-scheme: light)').matches) {
            setNight()
        } else {
            setDay()
        }
    }
}

function setNight() {
    root.classList.remove('day')
    root.classList.add('night')
    localStorage.setItem('theme', 'night')
}

function setDay() {
    root.classList.remove('night')
    root.classList.add('day')
    localStorage.setItem('theme', 'day')
}
