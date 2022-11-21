//* Definitions
const spadesIcon = "♠"; // U+2660 &#9824;
const heartsIcon = "♥"; // U+2665 &#9829;
const clubsIcon = "♣"; // U+2663 &#9827;
const diamondsIcon = "♦"; // U+2666 &#9830;
const kingIcon = "♚"; // U+265A &#9818;
const queenIcon = "♛"; // U+265B &#9819;
const jackIcon = "J";
const deckSize = 52;
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
  "K",
];
const colors = ["red", "black"];
const suits = ["hearts", "diamonds", "clubs", "spades"];
// Type Card = { suit, num, color: color(suit), show: false }

//* Elements
const hintsElement = document.getElementById("hints");
const winBanner = document.getElementById("winner");

const deckStackElement = document.getElementById("deck-stack");
const flippedElement = document.getElementById("flipped-stack");

const heartsElement = document.getElementById("hearts");
const diamondsElement = document.getElementById("diamonds");
const clubsElement = document.getElementById("clubs");
const spadesElement = document.getElementById("spades");

const column1Element = document.getElementById("column-1");
const column2Element = document.getElementById("column-2");
const column3Element = document.getElementById("column-3");
const column4Element = document.getElementById("column-4");
const column5Element = document.getElementById("column-5");
const column6Element = document.getElementById("column-6");
const column7Element = document.getElementById("column-7");
const aceStackElements = [
  heartsElement,
  diamondsElement,
  clubsElement,
  spadesElement,
];
const playStackElements = [
  column1Element,
  column2Element,
  column3Element,
  column4Element,
  column5Element,
  column6Element,
  column7Element,
];

//* Globals
let cardList = []; //{element:HTMLElement,card:Card}[]

//* Helpers
const getIcon = (name) => {
  switch (name) {
    case "clubs":
      return clubsIcon;
    case "diamonds":
      return diamondsIcon;
    case "hearts":
      return heartsIcon;
    case "spades":
      return spadesIcon;
    default:
      return "#";
  }
};

const color = (suit) =>
  suit === "hearts" || suit === "diamonds" ? "red" : "black";

const getDeck = () => {
  const deck = [];
  suits.forEach((suit) =>
    numbers.forEach((num) =>
      deck.push({ suit, num, color: color(suit), show: false })
    )
  );
  return deck;
};

const shuffleDeck = (deck) => {
  deck = deck ?? getDeck();
  for (var i = deck.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
  }
  return deck;
};

const getRandomDeck = () => shuffleDeck();

const removeAllChildren = (element) => {
  while (element.firstChild) element.removeChild(element.lastChild);
};

const removeAllButFirstChildren = (element) => {
  while (element.firstChild) {
    if (element.firstChild === element.lastChild) break;
    element.removeChild(element.lastChild);
  }
};

const getAllChildrenAfter = (target, parent) => {
  const children = [];
  let found = false;
  for (let index = 0; index < parent.children.length; index++) {
    const child = parent.children[index];
    if (child === target) found = true;
    if (found) children.push(child);
  }
  return children;
};

const showCard = (element) => element.classList.add("show");
const hideCard = (element) => element.classList.remove("show");

//* Re-Render
const rerender = () => {
  playStack();
  draggable();
  checkWin();
};

const draggable = () => {
  cardList.forEach((cardObj) => (cardObj.element.draggable = false));
  playStackElements.forEach((playStackElement) => {
    for (const key in playStackElement.children) {
      if (Object.hasOwnProperty.call(playStackElement.children, key)) {
        const card = playStackElement.children[key];
        if (card.classList.contains("show")) card.draggable = true;
      }
    }
  });
  if (flippedElement.lastChild !== null)
    flippedElement.lastChild.draggable = true;
  aceStackElements.forEach((aceStackElement) => {
    if (aceStackElement.lastChild) aceStackElement.lastChild.draggable = true;
  });
};

const playStack = () => {
  playStackElements.forEach((playStackElement) => {
    const lastCard = playStackElement.lastChild;
    if (!lastCard) return;
    lastCard.classList.add("show");
  });
};

