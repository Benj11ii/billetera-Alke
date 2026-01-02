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

function login() {
    // 1. Obtener valores del formulario
    let usuario = document.getElementById("usuario").value;
    let clave = document.getElementById("clave").value;

    // 2. Validar (Simulado)
    if(usuario === "admin" && clave === "1234") {
        alert("Bienvenido");
        window.location.href = "menu.html"; // Redirigir al menú
    } else {
        alert("Datos incorrectos");
    }
}

// Definir saldo inicial si no existe
let saldo = localStorage.getItem("saldo") || 1000;

// Función para mostrar saldo en pantalla
document.getElementById("saldo-display").innerText = "$" + saldo;

// Función para depositar
function depositar() {
    let monto = parseInt(document.getElementById("monto").value);
    saldo = parseInt(saldo) + monto;
    
    // Guardar nuevo saldo en memoria del navegador
    localStorage.setItem("saldo", saldo);
    alert("Depósito exitoso");
}