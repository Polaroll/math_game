const gameBox    =  document.getElementById("gameBox");
const mathBox    =  document.getElementById("mathBox");
const userAnswer =  document.getElementById("userAnswer");
const question   =  document.getElementById("question");
const result     =  document.getElementById("result");


// EQUATION GENERATION FUNCTIONS

function genAddition(difficulty)
{
    // Generates a randomized addition equation using only whole positive numbers. 
    // Returns a tuple of 3 integers being num1, num2, and  answer

    const num1 = Math.floor(Math.random() * 10) + 1;        // Generates number between 1 and 10 inclusive
    const num2 = Math.floor(Math.random() * 10) + 1;
    answer = num1 + num2;

    return (num1, num2, answer);
}
function genSubtraction(difficulty)
{
    // Generates a randomized subtraction equation using only whole positive numbers. 
    // Returns a tuple of 3 integers being num1, num2, and  answer

    const num1 = Math.floor(Math.random() * 10) + 1;        // Generates number between 1 and 10 inclusive
    const num2 = Math.floor(Math.random() * 10) + 1;
    answer = num1 - num2;

    return (num1, num2, answer);

    // Code goes here...
}
function genMultiplication(difficulty)
{
    // Generates a randomized multiplication equation using only whole positive numbers. 
    // Returns a tuple of 3 integers being num1, num2, and  answer

    // Code goes here...
    const num1 = Math.floor(Math.random() * 10) + 1;        // Generates number between 1 and 10 inclusive
    const num2 = Math.floor(Math.random() * 10) + 1;
    answer = num1 * num2;

    return (num1, num2, answer);
}
// function genDivision(difficulty)
// {
//     // Generates a randomized division equation using only whole positive numbers. 
//     // Returns a tuple of 3 integers being num1, num2, and  answer

//     // Code goes here...
//     const num1 = Math.floor(Math.random() * 10) + 1;        // Generates number between 1 and 10 inclusive
//     const num2 = Math.floor(Math.random() * 10) + 1;
//     answer = num1 / num2;

//     return (num1, num2, answer);
// }


function genDivision(difficulty) {
    
    let range = 10; 
    let maxNum2 = Math.floor(range / 2); 

    const num2 = Math.floor(Math.random() * maxNum2) + 1; 
    const maxMultiplier = Math.floor(range / num2); 
    const multiplier = Math.floor(Math.random() * maxMultiplier) + 1; 
    const num1 = num2 * multiplier; 
    const answer = num1 / num2; 

    return [num1, num2, answer];
}

// Example usage:
const [num1, num2, answer] = genDivision();
console.log(`Division equation: ${num1} / ${num2} = ${answer}`);



// UPDATE HTML FUNCTIONS

function checkAnswer(num1, num2, userAnswer) 
{
    // Checks the user's input and compares it to the question to 
    // see if the user's answer matches the equations correct answer.

    if (isNaN(userAnswer)) {
        result.innerText = 'Please enter a valid number.';
        return;
    }

    const resultMessage = userAnswer === answer ? 'Correct!' : 'Incorrect. Try again.';

    result.innerText = resultMessage;
}
function updateQuestion(num1, num2, answer)
{
    // Updates the HTML to show a new equation provided
    // from the passed parameters.

    question.innerHTML = `${num1} + ${num2} = <input type='text' id='userAnswer' required>`;

}



