(() => {
  'use strict';

  const $ = (selector) => document.querySelector(selector);
  const menuToggle = $('#menu-toggle');
  const mobileNav = $('#mobile-nav');
  const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');

  const closeMenu = (restoreFocus = false) => {
    if (!menuToggle || !mobileNav) return;
    mobileNav.hidden = true;
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Abrir menu');
    if (restoreFocus) menuToggle.focus();
  };

  menuToggle?.addEventListener('click', () => {
    if (!mobileNav) return;
    const willOpen = menuToggle.getAttribute('aria-expanded') !== 'true';
    menuToggle.setAttribute('aria-expanded', String(willOpen));
    menuToggle.setAttribute('aria-label', willOpen ? 'Fechar menu' : 'Abrir menu');
    mobileNav.hidden = !willOpen;
  });

  mobileNav?.addEventListener('click', (event) => {
    if (event.target.closest('a, [data-open-quote]')) closeMenu();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && mobileNav && !mobileNav.hidden) closeMenu(true);
  });

  document.addEventListener('click', (event) => {
    if (mobileNav && !mobileNav.hidden && !mobileNav.contains(event.target) && !menuToggle?.contains(event.target)) {
      closeMenu();
    }
  });

  const revealElements = [...document.querySelectorAll('[data-reveal]')];
  let revealObserver;
  const revealAll = () => {
    revealObserver?.disconnect();
    revealElements.forEach((element) => element.classList.add('is-visible'));
  };

  if ('IntersectionObserver' in window && !motionPreference.matches) {
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      });
    }, { threshold: 0.06, rootMargin: '0px 0px -20px 0px' });
    revealElements.forEach((element) => {
      element.classList.add('reveal-ready');
      revealObserver.observe(element);
    });
  } else {
    revealAll();
  }
  motionPreference.addEventListener?.('change', (event) => {
    if (event.matches) revealAll();
  });

  const quoteDialog = $('#quote-dialog');
  const quoteForm = $('#quote-form');
  const serviceField = $('#service');
  const quoteFeedback = $('#quote-feedback');
  const quoteWhatsApp = $('#quote-whatsapp');
  let quoteOpener;

  const resetFeedback = () => {
    if (quoteFeedback) quoteFeedback.textContent = '';
    if (quoteWhatsApp) {
      quoteWhatsApp.hidden = true;
      quoteWhatsApp.removeAttribute('href');
    }
  };

  document.querySelectorAll('[data-open-quote]').forEach((button) => {
    button.addEventListener('click', (event) => {
      if (!quoteDialog) return;
      event.preventDefault();
      quoteOpener = button;
      closeMenu();
      const selectedService = button.dataset.service;
      if (selectedService && serviceField && [...serviceField.options].some((option) => option.value === selectedService)) {
        serviceField.value = selectedService;
      }
      resetFeedback();
      if (!quoteDialog.open) quoteDialog.showModal();
    });
  });

  $('#close-quote')?.addEventListener('click', () => quoteDialog?.close());
  quoteDialog?.addEventListener('click', (event) => {
    if (event.target !== quoteDialog) return;
    const bounds = quoteDialog.getBoundingClientRect();
    const outside = event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom;
    if (outside) quoteDialog.close();
  });
  quoteDialog?.addEventListener('close', () => {
    if (!quoteOpener?.isConnected) return;
    const focusTarget = quoteOpener.closest('[hidden]') ? menuToggle : quoteOpener;
    focusTarget?.focus({ preventScroll: true });
  });

  quoteForm?.addEventListener('input', (event) => {
    event.target.setCustomValidity?.('');
    resetFeedback();
  });

  quoteForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    const field = (name) => quoteForm.elements.namedItem(name);
    for (const name of ['name', 'location']) {
      const input = field(name);
      if (input) input.setCustomValidity(input.value.trim() ? '' : 'Preencha este campo.');
    }
    if (!quoteForm.reportValidity()) return;

    const name = field('name').value.trim();
    const service = serviceField?.selectedOptions[0]?.textContent.trim() || field('service').value.trim();
    const location = field('location').value.trim();
    const details = field('details')?.value.trim();
    const message = [
      'Olá, Alex! Gostaria de pedir um orçamento.',
      '',
      `Meu nome: ${name}`,
      `Serviço: ${service}`,
      'Cidade: Santa Maria / RS',
      `Bairro / local do serviço: ${location}`,
      ...(details ? ['', `Sobre o serviço: ${details}`] : []),
    ].join('\n');
    const url = `https://wa.me/5555991830318?text=${encodeURIComponent(message)}`;
    if (quoteWhatsApp) {
      quoteWhatsApp.href = url;
      quoteWhatsApp.target = '_blank';
      quoteWhatsApp.rel = 'noopener noreferrer';
      quoteWhatsApp.hidden = false;
    }
    if (quoteFeedback) quoteFeedback.textContent = 'Sua mensagem está pronta. Envie pelo WhatsApp para conversar com o Alex.';
    window.open(url, '_blank', 'noopener,noreferrer');
  });

  const video = $('#alex-video');
  const playButton = $('#play-video');
  if (video && playButton) {
    video.controls = true;
    playButton.addEventListener('click', async () => {
      video.muted = false;
      try {
        await video.play();
      } catch {
        playButton.hidden = false;
        video.controls = true;
      }
    });
    video.addEventListener('play', () => { playButton.hidden = true; });
    video.addEventListener('pause', () => { playButton.hidden = false; });
    video.addEventListener('ended', () => { playButton.hidden = false; });
  }

  const year = $('#year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
