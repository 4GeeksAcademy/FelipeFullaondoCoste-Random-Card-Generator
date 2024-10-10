window.onload = () => {
  const card = document.getElementById("card");
  const generateButton = document.getElementById("generateCard");
  const widthInput = document.getElementById("widthInput");
  const heightInput = document.getElementById("heightInput");

  const palos = ["spade", "club", "heart", "diamond"];
  const numbers = [
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
  const symbol = { spade: "♠", club: "♣", heart: "♥", diamond: "♦" };

  function generateCard() {
    const randomNumber = Math.floor(Math.random() * numbers.length);
    const randomPalos = Math.floor(Math.random() * palos.length);
    showCard(numbers[randomNumber], palos[randomPalos]);
  }

  function showCard(numbers, palos) {
    card.innerHTML = `
          <div class="corner top-left">${numbers}${symbol[palos]}</div>
          <div class="card-body">${numbers}</div>
          <div class="corner bot-right">${numbers}${symbol[palos]}</div>`;
    card.className = `card ${palos}`;
  }

  // Cambio de width y height

  function updateCardDimensions() {
    card.style.width = widthInput.value + "px";
    card.style.height = heightInput.value + "px";
  }

  widthInput.addEventListener("input", updateCardDimensions);
  heightInput.addEventListener("input", updateCardDimensions);

  //Eventos click (cambio de carta) y change (cambio de temporizador)

  generateButton.addEventListener("click", () => {
    generateCard();
  });

  // Generar la primera carta al cargar la página

  generateCard();
};
