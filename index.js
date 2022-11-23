let scoreElHome = document.getElementById("score-home-el")
let scoreElGuest = document.getElementById("score-guest-el")
let freeThrowEl = document.getElementById("freeThrow-el")
let midRangeEl = document.getElementById("midRange-el")
let threePointerEl = document.getElementById("threePointer-el")

let count = 0
let homeCount =+ count
let guestCount =+ count

function HomeFreeThrow() {
     homeCount += 1
    scoreElHome.textContent = homeCount
}

function HomeMidRange() {
     homeCount += 2
    scoreElHome.textContent = homeCount
}

function HomeThreePointer() {
     homeCount += 3
    scoreElHome.textContent = homeCount
}

function guestFreethrow() {
   guestCount += 1
    scoreElGuest.textContent = guestCount
}

function guestMidrange() {
    guestCount += 2
    scoreElGuest.textContent = guestCount
}
function guestThreePointer() {
     guestCount += 3
     scoreElGuest.textContent = guestCount
}

