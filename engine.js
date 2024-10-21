const emojis = [
    "😺",
    "😺",
    "🦝",
    "🦝",
    "🦊",
    "🦊",
    "🐶",
    "🐶",
    "🐵",
    "🐵",
    "🦁",
    "🦁",
    "🐯",
    "🐯",
    "🐮",
    "🐮",
];

let openCards = [];

let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

for (let i = 0; i < emojis.length; i++) {
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shuffleEmojis[i];
    box.clicked = false; 
    box.onclick = () => {
        if (!box.clicked && openCards.length < 2) {
            box.classList.add("boxOpen");
            openCards.push(box);
            box.clicked = true;
        }
        if (openCards.length === 2) {
            setTimeout(checkMatch, 500);
        }
    };
    document.querySelector(".game").appendChild(box);
}

function checkMatch() {
    if (openCards.length === 2 && openCards[0] !== openCards[1]) { 
      if (openCards[0].innerHTML === openCards[1].innerHTML) {
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
      } else {
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
      }
      openCards = [];
    } else if (openCards.length > 2) { 
      openCards = [];
    }
  
    if (document.querySelectorAll(".boxMatch").length === emojis.length) {
      alert("Você venceu!");
    }
  }
  
  