//* Actions
const moveCards = (targets, newParent, render = true) => {
  targets.forEach((element) => {
    element.classList.add("move");
    const oldRect = element.getBoundingClientRect(); // get old location
    newParent.appendChild(element); // move to new parent/spot
    const newRect = element.getBoundingClientRect(); //get new location
    const left =
      oldRect.left - newRect.left - (parseInt(element.style.left, 10) || 0); // calc old spot
    const top =
      oldRect.top - newRect.top - (parseInt(element.style.top, 10) || 0);
    element.style.left = `${left}px`; // position to old spot
    element.style.top = `${top}px`;
    element.style.transform = `translate(${left * -1}px, ${top * -1}px)`; //move to new spot with animation
    element.addEventListener(
      "transitionend",
      () => {
        //clean up after animation
        element.classList.remove("move");
        element.style.removeProperty("left");
        element.style.removeProperty("top");
        element.style.removeProperty("transform");
      },
      { once: true }
    );
  });
  if (render) rerender();
};

const deal = (deck, targetStack, count) => {
  for (let index = 0; index < count; index++) {
    if (index === count - 1) showCard(deck.firstChild);
    moveCards([deck.firstChild], targetStack, false);
    //targetStack.appendChild(deck.firstChild);
  }
  rerender();
};

const flip = () => {
  if (!deckStackElement.firstChild) {
    while (flippedElement.firstChild) {
      deckStackElement.appendChild(flippedElement.lastChild);
      hideCard(deckStackElement.lastChild);
    }
    return;
  }
  for (let index = 0; index < 3; index++) {
    const element = deckStackElement.lastChild;
    if (!element) break;
    moveCards([element], flippedElement);
    //flippedElement.appendChild(element);
    showCard(element);
    rerender();
  }
};

const win = () => {
  cardList.forEach((cardObj) => {
    showCard(cardObj.element);
    if (cardObj.card.suit === "hearts")
      return moveCards([cardObj.element], heartsElement);
    if (cardObj.card.suit === "diamonds")
      return moveCards([cardObj.element], diamondsElement);
    if (cardObj.card.suit === "spades")
      return moveCards([cardObj.element], spadesElement);
    if (cardObj.card.suit === "clubs")
      return moveCards([cardObj.element], clubsElement);
  });
};

//* Element Templates Generators
const pipsGenerator = (pipsTemplate = (suit, num) => {
  let icon = getIcon(suit);
  const number = Number(num);
  const amount = number || 1;
  let template = "";

  if (num === "K") icon = kingIcon;
  if (num === "Q") icon = queenIcon;
  if (num === "J") icon = jackIcon;

  for (let index = 0; index < amount; index++) template += `<div>${icon}</div>`;

  return `<div class="pip-container pip-${amount}">${template}</div>`;
});

const cardGenerator = (suit, num, color, show = false, classNames = []) => {
  const pips = pipsGenerator(suit, num);

  const template = `
  <div class="inner">
    <div class="back">
      <div class="black">${spadesIcon}</div>
      <div class="red">${heartsIcon}</div>
      <div class="red">${diamondsIcon}</div>
      <div class="black">${clubsIcon}</div>
    </div>
    <div class="front">
      <div class="corner top">
        <div class="number">${num}</div>
        <div class="suit">${getIcon(suit)}</div>
      </div>
      ${pips}
      <div class="corner bottom">
        <div class="number">${num}</div>
        <div class="suit">${getIcon(suit)}</div>
      </div>
    </div>
  </div>
  `.trim();
  const element = document.createElement("div");
  element.className = `card ${show ? "show" : ""} ${color} ${classNames.join(
    " "
  )}`;
  element.innerHTML = template;

  return element;
};

//* Functions
const clear = () => {
  removeAllChildren(deckStackElement);
  removeAllChildren(flippedElement);
  removeAllButFirstChildren(heartsElement);
  removeAllButFirstChildren(diamondsElement);
  removeAllButFirstChildren(clubsElement);
  removeAllButFirstChildren(spadesElement);
  removeAllChildren(column1Element);
  removeAllChildren(column2Element);
  removeAllChildren(column3Element);
  removeAllChildren(column4Element);
  removeAllChildren(column5Element);
  removeAllChildren(column6Element);
  removeAllChildren(column7Element);
};

const setup = () => {
  const cards = getRandomDeck();
  cardList = [];
  cards.forEach((card) => {
    const cardElement = cardGenerator(card.suit, card.num, card.color);
    deckStackElement.appendChild(cardElement);
    cardList.push({ element: cardElement, card: card });
  });

  deal(deckStackElement, column1Element, 1);
  deal(deckStackElement, column2Element, 2);
  deal(deckStackElement, column3Element, 3);
  deal(deckStackElement, column4Element, 4);
  deal(deckStackElement, column5Element, 5);
  deal(deckStackElement, column6Element, 6);
  deal(deckStackElement, column7Element, 7);
};

