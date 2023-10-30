// HTML Elements
const form = document.querySelector("form");
const response = document.querySelector(".pyramid");

// Functions
const createCards = (quantity) => {
  let cards = "";
  let cardNumber = 1;
  for (let i = 1; i <= quantity; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += `<div class="square">${cardNumber}</div>`;
      cardNumber++;
    }
    cards += `<div class="row">${row}</div>`;
  }
  return cards;
};

const drawCards = (cards) => {
  response.innerHTML = cards;
};

// Event Handlers
const onFormSubmit = (event) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const cards = createCards(+formData.get("quantity"));
  drawCards(cards);
};

// Event Listeners
form.addEventListener("submit", onFormSubmit);
