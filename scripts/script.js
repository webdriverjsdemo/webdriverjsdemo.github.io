function addChildElement(id) {
  var parent = document.getElementById(id);
  var div = document.createElement("div");
  var text = document.createTextNode("Boo!");
  div.setAttribute("id", "elementappearschild");
  div.appendChild(text);
  parent.appendChild(div);
}

function removeChildElement(id) {
  var elem = document.getElementById(id);
  elem.parentElement.removeChild(elem);
}

function changeElementText(id) {
  var element = document.getElementById(id);
  element.textContent = "new";
}

setTimeout("addChildElement('elementappearsparent')", 2000);
setTimeout("removeChildElement('elementdisappears')", 3000);
setTimeout("changeElementText('elementchangestext')", 4000);
