const gameBox    =  document.getElementById("gameBox");
const mathBox    =  document.getElementById("mathBox");
const userAnswer =  document.getElementById("answer");
const question   =  document.getElementById("question");
const difficulty = 0;
const tuple = (0,0,0);


// EQUATION GENERATION FUNCTIONS

function genAddition(difficulty)
{
    // Generates a randomized addition equation using only whole positive numbers. 
    // Returns a tuple of 3 integers being num1, num2, and  answer

    // Code goes here...
    let range = 0;
    switch (difficulty) {
        case 1:
            range = 10;
            break;
        case 2:
            range = 50;
            break;
        case 3:
            range = 100;
            break;
    }
    const num1 = Math.floor(Math.random() * range) + 1;
    const num2 = Math.floor(Math.random() * range) + 1;

    const answer = num1 + num2;

    return {num1, num2, answer};

}
function genSubtraction(difficulty)
{
    // Generates a randomized subtraction equation using only whole positive numbers. 
    // Returns a tuple of 3 integers being num1, num2, and  answer

    // Code goes here...
    let range = 0;
    switch (difficulty) {
        case 1:
            range = 10;
            break;
        case 2:
            range = 50;
            break;
        case 3:
            range = 100;
            break;
    }
    const num1 = Math.floor(Math.random() * range) + 1;
    const num2 = Math.floor(Math.random() * range) + 1;

    const answer = num1 - num2;

    return {num1, num2, answer};
}
function genMultiplication(difficulty)
{
    // Generates a randomized multiplication equation using only whole positive numbers. 
    // Returns a tuple of 3 integers being num1, num2, and  answer

    // Code goes here...
    let range = 0;
    switch (difficulty) {
        case 1:
            range = 10;
            break;
        case 2:
            range = 50;
            break;
        case 3:
            range = 100;
            break;
    }
    const num1 = Math.floor(Math.random() * range) + 1;
    const num2 = Math.floor(Math.random() * range) + 1;

    const answer = num1 * num2;

    return {num1, num2, answer};
}
function genDivision(difficulty)
{
    // Generates a randomized division equation using only whole positive numbers. 
    // Returns a tuple of 3 integers being num1, num2, and  answer

    // Code goes here...
    let range = 0;
    switch (difficulty) {
        case 1:
            range = 10;
            break;
        case 2:
            range = 50;
            break;
        case 3:
            range = 100;
            break;
    }
    const num1 = Math.floor(Math.random() * range) + 1;
    const num2 = Math.floor(Math.random() * range) + 1;

    const answer = num1 / num2;

    return {num1, num2, answer};
}

function setDifficulty() {
    difficulty = 1;
}

// UPDATE HTML FUNCTIONS

function createGameBox() 
{
    const testElement = document.createElement("div");
    testElement.classList.add("gameBox");
    testElement.innerHTML =
        `<div> 
            <p>Game goes here!!</p> 
        </div>`
    ;
    gameBox.appendChild(testElement);
    const playArea = document.createElement("div");
    playArea.classList.add("eventBox");
    playArea.innerHTML = 
        `<div>
            <p>Game is played in this box</p>
        </div>`
        ;
    testElement.appendChild(playArea);
}
function createEquationBox() 
{
    const equationBox = document.createElement("div");
    equationBox.classList.add("mathBox");
    equationBox.innerHTML = 
        `<div>
            
        </div>`
    ;
    mathBox.appendChild(equationBox);
    const numberBox = document.createElement("div");
    numberBox.classList.add("displayBox");
    numberBox.innerHTML = 
    `<div> 
    <h1>Math Game</h1>
    <h4>For Smart People</h2>
    </div>`
    ;
    equationBox.appendChild(numberBox);
}
function checkAnswer(userAnswer, answer) 
{
    // Checks the user's input and compares it to the question to 
    // see if the user's answer matches the equations correct answer.

    if (userAnswer == answer) {

        // Output to html page Correct

        // console.log("Correct!");
    } else {

        // Output to html page Incorrect

        // console.log("Incorrect");
    }
}
function updateWebEquation(num1, num2, operation)
{
    // Updates the HTML to show a new equation provided
    // from the passed parameters.

    // Code goes here...
    const equation = document.createElement("div");
    equation.innerHTML = `<p>${num1} ${operation} ${num2} = ?</p>`;
    mathBox.querySelector(".displayBox").appendChild(equation);
}


createGameBox();
createEquationBox();
getDifficulty();

const { num1, num2, answer } = genAddition(difficulty); // Generates an addition equation with difficulty level 1
updateWebEquation(num1, num2, '+');
