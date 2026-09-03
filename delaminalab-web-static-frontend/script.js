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
    'nav.objects': 'Objects',
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
    'lab.orders': 'Orders & Shipping',
    'lab.becomeArtist': 'Become an Artist',
    'lab.generalQuestion': 'General Question',
    'lab.placeholder': 'Type your message',
    'lab.hint': 'Hello. Need help or have a question?',
    'contact.eyebrow': 'Contact',
    'contact.heading': 'Let’s create something meaningful.',
    'contact.lead': 'Whether you want to collaborate, ask about a product or share an idea, we’d love to hear from you.',
    'contact.postcard.heading': 'Share your project',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.subject': 'Subject',
    'contact.form.subjectPlaceholder': 'Choose an option',
    'contact.form.subject.collaboration': 'Collaboration',
    'contact.form.subject.product': 'Product question',
    'contact.form.subject.press': 'Press',
    'contact.form.subject.other': 'Other',
    'contact.form.message': 'Your message',
    'contact.form.messagePlaceholder': 'Tell us about your idea, project or question...',
    'contact.form.submit': 'Share your project',
    'contact.info.listen.title': 'We’re here to listen',
    'contact.info.listen.body': 'If you have any questions about our objects, need more information or want to collaborate on a project, feel free to get in touch.',
    'contact.info.collab.title': 'Collaborations',
    'contact.info.collab.body': 'We are always open to working with independent artists, studios, brands and creative minds.',
    'contact.info.general.title': 'General inquiries',
    'contact.info.general.body': 'Questions about products, orders, shipping or anything else. We’ll get back to you as soon as possible.',
    'contact.info.response.title': 'Response time',
    'contact.info.response.body': 'We usually reply within 24–48h.',
    'contact.reach.title': 'Other ways to reach us',
    'contact.reach.locationTitle': 'Based in Lisbon',
    'contact.reach.note': 'Working Worldwide',
    'collab.heading': 'Collaborations',
    'collab.lead': 'We collaborate with brands, studios and friends to create meaningful projects.',
    'collab.viewProject': 'View project',
    'collab.item1.desc': 'A capsule collection inspired by daily rituals and timeless design.',
    'collab.item2.desc': 'Limited edition objects developed together in Barcelona.',
    'collab.item3.desc': 'An experimental project exploring material, texture and color.',
    'artists.heading': 'Artists',
    'artists.lead': 'We work with independent artists to create unique collections and editions.',
    'artists.submit': 'Submit your work',
    'artists.viewArtist': 'View artist',
    'artists.item1.desc': 'Painter and visual artist based in Barcelona.',
    'artists.item2.desc': 'Design studio exploring form, function and everyday rituals.',
    'artists.item3.desc': 'Photographer capturing raw moments and quiet landscapes.',
    'objects.heading': 'Objects',
    'objects.lead': 'Our own collections.<br>Designed in-house.<br>Made with purpose.',
    'objects.filter.all': 'All',
    'objects.filter.apparel': 'Apparel',
    'objects.filter.accessories': 'Accessories',
    'objects.filter.objects': 'Objects',
    'objects.filter.stationery': 'Stationery',
    'objects.filter.button': 'Filter',
    'objects.empty': 'No objects in this category yet.',
  },
  es: {
    'nav.about': 'Acerca de',
    'nav.store': 'Tienda',
    'nav.objects': 'Objetos',
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
    'contact.eyebrow': 'Contacto',
    'contact.heading': 'Creemos algo con significado.',
    'contact.lead': 'Ya sea para colaborar, preguntar sobre un producto o compartir una idea, nos encantaría saber de ti.',
    'contact.postcard.heading': 'Comparte tu proyecto',
    'contact.form.name': 'Nombre',
    'contact.form.email': 'Correo electrónico',
    'contact.form.subject': 'Asunto',
    'contact.form.subjectPlaceholder': 'Elige una opción',
    'contact.form.subject.collaboration': 'Colaboración',
    'contact.form.subject.product': 'Pregunta sobre un producto',
    'contact.form.subject.press': 'Prensa',
    'contact.form.subject.other': 'Otro',
    'contact.form.message': 'Tu mensaje',
    'contact.form.messagePlaceholder': 'Cuéntanos tu idea, proyecto o pregunta...',
    'contact.form.submit': 'Comparte tu proyecto',
    'contact.info.listen.title': 'Estamos aquí para escuchar',
    'contact.info.listen.body': 'Si tienes alguna pregunta sobre nuestros objetos, necesitas más información o quieres colaborar en un proyecto, no dudes en contactarnos.',
    'contact.info.collab.title': 'Colaboraciones',
    'contact.info.collab.body': 'Siempre estamos abiertos a trabajar con artistas independientes, estudios, marcas y mentes creativas.',
    'contact.info.general.title': 'Consultas generales',
    'contact.info.general.body': 'Preguntas sobre productos, pedidos, envíos o cualquier otra cosa. Te responderemos lo antes posible.',
    'contact.info.response.title': 'Tiempo de respuesta',
    'contact.info.response.body': 'Normalmente respondemos en 24–48h.',
    'contact.reach.title': 'Otras formas de contactarnos',
    'contact.reach.locationTitle': 'Con sede en Lisboa',
    'contact.reach.note': 'Trabajamos a nivel mundial',
    'collab.heading': 'Colaboraciones',
    'collab.lead': 'Colaboramos con marcas, estudios y amigos para crear proyectos con significado.',
    'collab.viewProject': 'Ver proyecto',
    'collab.item1.desc': 'Una colección cápsula inspirada en rituales diarios y un diseño atemporal.',
    'collab.item2.desc': 'Objetos de edición limitada desarrollados juntos en Barcelona.',
    'collab.item3.desc': 'Un proyecto experimental que explora material, textura y color.',
    'artists.heading': 'Artistas',
    'artists.lead': 'Trabajamos con artistas independientes para crear colecciones y ediciones únicas.',
    'artists.submit': 'Envía tu trabajo',
    'artists.viewArtist': 'Ver artista',
    'artists.item1.desc': 'Pintora y artista visual afincada en Barcelona.',
    'artists.item2.desc': 'Estudio de diseño que explora la forma, la función y los rituales cotidianos.',
    'artists.item3.desc': 'Fotógrafo que capta momentos crudos y paisajes tranquilos.',
    'objects.heading': 'Objetos',
    'objects.lead': 'Nuestras propias colecciones.<br>Diseñadas internamente.<br>Hechas con propósito.',
    'objects.filter.all': 'Todo',
    'objects.filter.apparel': 'Ropa',
    'objects.filter.accessories': 'Accesorios',
    'objects.filter.objects': 'Objetos',
    'objects.filter.stationery': 'Papelería',
    'objects.filter.button': 'Filtrar',
    'objects.empty': 'Todavía no hay objetos en esta categoría.',
  },
  pt: {
    'nav.about': 'Sobre',
    'nav.store': 'Loja',
    'nav.objects': 'Objetos',
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
    'contact.eyebrow': 'Contacto',
    'contact.heading': 'Vamos criar algo com significado.',
    'contact.lead': 'Quer queiras colaborar, perguntar sobre um objeto ou partilhar uma ideia, adorávamos ouvir-te.',
    'contact.postcard.heading': 'Partilha o teu projeto',
    'contact.form.name': 'Nome',
    'contact.form.email': 'Email',
    'contact.form.subject': 'Assunto',
    'contact.form.subjectPlaceholder': 'Escolhe uma opção',
    'contact.form.subject.collaboration': 'Colaboração',
    'contact.form.subject.product': 'Pergunta sobre um produto',
    'contact.form.subject.press': 'Imprensa',
    'contact.form.subject.other': 'Outro',
    'contact.form.message': 'A tua mensagem',
    'contact.form.messagePlaceholder': 'Conta-nos a tua ideia, projeto ou pergunta...',
    'contact.form.submit': 'Partilha o teu projeto',
    'contact.info.listen.title': 'Estamos aqui para ouvir',
    'contact.info.listen.body': 'Se tiveres alguma questão sobre os nossos objetos, precisares de mais informação ou quiseres colaborar num projeto, não hesites em contactar-nos.',
    'contact.info.collab.title': 'Colaborações',
    'contact.info.collab.body': 'Estamos sempre abertos a trabalhar com artistas independentes, estúdios, marcas e mentes criativas.',
    'contact.info.general.title': 'Questões gerais',
    'contact.info.general.body': 'Perguntas sobre produtos, encomendas, envios ou qualquer outra coisa. Responderemos assim que possível.',
    'contact.info.response.title': 'Tempo de resposta',
    'contact.info.response.body': 'Normalmente respondemos em 24–48h.',
    'contact.reach.title': 'Outras formas de nos contactar',
    'contact.reach.locationTitle': 'Sediados em Lisboa',
    'contact.reach.note': 'A trabalhar a nível mundial',
    'collab.heading': 'Colaborações',
    'collab.lead': 'Colaboramos com marcas, estúdios e amigos para criar projetos com significado.',
    'collab.viewProject': 'Ver projeto',
    'collab.item1.desc': 'Uma coleção cápsula inspirada em rituais diários e num design intemporal.',
    'collab.item2.desc': 'Objetos de edição limitada desenvolvidos em conjunto em Barcelona.',
    'collab.item3.desc': 'Um projeto experimental que explora material, textura e cor.',
    'artists.heading': 'Artistas',
    'artists.lead': 'Trabalhamos com artistas independentes para criar coleções e edições únicas.',
    'artists.submit': 'Envia o teu trabalho',
    'artists.viewArtist': 'Ver artista',
    'artists.item1.desc': 'Pintora e artista visual sediada em Barcelona.',
    'artists.item2.desc': 'Estúdio de design que explora a forma, a função e os rituais do quotidiano.',
    'artists.item3.desc': 'Fotógrafo que capta momentos crus e paisagens tranquilas.',
    'objects.heading': 'Objetos',
    'objects.lead': 'As nossas próprias coleções.<br>Concebidas internamente.<br>Feitas com propósito.',
    'objects.filter.all': 'Tudo',
    'objects.filter.apparel': 'Vestuário',
    'objects.filter.accessories': 'Acessórios',
    'objects.filter.objects': 'Objetos',
    'objects.filter.stationery': 'Papelaria',
    'objects.filter.button': 'Filtrar',
    'objects.empty': 'Ainda não há objetos nesta categoria.',
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
