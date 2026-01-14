window.onscroll = () => {
    // 1. Lógica de expansión del fondo Hero (Tu código mejorado)
    const scrollPos = window.pageYOffset;
    const alturaTotal = document.body.scrollHeight - window.innerHeight;
    const fondo = document.getElementById('fondo');
    const navbar = document.getElementById('navbar');

    // Calculamos el porcentaje de scroll
    let porcentaje = (scrollPos / alturaTotal) * 600; // Multiplicador para velocidad

    if (porcentaje <= 100) {
        fondo.style.width = porcentaje + '%';
    } else {
        fondo.style.width = '100%';
    }

    // 2. Efecto de Navbar (Glassmorphism dinámico)
    if (scrollPos > 50) {
        navbar.style.padding = "10px 0";
        navbar.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
    } else {
        navbar.style.padding = "20px 0";
        navbar.style.boxShadow = "none";
    }
}
