// TODO: this file! :)

// ============ STATE ================
const state = {
  numbers: [],
  evens: [],
  odds: [],
};

// ============ FUNCTIONS ================
const addNum = (event) => {
  event.preventDefault();
  const userInput = document.querySelector("#number");
  state.numbers.push(Number(userInput.value));
  renderNumbers();
  userInput.value = "";
};

function sortFirstNumber(){
    if (state.numbers.length>0){
        const firstNumber= state.numbers.shift();

        if (firstNumber % 2 ===0){
            state.evens.push(firstNumber);
        } else {
            state.odds.push(firstNumber);
        };

    renderNumbers();
    renderSortedNumbers();
    };
};

function sortAllNumbers(){
    while (state.numbers.length> 0){
        const number= state.numbers.shift();

        if (number % 2 ===0){
            state.evens.push(number);
        } else {
            state.odds.push(number);
        };

    renderNumbers();
    renderSortedNumbers();
    };
};

function renderNumbers() {
  const output = document.querySelector("#numberBank output");
  output.textContent = state.numbers.join(", ");
}

function renderSortedNumbers(){
    const oddsOutput= document.querySelector("#odds output");
    const evensOutput= document.querySelector("#evens output");
    oddsOutput.textContent = state.odds.join(", ");
    evensOutput.textContent = state.evens.join(", ");
};

// ============ EVENT LISTENERS ================
const form = document.querySelector("form");
form.addEventListener("submit", addNum);


const sortOneButton= document.querySelector("#sortOne");
sortOneButton.addEventListener("click", sortFirstNumber);

const sortAllButton= document.querySelector("#sortAll");
sortAllButton.addEventListener("click", sortAllNumbers)

// ============ FINAL RENDER ================
renderNumbers();
renderSortedNumbers();