# LANDING-BANKIR (Canonical Source)

> Единый source of truth для структуры, контента и продуктовой логики одностраничного сайта BANKIR.
> Любые изменения copy, иерархии секций, CTA, FAQ и ключевых claims сначала вносятся в этот файл, затем в `index.html`.

---

## META

**Product Name:** BANKIR  
**Product Type:** Fintech landing page / international card transfers  
**Repository:** https://github.com/cr8v-studio/bankir  
**Current Site:** https://cr8v-studio.github.io/bankir/  
**Social Preview Image:** https://cr8v-studio.github.io/bankir/assets/images/og-image.png

**Core Positioning:**  
BANKIR помогает отправлять международные переводы на банковские карты Visa, Mastercard и UnionPay через понятный сценарий выбора страны, суммы, курса и карты получателя.

**Primary Audience:**
- люди, которые поддерживают семью и друзей за границей
- пользователи, переезжающие или живущие между странами
- клиенты, которым нужно оплачивать услуги за рубежом
- пользователи, которым нужен быстрый перевод на карту без сложной банковской процедуры

**Core Message:**  
Отправляйте деньги по всему миру на карты Visa, Mastercard и UnionPay быстро, понятно и с итоговой суммой до подтверждения перевода.

---

## TOP NAVIGATION

Сценарии · Как это работает · Вопросы

---

## GLOBAL CTA

**Primary CTA Label:** Начать перевод  
**Primary CTA Link:** `#start`

**Secondary CTA Label:** Отправить деньги  
**Secondary CTA Link:** `#how-it-works`

**Footer CTA Label:** Начать перевод  
**Footer CTA Link:** `#start`

---

## SECTION 01 — HERO

**Purpose:**  
Мгновенно объяснить продукт: BANKIR — сервис международных переводов на карты. Hero должен одновременно дать ценность, доверие и интерактивную демонстрацию сценария.

**Headline:**  
Отправляйте деньги по всему миру

**Subheadline:**  
Переводы на Visa, Mastercard и UnionPay - быстро, понятно и без сложных банковских процедур.

**Proof Points:**
- Лицензия DMCC
- 190+ стран
- Без скрытых комиссий

**Hero Product UI:**  
Интерактивная карточка перевода с выбором страны отправителя, страны получателя, суммы, курса, суммы к получению и ожидаемого времени доставки.

**Default Transfer State:**
- Send Country: Россия
- Send Currency: RUB
- Send Amount: 10 000,00
- Receive Country: США
- Receive Currency: USD
- Rate Label: 74,89 RUB = 1 USD
- Rate Note: *Курс включает комиссию
- Delivery Label: сегодня ≈ 5:00 мин.

**Supported Payment Logos:**
- Visa
- UnionPay
- Mastercard

**Primary CTA:**  
Отправить деньги

**Primary CTA Link:**  
`#how-it-works`

**Notes:**
- Hero должен оставаться продуктовым, не рекламно-абстрактным.
- Основной визуальный акцент — карточка перевода, а не декоративная графика.
- Claims про скорость, страны, комиссию и лицензию должны оставаться проверяемыми.
- Если меняется домен сайта, нужно обновить абсолютные Open Graph URL в `index.html`.

---

## SECTION 02 — SCENARIOS

**Purpose:**  
Показать повседневные ситуации, в которых пользователю нужен BANKIR, и расширить восприятие продукта за пределы одного перевода.

**Eyebrow:**  
Сценарии

**Headline:**  
Расширьте свои возможности

**Intro Card Body:**  
BANKIR подходит для повседневных международных переводов — от помощи близким до оплаты услуг за рубежом.

**Visual System:**  
Балансовые карты с валютами THB, USD и RUB. Визуал должен поддерживать идею мультивалютности и международного использования.

**Scenario Cards:**

### Card 01 — Семья и друзья
**Title:** Семья и друзья  
**Text:** Поддерживайте близких за границей переводом прямо на банковскую карту.  
**Icon:** `assets/icons/diversity-3.svg`

### Card 02 — Переезд
**Title:** Переезд  
**Text:** Отправляйте средства себе или родственникам в другой стране.  
**Icon:** `assets/icons/flight.svg`

### Card 03 — Оплата услуг
**Title:** Оплата услуг  
**Text:** Личные расходы, сервисы и повседневные платежи за рубежом.  
**Icon:** `assets/icons/currency-ruble.svg`

