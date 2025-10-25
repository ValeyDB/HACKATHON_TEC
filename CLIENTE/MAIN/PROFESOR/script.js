// Función para descargar manual
function descargarManual(numeroCurso) {
    const manuales = {
        1: {
            nombre: "Manual Plantación Exitosa",
            paginas: "120 páginas",
            archivo: "manual_plantacion_exitosa.pdf"
        },
        2: {
            nombre: "Manual Cultivo Exótico",
            paginas: "95 páginas",
            archivo: "manual_cultivo_exotico.pdf"
        },
        3: {
            nombre: "Manual Cultivo Limpio",
            paginas: "75 páginas",
            archivo: "manual_cultivo_limpio.pdf"
        },
        4: {
            nombre: "Manual GreenLab",
            paginas: "150 páginas + Módulos",
            archivo: "manual_greenlab.pdf"
        }
    };
    
    const manual = manuales[numeroCurso];
    
    // Simular descarga
    alert(`Descargando: ${manual.nombre}\n${manual.paginas}\n\nEl archivo se descargará en breve...`);
    
    // Aquí puedes agregar la lógica real de descarga
    console.log(`Descargando: ${manual.archivo}`);
    
    // Guardar registro de descarga
    const descargas = JSON.parse(localStorage.getItem('descargas_profesor') || '[]');
    
    const nuevaDescarga = {
        curso: numeroCurso,
        nombreManual: manual.nombre,
        fecha: new Date().toISOString(),
        timestamp: Date.now()
    };
    
    descargas.push(nuevaDescarga);
    localStorage.setItem('descargas_profesor', JSON.stringify(descargas));
    
    // Simular inicio de descarga (en producción, aquí iría el link real al PDF)
    /*
    // Ejemplo de descarga real:
    const link = document.createElement('a');
    link.href = `/manuales/${manual.archivo}`;
    link.download = manual.archivo;
    link.click();
    */
}

// Función para cerrar sesión
function cerrarSesion() {
    if (confirm('¿Estás seguro de que deseas cerrar sesión?')) {
        alert('Sesión cerrada exitosamente');
        // Redirigir a la página principal
        window.location.href = 'index.html';
    }
}

// Ver historial de descargas al cargar la página
window.addEventListener('DOMContentLoaded', () => {
    const descargas = JSON.parse(localStorage.getItem('descargas_profesor') || '[]');
    
    if (descargas.length > 0) {
        console.log('=== HISTORIAL DE DESCARGAS ===');
        descargas.forEach((descarga, index) => {
            const fecha = new Date(descarga.fecha);
            console.log(`${index + 1}. ${descarga.nombreManual} - ${fecha.toLocaleDateString()}`);
        });
        console.log('==============================');
    }
    
    // Mostrar notificación si hay actualizaciones
    mostrarNotificaciones();
});

// Función para mostrar notificaciones de actualizaciones
function mostrarNotificaciones() {
    // Aquí puedes agregar lógica para notificar sobre nuevos materiales o actualizaciones
    const ultimaVisita = localStorage.getItem('ultima_visita_profesor');
    const ahora = Date.now();
    
    if (!ultimaVisita) {
        console.log('¡Bienvenido! Esta es tu primera visita al área de profesores.');
    } else {
        const diasDesdeUltimaVisita = Math.floor((ahora - parseInt(ultimaVisita)) / (1000 * 60 * 60 * 24));
        if (diasDesdeUltimaVisita > 7) {
            console.log(`Han pasado ${diasDesdeUltimaVisita} días desde tu última visita. Revisa si hay nuevos materiales.`);
        }
    }
    
    localStorage.setItem('ultima_visita_profesor', ahora.toString());
}

// Función para búsqueda rápida en la página (opcional)
function buscarEnPagina(texto) {
    const contenido = document.body.innerText.toLowerCase();
    if (contenido.includes(texto.toLowerCase())) {
        console.log(`Se encontraron resultados para: "${texto}"`);
        // Aquí puedes agregar lógica para resaltar el texto encontrado
    } else {
        console.log(`No se encontraron resultados para: "${texto}"`);
    }
}
