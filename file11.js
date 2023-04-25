// for remove operation

let addbtn = document.getElementById('add_btn') 

addbtn.addEventListener('click', addChapter) 

let parentList = document.getElementById('perentList')


function addChapter(e)      
{

    
if(parentList.children[0].className == "EmptyMsg")
{
    parentList.children[0].remove()
}

let currentBtn = e.currentTarget;         
let currentInput = currentBtn.previousElementSibling 
let currChepterName = (currentInput.value) 



let newLi =document.createElement('li') 

// newLi.classList.add('list-group-item') 

newLi.className = "list-group-item d-flex justify-content-between"


newLi.innerHTML = `<h4 class="flex-grow-1">${currChepterName} </h4>
<button class="btn btn-warning mx-3">Edit</button>
<button class="btn btn-danger" onclick="removeChepter(this)">Remove</button> ` 

    parentList.appendChild(newLi)

}

function removeChepter(currentElement)
{
    currentElement.parentElement.remove()

    let parentList =document.getElementById('parentList')

    if(parentList.children.length <=0)
    {
        let newEmptyMsg = document.createElement("h3")
        //    newEmptyMsg.classList.add("emptyMsg")

        newEmptyMsg.textContent = "Nothing is here. Please add a chepter"
        parentList.appendChild(newEmptyMsg)
    }
}

function editChepter(currElement)
{
    let currChepterName =  currElement.previousElementSibling.textContent
    let currInput =document.createElement('input')
    currInput.type = "text"
    currInput.className ="form-control"
    currInput.placeholder ="Chapter Name"
    currInput.value = currChepterName

    currElement.parentElement.replaceChild(currInpur, currElement.previousElementSibling.textContent)
}