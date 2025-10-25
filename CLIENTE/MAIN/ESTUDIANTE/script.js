// Función para volver a la página principal
function volver() {
    window.location.href = 'index.html';
}

// Función para inscribirse a un curso
function inscribir(numeroCurso) {
    const cursos = {
        1: "Plantación Exitosa",
        2: "Cultivo Exótico",
        3: "Cultivo Limpio",
        4: "GreenLab"
    };
    
    const nombreCurso = cursos[numeroCurso];
    
    // Aquí puedes agregar la lógica para manejar la inscripción
    // Por ahora solo mostramos un alert
    alert(`¡Te has inscrito al curso: ${nombreCurso}!\n\nEn breve recibirás más información por correo electrónico.`);
    
    // Opcional: Guardar en localStorage para tracking
    const inscripciones = JSON.parse(localStorage.getItem('inscripciones')) || [];
    
    if (!inscripciones.includes(numeroCurso)) {
        inscripciones.push(numeroCurso);
        localStorage.setItem('inscripciones', JSON.stringify(inscripciones));
    }
    
    console.log(`Alumno inscrito al curso ${numeroCurso}: ${nombreCurso}`);
}

// Verificar inscripciones previas al cargar la página
window.addEventListener('DOMContentLoaded', function() {
    const inscripciones = JSON.parse(localStorage.getItem('inscripciones')) || [];
    
    if (inscripciones.length > 0) {
        console.log('Cursos inscritos:', inscripciones);
        
        // Cambiar el texto del botón si ya está inscrito
        inscripciones.forEach(numeroCurso => {
            const botones = document.querySelectorAll('.btn-inscribir');
            if (botones[numeroCurso - 1]) {
                botones[numeroCurso - 1].textContent = '✓ Inscrito';
                botones[numeroCurso - 1].style.background = 'linear-gradient(45deg, #036842, #025233)';
            }
        });
    }
});