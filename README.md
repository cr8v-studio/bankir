# BANKIR

Static landing page for an international money transfer product. The page presents a fast card-to-card transfer flow for Visa, Mastercard and UnionPay with a clean fintech visual system.

[Live page](https://cr8v-studio.github.io/bankir/)

<p>
  <img src="assets/icons/logo-flow-transfer.svg" width="56" alt="BANKIR logo" />
  <img src="assets/icons/visa-logo.svg" width="48" alt="Visa" />
  <img src="assets/icons/mastercard.svg" width="48" alt="Mastercard" />
  <img src="assets/icons/unionpay.svg" width="48" alt="UnionPay" />
</p>

## Project Snapshot

| Product | Format | Stack | Deployment |
| --- | --- | --- | --- |
| International card transfers | Responsive landing page | HTML, CSS, JavaScript | GitHub Pages |

| Key proof | Visual cue | Message |
| --- | --- | --- |
| <img src="assets/icons/license-icon.svg" width="28" alt="" /> | License | DMCC licensed payment company |
| <img src="assets/icons/countries-icon.svg" width="28" alt="" /> | Coverage | Transfers to 190+ countries |
| <img src="assets/icons/fee-icon.svg" width="28" alt="" /> | Pricing | No hidden fees before confirmation |

## Visual System

| Element | Example | Role |
| --- | --- | --- |
| Brand color | `#068760` | Primary CTA, icons, accent blocks |
| Typography | Manrope | Modern product interface tone |
| Cards | Transfer fields, balance cards, FAQ | Reusable product UI modules |
| Motion | Hover, press, FAQ open states | Lightweight feedback without heavy scripts |

## Page Structure

```mermaid
flowchart LR
  A["Header"] --> B["Hero transfer card"]
  B --> C["Trust signals"]
  C --> D["Use cases"]
  D --> E["How it works"]
  E --> F["FAQ"]
  F --> G["Legal footer + CTA"]
```

## Transfer Flow

```mermaid
flowchart TD
  A["Choose sending currency"] --> B["Enter amount"]
  B --> C["Check exchange rate"]
  C --> D["Choose receiving currency"]
  D --> E["Review delivery time"]
  E --> F["Send money"]
```

## UI Examples

| Transfer card | Use-case icons | Global visual |
| --- | --- | --- |
| <img src="assets/flags/RU.svg" width="28" alt="RUB" /> RUB to <img src="assets/flags/US.svg" width="28" alt="USD" /> USD | <img src="assets/icons/diversity-3.svg" width="28" alt="" /> Family <br><img src="assets/icons/flight.svg" width="28" alt="" /> Relocation <br><img src="assets/icons/currency-ruble.svg" width="28" alt="" /> Services | <img src="assets/images/map.svg" width="220" alt="World map visual" /> |

## Files

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

## Local Preview

```bash
python3 -m http.server 4173
```

Open:

```text
http://127.0.0.1:4173/
```

## Deployment

The project is deployed by GitHub Actions to GitHub Pages on every push to `main`.

```mermaid
flowchart LR
  A["Push to main"] --> B["GitHub Actions"]
  B --> C["Upload static artifact"]
  C --> D["Deploy to GitHub Pages"]
  D --> E["cr8v-studio.github.io/bankir"]
```
