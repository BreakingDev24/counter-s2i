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