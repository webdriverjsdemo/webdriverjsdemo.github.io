function showElementAfterFiveSeconds() {
  var parent = document.getElementById("elementappearsparent");
  var div = document.createElement("div");
  var text = document.createTextNode("Boo!");
  div.setAttribute("id", "elementappearschild");
  div.appendChild(text);
  parent.appendChild(div);
}

setTimeout("showElementAfterFiveSeconds()", 5000);
