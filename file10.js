// for remove operation

let addbtn = document.getElementById('add_btn') 

addbtn.addEventListener('click', addChapter) 

let parentList = document.getElementById('perentList')


function addChapter(e)      
{

    
// if(parentList.children[0].className == "EmptyMsg")
// {
//     parentList.children[0].remove()
// }
removeElementsByClass();

function removeElementsByClass(){
    const elements = document.getElementsByClassName("EmptyMsg");
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }

}

// document.querySelector(".EmptyMsg").remove()

let currentBtn = e.currentTarget;         
let currentInput = currentBtn.previousElementSibling 
let chepter = (currentInput.value) 



let newLi =document.createElement('li') 

// newLi.classList.add('list-group-item') 

newLi.className = "list-group-item d-flex justify-content-between"


newLi.innerHTML = `<h4 class="flex-grow-1">${chepter} </h4>
<button class="btn btn-warning mx-3">Edit</button>
<button class="btn btn-danger" onclick="removeChepter(this)">Remove</button> ` 

    parentList.appendChild(newLi)
    removeChepter();
}

function removeChepter(currentElement)
{
    console.log("ee");
    currentElement.parentElement.remove()

    let parentList =document.getElementById('parentList')

    if(parentList.children.length <=0)
    {
        let newEmptyMsg = document.createElement("h3")
           newEmptyMsg.classList.add("EmptyMsg")

        newEmptyMsg.textContent = "Nothing is here. Please add a chepter"
        parentList.appendChild(newEmptyMsg)
    }
}