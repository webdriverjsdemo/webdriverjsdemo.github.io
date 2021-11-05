window.onload = () => {
  const ok = document.querySelector('#ok');
  ok.addEventListener('click', () => {
    const firstname = document.getElementById('firstname').value
    const surname = document.getElementById('surname').value
    document.cookie = `username=${firstname}${surname}`;
  });
  if (document.cookie) {
    const welcome = document.getElementById('welcome');
    welcome.textContent =  `Welcome ${document.cookie}`;
    const auth = document.getElementById("auth");
    auth.style.display = "none";
  }
};
