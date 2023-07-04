JS
function login() {
  x = document.getElementById("email").value;
  y = document.getElementById("password").value;
  z = document.getElementById("error-message");

  if (x == "meilyaatiffah@gmail.com" && y == "060503") {
    alert("Login Berhasil");
  } else {
    z.innerHTML = "Email atau Password<br>Salah";
    z.style.display = "block";
  }
}