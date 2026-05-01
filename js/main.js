const FLAG_CODES =
  "AD AE AF AG AI AL AM AO AR AS AT AU AW AX AZ BA BB BD BE BF BG BH BI BJ BL BM BN BO BQ BQ-1 BQ-2 BR BS BT BW BY BZ CA CC CD CD-1 CF CH CK CL CM CN CO CR CU CW CX CY CZ DE DJ DK DM DO DS DZ EC EE EG EH ER ES ET FI FJ FK FM FO FR GA GB GB-2 GD GE GG GH GI GL GM GN GQ GR GT GU GW GY HK HN HR HT HU ID IE IL IM IN IO IQ IR IS IT JE JM JO JP KE KG KH KI KM KN KP KR KW KY KZ LA LB LC LI LK LR LS LT LU LV LY MA MC MD ME MG MH MK ML MM MN MO MP MQ MR MS MT MU MV MW MX MY MZ NA NE NF NG NI NL NO NP NR NU NZ OM PA PE PF PG PH PK PL PN PR PS PT PW PY QA RO RS RU RW SA SB SC SE SG SI SK SL SM SN SO SR SS ST SV SX SY SZ TC TD TG TH TJ TK TL TM TN TO TR TT TV TW TZ UA UG US UY UZ VC VE VG VI VN VU WS YE ZA ZM ZW".split(
    " ",
  );

