// Functionize Minecraft Fishing Start Code

// Variables to store HTML Elements
let fishBtn = document.getElementById("fish-btn");
let charSelect = document.getElementById("character-select");
let resultImg = document.getElementById("result-img");
let spans = {
  cod: document.getElementById("num-cod"),
  salmon: document.getElementById("num-salmon"),
  tropical: document.getElementById("num-tropical"),
  puffer: document.getElementById("num-puffer"),
};

// Global Variables
let numFish = {
  cod: 0,
  salmon: 0,
  tropical: 0,
  puffer: 0,
};

// Add Event Listener to Calculate Button
fishBtn.addEventListener("click", fishBtnClicked);

// Event handler for fishBtn
function fishBtnClicked() {
  // Check Selected Character
  let character = charSelect.value;

  // Catch fish based on character
  if (character === "steve") {
    // STEVE: Cod 70%, Salmon 20%, Tropical 5%, Puffer 5%
    catchFish(0.7, 0.9, 0.95);
  } else if (character === "alex") {
    // ALEX: Cod 10%, Salmon 10%, Tropical 30%, Puffer 50%
    catchFish(0.1, 0.2, 0.5);
  } else {
    // Villager: Cod 25%, Salmon 25%, Tropical 25%, Puffer 25%
    catchFish(0.25, 0.5, 0.75);
  }
}

function catchFish(codProb, salmonProb, tropicalProb) {
  let randNum = Math.random();

  if (randNum < codProb) {
    caughtFish("cod", "Raw-Cod");
  } else if (randNum < salmonProb) {
    caughtFish("salmon", "Raw-Salmon");
  } else if (randNum < tropicalProb) {
    caughtFish("tropical", "Tropical-Fish");
  } else {
    caughtFish("puffer", "Pufferfish");
  }
}

// Add to counter and update HTML
function caughtFish(fishName, imgName) {
  numFish[fishName]++;
  spans[fishName].innerHTML = numFish[fishName];
  resultImg.src = `img/${imgName}.png`;
}
