
// ------ The HTMLCollection Object -------

let myCollection = document.getElementsByTagName("p");

console.log(myCollection);
console.log(myCollection.length);

for(let i=0; i<myCollection.length; i++) {
    myCollection[i].style.color = "red";
}