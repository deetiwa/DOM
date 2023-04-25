// for remove operation

let addbtn = document.getElementById('add_btn') 

addbtn.addEventListener('click', addChapter)  

function addChapter(e)      
{

let currentBtn = e.currentTarget;         
let currentInput = currentBtn.previousElementSibling 
let chepter = (currentInput.value) 



let newLi =document.createElement('li') 

// newLi.classList.add('list-group-item') 

newLi.className = "list-group-item d-flex justify-content-between"


newLi.innerHTML = `<h4 class="flex-grow-1">${chepter} </h4>
<button class="btn btn-warning mx-3">Edit</button>
<button class="btn btn-danger"  onclick="removeChepter(this)"> Remove</button> ` 




let perentList = document.getElementById('perentList') 
    perentList.appendChild(newLi)

}

function removeChepter(currentElement)
{
    currentElement.parentElement.remove()
}