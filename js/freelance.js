/* ============================================
   Freelance Services Page JavaScript
   ============================================ */

// View sample report function
function viewSample(serviceType) {
  const sampleUrls = {
    'security-audit': '../freelance-projects/security-audit-report/README.md',
    'incident-response': '../freelance-projects/security-audit-report/incident-response-playbook.md',
    'network-forensics': '../freelance-projects/security-audit-report/network-forensics-analysis.md',
    'soc-analyst': '../freelance-projects/security-audit-report/soc-analyst-daily-report.md'
  };

  const url = sampleUrls[serviceType];
  if (url) {
    window.open(url, '_blank');
  }
}

// Smooth scroll to sections
document.addEventListener('DOMContentLoaded', () => {
  // Add animation on scroll
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

  // Observe all service cards and sample items
  const animatedElements = document.querySelectorAll('.service-card, .sample-item, .tool-category, .stat');
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  // Add click tracking for analytics (optional)
  const serviceButtons = document.querySelectorAll('.btn--service');
  serviceButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const serviceCard = e.target.closest('.service-card');
      const serviceType = serviceCard.getAttribute('data-service');
      console.log(`Service viewed: ${serviceType}`);
      // Here you could add analytics tracking
    });
  });

  // Highlight active navigation
  const currentPage = window.location.pathname.split('/').pop();
  const navLinks = document.querySelectorAll('.nav__link');
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('nav__link--active');
    }
  });
});

// Add hover effect stats counter animation
const stats = document.querySelectorAll('.stat__number');
stats.forEach(stat => {
  const finalValue = stat.textContent;
  stat.textContent = '0';
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateValue(stat, 0, parseInt(finalValue.replace(/\D/g, '')), 1500, finalValue.includes('+'));
        observer.unobserve(entry.target);
      }
    });
  });
  
  observer.observe(stat);
});

function animateValue(element, start, end, duration, hasPlus) {
  const range = end - start;
  const increment = range / (duration / 16);
  let current = start;
  
  const timer = setInterval(() => {
    current += increment;
    if (current >= end) {
      current = end;
      clearInterval(timer);
    }
    element.textContent = Math.floor(current) + (hasPlus ? '+' : '');
  }, 16);
}

// Make functions globally available
window.viewSample = viewSample;
