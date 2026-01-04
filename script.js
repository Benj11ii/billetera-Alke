// 1. Lógica del Login
const loginForm = document.getElementById("loginForm"); // Guardamos el elemento en una variable

if (loginForm) { // SOLO si existe el formulario (estamos en login.html), ejecutamos esto
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const user = document.getElementById("username").value;
        const pass = document.getElementById("password").value;
        
        if (user === "admin" && pass === "1234") {
            window.location.href = "menu.html";
        } else {
            // Sugerencia: Mejor usar un elemento HTML para el error en vez de alert
            document.getElementById("error").textContent = "Usuario o contraseña incorrectos"; 
        }
    });
}
// Definir saldo inicial si no existe
// 2. Lógica del Saldo (Para menu.html, deposit.html, etc.)
let saldo = localStorage.getItem("saldo") || 1000;
const saldoDisplay = document.getElementById("saldo-display");

if (saldoDisplay) { // Si existe el elemento para mostrar saldo en esta página
    saldoDisplay.innerText = "$" + saldo;
}

// 3. Lógica para Depositar (deposit.html)
const depositForm = document.getElementById("depositForm"); // Asegúrate de que tu form en HTML tenga este ID

if (depositForm) {
    depositForm.addEventListener("submit", function(e) {
        e.preventDefault();
        
        // Asumimos que el input donde pones la plata tiene id="amount"
        const amount = parseFloat(document.getElementById("amount").value);
        
        if (amount > 0) {
            let saldoActual = parseFloat(localStorage.getItem("saldo")) || 1000;
            let nuevoSaldo = saldoActual + amount;
            
            // Guardamos
            localStorage.setItem("saldo", nuevoSaldo);
            
            alert(`Has depositado $${amount}. Nuevo saldo: $${nuevoSaldo}`);
            window.location.href = "menu.html"; // Volver al menú
        } else {
            alert("Por favor ingresa un monto válido");
        }
    });
}

// 4. Lógica para Enviar Dinero (sendmoney.html)
const sendForm = document.getElementById("sendForm"); // Asegúrate de que tu form tenga este ID

if (sendForm) {
    sendForm.addEventListener("submit", function(e) {
        e.preventDefault();
        
        const amount = parseFloat(document.getElementById("amount").value);
        let saldoActual = parseFloat(localStorage.getItem("saldo")) || 1000;

        if (amount > saldoActual) {
            alert("Fondos insuficientes 🚫");
        } else if (amount > 0) {
            let nuevoSaldo = saldoActual - amount;
            
            // Guardamos
            localStorage.setItem("saldo", nuevoSaldo);
            
            alert(`Transferencia exitosa de $${amount}. Nuevo saldo: $${nuevoSaldo}`);
            window.location.href = "menu.html";
        } else {
            alert("Monto inválido");
        }
    });
}