### Card 04 — Переводы
**Title:** Переводы  
**Text:** Удобный способ отправить деньги получателю за пределами страны.  
**Icon:** `assets/icons/sync-alt.svg`

**Notes:**
- Сценарии должны быть короткими и человеческими.
- Не перегружать блок банковскими терминами.
- Сохранять карточки как повторяемый компонент.

---

## SECTION 03 — HOW IT WORKS

**Purpose:**  
Снять неопределенность перед первым переводом и показать процесс в три простых шага.

**Eyebrow:**  
Как это работает

**Headline:**  
Понятный перевод без банковской сложности

**Step Cards:**

### Step 01 — Выберите страну и сумму
**Title:** Выберите страну и сумму  
**Body:** Укажите направление и сумму перевода. Сервис покажет итоговые условия до отправки.

**Visual Details:**
- RUB → USD example
- 10 000,00 RUB
- 74,89 RUB = 1 USD
- 133,53 USD
- note: *Курс включает комиссию

### Step 02 — Введите данные карты
**Title:** Введите данные карты  
**Body:** Добавьте карту получателя: Visa, Mastercard или UnionPay — ничего лишнего.

**Visual Details:**
- Green card image: `assets/images/green-card.webp`
- Card networks should remain Visa, Mastercard, UnionPay.

### Step 03 — Подтвердите перевод
**Title:** Подтвердите перевод  
**Body:** Проверьте детали и отправьте. Зачисление обычно занимает несколько минут.

**Visual Details:**
- Expected delivery label: СЕГОДНЯ ≈ 5:00 МИН.
- Receive amount example: 133,53 USD
- CTA: Отправить деньги

**Notes:**
- В блоке должно быть ровно три шага, если продуктовый сценарий не меняется.
- Каждый шаг должен содержать и текст, и визуальное подтверждение действия.
- Формулировки должны оставаться простыми: пользователь должен понимать процесс без чтения инструкций.

---

## SECTION 04 — FAQ

**Purpose:**  
Закрыть базовые вопросы перед первым переводом: платежные системы, страны, время, комиссии и данные получателя.

**Headline:**  
Частые вопросы

**Body:**  
Короткие ответы на вопросы перед первым переводом.

**FAQ Items (accordion):**
- На какие карты можно отправить перевод?
- В какие страны доступны переводы?
- Сколько времени занимает перевод?
- Есть ли скрытые комиссии?
- Какие данные нужны для перевода?

**FAQ Content (Q/A):**

**Q:** На какие карты можно отправить перевод?  
**A:** На карты Visa, Mastercard и UnionPay в поддерживаемых странах.

**Q:** В какие страны доступны переводы?  
**A:** BANKIR поддерживает международные переводы на карты в 190+ стран.

**Q:** Сколько времени занимает перевод?  
**A:** Обычно несколько минут. Точное время зависит от страны, банка получателя и платежной системы.

**Q:** Есть ли скрытые комиссии?  
**A:** Нет. Итоговая сумма отображается до подтверждения перевода.

**Q:** Какие данные нужны для перевода?  
**A:** Достаточно выбрать страну, указать сумму и ввести данные карты получателя.

**Default Expanded Answer:**  
На карты Visa, Mastercard и UnionPay в поддерживаемых странах.

**Notes:**
- FAQ должен оставаться коротким и полезным.
- Не добавлять юридические обещания без проверки.
- Если меняются claims в hero, синхронизировать FAQ.

---

## SECTION 05 — FOOTER / LEGAL

**Purpose:**  
Дать юридический контекст, закрепить доверие и повторить финальный CTA.

**Legal Headline:**  
Юридическая информация

**Legal Copy:**  
KALE PAYMENTS FZCO Licence: DMCC–968763 · Reg: DMCC201880  
Unit 279, DMCC Business Centre, Level 8,  
Jewellery & Gemplex 2, Dubai, UAE

**Final CTA Headline:**  
Отправьте деньги за границу прямо сейчас

**Final CTA Body:**  
Прямые переводы на Visa, Mastercard и UnionPay. Итоговая сумма — до подтверждения.

**Final CTA Label:**  
Начать перевод

**Copyright:**  
© 2026 BANKIR · KALE PAYMENTS FZCO. Все права защищены.

**Notes:**
- Юридический текст менять только после проверки актуальности.
- Footer CTA должен вести к началу сценария, а не на внешнюю страницу.
- Не перегружать footer дополнительными колонками, пока сайт остается коротким лендингом.

---

## INTERACTION RULES

### Transfer Calculator

