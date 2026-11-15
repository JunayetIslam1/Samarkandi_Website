/* SAMARKANDI — multi-page interactions, no backend or data storage. */
(() => {
  'use strict';

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const WHATSAPP_NUMBER = '8801863851921';
  let selectedPackage = 'সাধারণ সফর-সংক্রান্ত পরামর্শ';
  let toastTimer = null;

  function showToast(message) {
    const toast = $('#toast');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove('show'), 3600);
  }

  function openWhatsApp(message) {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  function safeValue(id, fallback = 'উল্লেখ করা হয়নি') {
    const element = document.getElementById(id);
    return element && element.value.trim() ? element.value.trim() : fallback;
  }

  function validPhone(value) {
    const digits = value.replace(/\D/g, '');
    return digits.length >= 8 && digits.length <= 15;
  }

  // Set active page on both desktop and mobile navigation.
  const currentPage = document.body.dataset.page || 'home';
  $$('[data-page]').forEach(link => {
    const active = link.dataset.page === currentPage;
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
  if (currentPage === 'planner') {
    const plannerLink = $('.nav-cta');
    plannerLink?.classList.add('active');
    plannerLink?.setAttribute('aria-current', 'page');
  }

  // Mobile navigation.
  const menuToggle = $('#menuToggle');
  const mobileNav = $('#mobileNav');
  menuToggle?.addEventListener('click', () => {
    const opened = mobileNav?.classList.toggle('open') ?? false;
    menuToggle.setAttribute('aria-expanded', String(opened));
    menuToggle.setAttribute('aria-label', opened ? 'মেনু বন্ধ করুন' : 'মেনু খুলুন');
  });
  $$('#mobileNav a').forEach(link => link.addEventListener('click', () => {
    mobileNav?.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  }));

  // Package enquiry modal (available on the packages page).
  const modal = $('#inquiryModal');
  const modalClose = $('#modalClose');
  const modalPackageText = $('#modalPackageText');
  function openModal(packageName) {
    if (!modal) return;
    selectedPackage = packageName || 'সাধারণ সফর-সংক্রান্ত পরামর্শ';
    if (modalPackageText) {
      modalPackageText.textContent = `আপনি “${selectedPackage}” সম্পর্কে জানতে চেয়েছেন। আপনার যোগাযোগের তথ্য দিন, এরপর WhatsApp-এ বার্তা তৈরি হবে।`;
    }
    modal.classList.add('show');
    document.body.classList.add('modal-open');
    window.setTimeout(() => $('#visitorName')?.focus(), 80);
  }
  function closeModal() {
    modal?.classList.remove('show');
    document.body.classList.remove('modal-open');
  }
  modalClose?.addEventListener('click', closeModal);
  modal?.addEventListener('click', event => {
    if (event.target === modal) closeModal();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeModal();
  });
  $$('[data-package]').forEach(button => button.addEventListener('click', () => openModal(button.dataset.package)));

  // Package category filters.
  $$('.filter-btn').forEach(button => button.addEventListener('click', () => {
    $$('.filter-btn').forEach(item => {
      item.classList.remove('active');
      item.setAttribute('aria-pressed', 'false');
    });
    button.classList.add('active');
    button.setAttribute('aria-pressed', 'true');
    const filter = button.dataset.filter;
    $$('.package-card').forEach(card => {
      card.hidden = !(filter === 'all' || card.dataset.category === filter);
    });
  }));

  // Homepage quick planner.
  $('#plannerForm')?.addEventListener('submit', event => {
    event.preventDefault();
    const type = safeValue('tripType');
    const month = safeValue('travelMonth', 'তারিখ এখনো ঠিক হয়নি');
    const length = safeValue('tripLength');
    const travellers = safeValue('travellerCount');
    const message = `Assalamu Alaikum, আমি ${type} সম্পর্কে জানতে চাই।\nসম্ভাব্য মাস: ${month}\nসফরের মেয়াদ: ${length}\nযাত্রী: ${travellers}\nদয়া করে প্যাকেজ, সুবিধা ও শর্ত সম্পর্কে জানাবেন।`;
    openWhatsApp(message);
  });

  // Full planner: additional preferences, but no price/availability is inferred.
  $('#plannerPageForm')?.addEventListener('submit', event => {
    event.preventDefault();
    const name = safeValue('fullName', 'নাম উল্লেখ করা হয়নি');
    const phone = safeValue('fullPhone', '');
    if (!phone || !validPhone(phone)) {
      showToast('সঠিক মোবাইল নম্বর লিখুন।');
      $('#fullPhone')?.focus();
      return;
    }
    const message = `Assalamu Alaikum, আমি সফর পরিকল্পনার জন্য প্রাথমিক পরামর্শ চাই।\nনাম: ${name}\nমোবাইল: ${phone}\nপ্যাকেজ: ${safeValue('fullTripType')}\nসম্ভাব্য মাস: ${safeValue('fullTravelMonth', 'এখনো ঠিক হয়নি')}\nমেয়াদ: ${safeValue('fullTripLength')}\nযাত্রী: ${safeValue('fullTravellerCount')}\nসম্ভাব্য বাজেট: ${safeValue('fullBudget')}\nরুমের পছন্দ: ${safeValue('fullRoom')}\nহোটেলের অবস্থান: ${safeValue('fullHotel')}\nঅতিরিক্ত তথ্য: ${safeValue('fullNotes')}\nদয়া করে বর্তমান প্যাকেজ, মূল্য, প্রাপ্যতা ও শর্ত জানাবেন।`;
    openWhatsApp(message);
  });

  // Package modal form.
  $('#inquiryForm')?.addEventListener('submit', event => {
    event.preventDefault();
    const name = safeValue('visitorName', '');
    const phone = safeValue('visitorPhone', '');
    const count = safeValue('visitorCount');
    if (!name || !phone || !validPhone(phone)) {
      showToast('নাম ও সঠিক মোবাইল নম্বর লিখুন।');
      return;
    }
    closeModal();
    openWhatsApp(`Assalamu Alaikum, আমি ${selectedPackage} সম্পর্কে জানতে চাই।\nনাম: ${name}\nমোবাইল: ${phone}\nযাত্রী: ${count}\nদয়া করে বিস্তারিত জানাবেন।`);
  });

  // Contact enquiry form.
  $('#contactEnquiryForm')?.addEventListener('submit', event => {
    event.preventDefault();
    const name = safeValue('contactName', '');
    const phone = safeValue('contactPhone', '');
    if (!name || !phone || !validPhone(phone)) {
      showToast('নাম ও সঠিক মোবাইল নম্বর লিখুন।');
      return;
    }
    const topic = safeValue('contactTopic');
    const note = safeValue('contactMessage');
    openWhatsApp(`Assalamu Alaikum, আমি ${topic} বিষয়ে জানতে চাই।\nনাম: ${name}\nমোবাইল: ${phone}\nবার্তা: ${note}\nদয়া করে যোগাযোগ করবেন।`);
  });

  // Printable, interactive readiness checklist.
  const checks = $$('.prep-check');
  function updateChecklistProgress() {
    if (!checks.length) return;
    const done = checks.filter(item => item.checked).length;
    const percent = Math.round((done / checks.length) * 100);
    const label = $('#checkProgress');
    const bar = $('#checkProgressBar');
    if (label) label.textContent = `${percent}%`;
    if (bar) bar.style.width = `${percent}%`;
  }
  checks.forEach(item => item.addEventListener('change', updateChecklistProgress));
  updateChecklistProgress();
  $('#printChecklist')?.addEventListener('click', () => {
    document.body.classList.add('print-checklist');
    window.setTimeout(() => window.print(), 50);
  });
  window.addEventListener('afterprint', () => document.body.classList.remove('print-checklist'));

  // Date fields should not silently accept a past month.
  const now = new Date();
  const monthMin = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
  ['travelMonth', 'fullTravelMonth'].forEach(id => {
    const field = document.getElementById(id);
    if (field) field.min = monthMin;
  });

  const year = $('#year');
  if (year) year.textContent = new Date().getFullYear();

  // Local fallback for remote photographs.
  $$('img').forEach(img => img.addEventListener('error', () => {
    img.classList.add('image-failed');
    img.parentElement?.classList.add('image-fallback');
    img.alt = 'ছবি বর্তমানে লোড হচ্ছে না';
  }, { once: true }));
})();
