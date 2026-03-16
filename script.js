// Esperamos a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.documentElement;

    // 1. Verificación inicial de seguridad
    if (!themeToggle) {
        console.error("No se encontró el botón con ID 'theme-toggle'");
        return;
    }

    // 2. Cargar preferencia guardada
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        body.setAttribute('data-theme', 'dark');
        updateIcon('dark');
    }

    // 3. Evento de click
    themeToggle.addEventListener('click', () => {
        const isDark = body.getAttribute('data-theme') === 'dark';
        
        if (isDark) {
            body.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
            updateIcon('light');
        } else {
            body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            updateIcon('dark');
        }
    });

    function updateIcon(theme) {
        const icon = themeToggle.querySelector('.icon');
        if (icon) {
            icon.textContent = theme === 'dark' ? '☀️' : '🌙';
        }
    }
    
    console.log("Sistema de Dark Mode inicializado correctamente.");
});
