/* ============================================
   Configuration & Constants
   ============================================ */

export const CONFIG = {
  typing: {
    text: "Digital Forensics Specialist | SOC Analyst | Cybersecurity Enthusiast",
    speed: 50,
    delay: 500
  },
  
  animation: {
    observerOptions: {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    }
  },
  
  certificates: {
    basePath: './',
    items: [
      { id: 'codealpha', name: 'Code Alpha – Cybersecurity Internship', image: 'CodeAlpha.jpeg' },
      { id: 'codealpha-rec', name: 'Code Alpha – Recommendation', image: 'CodeAlpha_Recommendation.jpeg' },
      { id: 'itcs', name: 'ITCS', image: 'ITCS.jpeg' },
      { id: 'mahara', name: 'MAHARA_TECH – Computer Network Fundamentals', image: 'Mahara_Tech.jpeg' },
      { id: 'ecu', name: 'ECU Achievement', image: 'ECU_Achieviment.jpeg' },
      { id: 'ntra', name: 'NTRA – Cybersecurity', image: 'NTRA.jpeg' },
      { id: 'bankers', name: 'Bankers – Way to Be a Banker', image: 'Bankers.jpeg' },
      { id: 'microsoft1', name: 'Microsoft Chapter – GitHub', image: 'MicrosoftChapter_1.jpeg' },
      { id: 'microsoft2', name: 'Microsoft Chapter – Technology', image: 'MicrosoftChapter_2.jpeg' }
    ]
  }
};

export const SELECTORS = {
  header: '.header',
  nav: '.nav',
  navLinks: '.nav__link',
  typingElement: '#typing',
  modal: '#modal',
  modalImage: '#modal-img',
  modalClose: '.modal__close'
};
