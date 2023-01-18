//variables 
let incrementButton = document.getElementById('increment-button');
let decrementButton = document.getElementById('decrement-button');
let resetButton = document.getElementById('reset-button');
let displayNumber = document.getElementById('display-number');

//set counter to initial value

let counter = 0;

//event listener: increment, decrement, reset

incrementButton.addEventListener('click', ()=>{
    counter++;
    displayNumber.innerText = counter
});

decrementButton.addEventListener('click', ()=>{
    counter--;
    displayNumber.innerText = counter
})

resetButton.addEventListener('click', ()=>{
    if(window.confirm('Do you want reset the counter?')) {
        counter = 0
        displayNumber.innerText = counter
    }
})
