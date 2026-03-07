# MesRestos — Guide d'installation Capacitor iOS

## Prérequis
- Node.js + npm installés
- Xcode installé (avec Command Line Tools)
- Compte Apple Developer actif
- CocoaPods : `sudo gem install cocoapods`

---

## 1. Installation

```bash
# Décompresser le projet puis entrer dans le dossier
cd mesrestos

# Installer les dépendances npm
npm install
```

---

## 2. Ajouter la plateforme iOS

```bash
npm install -D typescript
npx cap add ios
```

---

## 3. Synchroniser les fichiers web → iOS

```bash
npx cap sync ios
```

> À relancer à chaque modification du HTML/JS.

---

## 4. Permissions iOS (Info.plist)

Ouvrir `ios/App/App/Info.plist` dans Xcode et ajouter ces clés :

| Clé | Valeur |
|-----|--------|
| `NSCameraUsageDescription` | Permet de scanner la carte de visite du restaurant |
| `NSPhotoLibraryUsageDescription` | Permet de choisir une photo depuis la bibliothèque |
| `NSLocationWhenInUseUsageDescription` | Permet d'enregistrer la localisation du restaurant |

**Via Xcode** : Project → App → Info → + pour chaque clé ci-dessus.

---

## 5. Configuration du projet Xcode

```bash
npx cap open ios
```

Dans Xcode :
1. Sélectionner **App** dans le navigateur
2. **Signing & Capabilities** → choisir ton équipe (ton Apple ID)
3. Vérifier le **Bundle Identifier** : `com.michel.garlandat.mesrestos`

---

## 6. Lancer sur simulateur ou iPhone

```bash
# Via Xcode : ▶ Run (Cmd+R)
# Ou en ligne de commande :
npx cap run ios
```

---

## 7. Workflow de développement

```bash
# Modifier www/index.html
# Puis :
npx cap sync ios
# Et relancer depuis Xcode
```

---

## Plugins Capacitor utilisés

| Plugin | Usage |
|--------|-------|
| `@capacitor/camera` | Scan / photo de la carte de visite |
| `@capacitor/geolocation` | Localisation GPS du restaurant |
| `@capacitor/preferences` | Stockage persistant (remplace localStorage) |
| `@capacitor/haptics` | Retour haptique sur les actions |
| `@capacitor/status-bar` | Style de la barre de statut iOS |

---

## Notes importantes

- Le fichier `www/index.html` détecte automatiquement s'il tourne sur **natif iOS** ou **navigateur web** et adapte les appels de plugins en conséquence.
- En navigateur : caméra = `<input file>`, géoloc = `navigator.geolocation`, stockage = `localStorage`.
- Sur iOS natif : caméra = `Camera.getPhoto()`, géoloc = `Geolocation.getCurrentPosition()`, stockage = `Preferences`.
- Les photos de cartes de visite sont stockées en **base64** dans les préférences.

---

## Structure du projet

```
mesrestos/
├── www/
│   └── index.html          ← L'application complète
├── ios/                    ← Généré par `npx cap add ios`
├── package.json
├── capacitor.config.ts
└── README.md
```
