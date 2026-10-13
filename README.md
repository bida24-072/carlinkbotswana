# 🚗 CarLink Botswana

Botswana's trusted car marketplace. Buy quality local and imported vehicles, or sell yours fast.

![Status](https://img.shields.io/badge/Status-Live-success)
![Made in Botswana](https://img.shields.io/badge/Made%20in-Botswana%20🇧🇼-blue)

---

## ✨ Features

- 🎬 **Auto hero slideshow** — cinematic car showroom background
- 🔍 **AI-powered search** — describe what you want in plain English ("white Toyota bakkie 2020")
- 🗂️ **Category filters** — Bakkies, SUVs, Sedans, Hatchbacks
- 💰 **Price filter** — Under P100K to Under P1M
- ❤️ **Favourites** — save cars to wishlist (persists)
- 📊 **25+ cars** — Toyota, Nissan, Honda, Mazda, VW, Ford, Isuzu, Hyundai, Kia, Mercedes, BMW
- 🏷️ **Full car specs** — mileage, fuel, transmission, colour, engine, owners, location
- 📱 **WhatsApp enquiry** — one tap to message about any car
- 📤 **Share car details** — copy to clipboard
- 🚗 **Sell your car** — public form for users to list vehicles
- 💾 **Persistent** — your favourites and listings survive refresh

---

## 📁 Files

---

## 🚀 Deploy to GitHub Pages

1. Create a repo: `carlink-botswana`
2. Upload all files to the root
3. **Settings → Pages → main branch → Save**
4. Live at `https://YOUR-USERNAME.github.io/carlink-botswana/`

---

## 🛠️ Customisation

### Change the WhatsApp number
Search all files for `26771234567` — replace with the real number.

### Add or edit cars
In `main.js`, find the `CARS` array. Each car has:
- id, make, model, year, price, mileage, fuel, transmission, color, location, type, body, engine, owners, image, description

### Change hero slideshow images
In `main.js`, find `HERO_SLIDES` — replace URLs with your own car photos.

### Change colors
Edit CSS variables at the top of `style.css`:
```css
:root {
    --blue: #2E7CF6;
    --bg: #08090B;
    ...
}
---

## ✅ Deploy In 2 Minutes

1. Create folder `carlink-botswana/`
2. Save all **5 files** inside
3. Open `index.html` — test:
   - Slideshow rotates
   - Search works ("white Toyota")
   - Filters work
   - Click a car → modal opens
   - Heart icon adds to wishlist
   - "Sell Your Car" form works
4. Create GitHub repo `carlink-botswana`
5. Upload all files
6. **Settings → Pages → Save**
7. Live at `https://YOUR-USERNAME.github.io/carlink-botswana/`

**Copy, save, deploy. 🇧🇼**