**Purpose:**  
Демонстрировать понятную механику перевода и дать пользователю ощущение контроля над суммой, валютой и направлением.

**Current Logic:**
- страны и валюты берутся из `js/main.js`
- флаги берутся из `assets/flags/`
- комиссия: `3%`
- текст комиссии: `*Курс включает комиссию`
- курсы загружаются через публичный API Frankfurter
- курсы кешируются в рамках текущей сессии страницы
- если курс недоступен, интерфейс показывает fallback-состояние

**Default Pair:**  
RUB → USD

**Required States:**
- country dropdown open/close
- country search
- selected send country
- selected receive country
- editable send amount
- calculated receive amount
- rate loading/fallback
- delivery label

### FAQ Accordion

**Purpose:**  
Давать быстрые ответы без перегруза страницы.

**Required Behavior:**
- один или несколько вопросов могут раскрываться в зависимости от текущей реализации
- кнопка должна обновлять `aria-expanded`
- open/close должен быть плавным и доступным
- reduced motion должен отключать лишнюю анимацию

---

## VISUAL SYSTEM

**Tone:**  
Современный fintech, спокойный, чистый, product-oriented.

**Visual Priorities:**
- точная типографическая иерархия
- ясная сетка
- чистые поверхности
- аккуратный motion
- минимум декоративного шума
- доверие через продуктовый UI, а не через маркетинговые обещания

**Core Components:**
- header brand
- nav pill
- primary button
- transfer card
- currency chip
- proof list item
- scenario card
- balance/account card
- step card
- FAQ item
- footer CTA

**Motion Rules:**
- использовать существующие motion tokens из `css/styles.css`
- учитывать `prefers-reduced-motion`
- не добавлять тяжелые hover/scroll effects без необходимости
- FAQ и controls должны ощущаться как одна интерактивная система

---

## OPEN GRAPH / SOCIAL PREVIEW

**Purpose:**  
Обеспечить корректное превью сайта при отправке ссылки в Telegram, WhatsApp, LinkedIn, Facebook и X/Twitter.

**Current Meta:**
- `og:type`: website
- `og:url`: https://cr8v-studio.github.io/bankir/
- `og:title`: BANKIR - переводы по всему миру
- `og:description`: Международные переводы на карты Visa, Mastercard и UnionPay.
- `og:image`: https://cr8v-studio.github.io/bankir/assets/images/og-image.png
- `og:image:secure_url`: https://cr8v-studio.github.io/bankir/assets/images/og-image.png
- `og:image:type`: image/png
- `og:image:width`: 1280
- `og:image:height`: 720
- `twitter:card`: summary_large_image

**Rules:**
- Для GitHub Pages всегда использовать абсолютный URL с `/bankir/`.
- После изменения preview проверять, что HTML и image URL возвращают `200`.
- В Telegram после изменения preview можно обновить кеш через `@WebpageBot`.

---

## CONTENT RULES

- Держать copy коротким, понятным и ориентированным на действие.
- Не перегружать страницу банковскими, юридическими и техническими деталями.
- Повторять главную ценность: перевод на карту, понятный курс, итоговая сумма до подтверждения.
- Не добавлять claims, которые нельзя быстро проверить.
- Сохранять единый тон: уверенно, спокойно, без агрессивного маркетинга.
- Все новые секции должны поддерживать основной сценарий перевода, а не отвлекать от него.

---

## CLAIM POLICY

- `190+ стран` требует проверки при изменении географии продукта.
- `Лицензия DMCC` и реквизиты KALE PAYMENTS FZCO требуют проверки перед публичным релизом.
- `Без скрытых комиссий` должно соответствовать фактической продуктовой логике.
- `Обычно несколько минут` должно оставаться мягкой формулировкой, без гарантии точного SLA.
- `3%` комиссии в коде должно синхронизироваться с copy, если меняется бизнес-логика.
- Не использовать формулировки вроде "мгновенно", "гарантированно", "самый выгодный" без юридической и продуктовой валидации.

---

## IMPLEMENTATION RULES

- Сначала обновлять этот файл при изменении структуры или текста лендинга.
- Затем синхронизировать `index.html`, `css/styles.css` и `js/main.js`.
- Сохранять проект без build step и без лишних фреймворков.
- Использовать существующие CSS-переменные, сетки и компоненты.
- Проверять desktop, tablet и mobile после визуальных изменений.
- После изменений коммитить, пушить в `main` и проверять GitHub Pages.
