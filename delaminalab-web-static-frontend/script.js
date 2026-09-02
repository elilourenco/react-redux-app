const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-navigation');

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    navigation.classList.toggle('is-open', !isOpen);
  });

  navigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuButton.setAttribute('aria-expanded', 'false');
      navigation.classList.remove('is-open');
    });
  });
}

document.querySelectorAll('[data-current-year]').forEach((element) => {
  element.textContent = new Date().getFullYear();
});


const labTrigger = document.getElementById('lab-assistant-trigger');
const labPanel = document.getElementById('lab-assistant-panel');
const labHint = document.getElementById('lab-assistant-hint');
const labClose = document.querySelector('.lab-assistant-close');
const labMinimize = document.querySelector('.lab-assistant-min');

if (labTrigger && labPanel) {
  const closeLabAssistant = () => {
    labPanel.hidden = true;
    labTrigger.setAttribute('aria-expanded', 'false');
  };

  labTrigger.addEventListener('click', () => {
    const isOpen = !labPanel.hidden;
    labPanel.hidden = isOpen;
    labTrigger.setAttribute('aria-expanded', String(!isOpen));
    if (labHint) labHint.hidden = true;
  });

  if (labClose) labClose.addEventListener('click', closeLabAssistant);
  if (labMinimize) labMinimize.addEventListener('click', closeLabAssistant);
}

const translations = {
  en: {
    'nav.about': 'About',
    'nav.store': 'Store',
    'nav.artists': 'Artists',
    'nav.collaborations': 'Collaborations',
    'nav.contact': 'Contact',
    'hero.tagline': 'A creative laboratory<br>for objects, artists<br>&amp; collaborations.',
    'hero.explore': 'Explore',
    'category.objects.title': 'Objects',
    'category.objects.desc': 'Our own collections.<br>Designed in-house.',
    'category.artists.title': 'Artists',
    'category.artists.desc': 'Works and collections<br>by selected artists.',
    'category.collab.title': 'Collaborations',
    'category.collab.desc': 'Projects with brands,<br>studios and friends.',
    'footer.tagline': 'A creative laboratory based on discovery and collaboration.',
    'footer.stayUpdated': 'Stay updated',
    'footer.emailPlaceholder': 'Your email',
    'lab.title': 'Lab Assistant',
    'lab.greeting': 'Hello. What would you like to discover today?',
    'lab.objects': 'Objects',
    'lab.artists': 'Artists',
    'lab.collaborations': 'Collaborations',
    'lab.orders': 'Orders &amp; Shipping',
    'lab.becomeArtist': 'Become an Artist',
    'lab.generalQuestion': 'General Question',
    'lab.placeholder': 'Type your message',
    'lab.hint': 'Hello. Need help or have a question?',
  },
  es: {
    'nav.about': 'Acerca de',
    'nav.store': 'Tienda',
    'nav.artists': 'Artistas',
    'nav.collaborations': 'Colaboraciones',
    'nav.contact': 'Contacto',
    'hero.tagline': 'Un laboratorio creativo<br>de objetos, artistas<br>y colaboraciones.',
    'hero.explore': 'Explorar',
    'category.objects.title': 'Objetos',
    'category.objects.desc': 'Nuestras propias colecciones.<br>Diseñadas internamente.',
    'category.artists.title': 'Artistas',
    'category.artists.desc': 'Obras y colecciones<br>de artistas seleccionados.',
    'category.collab.title': 'Colaboraciones',
    'category.collab.desc': 'Proyectos con marcas,<br>estudios y amigos.',
    'footer.tagline': 'Un laboratorio creativo basado en el descubrimiento y la colaboración.',
    'footer.stayUpdated': 'Mantente al día',
    'footer.emailPlaceholder': 'Tu correo',
    'lab.title': 'Asistente del Lab',
    'lab.greeting': 'Hola. ¿Qué te gustaría descubrir hoy?',
    'lab.objects': 'Objetos',
    'lab.artists': 'Artistas',
    'lab.collaborations': 'Colaboraciones',
    'lab.orders': 'Pedidos y envíos',
    'lab.becomeArtist': 'Conviértete en artista',
    'lab.generalQuestion': 'Pregunta general',
    'lab.placeholder': 'Escribe tu mensaje',
    'lab.hint': 'Hola. ¿Necesitas ayuda o tienes alguna pregunta?',
  },
  pt: {
    'nav.about': 'Sobre',
    'nav.store': 'Loja',
    'nav.artists': 'Artistas',
    'nav.collaborations': 'Colaborações',
    'nav.contact': 'Contacto',
    'hero.tagline': 'Um laboratório criativo<br>de objetos, artistas<br>e colaborações.',
    'hero.explore': 'Explorar',
    'category.objects.title': 'Objetos',
    'category.objects.desc': 'As nossas próprias coleções.<br>Concebidas internamente.',
    'category.artists.title': 'Artistas',
    'category.artists.desc': 'Obras e coleções<br>de artistas selecionados.',
    'category.collab.title': 'Colaborações',
    'category.collab.desc': 'Projetos com marcas,<br>estúdios e amigos.',
    'footer.tagline': 'Um laboratório criativo baseado na descoberta e na colaboração.',
    'footer.stayUpdated': 'Fica atualizado',
    'footer.emailPlaceholder': 'O teu email',
    'lab.title': 'Lab Assistant',
    'lab.greeting': 'Olá. O que gostarias de descobrir hoje?',
    'lab.objects': 'Objetos',
    'lab.artists': 'Artistas',
    'lab.collaborations': 'Colaborações',
    'lab.orders': 'Encomendas e Envios',
    'lab.becomeArtist': 'Tornar-me Artista',
    'lab.generalQuestion': 'Pergunta Geral',
    'lab.placeholder': 'Escreve a tua mensagem',
    'lab.hint': 'Olá. Precisas de ajuda ou tens alguma pergunta?',
  },
};

