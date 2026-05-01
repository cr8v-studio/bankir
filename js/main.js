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
