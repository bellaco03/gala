document.addEventListener('DOMContentLoaded', function() {
    // Navegación suave
    const navLinks = document.querySelectorAll('.main-nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remover clase active de todos los enlaces
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            
            // Agregar clase active al enlace clickeado
            this.classList.add('active');
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Sistema de pestañas
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Remover clase active de todos los botones y contenidos
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Agregar clase active al botón y contenido seleccionado
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Botón de volver arriba
    const backToTopButton = document.getElementById('backToTop');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });
    
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Galería de fauna - efecto hover mejorado
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        const img = item.querySelector('img');
        const originalSrc = img.getAttribute('src');
        
        item.addEventListener('mouseenter', function() {
            // Efecto de zoom suave
            img.style.transform = 'scale(1.1)';
        });
        
        item.addEventListener('mouseleave', function() {
            // Restaurar imagen
            img.style.transform = 'scale(1)';
        });
    });

    // Formulario de contacto
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simular envío del formulario
            const formData = new FormData(this);
            const formValues = Object.fromEntries(formData.entries());
            
            console.log('Formulario enviado:', formValues);
            
            // Mostrar mensaje de éxito
            alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
            
            // Resetear formulario
            this.reset();
        });
    }

    // Efectos de hover en tarjetas de islas
    const islandCards = document.querySelectorAll('.island-card');
    
    islandCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        });
    });

    // Validación de campos del formulario
    const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
    
    formInputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.value.trim() === '' && this.hasAttribute('required')) {
                this.style.borderColor = '#e74c3c';
            } else {
                this.style.borderColor = '#ddd';
            }
        });
    });

    // Animación de scroll para secciones
    const sections = document.querySelectorAll('section');
    
    function checkScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.75) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Configurar animaciones iniciales
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    window.addEventListener('scroll', checkScroll);
    window.addEventListener('load', checkScroll);

    // Carrusel de imágenes (simulado para la sección de fauna)
    let currentGalleryIndex = 0;
    const galleryImages = document.querySelectorAll('.gallery-item img');
    
    function rotateGallery() {
        galleryImages.forEach((img, index) => {
            if (index === currentGalleryIndex) {
                img.parentElement.style.display = 'block';
            } else {
                img.parentElement.style.display = 'none';
            }
        });
        
        currentGalleryIndex = (currentGalleryIndex + 1) % galleryImages.length;
    }
    
    // Solo activar en móviles
    if (window.innerWidth < 768) {
        setInterval(rotateGallery, 3000);
    }

    // Detectar cambios de tamaño de pantalla
    window.addEventListener('resize', function() {
        // Reorganizar el layout del formulario de contacto en móviles
        if (window.innerWidth < 768) {
            document.querySelector('.contact-container').style.flexDirection = 'column';
        } else {
            document.querySelector('.contact-container').style.flexDirection = 'row';
        }
    });

    // Inicializar el layout para el tamaño actual
    if (window.innerWidth < 768) {
        document.querySelector('.contact-container').style.flexDirection = 'column';
    }

    // Efecto parallax para la sección hero
    const heroSection = document.querySelector('.hero-section');
    
    if (heroSection) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.pageYOffset;
            heroSection.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
        });
    }

    // Mostrar año actual en el footer
    const currentYear = new Date().getFullYear();
    const yearElement = document.querySelector('.footer-bottom p');
    
    if (yearElement) {
        yearElement.innerHTML = yearElement.innerHTML.replace('2023', currentYear);
    }

    // Preloader (simulado)
    setTimeout(function() {
        document.body.style.opacity = '1';
    }, 300);

    // Ajustar altura de las tarjetas de alojamiento para que sean iguales
    function adjustCardHeights() {
        const accommodationCards = document.querySelectorAll('.accommodation-card');
        let maxHeight = 0;
        
        // Reset heights
        accommodationCards.forEach(card => {
            card.style.height = 'auto';
        });
        
        // Find max height
        accommodationCards.forEach(card => {
            if (card.offsetHeight > maxHeight) {
                maxHeight = card.offsetHeight;
            }
        });
        
        // Apply max height
        accommodationCards.forEach(card => {
            card.style.height = maxHeight + 'px';
        });
    }
    
    // Ejecutar al cargar y al redimensionar
    window.addEventListener('load', adjustCardHeights);
    window.addEventListener('resize', adjustCardHeights);
});

// Función para detectar si un elemento está en el viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Actualizar la navegación según el scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.main-nav a');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 100) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});

// Efecto de carga para las imágenes
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        // Si la imagen ya está cargada
        if (img.complete) {
            img.style.opacity = '1';
        } else {
            img.style.opacity = '0';
            img.style.transition = 'opacity 0.5s ease';
            
            img.addEventListener('load', function() {
                this.style.opacity = '1';
            });
            
            img.addEventListener('error', function() {
                // Manejar error de carga de imagen
                this.style.opacity = '1';
                this.src = 'https://via.placeholder.com/300x200?text=Imagen+no+disponible';
            });
        }
    });
});

// Tooltips para los íconos de redes sociales
const socialIcons = document.querySelectorAll('.social-media a');
    
socialIcons.forEach(icon => {
    const platform = icon.querySelector('i').className.split(' ')[1].replace('fa-', '');
    
    // Crear tooltip
    const tooltip = document.createElement('span');
    tooltip.className = 'tooltip';
    tooltip.textContent = platform.charAt(0).toUpperCase() + platform.slice(1);
    icon.appendChild(tooltip);
    
    // Mostrar/ocultar tooltip
    icon.addEventListener('mouseenter', function() {
        tooltip.style.visibility = 'visible';
        tooltip.style.opacity = '1';
    });
    
    icon.addEventListener('mouseleave', function() {
        tooltip.style.visibility = 'hidden';
        tooltip.style.opacity = '0';
    });
});

// Estilos dinámicos para los tooltips
const style = document.createElement('style');
style.textContent = `
    .tooltip {
        position: absolute;
        bottom: 100%;
        left: 50%;
        transform: translateX(-50%);
        background-color: #333;
        color: white;
        padding: 5px 10px;
        border-radius: 4px;
        font-size: 12px;
        white-space: nowrap;
        visibility: hidden;
        opacity: 0;
        transition: all 0.3s ease;
        z-index: 100;
    }
    
    .tooltip::after {
        content: '';
        position: absolute;
        top: 100%;
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: #333 transparent transparent transparent;
    }
    
    .social-media a {
        position: relative;
    }
`;
document.head.appendChild(style);