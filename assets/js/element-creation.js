//variables

const body = document.body;
body.setAttribute('id', 'body-wrap');

//function to create counter elements

const createNewElement = (parent, tagHtml, className, idName, content) => {

    const parentElement = document.getElementById(parent);//define parent node
    const newElement = document.createElement(tagHtml);//create element using tag html

    newElement.classList.add(className);//add class to element
    newElement.setAttribute('id', idName);//add id to element
    newElement.innerText = content; //add content

    parentElement.appendChild(newElement)//insert element in dom
}

//add counter container
createNewElement('body-wrap', 'div', 'counter-container', 'counter-container', '');

//add container section
createNewElement('counter-container', 'div', 'display-number', 'display-number', '0');
createNewElement('counter-container', 'div', 'button-container', 'button-container', '');
createNewElement('counter-container', 'div', 'title-container', 'title-container', '');


createNewElement('button-container', 'button', 'button-el', 'decrement-button', '-');
createNewElement('button-container', 'button', 'button-el', 'reset-button', 'reset');
createNewElement('button-container', 'button', 'button-el', 'increment-button', '+');

createNewElement();
