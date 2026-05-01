# BANKIR

Статическая лендинговая страница для fintech-продукта международных переводов. Проект показывает быстрый сценарий перевода с карты на карту через Visa, Mastercard и UnionPay: от выбора валюты до подтверждения суммы и времени доставки.

[Открыть сайт](https://cr8v-studio.github.io/bankir/)

<p>
  <img src="assets/icons/logo-flow-transfer.svg" width="56" alt="Логотип BANKIR" />
  <img src="assets/icons/visa-logo.svg" width="48" alt="Visa" />
  <img src="assets/icons/mastercard.svg" width="48" alt="Mastercard" />
  <img src="assets/icons/unionpay.svg" width="48" alt="UnionPay" />
</p>

## Кратко о проекте

| Продукт | Формат | Технологии | Деплой |
| --- | --- | --- | --- |
| Международные переводы на карты | Адаптивный лендинг | HTML, CSS, JavaScript | GitHub Pages |

| Доверие | Визуальный маркер | Смысл |
| --- | --- | --- |
| <img src="assets/icons/license-icon.svg" width="28" alt="" /> | Лицензия | DMCC-лицензия платежной компании |
| <img src="assets/icons/countries-icon.svg" width="28" alt="" /> | География | Переводы в 190+ стран |
| <img src="assets/icons/fee-icon.svg" width="28" alt="" /> | Прозрачность | Итоговая сумма видна до подтверждения |

## Визуальная система

| Элемент | Пример | Роль в интерфейсе |
| --- | --- | --- |
| Основной цвет | `#068760` | CTA, иконки, акцентные блоки |
| Типографика | Manrope | Современный продуктовый fintech-тон |
| Карточки | Поля перевода, баланс, FAQ | Повторяемые UI-модули |
| Motion | Hover, нажатие, раскрытие FAQ | Легкая обратная связь без тяжелых библиотек |

## Структура страницы

```mermaid
flowchart LR
  A["Шапка"] --> B["Hero с карточкой перевода"]
  B --> C["Доверительные маркеры"]
  C --> D["Сценарии использования"]
  D --> E["Как это работает"]
  E --> F["FAQ"]
  F --> G["Юридический футер + CTA"]
```

## Пользовательский сценарий

```mermaid
flowchart TD
  A["Выбор валюты отправки"] --> B["Ввод суммы"]
  B --> C["Проверка курса"]
  C --> D["Выбор валюты получения"]
  D --> E["Проверка времени доставки"]
  E --> F["Отправка денег"]
```

## Примеры визуала

| Карточка перевода | Сценарии | Глобальный охват |
| --- | --- | --- |
| <img src="assets/flags/RU.svg" width="28" alt="RUB" /> RUB → <img src="assets/flags/US.svg" width="28" alt="USD" /> USD | <img src="assets/icons/diversity-3.svg" width="28" alt="" /> Семья и друзья <br><img src="assets/icons/flight.svg" width="28" alt="" /> Переезд <br><img src="assets/icons/currency-ruble.svg" width="28" alt="" /> Оплата услуг | <img src="assets/images/map.svg" width="220" alt="Карта мира" /> |

## Архитектура файлов

```text
.
|-- index.html
|-- css/styles.css
|-- js/main.js
|-- assets/
|   |-- flags/
|   |-- icons/
|   `-- images/
`-- .github/workflows/pages.yml
```

## Локальный просмотр

```bash
python3 -m http.server 4173
```

Открыть в браузере:

```text
http://127.0.0.1:4173/
```

## Публикация

Проект автоматически публикуется через GitHub Actions на GitHub Pages при каждом push в `main`.

```mermaid
flowchart LR
  A["Push в main"] --> B["GitHub Actions"]
  B --> C["Сборка статического артефакта"]
  C --> D["Деплой в GitHub Pages"]
  D --> E["cr8v-studio.github.io/bankir"]
```
