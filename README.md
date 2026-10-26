# Blertah Lashes

English-language React + Vite website. Appointments are arranged exclusively via Instagram DM.

## Run in VS Code

Open `blertah-lashes.code-workspace` and run:

```sh
npm install
npm run dev
```

Production build:

```sh
npm run build
npm run preview
```

## Structure

- `src/App.jsx`: main sections and FAQ interaction.
- `src/components/Header.jsx`: desktop and mobile navigation.
- `src/components/Booking.jsx`: Instagram DM appointment section.
- `src/components/Studio.jsx`: studio photographs, address, and OpenStreetMap.
- `src/components/PriceMenu.jsx`: full service menu and prices sourced from Instagram.
- `src/components/InstagramLink.jsx`: shared profile link.
- `src/data/content.js`: profile URLs, services, and FAQs.
- `src/styles.css`: responsive visual styles.
- `public/images/`: local Instagram photographs and source list.
- `.vscode/`: editor settings and run/build tasks.

## Sources and content

All photographs were sourced from the publicly rendered @blertah.lashes Instagram profile at the request of the user. Original post links are recorded in `public/images/SOURCES.md`. No stock photographs remain. Reel photographs are original cover frames. A portfolio photo does not establish which lash technique was applied.

All 10 service prices were transcribed from the Instagram Prices highlight on 2026-10-25. The original image is stored in `public/images/instagram-price-list.jpg`; the menu links to the original highlight.

Address supplied by the user: Rruga Haxhi Zeka 98, Vushtrri, Kosovo. The embedded OpenStreetMap shows the verified Haxhi Zeka street area, with no unverified studio pin. Google Maps links search the supplied address. No opening hours or reviews are invented.

DM links use `https://ig.me/m/blertah.lashes`. Instagram may ask visitors to sign in or open its app. Appointments are confirmed personally in DM. No backend or API keys are required.

Photographs are served locally. Google Fonts and OpenStreetMap require an internet connection.

