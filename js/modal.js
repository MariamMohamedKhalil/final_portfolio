/* ============================================
   Modal Module
   ============================================ */

import { SELECTORS } from './config.js';
import { getElement, addEvent } from './utils.js';

class Modal {
  constructor() {
    this.modal = getElement(SELECTORS.modal);
    this.modalImage = getElement(SELECTORS.modalImage);
    this.closeButton = getElement(SELECTORS.modalClose);
    this.isOpen = false;
    
    this.init();
  }

  init() {
    if (!this.modal) return;

    // Close button click
    if (this.closeButton) {
      addEvent(this.closeButton, 'click', () => this.close());
    }

    // Click outside to close
    addEvent(this.modal, 'click', (e) => {
      if (e.target === this.modal) {
        this.close();
      }
    });

    // Escape key to close
    addEvent(document, 'keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        this.close();
      }
    });
  }

  open(imageSrc) {
    if (!this.modal || !this.modalImage) return;

    this.modalImage.src = imageSrc;
    this.modalImage.alt = 'Certificate';
    this.modal.classList.add('modal--active');
    this.isOpen = true;
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
  }

  close() {
    if (!this.modal || !this.modalImage) return;

    this.modal.classList.remove('modal--active');
    this.modalImage.src = '';
    this.isOpen = false;
    
    // Restore body scroll
    document.body.style.overflow = '';
  }
}

// Singleton instance
let modalInstance = null;

export const getModalInstance = () => {
  if (!modalInstance) {
    modalInstance = new Modal();
  }
  return modalInstance;
};

export const openModal = (imageSrc) => {
  const modal = getModalInstance();
  modal.open(imageSrc);
};

export const closeModal = () => {
  const modal = getModalInstance();
  modal.close();
};

// Make functions available globally for inline onclick handlers
if (typeof window !== 'undefined') {
  window.openModal = openModal;
  window.closeModal = closeModal;
}
