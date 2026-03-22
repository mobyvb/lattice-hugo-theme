var body = document.body

window.addEventListener('load', function() {
    // Apply saved theme before showing transitions
    if (localStorage['theme'] === 'day') {
        setDay(true)
    } else {
        setNight(true)
    }
    // Enable transitions after initial theme is set
    requestAnimationFrame(function() {
        requestAnimationFrame(function() {
            body.classList.add('transitions-ready')
        })
    })
})

function toggleNight() {
    if (body.classList.contains('night')) {
        setDay(false)
    } else {
        setNight(false)
    }
}

function setNight(initial) {
    body.classList.remove('day')
    body.classList.add('night')
    if (!initial) localStorage['theme'] = 'night'
}

function setDay(initial) {
    body.classList.remove('night')
    body.classList.add('day')
    if (!initial) localStorage['theme'] = 'day'
}
