// Esperamos a que todo el HTML esté cargado antes de ejecutar JS
document.addEventListener('DOMContentLoaded', () => {
    
    const btnTheme = document.getElementById('theme-toggle');
    const rootElement = document.documentElement;

    // Verificamos si el botón realmente existe para evitar errores en consola
    if (btnTheme) {
        console.log("¡Botón encontrado y listo!"); // Esto saldrá en la consola (F12)

        // Cargar preferencia guardada
        const savedTheme = localStorage.getItem('theme') || 'light';
        rootElement.setAttribute('data-theme', savedTheme);
        btnTheme.textContent = savedTheme === 'dark' ? '☀️' : '🌙';

        btnTheme.addEventListener('click', () => {
            const isDark = rootElement.getAttribute('data-theme') === 'dark';
            const newTheme = isDark ? 'light' : 'dark';
            
            rootElement.setAttribute('data-theme', newTheme);
            btnTheme.textContent = newTheme === 'dark' ? '☀️' : '🌙';
            localStorage.setItem('theme', newTheme);
            
            console.log("Cambiando a tema:", newTheme);
        });
    } else {
        console.error("Error: No encontré el botón con ID 'theme-toggle'. Revisa tu HTML.");
    }
});