const COUNTRY_CURRENCIES = {
  AD: "EUR",
  AE: "AED",
  AF: "AFN",
  AG: "XCD",
  AI: "XCD",
  AL: "ALL",
  AM: "AMD",
  AO: "AOA",
  AR: "ARS",
  AS: "USD",
  AT: "EUR",
  AU: "AUD",
  AW: "AWG",
  AX: "EUR",
  AZ: "AZN",
  BA: "BAM",
  BB: "BBD",
  BD: "BDT",
  BE: "EUR",
  BF: "XOF",
  BG: "BGN",
  BH: "BHD",
  BI: "BIF",
  BJ: "XOF",
  BL: "EUR",
  BM: "BMD",
  BN: "BND",
  BO: "BOB",
  BQ: "USD",
  BR: "BRL",
  BS: "BSD",
  BT: "BTN",
  BW: "BWP",
  BY: "BYN",
  BZ: "BZD",
  CA: "CAD",
  CC: "AUD",
  CD: "CDF",
  CF: "XAF",
  CH: "CHF",
  CK: "NZD",
  CL: "CLP",
  CM: "XAF",
  CN: "CNY",
  CO: "COP",
  CR: "CRC",
  CU: "CUP",
  CW: "ANG",
  CX: "AUD",
  CY: "EUR",
  CZ: "CZK",
  DE: "EUR",
  DJ: "DJF",
  DK: "DKK",
  DM: "XCD",
  DO: "DOP",
  DS: "USD",
  DZ: "DZD",
  EC: "USD",
  EE: "EUR",
  EG: "EGP",
  EH: "MAD",
  ER: "ERN",
  ES: "EUR",
  ET: "ETB",
  FI: "EUR",
  FJ: "FJD",
  FK: "FKP",
  FM: "USD",
  FO: "DKK",
  FR: "EUR",
  GA: "XAF",
  GB: "GBP",
  GD: "XCD",
  GE: "GEL",
  GG: "GBP",
  GH: "GHS",
  GI: "GIP",
  GL: "DKK",
  GM: "GMD",
  GN: "GNF",
  GQ: "XAF",
  GR: "EUR",
  GT: "GTQ",
  GU: "USD",
  GW: "XOF",
  GY: "GYD",
  HK: "HKD",
  HN: "HNL",
  HR: "EUR",
  HT: "HTG",
  HU: "HUF",
  ID: "IDR",
  IE: "EUR",
  IL: "ILS",
  IM: "GBP",
  IN: "INR",
  IO: "USD",
  IQ: "IQD",
  IR: "IRR",
  IS: "ISK",
  IT: "EUR",
  JE: "GBP",
  JM: "JMD",
  JO: "JOD",
  JP: "JPY",
  KE: "KES",
  KG: "KGS",
  KH: "KHR",
  KI: "AUD",
  KM: "KMF",
  KN: "XCD",
  KP: "KPW",
  KR: "KRW",
  KW: "KWD",
  KY: "KYD",
  KZ: "KZT",
  LA: "LAK",
  LB: "LBP",
  LC: "XCD",
  LI: "CHF",
  LK: "LKR",
  LR: "LRD",
  LS: "LSL",
  LT: "EUR",
  LU: "EUR",
  LV: "EUR",
  LY: "LYD",
  MA: "MAD",
  MC: "EUR",
  MD: "MDL",
  ME: "EUR",
  MG: "MGA",
  MH: "USD",
  MK: "MKD",
  ML: "XOF",
  MM: "MMK",
  MN: "MNT",
  MO: "MOP",
  MP: "USD",
  MQ: "EUR",
  MR: "MRU",
  MS: "XCD",
  MT: "EUR",
  MU: "MUR",
  MV: "MVR",
  MW: "MWK",
  MX: "MXN",
  MY: "MYR",
  MZ: "MZN",
  NA: "NAD",
  NE: "XOF",
  NF: "AUD",
  NG: "NGN",
  NI: "NIO",
  NL: "EUR",
  NO: "NOK",
  NP: "NPR",
  NR: "AUD",
  NU: "NZD",
  NZ: "NZD",
  OM: "OMR",
  PA: "PAB",
  PE: "PEN",
  PF: "XPF",
  PG: "PGK",
  PH: "PHP",
  PK: "PKR",
  PL: "PLN",
  PN: "NZD",
  PR: "USD",
  PS: "ILS",
  PT: "EUR",
  PW: "USD",
  PY: "PYG",
  QA: "QAR",
  RO: "RON",
  RS: "RSD",
  RU: "RUB",
  RW: "RWF",
  SA: "SAR",
  SB: "SBD",
  SC: "SCR",
  SE: "SEK",
  SG: "SGD",
  SI: "EUR",
  SK: "EUR",
  SL: "SLE",
  SM: "EUR",
  SN: "XOF",
  SO: "SOS",
  SR: "SRD",
  SS: "SSP",
  ST: "STN",
  SV: "USD",
  SX: "ANG",
  SY: "SYP",
  SZ: "SZL",
  TC: "USD",
  TD: "XAF",
  TG: "XOF",
  TH: "THB",
  TJ: "TJS",
  TK: "NZD",
  TL: "USD",
  TM: "TMT",
  TN: "TND",
  TO: "TOP",
  TR: "TRY",
  TT: "TTD",
  TV: "AUD",
  TW: "TWD",
  TZ: "TZS",
  UA: "UAH",
  UG: "UGX",
  US: "USD",
  UY: "UYU",
  UZ: "UZS",
  VC: "XCD",
  VE: "VES",
  VG: "USD",
  VI: "USD",
  VN: "VND",
  VU: "VUV",
  WS: "WST",
  YE: "YER",
  ZA: "ZAR",
  ZM: "ZMW",
  ZW: "ZWL",
};

const REGION_NAME_OVERRIDES = {
  AE: "ОАЭ",
  "BQ-1": "Бонэйр",
  "BQ-2": "Саба",
  "CD-1": "Конго",
  DS: "Доминика",
  KP: "Северная Корея",
  KR: "Южная Корея",
  RU: "Россия",
  US: "США",
  "GB-2": "Англия",
};

const REGION_SEARCH_ALIASES = {
  AE: "эмир дирхам",
  GB: "англия британ фунт",
  RU: "российская федерация рубль",
  TR: "турция лира",
  US: "соединенные штаты америка доллар",
};

const COMMISSION_RATE = 0.03;
const RATE_NOTE_TEXT = "*Курс включает комиссию";
const API_BASE = "https://api.frankfurter.dev/v2";
const rateCache = new Map();
const regionNames = new Intl.DisplayNames(["ru"], { type: "region" });

const formatter = new Intl.NumberFormat("ru-RU", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const compactRateFormatter = new Intl.NumberFormat("ru-RU", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 4,
});

const faqItems = Array.from(document.querySelectorAll(".faq-item"));

