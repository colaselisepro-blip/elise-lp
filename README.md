# Elise Colas — Landing Page

Site one-page pour Elise Colas, Head of Sales pour infopreneurs francophones.

---

## Lancer le site en local

### Prérequis
- Node.js installé (si ce n'est pas le cas : va sur [nodejs.org](https://nodejs.org) et télécharge la version LTS)
- pnpm installé (commande : `npm install -g pnpm`)

### Démarrer

```bash
cd elise-lp
pnpm dev
```

Puis ouvre [http://localhost:3000](http://localhost:3000) dans ton navigateur.

---

## Modifier le contenu (textes, liens, prix)

**Tout le texte de la page est centralisé dans un seul fichier :**

```
content.ts   ← ouvre ce fichier pour modifier n'importe quel texte
```

Tu peux modifier :
- Les titres, sous-titres, descriptions de chaque section
- Le lien Calendly (variable `CALENDLY_URL`)
- Ton Instagram, LinkedIn, email (variables en haut du fichier)
- Les offres, prix, bullet points
- Les métriques résultats

**Tu n'as pas besoin de toucher aux fichiers dans `components/` pour changer du texte.**

---

## Remplacer le lien Calendly

Dans `content.ts`, ligne 5 :

```ts
export const CALENDLY_URL = "https://calendly.com/colas-elise-pro/30min";
```

Remplace l'URL par celle de ton événement Calendly.

---

## Remplacer ta photo

Deux endroits utilisent ta photo :
- **Section Hero** (droite de l'écran)
- **Section Qui je suis**

Remplace le fichier :

```
public/placeholder-elise.png
```

Par ta propre photo en la renommant `placeholder-elise.png` (format recommandé : 4:5, au moins 800x1000px, JPG ou PNG).

---

## Ajouter tes vrais liens Instagram et LinkedIn

Dans `content.ts` :

```ts
export const INSTAGRAM_URL = "https://instagram.com/elise.sales.signature";
export const LINKEDIN_URL  = "https://linkedin.com/in/elise-colas";   // ← à mettre à jour
export const EMAIL         = "contact@elisecolas.com";                  // ← à mettre à jour
```

---

## Déployer sur Vercel (recommandé)

### Étape 1 — Mettre le projet sur GitHub

1. Crée un compte sur [github.com](https://github.com) si tu n'en as pas
2. Crée un nouveau repo (bouton "New repository")
3. Dans ton terminal, dans le dossier `elise-lp` :

```bash
git remote add origin https://github.com/TON-USERNAME/elise-lp.git
git push -u origin main
```

### Étape 2 — Connecter Vercel

1. Va sur [vercel.com](https://vercel.com) et crée un compte (gratuit)
2. Clique "Add New Project"
3. Connecte ton compte GitHub, sélectionne le repo `elise-lp`
4. Vercel détecte automatiquement Next.js — clique "Deploy"
5. En 1-2 minutes, ton site est en ligne avec une URL `*.vercel.app`

### Étape 3 — Ajouter ton domaine custom

1. Achète ton domaine sur [Namecheap](https://namecheap.com) ou [OVH](https://ovh.com) (ex: `elisecolas.com`)
2. Dans Vercel > Settings > Domains, ajoute ton domaine
3. Vercel te donnera les DNS à configurer chez ton registraire :
   - Un enregistrement **A** : `76.76.21.21`
   - Un enregistrement **CNAME** : `cname.vercel-dns.com`
4. Attends 5-30 min que les DNS se propagent

---

## Configurer Plausible Analytics

Plausible est l'outil d'analytics GDPR-friendly déjà intégré dans le site.

1. Crée un compte sur [plausible.io](https://plausible.io)
2. Ajoute ton domaine (ex: `elisecolas.com`)
3. Dans `app/layout.tsx`, le domaine est déjà configuré sur `elisecolas.com` — mets à jour si besoin

---

## Structure des fichiers

```
elise-lp/
├── app/
│   ├── layout.tsx       ← SEO, analytics, fonts
│   ├── page.tsx         ← assemblage des sections
│   └── globals.css      ← palette de couleurs, typographie
├── components/
│   ├── Hero.tsx
│   ├── FilterIcp.tsx
│   ├── Reframe.tsx
│   ├── Approach.tsx
│   ├── Results.tsx
│   ├── Offers.tsx
│   ├── About.tsx
│   ├── Faq.tsx
│   ├── CtaCalendly.tsx
│   ├── Footer.tsx
│   └── ui/
│       ├── HighlightBox.tsx   ← box surlignée or avec rotation
│       └── SectionHeading.tsx ← titre de section réutilisable
├── content.ts           ← TOUT LE TEXTE DE LA PAGE EST ICI
└── public/
    ├── placeholder-elise.png  ← remplace par ta photo
    └── og-image.png           ← image de partage réseaux sociaux
```

---

## Build de production

```bash
pnpm build
pnpm start
```

Le build doit passer sans erreur avant de déployer.
