var newElement = document.createElement("h2");

var newtext = document.createTextNode("This  is  Just text");


newElement.appendChild(newtext);

//document.getElementById("test").appendChild(newElement);

var target = document.getElementById("test");

target.insertBefore(newElement,target.childNodes[3])

