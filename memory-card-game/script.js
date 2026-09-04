const images = [
  'https://picsum.photos/id/10/200/200',
  'https://picsum.photos/id/12/200/200',
  'https://picsum.photos/id/15/200/200',
  'https://picsum.photos/id/17/200/200',
  'https://picsum.photos/id/20/200/200',
  'https://picsum.photos/id/25/200/200',
  'https://picsum.photos/id/26/200/200',
  'https://picsum.photos/id/28/200/200',
  'https://picsum.photos/id/30/200/200',
  'https://picsum.photos/id/37/200/200'
];

let firstCard = null;
let secondCard = null;
let lockBoard = false;
let moves = 0;
let pairsFound = 0;
let score = 0;
let timer = null;
let seconds = 0;

const board = document.getElementById('game-board');
const movesElement = document.getElementById('moves-count');
const pairsElement = document.getElementById('pairs-count');
const totalPairsElement = document.getElementById('total-pairs');
const scoreElement = document.getElementById('score-count');
const timerElement = document.getElementById('timer');
const difficultySelect = document.getElementById('difficulty-select');
const restartBtn = document.getElementById('restart-btn');
const winMessage = document.getElementById('win-message');
const finalScoreElement = document.getElementById('final-score');

function startTimer() {
  clearInterval(timer);
  seconds = 0;
  timerElement.textContent = '00:00';

  timer = setInterval(() => {
    seconds++;
    const mins = String(Math.floor(seconds / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    timerElement.textContent = `${mins}:${secs}`;
  }, 1000);
}

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flipped');

  if (!firstCard) {
    firstCard = this;
    return;
  }

  secondCard = this;
  lockBoard = true;

  moves++;
  movesElement.textContent = moves;

  checkMatch();
}

function initGame() {
  clearInterval(timer);
  board.innerHTML = '';
  winMessage.classList.add('hidden');

  moves = 0;
  pairsFound = 0;
  score = 0;
  firstCard = null;
  secondCard = null;
  lockBoard = false;

  movesElement.textContent = moves;
  pairsElement.textContent = pairsFound;
  scoreElement.textContent = score;

  const totalPairs = parseInt(difficultySelect.value);
  totalPairsElement.textContent = totalPairs;

  const selectedImages = images.slice(0, totalPairs);
  const deck = [...selectedImages, ...selectedImages];
  deck.sort(() => Math.random() - 0.5);

  deck.forEach((src, index) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.image = src;

    const img = document.createElement('img');
    img.src = src;
    img.alt = `Carte ${index + 1}`;

    card.appendChild(img);
    card.addEventListener('click', flipCard);
    board.appendChild(card);
  });

  startTimer();
}

function checkMatch() {
  const isMatch = firstCard.dataset.image === secondCard.dataset.image;

  if (isMatch) {
    firstCard.classList.add('matched');
    secondCard.classList.add('matched');

    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    pairsFound++;

    const difficulty = difficultySelect.value;

    if (difficulty === 'facile' || difficulty === '6') {
      score += 90;
    } else if (difficulty === 'moyen' || difficulty === '8') {
      score += 120;
    } else {
      score += 150;
    }

    pairsElement.textContent = pairsFound;
    scoreElement.textContent = score;

    resetBoard();

    const totalPairs = parseInt(difficultySelect.value);
    if (pairsFound === totalPairs) {
      clearInterval(timer);
      finalScoreElement.textContent = score;
      winMessage.classList.remove('hidden');
    }
  } else {
    setTimeout(() => {
      firstCard.classList.remove('flipped');
      secondCard.classList.remove('flipped');
      resetBoard();
    }, 1000);
  }
}

function resetBoard() {
  firstCard = null;
  secondCard = null;
  lockBoard = false;
}

restartBtn.addEventListener('click', initGame);
difficultySelect.addEventListener('change', initGame);

initGame();