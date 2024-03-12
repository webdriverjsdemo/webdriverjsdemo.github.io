window.onload = () => {
  const show = document.querySelector('#show');
  show.addEventListener('click', () => {
    loadRequest();
  });
};

function loadRequest() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("content").innerHTML =
      this.responseText;
    }
  };
  //xhttp.open("GET", "https://my-json-server.typicode.com/webdriverjsdemo/webdriverjsdemo.github.io/posts", true);
  xhttp.open("GET", "https://jp.translink.com.au/api/stop/timetable/003749", true);
  xhttp.send();
}
