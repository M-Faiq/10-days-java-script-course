//var  newElement = document.createElement("h2");

//var newText = document.createTextNode("This is  just text")

//newElement.appendChild(newText);

var target = document.getElementById("test");

var newtext = "<h2>This Just Html Text</h2>";

target.insertAdjacentHTML("beforebegin",newtext);