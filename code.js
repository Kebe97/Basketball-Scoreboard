let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

function match(points, num) {
    let team = points.innerText
    team = +team + num
    points.innerText = team
}

function reset() {
    homeScore.innerText = 0
    guestScore.innerText = 0
}