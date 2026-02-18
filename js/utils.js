/* ============================================
   Utility Functions
   ============================================ */

/**
 * Debounce function to limit function calls
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function}
 */
export const debounce = (func, wait = 300) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

/**
 * Throttle function to limit function execution rate
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in milliseconds
 * @returns {Function}
 */
export const throttle = (func, limit = 300) => {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

/**
 * Get element safely with error handling
 * @param {string} selector - CSS selector
 * @returns {Element|null}
 */
export const getElement = (selector) => {
  try {
    return document.querySelector(selector);
  } catch (error) {
    console.error(`Error selecting element: ${selector}`, error);
    return null;
  }
};

/**
 * Get all elements safely with error handling
 * @param {string} selector - CSS selector
 * @returns {NodeList|Array}
 */
export const getAllElements = (selector) => {
  try {
    return document.querySelectorAll(selector);
  } catch (error) {
    console.error(`Error selecting elements: ${selector}`, error);
    return [];
  }
};

/**
 * Add event listener with error handling
 * @param {Element} element - DOM element
 * @param {string} event - Event name
 * @param {Function} handler - Event handler
 * @param {Object} options - Event options
 */
export const addEvent = (element, event, handler, options = {}) => {
  if (!element) return;
  
  try {
    element.addEventListener(event, handler, options);
  } catch (error) {
    console.error(`Error adding event listener: ${event}`, error);
  }
};

/**
 * Remove event listener with error handling
 * @param {Element} element - DOM element
 * @param {string} event - Event name
 * @param {Function} handler - Event handler
 */
export const removeEvent = (element, event, handler) => {
  if (!element) return;
  
  try {
    element.removeEventListener(event, handler);
  } catch (error) {
    console.error(`Error removing event listener: ${event}`, error);
  }
};

/**
 * Check if element is in viewport
 * @param {Element} element - DOM element
 * @returns {boolean}
 */
export const isInViewport = (element) => {
  if (!element) return false;
  
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

/**
 * Smooth scroll to element
 * @param {string|Element} target - Target selector or element
 * @param {number} offset - Offset from top
 */
export const smoothScrollTo = (target, offset = 0) => {
  const element = typeof target === 'string' ? getElement(target) : target;
  if (!element) return;
  
  const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
  
  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth'
  });
};
