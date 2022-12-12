

let scoreElHome = document.getElementById('score-el-home')
let scoreElGuest = document.getElementById('score-el-guest')

console.log(scoreElHome)
console.log(scoreElGuest)

let homeScore = 0
let guestScore = 0

function addOneHome () {
    homeScore += 1
    scoreElHome.textContent = homeScore
    if (homeScore > guestScore) {
        scoreElHome.style.backgroundColor = 'white'
        scoreElGuest.style.backgroundColor = 'black';
        } else if (homeScore === guestScore) {
            scoreElHome.style.backgroundColor = 'black'
            scoreElGuest.style.backgroundColor = 'black';
        }   
}

function addTwoHome() {
    homeScore += 2
    scoreElHome.textContent = homeScore
    if (homeScore > guestScore) {
        scoreElHome.style.backgroundColor = 'white'
        scoreElGuest.style.backgroundColor = 'black';
        }  else if (homeScore === guestScore) {
            scoreElHome.style.backgroundColor = 'black'
            scoreElGuest.style.backgroundColor = 'black';
        } 
}

function addThreeHome () {
    homeScore += 3
    scoreElHome.textContent = homeScore
    if (homeScore > guestScore) {
        scoreElHome.style.backgroundColor = 'white'
        scoreElGuest.style.backgroundColor = 'black';
        }    else if (homeScore === guestScore) {
            scoreElHome.style.backgroundColor = 'black'
            scoreElGuest.style.backgroundColor = 'black';
        }  
}

function addOneGuest () {
    guestScore += 1
    scoreElGuest.textContent = guestScore
    if (guestScore > homeScore) {
        scoreElHome.style.backgroundColor = 'black'
        scoreElGuest.style.backgroundColor = 'white';
        }    else if (homeScore === guestScore) {
            scoreElHome.style.backgroundColor = 'black'
            scoreElGuest.style.backgroundColor = 'black';
        }   
    
}

function addTwoGuest() {
    guestScore += 2
    scoreElGuest.textContent = guestScore
    if (guestScore > homeScore) {
        scoreElHome.style.backgroundColor = 'black'
        scoreElGuest.style.backgroundColor = 'white';
        }   else if (homeScore === guestScore) {
            scoreElHome.style.backgroundColor = 'black'
            scoreElGuest.style.backgroundColor = 'black';
        }   
}

function addThreeGuest () {
    guestScore += 3
    scoreElGuest.textContent = guestScore
    if (guestScore > homeScore) {
        scoreElHome.style.backgroundColor = 'black'
        scoreElGuest.style.backgroundColor = 'white';
        }    else if (homeScore === guestScore) {
            scoreElHome.style.backgroundColor = 'black'
            scoreElGuest.style.backgroundColor = 'black';
        }  
}

function gameReset () {
    homeScore = 0
    guestScore= 0
    scoreElHome.textContent = homeScore
    scoreElGuest.textContent = guestScore
    scoreElHome.style.backgroundColor = 'black'
    scoreElGuest.style.backgroundColor = 'black'
}
