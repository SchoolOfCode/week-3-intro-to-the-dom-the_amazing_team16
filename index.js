console.log("Hello");

console.log(document.getElementById("title"));
console.log(document.getElementsByClassName("content"));
console.log(document.getElementsByTagName("li"));
let firstListItem = document.querySelector('#itemList li');
console.log(firstListItem);
let parentElement = firstListItem.parentNode;
console.log(parentElement);
