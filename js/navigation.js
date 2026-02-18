/* ============================================
   Navigation Module
   ============================================ */

import { SELECTORS } from './config.js';
import { getElement, getAllElements, addEvent, throttle } from './utils.js';

class Navigation {
  constructor() {
    this.header = getElement(SELECTORS.header);
    this.navLinks = getAllElements(SELECTORS.navLinks);
    this.lastScrollY = window.scrollY;
    
    this.init();
  }

  init() {
    this.setActiveLink();
    this.initScrollBehavior();
  }

  setActiveLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    this.navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === currentPage) {
        link.classList.add('nav__link--active');
      } else {
        link.classList.remove('nav__link--active');
      }
    });
  }

  initScrollBehavior() {
    if (!this.header) return;

    const handleScroll = throttle(() => {
      const currentScrollY = window.scrollY;
      
      // Add scrolled class when scrolled down
      if (currentScrollY > 50) {
        this.header.classList.add('header--scrolled');
      } else {
        this.header.classList.remove('header--scrolled');
      }
      
      this.lastScrollY = currentScrollY;
    }, 100);

    addEvent(window, 'scroll', handleScroll, { passive: true });
  }
}

export const initNavigation = () => {
  new Navigation();
};
