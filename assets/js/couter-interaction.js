
//variables
let displayNumber = document.getElementById('display-number');
let buttonContainer = document.getElementById('button-container');

//set counter to initial value
let counter = 0;

//event listener: event delegation
buttonContainer.addEventListener('click', (e) => {
    let target = e.target;

    switch(target.id) {
        case 'decrement-button':
            counter--
            break;
        case 'reset-button':
            counter = 0;
            break;
        case 'increment-button':
            counter++;
            break;
    }

    displayNumber.innerText = counter
})
