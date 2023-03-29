/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// Create a deck of cards
// Define arrays to hold possible card values and suits
const values = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];
const suits = ["Hearts", "Diamonds", "Spades", "Clubs"];

// Initialize a variable to hold the current card being displayed
let currentCard = null;

// Function to generate a random card HTML string
function generateRandomCard() {
  // Generate a random number between 0 and 51 (inclusive)
  const random = Math.floor(Math.random() * 52);

  // Use the random number to select a card value and suit from the arrays
  const cardValue = values[random % 13];
  const cardSuit = suits[Math.floor(random / 13)];

  // Convert the card suit to an HTML entity
  let entity;
  cardSuit === "Diamonds"
    ? (entity = "&diams;")
    : (entity = "&" + cardSuit.toLowerCase() + ";");

  // Build and return the card HTML string
  const cardHtml =
    '<span class="card-value-suit fs-1 top">' +
    cardValue +
    entity +
    "</span>" +
    '<span class="card-suit fs-1">' +
    entity +
    "</span>" +
    '<span class="card-value-suit fs-1 bot">' +
    cardValue +
    entity +
    "</span>";
  return cardHtml;
}

// Function to update the displayed card with a new random card
function updateCard() {
  const cardContainer = document.querySelector("#card-container");
  // If there is already a card being displayed, remove it from the container
  if (currentCard) {
    cardContainer.removeChild(currentCard);
  }
  // Create a new card element, add it to the container, and store it as the current card
  const newCard = document.createElement("div");
  newCard.classList.add("card", "card-container");
  newCard.innerHTML = generateRandomCard();
  cardContainer.appendChild(newCard);
  currentCard = newCard;
}

// Function to update the size of the displayed card based on user input
function updateCardSize() {
  const widthInput = document.querySelector("#width-input");
  const heightInput = document.querySelector("#height-input");
  const card = document.querySelector(".card");

  // If the user has entered valid width and height values, update the card size
  if (widthInput.value && heightInput.value) {
    card.style.width = widthInput.value + "px";
    card.style.height = heightInput.value + "px";
  }
}

// Get references to the HTML elements needed for the card display and size controls
const cardContainer = document.querySelector("#card-container");
const newCardButton = document.querySelector("#new-card-button");
const sizeSubmitButton = document.querySelector("#size-submit-button");

// Create and add an initial card to the display
const newCard = document.createElement("div");
newCard.classList.add("card", "card-container");
newCard.innerHTML = generateRandomCard();
cardContainer.appendChild(newCard);
currentCard = newCard;

// Add the "New Card" button and event listener for updating the displayed card
cardContainer.parentNode.insertBefore(newCardButton, cardContainer.nextSibling);
newCardButton.addEventListener("click", updateCard);
//setInterval(updateCard, 5000);
// Add the "Submit" button and event listener for updating the displayed card size
sizeSubmitButton.addEventListener("click", updateCardSize);
