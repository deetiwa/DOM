// how to access attribute 

console.log(element.id)
console.log(element.data)  // self attribute not access 

console.log(element.getAttribute('data'))

console.log(element.setAttribute('order-placed', 'pending'))

console.log(element.hasAttribute('order-placed'))

console.log(element.removeAttribute('order-placed'))

console.log(element.attributes)

// Creating and Removing the node element


const newdiv = document.createElement('div')
body.append(newdiv)

const text = document.createTextNode('Hello World')
newdiv.appendChild(text)                             // below the body
body.append(newdiv)                       // above the body
body.before(newdiv)
body.after(newdiv)
first.replaceWith(newdiv)