const syncFaqHeights = () => {
  faqItems.forEach((item) => {
    const answer = item.querySelector(".faq-answer");

    if (!answer) {
      return;
    }

    item.style.setProperty("--faq-answer-height", `${answer.scrollHeight}px`);
  });
};

const setFaqState = (item, isOpen) => {
  const trigger = item.querySelector(".faq-question");

  item.classList.toggle("is-open", isOpen);

  if (trigger) {
    trigger.setAttribute("aria-expanded", String(isOpen));
  }
};

faqItems.forEach((item) => {
  const trigger = item.querySelector(".faq-question");

  if (!trigger) {
    return;
  }

  trigger.addEventListener("click", () => {
    const willOpen = !item.classList.contains("is-open");

    faqItems.forEach((otherItem) => setFaqState(otherItem, false));
    setFaqState(item, willOpen);
    syncFaqHeights();
  });
});

syncFaqHeights();
window.addEventListener("resize", syncFaqHeights);

const getBaseCountryCode = (code) => code.split("-")[0];

const countries = FLAG_CODES.map((flagCode) => {
  const baseCode = getBaseCountryCode(flagCode);
  const currency = COUNTRY_CURRENCIES[baseCode] || "USD";

  return {
    flagCode,
    countryCode: baseCode,
    currency,
    flag: `assets/flags/${flagCode}.svg`,
    name: REGION_NAME_OVERRIDES[flagCode] || regionNames.of(baseCode) || flagCode,
    alias: REGION_SEARCH_ALIASES[baseCode] || "",
  };
}).sort((a, b) => a.name.localeCompare(b.name, "ru"));

const getCountryByCode = (countryCode) =>
  countries.find((country) => country.flagCode === countryCode) ||
  countries.find((country) => country.countryCode === countryCode);

const calculator = document.querySelector("[data-transfer-calculator]");

if (calculator) {
  initTransferCalculator(calculator);
}

initMotionExperience();

function initMotionExperience() {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const gsapInstance = window.gsap;

  if (prefersReducedMotion || !gsapInstance) {
    return;
  }

  const { gsap: motion } = window;
  const ScrollTrigger = window.ScrollTrigger;
  const SplitText = window.SplitText;

  if (ScrollTrigger) {
    motion.registerPlugin(ScrollTrigger);
  }

  if (SplitText) {
    motion.registerPlugin(SplitText);
  }

  document.body.classList.add("is-motion-ready");
  initSmoothScroll(motion, ScrollTrigger);
  initHeroMotion(motion, SplitText);
  initScrollMotion(motion, ScrollTrigger, SplitText);
  initInteractiveMotion(motion);
}

function initSmoothScroll(motion, ScrollTrigger) {
  const Lenis = window.Lenis;
  const useSmoothScroll = window.matchMedia("(min-width: 810px)").matches;

  if (!Lenis || !ScrollTrigger || !useSmoothScroll) {
    return;
  }

  const lenis = new Lenis({
    duration: 1.08,
    easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
    prevent: (node) => Boolean(node.closest?.(".currency-menu")),
    smoothWheel: true,
    syncTouch: false,
  });

  lenis.on("scroll", ScrollTrigger.update);

  motion.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  motion.ticker.lagSmoothing(0);
}

function initHeroMotion(motion, SplitText) {
  const heroTitle = document.querySelector(".hero-copy h1");
  const heroLead = document.querySelector(".hero-copy p");
  const proofItems = document.querySelectorAll(".proof-list li");
  const headerItems = document.querySelectorAll(".brand, .nav-pill");
  const transferCard = document.querySelector(".transfer-card-main");
  const transferParts = transferCard?.querySelectorAll(
    ".payment-logos img, .transfer-field, .rate-bridge, .delivery-box",
  );

  let titleTargets = heroTitle;

  if (SplitText && heroTitle) {
    titleTargets = new SplitText(heroTitle, {
      type: "lines,words",
      linesClass: "motion-line",
      wordsClass: "motion-word",
    }).words;
  }

  const intro = motion.timeline({
    defaults: { ease: "power3.out", duration: 0.85 },
  });

  intro
    .from(headerItems, { y: -18, opacity: 0, stagger: 0.08, duration: 0.55 })
    .from(titleTargets, { yPercent: 105, opacity: 0, stagger: 0.035 }, "-=0.2")
    .from(heroLead, { y: 24, opacity: 0 }, "-=0.55")
    .from(proofItems, { y: 18, opacity: 0, stagger: 0.07, duration: 0.55 }, "-=0.45")
    .from(
      transferCard,
      {
        opacity: 0,
        filter: "blur(10px)",
        duration: 0.95,
        clearProps: "filter",
      },
      "-=0.9",
    )
    .from(
      transferParts,
      {
        y: 18,
        opacity: 0,
        stagger: 0.065,
        duration: 0.58,
        clearProps: "filter",
      },
      "-=0.48",
    );
}

