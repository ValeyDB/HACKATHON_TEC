// CONFIGURACIÓN
const API_URL = "http://localhost:3000";
const TOKEN = "INVERNADERO2025";
let recetas = [];

// INICIALIZACIÓN
document.addEventListener('DOMContentLoaded', function() {
    console.log("Iniciando aplicación...");
    conectar();
});

// CONEXIÓN A LA API
function conectar() {
    fetch(`${API_URL}/`, {
        headers: { "authorization": TOKEN }
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("estado-conexion").innerHTML = "Conectado";
        document.getElementById("estado-conexion").className = "status success";
        
        if (data.recetas) {
            recetas = data.recetas;
            mostrarRecetas(data.recetas);
            mostrarMensaje(`${data.total} datos cargados`, "success");
        }
    })
    .catch(error => {
        document.getElementById("estado-conexion").innerHTML = "Error de conexión";
        document.getElementById("estado-conexion").className = "status error";
        mostrarMensaje("Error al conectar", "error");
    });
}

// INICIAR SESIÓN
function iniciar() {
    const datos = {
        //Rellenar
    }};

