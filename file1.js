// Root Node

console.log(document.documentElement)
console.log(document.body)
console.log(document.head)

// Child Node

console.log(document.body.childNodes)
console.log(document.body.children)

// using for loop for trverser

for(node of document.body.children)
{
console.log(node)
}

console.log(document.body.firstChild)
console.log(document.body.lastChild)

// Element

console.log(document.body.firstElementChild)
console.log(document.body.lastElementChild)

// how to use array 

const childrenofbody = Array.from(document.body.children)
console.log(childrenofbody)
