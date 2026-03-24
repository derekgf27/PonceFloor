// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(0, 0, 0, 0.98)';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
    }
});

// Contact Form Handling with Formspree
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Disable submit button to prevent multiple submissions
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.disabled = true;
        submitButton.textContent = 'Enviando...';
        
        // Get form data
        const formData = new FormData(contactForm);
        
        // Add service label for better email formatting
        const serviceSelect = document.getElementById('service');
        const serviceText = serviceSelect.options[serviceSelect.selectedIndex].text;
        formData.append('_subject', `Nueva Solicitud de Consulta - ${formData.get('name')}`);
        formData.append('_replyto', formData.get('email'));
        formData.append('service_label', serviceText);
        
        try {
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                // Show success message
                showNotification('¡Formulario enviado exitosamente! Nos pondremos en contacto contigo pronto.', 'success');
                
                // Reset form
                contactForm.reset();
            } else {
                // Show error message
                showNotification('Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo o contáctanos directamente.', 'error');
            }
        } catch (error) {
            // Show error message
            showNotification('Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo o contáctanos directamente.', 'error');
            console.error('Form Error:', error);
        } finally {
            // Re-enable submit button
            submitButton.disabled = false;
            submitButton.textContent = originalText;
        }
    });
}

// Notification function
function showNotification(message, type = 'info') {
    // Remove existing notification if any
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Determine background color based on type
    let bgColor = '#DC143C'; // default red
    if (type === 'success') {
        bgColor = '#28a745'; // green
    } else if (type === 'error') {
        bgColor = '#DC143C'; // red
    }
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${bgColor};
        color: white;
        padding: 1rem 2rem;
        border-radius: 5px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        animation: slideIn 0.3s ease;
        max-width: 400px;
    `;
    
    // Add animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(notification);
    
    // Remove notification after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
}

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.mission-card, .service-card, .testimonial-card, .gallery-item, .about-content');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Gallery lightbox functionality (placeholder for future implementation)
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
        // This can be expanded to show a lightbox with the actual image/video
        console.log('Gallery item clicked - ready for lightbox implementation');
    });
});

// WhatsApp link handler
document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
    link.addEventListener('click', (e) => {
        // Ensure WhatsApp link opens in new tab
        link.target = '_blank';
    });
});

// Form validation enhancement
const formInputs = document.querySelectorAll('#contactForm input, #contactForm textarea, #contactForm select');

formInputs.forEach(input => {
    input.addEventListener('blur', () => {
        if (input.hasAttribute('required') && !input.value.trim()) {
            input.style.borderColor = '#DC143C';
        } else {
            input.style.borderColor = '#e0e0e0';
        }
    });
    
    input.addEventListener('input', () => {
        if (input.style.borderColor === 'rgb(220, 20, 60)') {
            input.style.borderColor = '#e0e0e0';
        }
    });
});

// Video modal (lightbox) - open video in bigger window to fully appreciate it
const videoGalleryCard = document.getElementById('videoGalleryCard');
const videoModalTrigger = document.getElementById('videoModalTrigger');
const videoModal = document.getElementById('videoModal');
const videoModalClose = document.querySelector('.video-modal-close');
const videoModalOverlay = document.querySelector('.video-modal-overlay');

var firstVideoSrc = 'https://www.facebook.com/plugins/video.php?height=712&href=https%3A%2F%2Fwww.facebook.com%2Fponcecleaningservices%2Fvideos%2F1571025543963370%2F&show_text=false&width=400&t=0';

function openVideoModal(e) {
    if (videoModal) {
        var modalIframe = document.getElementById('videoModalIframe');
        if (modalIframe) {
            var trigger = e && e.currentTarget;
            var src = (trigger && trigger.getAttribute('data-video-src')) || firstVideoSrc;
            modalIframe.src = src + (src.indexOf('autoplay') === -1 ? '&autoplay=true' : '');
        }
        videoModal.classList.add('is-open');
        videoModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }
}

function closeVideoModal() {
    if (videoModal) {
        videoModal.classList.remove('is-open');
        videoModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }
}

function handleVideoCardClick(e) {
    e.preventDefault();
    e.stopPropagation();
    openVideoModal(e);
}

if (videoModalTrigger) {
    videoModalTrigger.addEventListener('click', handleVideoCardClick);
    videoModalTrigger.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openVideoModal(e);
        }
    });
}

const videoModalTrigger2 = document.querySelector('.video-modal-trigger-2');
if (videoModalTrigger2) {
    videoModalTrigger2.addEventListener('click', handleVideoCardClick);
    videoModalTrigger2.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openVideoModal(e);
        }
    });
}

if (videoGalleryCard && !videoModalTrigger) {
    videoGalleryCard.addEventListener('click', handleVideoCardClick);
}

if (videoModalClose) videoModalClose.addEventListener('click', closeVideoModal);
if (videoModalOverlay) videoModalOverlay.addEventListener('click', closeVideoModal);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && videoModal && videoModal.classList.contains('is-open')) {
        closeVideoModal();
    }
    if (e.key === 'Escape' && imageModal && imageModal.classList.contains('is-open')) {
        closeImageModal();
    }
});

// Image lightbox - open gallery photos in modal with prev/next
const imageModal = document.getElementById('imageModal');
const imageModalImg = document.getElementById('imageModalImg');
const imageModalCounter = document.getElementById('imageModalCounter');
const imageModalClose = document.querySelector('.image-modal-close');
const imageModalOverlay = document.querySelector('.image-modal-overlay');
const imageModalPrev = document.querySelector('.image-modal-prev');
const imageModalNext = document.querySelector('.image-modal-next');

var galleryImages = [];
var currentImageIndex = 0;

function buildGalleryImages() {
    galleryImages = [];
    document.querySelectorAll('.gallery-item--image .gallery-placeholder img').forEach(function (img) {
        if (img.src) galleryImages.push({ src: img.src, alt: img.alt || '' });
    });
}

function showImageAtIndex(index) {
    if (galleryImages.length === 0) return;
    currentImageIndex = (index + galleryImages.length) % galleryImages.length;
    var item = galleryImages[currentImageIndex];
    if (imageModalImg) {
        imageModalImg.src = item.src;
        imageModalImg.alt = item.alt;
    }
    if (imageModalCounter) {
        imageModalCounter.textContent = (currentImageIndex + 1) + ' / ' + galleryImages.length;
    }
}

function openImageModal(index) {
    if (imageModal && imageModalImg && galleryImages.length > 0) {
        showImageAtIndex(typeof index === 'number' ? index : 0);
        imageModal.classList.add('is-open');
        imageModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }
}

function closeImageModal() {
    if (imageModal) {
        imageModal.classList.remove('is-open');
        imageModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }
}

function imageModalPrevClick() {
    showImageAtIndex(currentImageIndex - 1);
}

function imageModalNextClick() {
    showImageAtIndex(currentImageIndex + 1);
}

buildGalleryImages();

document.querySelectorAll('.gallery-item--image').forEach(function (card, index) {
    card.addEventListener('click', function (e) {
        var img = card.querySelector('.gallery-placeholder img');
        if (img && img.src) {
            e.preventDefault();
            openImageModal(index);
        }
    });
});

if (imageModalClose) imageModalClose.addEventListener('click', closeImageModal);
if (imageModalOverlay) imageModalOverlay.addEventListener('click', closeImageModal);
if (imageModalPrev) imageModalPrev.addEventListener('click', function (e) { e.stopPropagation(); imageModalPrevClick(); });
if (imageModalNext) imageModalNext.addEventListener('click', function (e) { e.stopPropagation(); imageModalNextClick(); });

document.addEventListener('keydown', function (e) {
    if (!imageModal || !imageModal.classList.contains('is-open')) return;
    if (e.key === 'ArrowLeft') {
        e.preventDefault();
        imageModalPrevClick();
    }
    if (e.key === 'ArrowRight') {
        e.preventDefault();
        imageModalNextClick();
    }
});

