const btn = document.getElementById('theme-toggle');
btn.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
    btn.textContent = isDark ? '🌙' : '☀️';
});
// --- FUNCIONALIDAD: DARK MODE ---
const btnTheme = document.getElementById('theme-toggle');
const rootElement = document.documentElement;

btnTheme.addEventListener('click', () => {
    // Comprobamos si ya está en dark
    const isDark = rootElement.getAttribute('data-theme') === 'dark';
    
    // Cambiamos el atributo
    const newTheme = isDark ? 'light' : 'dark';
    rootElement.setAttribute('data-theme', newTheme);
    
    // Cambiamos el icono del botón
    btnTheme.textContent = isDark ? '🌙' : '☀️';
    
    // Guardamos la preferencia
    localStorage.setItem('theme', newTheme);
});

// --- FUNCIONALIDAD: FORMULARIO DE CONTACTO ---
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita que la página se recargue
    
    // Obtenemos el nombre del input para personalizar el mensaje
    const nombre = contactForm.querySelector('input[type="text"]').value;
    
    // Cambiamos el contenido del formulario por un mensaje de éxito
    contactForm.innerHTML = `
        <div class="success-message">
            <h3>¡Gracias por contactarme, ${nombre}!</h3>
            <p>He recibido tu mensaje. Te responderé pronto a tu correo de la IED Jorge Gaitán Cortés.</p>
            <button onclick="location.reload()" class="btn-send">Enviar otro mensaje</button>
        </div>
    `;
});

// --- FUNCIONALIDAD: DARK MODE ---
const btnTheme = document.getElementById('theme-toggle');
const rootElement = document.documentElement;

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
