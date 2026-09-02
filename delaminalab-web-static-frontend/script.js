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