function initScrollMotion(motion, ScrollTrigger, SplitText) {
  if (!ScrollTrigger) {
    return;
  }

  const revealText = (element) => {
    if (!element) {
      return;
    }

    let targets = element;

    if (SplitText) {
      targets = new SplitText(element, {
        type: "lines",
        linesClass: "motion-line",
      }).lines;
    }

    motion.from(targets, {
      scrollTrigger: {
        trigger: element,
        start: "top 82%",
        once: true,
      },
      y: 32,
      opacity: 0,
      stagger: 0.08,
      duration: 0.75,
      ease: "power3.out",
    });
  };

  document.querySelectorAll(".section h2, .faq-copy h2").forEach(revealText);

  motion.utils.toArray(".scenario-heading, .eyebrow").forEach((item) => {
    motion.from(item, {
      scrollTrigger: {
        trigger: item,
        start: "top 86%",
        once: true,
      },
      y: 18,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
    });
  });

  motion.from(".balance-card__surface", {
    scrollTrigger: {
      trigger: ".balance-card",
      start: "top 76%",
      once: true,
    },
    y: 44,
    scale: 0.98,
    opacity: 0,
    duration: 0.75,
    ease: "power3.out",
  });

  const accountStackTimeline = motion.timeline({
    scrollTrigger: {
      trigger: ".account-stack",
      start: "top 78%",
      once: true,
    },
  });

  accountStackTimeline
    .from(".account-card--rub", {
      y: 30,
      scale: 0.96,
      opacity: 0,
      duration: 0.55,
      ease: "power3.out",
    })
    .from(
      ".account-card--usd",
      {
        y: 52,
        scale: 0.94,
        opacity: 0,
        duration: 0.72,
        ease: "back.out(1.35)",
      },
      "-=0.22",
    )
    .from(
      ".account-card--th",
      {
        y: 96,
        scale: 0.9,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.35)",
      },
      "-=0.48",
    );

  motion.to(".balance-card__globe", {
    scrollTrigger: {
      trigger: ".scenarios",
      start: "top bottom",
      end: "bottom top",
      scrub: 1.1,
    },
    rotate: 10,
    scale: 1.05,
    ease: "none",
  });

  motion.from(".feature-card", {
    scrollTrigger: {
      trigger: ".feature-grid",
      start: "top 78%",
      once: true,
    },
    y: 34,
    opacity: 0,
    stagger: 0.08,
    duration: 0.62,
    ease: "power3.out",
  });

  motion.from(".feature-icon", {
    scrollTrigger: {
      trigger: ".feature-grid",
      start: "top 78%",
      once: true,
    },
    scale: 0.4,
    rotate: -18,
    opacity: 0,
    stagger: 0.08,
    duration: 0.58,
    ease: "back.out(1.7)",
  });

  motion.from(".step-card", {
    scrollTrigger: {
      trigger: ".steps-grid",
      start: "top 78%",
      once: true,
    },
    y: 42,
    opacity: 0,
    stagger: 0.12,
    duration: 0.72,
    ease: "power3.out",
  });

  motion.from(".step-divider", {
    scrollTrigger: {
      trigger: ".steps-grid",
      start: "top 76%",
      once: true,
    },
    scaleX: 0,
    transformOrigin: "left center",
    stagger: 0.12,
    duration: 0.58,
    ease: "power2.out",
  });

  motion.from(".faq-item", {
    scrollTrigger: {
      trigger: ".faq-list",
      start: "top 80%",
      once: true,
    },
    y: 26,
    opacity: 0,
    stagger: 0.07,
    duration: 0.58,
    ease: "power3.out",
  });

  motion.from(".footer-legal, .footer-cta", {
    scrollTrigger: {
      trigger: ".site-footer",
      start: "top 88%",
      once: true,
    },
    y: 32,
    opacity: 0,
    stagger: 0.12,
    duration: 0.7,
    ease: "power3.out",
  });

  motion.to(".footer-globe", {
    y: -18,
    rotate: 8,
    duration: 5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });

  motion.to(".hero.section-map", {
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: 1,
    },
    "--hero-map-shift": "48px",
    ease: "none",
  });
}