const restart = () => {
  winBanner.classList.add("hide");
  clear();
  setup();
};

//* Verification Checks
const checkPlay = (card, stack) => {
  if (playStackElements.find((item) => item === stack))
    return checkPlayStack(card, stack);
  if (aceStackElements.find((item) => item === stack))
    return checkAceStack(card, stack);
  return false;
};

const checkPlayStack = (card, stack) => {
  const cardObj = cardList.find((item) => item.element === card);
  const cardNumIndex = numbers.findIndex((num) => cardObj.card.num === num);

  const lastCardElement = stack.lastChild;
  const lastCardObj =
    lastCardElement &&
    cardList.find((item) => item.element === lastCardElement);
  const lastCardNumIndex =
    lastCardObj && numbers.findIndex((num) => lastCardObj.card.num === num);

  if (!lastCardObj && cardObj.card.num === "K") return true;
  if (!lastCardObj) return false;
  return (
    cardObj.card.color !== lastCardObj.card.color &&
    cardNumIndex + 1 === lastCardNumIndex
  );
};

const checkAceStack = (card, stack) => {
  const cardObj = cardList.find((item) => item.element === card);
  const cardNumIndex = numbers.findIndex((num) => cardObj.card.num === num);

  if (
    !playStackElements.find((playStack) => playStack.lastChild === card) &&
    !(flippedElement.lastChild === card)
  )
    return false;

  const lastCardElement = stack.lastChild;
  const lastCardObj =
    lastCardElement &&
    cardList.find((item) => item.element === lastCardElement);
  const lastCardNumIndex =
    lastCardObj && numbers.findIndex((num) => lastCardObj.card.num === num);

  if (stack.id !== cardObj.card.suit) return false;
  if (!lastCardObj && cardObj.card.num === "A") return true;
  return cardNumIndex - 1 === lastCardNumIndex;
};

const checkWin = () => {
  let win = true;
  aceStackElements.forEach((element) => {
    if (element.childElementCount !== 14) win = false;
  });
  if (win) winBanner.classList.remove("hide");
  return win;
};

//* Events and Handlers
const draggingStartHandler = (e) => {
  if (!e.target || !e.target.classList) return;
  e.target.classList.add("dragging");
  hintCards(e.target);
};

const hintCards = (card) => {
  if (!hintsElement.checked) return;
  playStackElements.forEach((stack) => {
    if (checkPlayStack(card, stack))
      stack.lastChild
        ? stack.lastChild.classList.add("playable")
        : stack.classList.add("playable");
  });
  aceStackElements.forEach((stack) => {
    if (checkAceStack(card, stack)) stack.lastChild.classList.add("playable");
  });
};

const draggingStopHandler = (e) => {
  if (!e.target || !e.target.classList) return;
  e.target.classList.remove("dragging");
  hintCardsStop(e.target);
};

const hintCardsStop = () => {
  const elements = document.querySelectorAll(".playable");
  elements.forEach((element) => element.classList.remove("playable"));
};

const dropHandler = (e) => {
  const newStack = e.target.closest("div.stack");
  if (!newStack) return;
  const card = document.getElementsByClassName("dragging")[0];
  if (!card) return;
  if (!checkPlay(card, newStack)) return;
  const oldStack = card.closest("div.stack");
  if (!oldStack) return;
  const cards = getAllChildrenAfter(card, oldStack);
  moveCards(cards, newStack);
};

window.addEventListener("dragstart", draggingStartHandler);
window.addEventListener("dragend", draggingStopHandler);
window.addEventListener("dragover", (e) => e.preventDefault());
window.addEventListener("dragenter", (e) => e.preventDefault());
window.addEventListener("drop", dropHandler);

//* Start
(function () {
  heartsElement.appendChild(
    cardGenerator("hearts", "A", "red", true, ["placeHolder"])
  );
  diamondsElement.appendChild(
    cardGenerator("diamonds", "A", "red", true, ["placeHolder"])
  );
  clubsElement.appendChild(
    cardGenerator("clubs", "A", "black", true, ["placeHolder"])
  );
  spadesElement.appendChild(
    cardGenerator("spades", "A", "black", true, ["placeHolder"])
  );
})();

setup();
