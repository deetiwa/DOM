// class manipulation


listitem = document.getElementsByClassName("list-item")
console.log(listitem)
console.log(document.getElementsByTagName("ul"))
console.log(document.getElementsByTagName("table"))


// Query Selector

const list = document.querySelector('.list-item')
console.log(list)
const list_Item = document.querySelectorAll('ul> li:last-child')
console.log(list_Item[0])

//Note => Diffrence between queryselector is static but getelement function change on run time

const alldiv = document.getElementsByClassName("alldiv") //it is live and pass reference not pass data change value
console.log(alldiv)

const div = document.querySelector(".alldiv") //it is static element store in variable 
console.log(div)
