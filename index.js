console.log("Hello");

console.log(document.getElementById("title"));
console.log(document.getElementsByClassName("content"));
console.log(document.getElementsByTagName("li"));
let firstListItem = document.querySelector("#itemList li");
console.log(firstListItem);
let parentElement = firstListItem.parentNode;
console.log(parentElement);

let itemList = document.querySelector("#itemList ul");
console.log(itemList);
let childElement = itemList.childNodes;
console.log(childElement);

/* Ticket 2b: Child Nodes
Instructions:
Select the <ul> element with the id of "itemList".
Use the childNodes property to get all its child nodes.
Log the child nodes to the console.
Expected Outcome:
The console should display a collection (NodeList) of child nodes of the <ul> element, which includes the <li> elements as well as any whitespace or line breaks.*/
