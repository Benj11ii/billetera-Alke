document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
    const error = document.getElementById("error");

    if (user === "admin" && pass === "1234") {
        window.location.href = "menu.html";
    } else {
        error.textContent = "Usuario o contraseña incorrectos";
    }
});
