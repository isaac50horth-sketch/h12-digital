# H12 Digital — Boutique formations premium

Site vitrine + boutique pour formations digitales et abonnement récurrent.
Design dark premium, panier localStorage, liens Stripe Payment Links.

## Lancer en local

Ouvre `index.html` dans un navigateur, ou :

```bash
npx serve .
```

## Brancher les vrais paiements Stripe (mode live)

1. Va sur [Stripe Dashboard → Payment Links](https://dashboard.stripe.com/payment-links)
2. Crée un **Payment Link** pour chaque produit (montant en EUR, one-time) :
   - Business Digital Autonome → **97 €**
   - Produits Digitaux Premium → **147 €**
   - Système Abonnement & MRR → **79 €**
   - Pack Complet H12 → **247 €**
3. Crée un Payment Link **récurrent** pour l’abonnement : **29 € / mois**
4. Dans `app.js`, remplace chaque `stripeUrl` :
   - `test_REPLACE_ME_BIZ`
   - `test_REPLACE_ME_PREMIUM`
   - `test_REPLACE_ME_MRR`
   - `test_REPLACE_ME_PACK`
   - `test_REPLACE_ME_SUB` (abonnement)

Les paiements arrivent directement sur ton compte Stripe **H12**.

## Publier (GitHub Pages)

Settings → Pages → Source : Deploy from branch → `main` → `/` (root)

URL typique : `https://isaac50horth-sketch.github.io/h12-digital/`

## Netlify

Les déploiements Netlify sont bloqués (crédits épuisés). Utilise GitHub Pages en attendant.
