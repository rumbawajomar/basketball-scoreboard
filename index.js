let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")
let homeScore = 0
let guestScore = 0

function add1HomePoint() {
    homeScore += 1
    homeScoreEl.innerText = homeScore
}

function add2HomePoints() {
    homeScore += 2
    homeScoreEl.innerText = homeScore
}

function add3HomePoints() {
    homeScore += 3
    homeScoreEl.innerText = homeScore
}

function add1GuestPoint() {
    guestScore += 1
    guestScoreEl.innerText = guestScore
}

function add2GuestPoints() {
    guestScore += 2
    guestScoreEl.innerText = guestScore
}

function add3GuestPoints() {
    guestScore += 3
    guestScoreEl.innerText = guestScore
}
