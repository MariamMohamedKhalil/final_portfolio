/* ============================================
   Risk Assessment Demo Page JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  // Animate risk bars on scroll
  const observerOptions = {
    threshold: 0.3,
    rootMargin: '0px'
  };

  const riskBarObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fills = entry.target.querySelectorAll('.risk-bar-fill');
        fills.forEach(fill => {
          const width = fill.style.width;
          fill.style.width = '0%';
          setTimeout(() => {
            fill.style.width = width;
          }, 100);
        });
        riskBarObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const riskDistribution = document.querySelector('.risk-distribution');
  if (riskDistribution) {
    riskBarObserver.observe(riskDistribution);
  }

  // Animate stats on scroll
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        statsObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const animatedElements = document.querySelectorAll(
    '.finding-stat, .method-card, .recommendation-card, .budget-card'
  );
  
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    statsObserver.observe(el);
  });

  // Animate table rows
  const tableRows = document.querySelectorAll('.risk-row');
  tableRows.forEach((row, index) => {
    row.style.opacity = '0';
    row.style.transform = 'translateX(-20px)';
    row.style.transition = `opacity 0.4s ease ${index * 0.1}s, transform 0.4s ease ${index * 0.1}s`;
  });

  const tableObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const rows = entry.target.querySelectorAll('.risk-row');
        rows.forEach(row => {
          row.style.opacity = '1';
          row.style.transform = 'translateX(0)';
        });
        tableObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const riskTable = document.querySelector('.risk-table');
  if (riskTable) {
    tableObserver.observe(riskTable);
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Add click tracking for buttons
  const viewReportBtn = document.querySelector('.btn--primary');
  if (viewReportBtn) {
    viewReportBtn.addEventListener('click', () => {
      console.log('Full report viewed');
      // Add analytics tracking here if needed
    });
  }

  const requestBtn = document.querySelector('.btn--secondary');
  if (requestBtn) {
    requestBtn.addEventListener('click', () => {
      console.log('Assessment requested');
      // Add analytics tracking here if needed
    });
  }
});

// Highlight active navigation
const currentPage = window.location.pathname.split('/').pop();
const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('nav__link--active');
  }
});
