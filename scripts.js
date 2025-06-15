// JS personalizado para El Taller Digital
document.addEventListener('DOMContentLoaded', function() {
  // Cambiar el título de la pestaña con mensajes tech
  const techMessages = [
    "💻 Expertos en Hardware",
    "🛠️ Servicio Técnico Garantizado",
    "📱 Componentes de Alta Gama",
    "🚀 El Taller Digital",
    "⚡ Tecnología de Vanguardia",
    "🔧 Reparaciones Profesionales"
  ];

  let titleIndex = 0;
  const titleInterval = setInterval(() => {
    document.title = techMessages[titleIndex];
    titleIndex = (titleIndex + 1) % techMessages.length;
  }, 3000);

  // Efecto de partículas para el fondo
  if (document.getElementById('particles-js')) {
    particlesJS('particles-js', {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#00ffd5" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 150, color: "#0066ff", opacity: 0.4, width: 1 },
        move: { enable: true, speed: 3, direction: "none", random: true, straight: false, out_mode: "out" }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "repulse" },
          onclick: { enable: true, mode: "push" }
        }
      }
    });
  }

  // Efecto de iluminación en tarjetas
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const x = e.pageX - card.getBoundingClientRect().left;
      const y = e.pageY - card.getBoundingClientRect().top;
      
      card.style.setProperty('--x', `${x}px`);
      card.style.setProperty('--y', `${y}px`);
    });
  });

  // Efecto de escritura en títulos principales
  const heroTitles = document.querySelectorAll('.hero-section h1, .hero-products h1, .hero-services h1, .hero-contact h1');
  heroTitles.forEach(title => {
    const text = title.textContent;
    title.textContent = '';
    
    let i = 0;
    const typeWriter = setInterval(() => {
      if (i < text.length) {
        title.textContent += text.charAt(i);
        i++;
      } else {
        clearInterval(typeWriter);
      }
    }, 100);
  });

  // Cambio de color del footer con degradado animado
  const footer = document.querySelector('footer');
  if (footer) {
    let hue = 180;
    setInterval(() => {
      hue = (hue + 1) % 360;
      footer.style.background = `linear-gradient(135deg, hsl(${hue}, 100%, 15%), hsl(${(hue + 60) % 360}, 100%, 15%))`;
    }, 100);
  }

  // Validación de formularios
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Validación básica
      let isValid = true;
      const inputs = form.querySelectorAll('input[required], textarea[required]');
      
      inputs.forEach(input => {
        if (!input.value.trim()) {
          input.style.borderColor = '#ff3366';
          isValid = false;
        } else {
          input.style.borderColor = '#00ffd5';
        }
      });
      
      if (isValid) {
        // Efecto de envío exitoso
        form.style.boxShadow = '0 0 20px #00ffd5';
        setTimeout(() => {
          form.reset();
          form.style.boxShadow = 'none';
          alert('¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.');
        }, 1000);
      } else {
        form.style.animation = 'shake 0.5s';
        setTimeout(() => {
          form.style.animation = 'none';
        }, 500);
      }
    });
  });

  // Animación de scroll suave
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Detección de modo oscuro del sistema
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark-mode');
  }

  // Actualizar en caso de cambio
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (e.matches) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  });
});

// Animación de shake para errores
const style = document.createElement('style');
style.textContent = `
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
    20%, 40%, 60%, 80% { transform: translateX(5px); }
  }
  
  .dark-mode {
    background: #121212 !important;
    color: #e0e0e0 !important;
  }
  
  .card {
    position: relative;
    overflow: hidden;
  }
  
  .card::after {
    content: '';
    position: absolute;
    top: calc(var(--y, 0) - 50px);
    left: calc(var(--x, 0) - 50px);
    width: 100px;
    height: 100px;
    background: radial-gradient(circle, rgba(0,255,213,0.3) 0%, rgba(0,255,213,0) 70%);
    opacity: 0;
    transition: opacity 0.3s;
  }
  
  .card:hover::after {
    opacity: 1;
  }
`;
document.head.appendChild(style);