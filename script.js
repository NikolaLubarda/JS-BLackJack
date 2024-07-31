let player = {
    name: "Nikola",
    chips: 145,
}

let cards = []
let sum = 0
let hasBlackJack = false;
let isAlive = false; 
let message = "" ; 
let messageEl = document.getElementById("message-el") ;
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips


function getRandomCard() {
    let random = Math. floor((Math. random() * 13) + 1)
    if (random === 1) {
        return 11;
    }
    else if ([11, 12, 13].includes(random)) {
        return 10;
    } else {
        return random;
    }
}

function startGame() {
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards.push(firstCard)
    cards.push(secondCard)
    sum = firstCard + secondCard
    isAlive = true;
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
        
    }
    sumEl.textContent = "Sum:" + " " + sum;

if (sum <= 20) {
    message = "do you want do draw a new card?"
}
else if (sum === 21) { 
    message = "You got the BlackJack!!!"
    hasBlackJack = true;
}   
else {
    message = "You are out of the game!"
    isAlive = false;
}
messageEl.textContent = message
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
    
    
}

