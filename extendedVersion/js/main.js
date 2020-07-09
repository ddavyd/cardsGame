const cards = document.querySelectorAll('.game-card');

let flippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
    this.classList.add('flip');


}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
  
    resetBoard();
  }

(function shuffle() {
    cards.forEach(card => {
      const shuffeledPosition = Math.floor(Math.random() * cards.length); 
      card.style.order = shuffeledPosition;
    });
  })();

cards.forEach(card => card.addEventListener('click', flipCard));