function initInteractiveMotion(motion) {
  const hoverTargets = document.querySelectorAll(".currency-chip, .feature-card, .step-card, .faq-item");

  hoverTargets.forEach((target) => {
    target.addEventListener("mouseenter", () => {
      motion.to(target, {
        y: target.classList.contains("currency-chip") ? -2 : -4,
        boxShadow: "0 22px 42px rgba(1, 19, 14, 0.08)",
        duration: 0.22,
        ease: "power2.out",
        overwrite: "auto",
      });
    });

    target.addEventListener("mouseleave", () => {
      motion.to(target, {
        y: 0,
        boxShadow: "",
        duration: 0.28,
        ease: "power2.out",
        overwrite: "auto",
      });
    });
  });

  document.querySelectorAll(".rate-bridge-icon").forEach((icon) => {
    motion.to(icon, {
      y: 3,
      duration: 1.25,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  });
}

function initTransferCalculator(root) {
  const state = {
    sendCountry: getCountryByCode("RU"),
    receiveCountry: getCountryByCode("US"),
    activeSide: null,
    lastRate: null,
    lastRequestId: 0,
  };

  const controls = {
    sendField: root.querySelector('[data-currency-field="send"]'),
    receiveField: root.querySelector('[data-currency-field="receive"]'),
    sendTrigger: root.querySelector('[data-currency-trigger="send"]'),
    receiveTrigger: root.querySelector('[data-currency-trigger="receive"]'),
    sendAmount: root.querySelector("[data-send-amount]"),
    receiveAmount: root.querySelector("[data-receive-amount]"),
    rateLabel: root.querySelector("[data-rate-label]"),
    rateNote: root.querySelector("[data-rate-note]"),
    deliveryLabel: root.querySelector("[data-delivery-label]"),
  };

  const menu = createCurrencyMenu(root);
  controls.menu = menu;

  updateCurrencyTrigger(controls.sendTrigger, state.sendCountry);
  updateCurrencyTrigger(controls.receiveTrigger, state.receiveCountry);

  controls.sendTrigger.addEventListener("click", () => openCurrencyMenu("send"));
  controls.receiveTrigger.addEventListener("click", () => openCurrencyMenu("receive"));
  controls.sendAmount.addEventListener("input", () => {
    controls.sendAmount.classList.toggle("is-empty", !parseAmount(controls.sendAmount.value));
    calculateTransfer();
  });

  controls.sendAmount.addEventListener("blur", () => {
    const amount = parseAmount(controls.sendAmount.value);
    controls.sendAmount.value = amount ? formatter.format(amount) : "";
    controls.sendAmount.classList.toggle("is-empty", !amount);
  });

  controls.sendAmount.addEventListener("focus", () => {
    const amount = parseAmount(controls.sendAmount.value);
    controls.sendAmount.value = amount ? String(amount).replace(".", ",") : "";
  });

  document.addEventListener("click", (event) => {
    if (!root.contains(event.target)) {
      closeCurrencyMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeCurrencyMenu();
    }
  });

  calculateTransfer();

  function openCurrencyMenu(side) {
    state.activeSide = side;
    const field = side === "send" ? controls.sendField : controls.receiveField;
    const selected = side === "send" ? state.sendCountry : state.receiveCountry;
    const trigger = side === "send" ? controls.sendTrigger : controls.receiveTrigger;
    const fieldRect = field.getBoundingClientRect();
    const rootRect = root.getBoundingClientRect();

    controls.sendTrigger.setAttribute("aria-expanded", String(side === "send"));
    controls.receiveTrigger.setAttribute("aria-expanded", String(side === "receive"));
    menu.element.style.top = `${fieldRect.bottom - rootRect.top + 8}px`;
    menu.search.value = "";
    renderCurrencyOptions("");
    menu.element.classList.add("is-open");
    trigger.setAttribute("aria-expanded", "true");

    requestAnimationFrame(() => {
      menu.search.focus();
      const selectedOption = menu.list.querySelector(`[data-flag-code="${selected.flagCode}"]`);
      selectedOption?.scrollIntoView({ block: "nearest" });
    });
  }

  function closeCurrencyMenu() {
    state.activeSide = null;
    menu.element.classList.remove("is-open");
    controls.sendTrigger.setAttribute("aria-expanded", "false");
    controls.receiveTrigger.setAttribute("aria-expanded", "false");
  }

  function renderCurrencyOptions(query) {
    const selected = state.activeSide === "send" ? state.sendCountry : state.receiveCountry;
    const normalizedQuery = query.trim().toLowerCase();
    const filteredCountries = countries
      .filter((country) => {
        const haystack =
          `${country.name} ${country.alias} ${country.currency} ${country.countryCode}`.toLowerCase();
        return haystack.includes(normalizedQuery);
      })
      .sort((a, b) => getSearchScore(b, normalizedQuery) - getSearchScore(a, normalizedQuery));

    menu.list.innerHTML = "";

    if (!filteredCountries.length) {
      const empty = document.createElement("p");
      empty.className = "currency-menu__empty";
      empty.textContent = "Ничего не найдено";
      menu.list.append(empty);
      return;
    }

    filteredCountries.forEach((country) => {
      const option = document.createElement("button");
      option.type = "button";
      option.className = "currency-option";
      option.dataset.flagCode = country.flagCode;
      option.setAttribute("aria-selected", String(country.flagCode === selected.flagCode));
      option.innerHTML = `
        <img src="${country.flag}" alt="" width="24" height="24" />
        <span class="currency-option__name">${country.name}</span>
        <span class="currency-option__code">${country.currency}</span>
      `;
      option.addEventListener("click", () => selectCountry(country));
      menu.list.append(option);
    });
  }

  function selectCountry(country) {
    if (state.activeSide === "send") {
      state.sendCountry = country;
      updateCurrencyTrigger(controls.sendTrigger, country);
    } else {
      state.receiveCountry = country;
      updateCurrencyTrigger(controls.receiveTrigger, country);
    }

    closeCurrencyMenu();
    calculateTransfer();
  }

  async function calculateTransfer() {
    const amount = parseAmount(controls.sendAmount.value);
    controls.sendAmount.classList.toggle("is-empty", !amount);

    if (!amount) {
      controls.receiveAmount.textContent = "0,00";
      controls.receiveAmount.classList.add("is-muted");
      controls.rateLabel.textContent = `${state.sendCountry.currency} → ${state.receiveCountry.currency}`;
      controls.rateNote.textContent = "Введите сумму для расчета";
      controls.deliveryLabel.textContent = "после ввода суммы";
      return;
    }

    const requestId = ++state.lastRequestId;
    controls.receiveAmount.classList.remove("is-muted");
    controls.rateLabel.textContent = "Загружаем курс...";
    controls.rateNote.textContent = RATE_NOTE_TEXT;

    try {
      const rawRate = await fetchExchangeRate(state.sendCountry.currency, state.receiveCountry.currency);

      if (requestId !== state.lastRequestId) {
        return;
      }

      const effectiveRate = rawRate * (1 - COMMISSION_RATE);
      const receiveAmount = amount * effectiveRate;
      const visibleRate = effectiveRate > 0 ? 1 / effectiveRate : 0;

      state.lastRate = rawRate;
      controls.receiveAmount.textContent = formatter.format(receiveAmount);
      controls.rateLabel.textContent = `${compactRateFormatter.format(visibleRate)} ${state.sendCountry.currency} = 1 ${state.receiveCountry.currency}`;
      controls.rateNote.textContent = RATE_NOTE_TEXT;
      controls.deliveryLabel.textContent = getDeliveryEstimate(state.receiveCountry, amount);
    } catch (error) {
      if (requestId !== state.lastRequestId) {
        return;
      }

      controls.receiveAmount.textContent = "0,00";
      controls.receiveAmount.classList.add("is-muted");
      controls.rateLabel.textContent = "Курс недоступен";
      controls.rateNote.textContent = "Попробуйте другую валюту";
      controls.deliveryLabel.textContent = "после обновления курса";
    }
  }

  menu.search.addEventListener("input", () => renderCurrencyOptions(menu.search.value));
}

function getSearchScore(country, query) {
  if (!query) {
    return 0;
  }

  const name = country.name.toLowerCase();

  if (name === query) {
    return 5;
  }

  if (name.startsWith(query)) {
    return 4;
  }

  if (country.currency.toLowerCase() === query || country.countryCode.toLowerCase() === query) {
    return 3;
  }

  if (country.alias.toLowerCase().includes(query)) {
    return 2;
  }

  return 1;
}

function createCurrencyMenu(root) {
  const element = document.createElement("div");
  element.className = "currency-menu";
  element.innerHTML = `
    <input class="currency-menu__search" type="search" placeholder="Страна или валюта" autocomplete="off" />
    <div class="currency-menu__list" role="listbox" tabindex="0"></div>
  `;
  root.append(element);

  const list = element.querySelector(".currency-menu__list");

  bindCurrencyMenuScroll(list);

  return {
    element,
    search: element.querySelector(".currency-menu__search"),
    list,
  };
}

function bindCurrencyMenuScroll(list) {
  let lastTouchY = 0;

  list.addEventListener(
    "wheel",
    (event) => {
      if (list.scrollHeight <= list.clientHeight) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();
      list.scrollTop += event.deltaY;
    },
    { passive: false },
  );

  list.addEventListener(
    "touchstart",
    (event) => {
      lastTouchY = event.touches[0]?.clientY || 0;
    },
    { passive: true },
  );

  list.addEventListener(
    "touchmove",
    (event) => {
      if (list.scrollHeight <= list.clientHeight) {
        return;
      }

      const currentTouchY = event.touches[0]?.clientY || lastTouchY;
      const deltaY = lastTouchY - currentTouchY;

      event.preventDefault();
      event.stopPropagation();
      list.scrollTop += deltaY;
      lastTouchY = currentTouchY;
    },
    { passive: false },
  );
}

function updateCurrencyTrigger(trigger, country) {
  trigger.querySelector("[data-currency-flag]").src = country.flag;
  trigger.querySelector("[data-currency-code]").textContent = country.currency;
  trigger.setAttribute("title", `${country.name}, ${country.currency}`);
}

function parseAmount(value) {
  if (!value) {
    return 0;
  }

  const normalized = value
    .replace(/\s/g, "")
    .replace(/[^\d,.]/g, "")
    .replace(",", ".");
  const amount = Number.parseFloat(normalized);
  return Number.isFinite(amount) ? amount : 0;
}

async function fetchExchangeRate(fromCurrency, toCurrency) {
  if (fromCurrency === toCurrency) {
    return 1;
  }

  const cacheKey = `${fromCurrency}-${toCurrency}`;

  if (rateCache.has(cacheKey)) {
    return rateCache.get(cacheKey);
  }

  const response = await fetch(`${API_BASE}/rate/${fromCurrency}/${toCurrency}`);

  if (!response.ok) {
    throw new Error(`Rate is not available for ${cacheKey}`);
  }

  const data = await response.json();

  if (!data.rate || typeof data.rate !== "number") {
    throw new Error(`Invalid rate response for ${cacheKey}`);
  }

  rateCache.set(cacheKey, data.rate);
  return data.rate;
}

function getDeliveryEstimate(country, amount) {
  const fastCurrencies = new Set(["USD", "EUR", "GBP", "AED", "KZT", "TRY", "CNY"]);
  const standardCurrencies = new Set(["CAD", "AUD", "CHF", "JPY", "SGD", "HKD", "THB"]);

  if (amount >= 500000) {
    return "сегодня ≈ 15:00 мин.";
  }

  if (fastCurrencies.has(country.currency)) {
    return "сегодня ≈ 5:00 мин.";
  }

  if (standardCurrencies.has(country.currency)) {
    return "сегодня ≈ 10:00 мин.";
  }

  return "сегодня ≈ 20:00 мин.";
}
