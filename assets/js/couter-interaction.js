
//variables
let displayNumber = document.getElementById('display-number');
let buttonContainer = document.getElementById('button-container');

//set counter to initial value
let counter = 0;

//event listener: event delegation
buttonContainer.addEventListener('click', (e) => {
    let eventTarget = e.target;

    switch(eventTarget.id) {
        case 'decrement-button':
            counter--
            break;

        case 'reset-button':
            if(window.confirm('Do you want reset the counter?')) {
                counter = 0   
            }
            break;
            
        case 'increment-button':
            counter++;
            break;
    }

    displayNumber.innerText = counter
})
