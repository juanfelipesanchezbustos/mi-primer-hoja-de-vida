const themeToggle = document.getElementById('theme-toggle');
const body = document.documentElement; // Usamos documentElement para manejar el atributo en <html>

// Verificar si el usuario ya tenía una preferencia guardada
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    body.setAttribute('data-theme', currentTheme);
    updateIcon(currentTheme);
}

themeToggle.addEventListener('click', () => {
    let theme = body.getAttribute('data-theme');
    
    if (theme === 'dark') {
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
    icon.textContent = theme === 'dark' ? '☀️' : '🌙';
}
});

// --- FUNCIONALIDAD: FORMULARIO CON VALIDACIÓN ---
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const nombre = contactForm.querySelector('input[type="text"]').value;
    const email = contactForm.querySelector('input[type="email"]').value;
    
    // Validación sencilla: debe ser un correo con formato correcto
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(email)) {
        alert("Por favor, ingresa un correo electrónico válido.");
        return;
    }

    // Si todo está bien, mostramos el mensaje de éxito
    contactForm.style.opacity = '0';
    setTimeout(() => {
        contactForm.innerHTML = `
            <div class="success-message">
                <div class="success-icon">✅</div>
                <h3>¡Gracias, ${nombre}!</h3>
                <p>Tu mensaje ha sido enviado con éxito.</p>
                <p>Me pondré en contacto contigo al correo: <strong>${email}</strong></p>
                <button onclick="location.reload()" class="btn-send" style="margin-top:15px">Enviar otro</button>
            </div>
        `;
        contactForm.style.opacity = '1';
    }, 300);
});
