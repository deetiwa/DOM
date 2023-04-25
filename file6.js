// add item or Create operation


let addbtn = document.getElementById('add_btn') // using button id create variable addbtn

addbtn.addEventListener('click', addChapter)  // using click event on add button and call fun^ add chapter

function addChapter(e)       // create a function add chapter and pass defalut argument (e)
{

let currentBtn = e.currentTarget;         // select button event take current element
let currentInput = currentBtn.previousElementSibling  // currentbtn to access privious sibling
console.log(currentInput.value)           // print value

let newLi =document.createElement('li')  // we have make li element
newLi.classList.add('list-group-item')    // here add class 
newLi.textContent = currentInput.value    // chenge textcontent value 

let perentList = document.getElementById('perentList') //grap perentlist and append child
perentList.appendChild(newLi)

}