# Cartes de Communication Neurodivergent · PWA

## 📁 Fichiers du pack

```
pwa/
├── index.html       ← App principale (tout-en-un)
├── manifest.json    ← Rend l'app installable
├── sw.js            ← Service worker (offline)
├── icon-192.png     ← Icône app 192×192
└── icon-512.png     ← Icône app 512×512
```

## 🚀 Déploiement Netlify (2 min)

1. Va sur [netlify.com](https://netlify.com)
2. **"Add new site" → "Deploy manually"**
3. Glisse le dossier `pwa/` dans la zone de drop
4. C'est en ligne ✅

→ URL exemple : `https://mes-cartes-neuro.netlify.app`

## 📱 Installation sur mobile

### Android (Chrome)
- Une bannière "Installer l'app" apparaît automatiquement
- Ou : menu ⋮ → "Ajouter à l'écran d'accueil"

### iPhone (Safari)
- Ouvrir l'URL dans Safari
- Partager → "Sur l'écran d'accueil"
- L'app s'installe comme une vraie app native

## 🌐 Intégration dans ton PDF Etsy

Dans ton PDF imprimable, ajoute un QR code pointant vers ton URL Netlify.
Les clients scannent → ouvrent la PWA → l'installent sur leur téléphone.

## ✨ Fonctionnalités

- ✅ Fonctionne **hors ligne** après 1ère visite
- ✅ Installable sur iOS et Android
- ✅ Bannière d'installation automatique (Android)
- ✅ 20 cartes en 6 catégories (FR + EN)
- ✅ Copier le message en 1 tap
- ✅ Navigation fluide avec transitions
- ✅ Design sage/beige/lavender
- ✅ Police Nunito (excellente lisibilité)

## 🔄 Mise à jour du contenu

Pour ajouter des cartes : modifie l'objet `CATEGORIES` dans `index.html`
et bumpe `CACHE_VERSION` dans `sw.js` (ex: `v1.1`) pour forcer le refresh.
