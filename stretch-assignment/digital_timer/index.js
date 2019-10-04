// Create arrays for our digit class and the IDs of the actual numerical digit slots.
const digits = document.querySelectorAll('.digit');

const digitIds = Array.from(digits).map(digit => {
    return digit.id;
}).filter(id => id !== 'colon');


// Create a timer interval which adds milliseconds and checks if the next number up needs to be incremented
const activateTimer = () => {
    // Disable buttons
    document.getElementById('start').setAttribute('disabled', true);
    document.getElementById('reset').disabled = true;

    // Set all actual digits to 0
    digitIds.forEach(id => {
        document.getElementById(id).textContent = 0;
    });   

    // Set interval, increasing ms every 100 ms while total < 10
    const timer = window.setInterval(() => {
        if(Number(document.querySelector('#secondTens').textContent) === 0){
            document.querySelector('#msTens').textContent = Number(document.querySelector('#msTens').textContent) + 1;
        }
        // Check each digit to determine if it should increment the next one in line up 
        digitIds.forEach((digitID, index) => {
            checkForIncrement(digitID, index);
        });
    }, 100);


    function checkForIncrement(digitID, index){
        // Set variables for this digit and the preceeding digit
        // If the index is 0 for the preceeding digit simply return false
        let thisDigit = document.querySelector(`#${digitID}`);
        let nextDigit = index > 0 ? document.querySelector(`#${digitIds[index - 1]}`) : false;
        
        // Check if this digit is 9, if so increment the preceding number and
        // Set the value of the current digit to 0
    
            //Because of the rate of change for the msTens unit, it was neccesarry to allow it to reach 10, to display 9
            //however, the 10 never gets displayed at-speed.
        if(digitID === 'msTens' && Number(thisDigit.textContent) === 10){
            thisDigit.textContent = 0;
            nextDigit.textContent = Number(nextDigit.textContent) + 1;
        }
    
        else if(digitID !== 'msTens' && Number(thisDigit.textContent) === 9 && Number(document.querySelector(`#${digitIds[index + 1]}`).textContent) === 9){
            let previousDigit = document.querySelector(`#${digitIds[index + 1]}`);
    
            thisDigit.textContent = 0;
            nextDigit.textContent = Number(nextDigit.textContent) + 1;
            //because we are iterating through the digits in the opposite order than we calculate them
            //a "jump" will occur when the number is 0 and the previous number is 9.
            //we could simply reverse the array we are iterating over, however because we are utlizing the
            //index of that array, it's just as easy to manually override this behavior by explicitly setting
            //the previous digit to 0;
            previousDigit.textContent = 0;
        }
    
        //If we have reached 10, stop;
        if(Number(document.querySelector('#secondTens').textContent) > 0){
            document.querySelectorAll('.digit').forEach(digit => {
                digit.style.color = 'red'
            });
            clearInterval(timer);
            tidyClock();
            document.getElementById('reset').disabled = false;
        }
    }
}

//msTens, tends to beat the function call to clearInterval by 1ms, clear this.
const tidyClock = () => {
    digitIds.slice(1).forEach(digit => {
        document.getElementById(digit).textContent = 0;
    });
}

// function to reset timer and reinable the start button.
const resetTimer = () => {

    document.querySelectorAll('.digit').forEach(digit => {
        digit.style.color = 'white';
        digit.textContent = digit.textContent === ':' ? ':' : '-';
    });

    document.getElementById('start').disabled = false;
}

// Create a start button
const startButton = document.createElement('button');
startButton.textContent = 'Start';
startButton.onclick = activateTimer;
startButton.id = 'start';



document.body.style.display = 'flex';
document.body.style.flexDirection = 'column';

// Create a reset button
const resetButton = document.createElement('button');
resetButton.textContent = 'Reset';
resetButton.onclick = resetTimer;
resetButton.id = 'reset';



document.body.style.display = 'flex';
document.body.style.flexDirection = 'column';

// Styling

let buttonHolder = document.createElement('div');
buttonHolder.setAttribute('class','btn-container');
buttonHolder.display = 'flex';
buttonHolder.style.justifyContent = 'center';
buttonHolder = document.body.appendChild(buttonHolder);

buttonHolder.appendChild(startButton);
buttonHolder.appendChild(resetButton);

const stylesheet = document.styleSheets[0];


let digitsStyling = `
    .digits{
        margin-top: 20rem;
        border: 0.5rem black solid;
        margin-bottom: 2rem;
    }
`;

let digitStyling = `
    .digits .digit{
        display: flex;
        justify-content: center;
        background: black;
        color: white;
        height: 6rem;
        width: 6rem;
        border: 1rem grey solid;
        opacity: 0.5;
    }
`

let btnStyling = `
    #start, #reset{
        font-size: 2rem;
        font-weight: 600;
        height: 3rem;
        width: 8rem;
        border-radius: 6px;
        margin: 2%;
    }
`;

let bg = `
    body{
        background-image: url('./time.jpg');
        background-size: cover;
        background-repeat: no-repeat;
    }
`;

stylesheet.insertRule(digitsStyling, 3);
stylesheet.insertRule(digitStyling, 4);
stylesheet.insertRule(btnStyling, 5);
stylesheet.insertRule(bg, 6);