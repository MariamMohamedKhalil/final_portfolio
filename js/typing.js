/* ============================================
   Typing Effect Module
   ============================================ */

import { CONFIG, SELECTORS } from './config.js';
import { getElement } from './utils.js';

class TypingEffect {
  constructor(elementSelector, text, speed = 50) {
    this.element = getElement(elementSelector);
    this.text = text;
    this.speed = speed;
    this.currentIndex = 0;
    this.isTyping = false;
  }

  async start() {
    if (!this.element || this.isTyping) return;
    
    this.isTyping = true;
    this.element.textContent = '';
    
    await this.type();
  }

  async type() {
    return new Promise((resolve) => {
      const typeChar = () => {
        if (this.currentIndex < this.text.length) {
          this.element.textContent += this.text.charAt(this.currentIndex);
          this.currentIndex++;
          setTimeout(typeChar, this.speed);
        } else {
          this.isTyping = false;
          resolve();
        }
      };
      
      typeChar();
    });
  }

  reset() {
    this.currentIndex = 0;
    this.isTyping = false;
    if (this.element) {
      this.element.textContent = '';
    }
  }
}

export const initTypingEffect = () => {
  const typingElement = getElement(SELECTORS.typingElement);
  if (!typingElement) return;

  const typing = new TypingEffect(
    SELECTORS.typingElement,
    CONFIG.typing.text,
    CONFIG.typing.speed
  );

  // Start typing after a short delay
  setTimeout(() => typing.start(), CONFIG.typing.delay);
};