const langMeta = {
  en: { flag: '🇬🇧', label: 'English' },
  es: { flag: '🇪🇸', label: 'Español' },
  pt: { flag: '🇵🇹', label: 'Português' },
};

function applyLanguage(lang) {
  const dict = translations[lang] || translations.en;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.textContent = dict[key];
  });

  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const key = el.getAttribute('data-i18n-html');
    if (dict[key]) el.innerHTML = dict[key];
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key]) el.setAttribute('placeholder', dict[key]);
  });

  const toggle = document.getElementById('lang-switch-toggle');
  if (toggle && langMeta[lang]) {
    const flagEl = toggle.querySelector('.lang-flag');
    const labelEl = toggle.querySelector('.lang-label');
    if (flagEl) flagEl.textContent = langMeta[lang].flag;
    if (labelEl) labelEl.textContent = langMeta[lang].label;
  }

  document.querySelectorAll('.lang-option').forEach((option) => {
    option.classList.toggle('is-active', option.dataset.lang === lang);
  });

  document.documentElement.setAttribute('lang', lang);

  try {
    localStorage.setItem('delaminalab-lang', lang);
  } catch (error) {
    /* localStorage unavailable — ignore */
  }
}

const langToggle = document.getElementById('lang-switch-toggle');
const langMenu = document.getElementById('lang-menu');

if (langToggle && langMenu) {
  langToggle.addEventListener('click', () => {
    const isOpen = !langMenu.hidden;
    langMenu.hidden = isOpen;
    langToggle.setAttribute('aria-expanded', String(!isOpen));
  });

  langMenu.querySelectorAll('.lang-option').forEach((option) => {
    option.addEventListener('click', () => {
      applyLanguage(option.dataset.lang);
      langMenu.hidden = true;
      langToggle.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('click', (event) => {
    if (!langToggle.contains(event.target) && !langMenu.contains(event.target)) {
      langMenu.hidden = true;
      langToggle.setAttribute('aria-expanded', 'false');
    }
  });

  let savedLang = 'en';
  try {
    savedLang = localStorage.getItem('delaminalab-lang') || 'en';
  } catch (error) {
    savedLang = 'en';
  }
  applyLanguage(savedLang);
}
