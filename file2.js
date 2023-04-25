// siblings only two property. 1.next siblings 2.next element property

const ultag = document.body.children[0]
console.log(ultag.nextSibling)                  // for use text
console.log(ultag.nextElementSibling)           //  for script text

// use li tag

const firstli = ultag.children[0]
const secondli = ultag.children[1]
const thirdli =  ultag.children[2]

console.log(firstli.previousElementSibling)
console.log(secondli.previousElementSibling.textContent)
console.log(thirdli.previousElementSibling.textContent)

// Table DOM Maniulation

const tableTag = document.body.children[0]
console.log(tableTag.rows)

// Search ID

element.style.background = "red"

const ul = document.getElementById("element")
ul.style.backgroundColor = "blue"

console.log()

