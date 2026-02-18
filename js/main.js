/* ============================================
   Main Application Entry Point
   ============================================ */

import { initTypingEffect } from './typing.js';
import { initNavigation } from './navigation.js';
import { getModalInstance } from './modal.js';

/**
 * Initialize all application modules
 */
const initApp = () => {
  try {
    // Initialize navigation
    initNavigation();
    
    // Initialize typing effect (only on home page)
    if (document.getElementById('typing')) {
      initTypingEffect();
    }
    
    // Initialize modal (only on certificates page)
    if (document.getElementById('modal')) {
      getModalInstance();
    }
    
    console.log('Portfolio initialized successfully');
  } catch (error) {
    console.error('Error initializing portfolio:', error);
  }
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

// Handle page visibility changes
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    console.log('Page hidden');
  } else {
    console.log('Page visible');
  }
});
