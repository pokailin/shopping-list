
// GENERAL VARIABLES 
var button = document.getElementById("enter");
var input  = document.getElementById("userInput");
var ul = document.getElementsByTagName("ul")[0];
var li = document.getElementsByTagName("li");
var del = document.getElementsByClassName("delete");


// ADDING EVENT LISTENERS 

button.addEventListener("click", listAddAfterClick);

input.addEventListener("keypress", listAddAfterEnter);

for (var i=0; i<li.length;i++) {
    li[i].addEventListener("click", addDoneClass);
}

for (var i=0; i<del.length; i++) {
    var delButton = del[i];
    delButton.addEventListener("click", removeElement);
}


// EVENT LISTENER FUNCTIONS 

function removeElement() {
    var element = this.parentNode;
    element.remove();
}

function addDoneClass() {
    this.classList.toggle("done");
}

function listAddAfterClick() {
    if (hasInput()) {
        addToList();
    }
}


// if isEnter() parameter name is anything other than event,
// then listAddAfterEnter() parameter needs to be added.
// if isEnter() uses event as parameter name, 
// then listAddAfterEnter() doesn't need event
// parameter.
function listAddAfterEnter(e) {
    if (hasInput() && isEnter(e)) {
        addToList();
    }
}

// HELPER FUNCTIONS 

function hasInput() {
    return input.value.length > 0;
}

function isEnter(event) {
    return event.keyCode === 13;
}

function addToList() {

    // list element
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    li.addEventListener("click", addDoneClass);
    
    // delete button
    var button = document.createElement("button");
    button.classList.add("delete");
    button.appendChild(document.createTextNode("Delete"));
    button.addEventListener("click", removeElement);
    
    li.append(button);
    ul.appendChild(li);
    input.value = "";
}