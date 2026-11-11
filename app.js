/**
 * H12 Digital — Boutique formations premium
 * Remplace les stripeUrl par tes vrais Payment Links Stripe (Dashboard → Payment Links)
 */
const PRODUCTS = [
  {
    id: "biz-autonome",
    name: "Business Digital Autonome",
    tagline: "De zéro à un système qui vend tout seul",
    price: 97,
    type: "one_time",
    badge: "Best-seller",
    icon: "fa-rocket",
    color: "gold",
    // ← COLLE ICI ton Payment Link Stripe (ex: https://buy.stripe.com/xxxx)
    stripeUrl: "https://buy.stripe.com/test_REPLACE_ME_BIZ",
    modules: [
      {
        title: "Module 1 — Positionnement & offre irrésistible",
        items: [
          "Choisir une niche rentable sans être expert",
          "Framework de positionnement premium",
          "Créer une offre qui se vend avant même d’être finie",
          "Pricing psychologique pour maximiser la conversion"
        ]
      },
      {
        title: "Module 2 — Produits digitaux de niveau pro",
        items: [
          "Structure d’une formation qui justifie le prix",
          "Templates de modules, checklists et livrables",
          "Packaging : comment présenter un produit « cher »",
          "Outils gratuits / payants pour un rendu cinéma"
        ]
      },
      {
        title: "Module 3 — Tunnel de vente & Stripe",
        items: [
          "Page de vente haute conversion (structure exacte)",
          "Intégration Payment Links Stripe en 15 min",
          "Emails de bienvenue et de livraison automatiques",
          "Upsells et order bumps sans friction"
        ]
      },
      {
        title: "Module 4 — Abonnements & revenus récurrents",
        items: [
          "Modèle d’abonnement qui se renouvelle tout seul",
          "Contenu « en boucle » : comment ne jamais manquer de matière",
          "Réduire le churn et augmenter la LTV",
          "Tableau de bord simple pour suivre les revenus"
        ]
      },
      {
        title: "Module 5 — Autonomie & scale",
        items: [
          "Automatisations (email, livraison, support)",
          "Déléguer sans perdre la qualité",
          "Système d’amélioration continue du catalogue",
          "Plan 90 jours pour passer en mode « business qui tourne »"
        ]
      }
    ],
    includes: [
      "Accès à vie + mises à jour",
      "Templates Notion & Canva",
      "Scripts de vente prêts à copier",
      "Checklist de lancement"
    ]
  },
  {
    id: "produits-premium",
    name: "Produits Digitaux Premium",
    tagline: "Créer des formations qui font dire « ça vaut le prix »",
    price: 147,
    type: "one_time",
    badge: "Premium",
    icon: "fa-gem",
    color: "accent",
    stripeUrl: "https://buy.stripe.com/test_REPLACE_ME_PREMIUM",
    modules: [
      {
        title: "Module 1 — Design & perception de valeur",
        items: [
          "Typographie, contraste, hiérarchie visuelle",
          "Mise en page de modules type « masterclass »",
          "Assets : covers, thumbnails, PDFs soignés",
          "Erreurs qui font « amateur » (et comment les éviter)"
        ]
      },
      {
        title: "Module 2 — Contenu pédagogique d’élite",
        items: [
          "Architecture d’un module (objectif → pratique → livrable)",
          "Exercices qui forcent l’application",
          "Scripts vidéo / audio efficaces",
          "Ressources téléchargeables qui impressionnent"
        ]
      },
      {
        title: "Module 3 — Packaging & offre groupée",
        items: [
          "Créer un « pack complet » à fort panier moyen",
          "Bonus qui augmentent la valeur perçue",
          "Garantie et réduction du risque client",
          "Page produit type e-commerce premium"
        ]
      },
      {
        title: "Module 4 — Livraison & expérience post-achat",
        items: [
          "Espace membre simple et élégant",
          "Onboarding des 7 premiers jours",
          "Support sans y passer des heures",
          "Collecte d’avis et de preuves sociales"
        ]
      }
    ],
    includes: [
      "Bibliothèque de templates UI",
      "Exemples de formations complètes",
      "Guide de style H12",
      "Accès à vie"
    ]
  },
  {
    id: "systeme-abonnement",
    name: "Système Abonnement & MRR",
    tagline: "Construire des revenus qui reviennent chaque mois",
    price: 79,
    type: "one_time",
    badge: null,
    icon: "fa-rotate",
    color: "emerald",
    stripeUrl: "https://buy.stripe.com/test_REPLACE_ME_MRR",
    modules: [
      {
        title: "Module 1 — Architecture de l’abonnement",
        items: [
          "Choisir le bon modèle (accès, contenu, communauté)",
          "Tarification mensuelle vs annuelle",
          "Ce qu’il faut livrer chaque mois sans s’épuiser"
        ]
      },
      {
        title: "Module 2 — Stripe Billing en pratique",
        items: [
          "Créer un produit récurrent et un Payment Link",
          "Portail client pour annulation / upgrade",
          "Webhooks et automatisations basiques"
        ]
      },
      {
        title: "Module 3 — Rétention & croissance",
        items: [
          "Onboarding qui réduit le churn dès J1",
          "Contenu « en série » qui fidélise",
          "Upsells vers des offres one-shot"
        ]
      }
    ],
    includes: [
      "Templates d’emails de rétention",
      "Calendrier éditorial 12 semaines",
      "Accès à vie"
    ]
  },
  {
    id: "pack-complet",
    name: "Pack Complet H12",
    tagline: "Les 3 formations + bonus exclusifs",
    price: 247,
    type: "one_time",
    badge: "Économie 76€",
    icon: "fa-box-open",
    color: "gold",
    stripeUrl: "https://buy.stripe.com/test_REPLACE_ME_PACK",
    modules: [
      {
        title: "Tout le catalogue",
        items: [
          "Business Digital Autonome (97€)",
          "Produits Digitaux Premium (147€)",
          "Système Abonnement & MRR (79€)",
          "Bonus : templates pro + scripts de lancement"
        ]
      }
    ],
    includes: [
      "Accès à vie à tout",
      "Mises à jour futures des 3 formations",
      "Priorité support 30 jours"
    ]
  }
];

// Abonnement — remplacer par ton vrai Payment Link récurrent
const SUBSCRIPTION = {
  name: "Académie Pro",
  price: 29,
  stripeUrl: "https://buy.stripe.com/test_REPLACE_ME_SUB"
};

const CART_KEY = "h12_cart_v1";

function loadCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY) || "[]");
  } catch {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartUI();
}

function addToCart(productId) {
  const cart = loadCart();
  if (!cart.includes(productId)) {
    cart.push(productId);
    saveCart(cart);
  }
  openCart();
}

function removeFromCart(productId) {
  saveCart(loadCart().filter((id) => id !== productId));
}

function updateCartUI() {
  const cart = loadCart();
  const countEl = document.getElementById("cart-count");
  const itemsEl = document.getElementById("cart-items");
  const totalEl = document.getElementById("cart-total");
  const checkoutBtn = document.getElementById("cart-checkout");

  if (cart.length === 0) {
    countEl.classList.add("hidden");
    itemsEl.innerHTML = `<p class="text-sm text-zinc-500 text-center py-12">Ton panier est vide.</p>`;
    totalEl.textContent = "0€";
    checkoutBtn.disabled = true;
    return;
  }

  countEl.textContent = String(cart.length);
  countEl.classList.remove("hidden");

  let total = 0;
  itemsEl.innerHTML = cart
    .map((id) => {
      const p = PRODUCTS.find((x) => x.id === id);
      if (!p) return "";
      total += p.price;
      return `
      <div class="flex gap-4 items-start border border-white/8 rounded-xl p-3">
        <div class="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gold-400 shrink-0">
          <i class="fa-solid ${p.icon}"></i>
        </div>
        <div class="flex-1 min-w-0">
          <div class="font-medium text-sm truncate">${p.name}</div>
          <div class="text-gold-400 text-sm font-semibold mt-0.5">${p.price}€</div>
        </div>
        <button data-remove="${p.id}" class="text-zinc-500 hover:text-white p-1" aria-label="Retirer">
          <i class="fa-solid fa-trash-can text-xs"></i>
        </button>
      </div>`;
    })
    .join("");

  totalEl.textContent = total + "€";
  checkoutBtn.disabled = false;

  itemsEl.querySelectorAll("[data-remove]").forEach((btn) => {
    btn.addEventListener("click", () => removeFromCart(btn.dataset.remove));
  });
}

function openCart() {
  document.getElementById("cart-panel").classList.add("open");
  const overlay = document.getElementById("cart-overlay");
  overlay.classList.remove("pointer-events-none", "opacity-0");
  overlay.classList.add("opacity-100");
}

function closeCart() {
  document.getElementById("cart-panel").classList.remove("open");
  const overlay = document.getElementById("cart-overlay");
  overlay.classList.add("pointer-events-none", "opacity-0");
  overlay.classList.remove("opacity-100");
}

function renderProducts() {
  const grid = document.getElementById("products-grid");
  grid.innerHTML = PRODUCTS.map((p) => {
    const badge = p.badge
      ? `<span class="absolute top-4 right-4 text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-gold-500/20 text-gold-400 border border-gold-500/30">${p.badge}</span>`
      : "";
    return `
    <article class="card-glow relative rounded-2xl border border-white/8 bg-ink-900 overflow-hidden flex flex-col">
      ${badge}
      <div class="p-6 md:p-7 flex-1 flex flex-col">
        <div class="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center text-gold-400 mb-4">
          <i class="fa-solid ${p.icon}"></i>
        </div>
        <h3 class="text-xl font-semibold tracking-tight mb-1">${p.name}</h3>
        <p class="text-sm text-zinc-400 mb-5">${p.tagline}</p>
        <ul class="space-y-1.5 text-sm text-zinc-400 mb-6 flex-1">
          ${p.includes
            .slice(0, 3)
            .map(
              (i) =>
                `<li class="flex gap-2"><i class="fa-solid fa-check text-gold-500/80 text-xs mt-1"></i>${i}</li>`
            )
            .join("")}
        </ul>
        <div class="flex items-end justify-between gap-3 pt-2 border-t border-white/6">
          <div>
            <span class="text-2xl font-bold">${p.price}€</span>
            <span class="text-xs text-zinc-500 block">paiement unique</span>
          </div>
          <div class="flex gap-2">
            <button data-detail="${p.id}" class="px-3 py-2 rounded-full text-sm border border-white/12 hover:bg-white/5 transition">Détails</button>
            <button data-add="${p.id}" class="btn-gold px-4 py-2 rounded-full text-sm">Ajouter</button>
          </div>
        </div>
      </div>
    </article>`;
  }).join("");

  grid.querySelectorAll("[data-add]").forEach((btn) => {
    btn.addEventListener("click", () => addToCart(btn.dataset.add));
  });
  grid.querySelectorAll("[data-detail]").forEach((btn) => {
    btn.addEventListener("click", () => openModal(btn.dataset.detail));
  });
}

function openModal(productId) {
  const p = PRODUCTS.find((x) => x.id === productId);
  if (!p) return;
  const body = document.getElementById("modal-body");
  body.innerHTML = `
    <div class="flex items-start gap-4 mb-6">
      <div class="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-gold-400 shrink-0">
        <i class="fa-solid ${p.icon} text-lg"></i>
      </div>
      <div>
        <h2 class="text-2xl font-semibold tracking-tight">${p.name}</h2>
        <p class="text-zinc-400 text-sm mt-1">${p.tagline}</p>
      </div>
    </div>
    <div class="flex items-baseline gap-2 mb-6">
      <span class="text-3xl font-bold">${p.price}€</span>
      <span class="text-sm text-zinc-500">paiement unique · accès à vie</span>
    </div>
    <div class="space-y-5 mb-8">
      ${p.modules
        .map(
          (m) => `
        <div class="module-item pl-4">
          <h4 class="font-medium text-sm mb-2">${m.title}</h4>
          <ul class="space-y-1.5 text-sm text-zinc-400">
            ${m.items.map((i) => `<li class="flex gap-2"><span class="text-gold-500/60">–</span>${i}</li>`).join("")}
          </ul>
        </div>`
        )
        .join("")}
    </div>
    <div class="rounded-xl bg-white/[0.03] border border-white/8 p-4 mb-6">
      <p class="text-xs font-medium text-zinc-300 mb-2">Inclus</p>
      <ul class="grid sm:grid-cols-2 gap-1.5 text-sm text-zinc-400">
        ${p.includes.map((i) => `<li class="flex gap-2"><i class="fa-solid fa-check text-gold-500 text-xs mt-1"></i>${i}</li>`).join("")}
      </ul>
    </div>
    <div class="flex flex-col sm:flex-row gap-3">
      <a href="${p.stripeUrl}" target="_blank" rel="noopener"
         class="btn-gold flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-full text-sm">
        Acheter maintenant <i class="fa-solid fa-lock text-xs"></i>
      </a>
      <button data-add-modal="${p.id}" class="flex-1 py-3 rounded-full text-sm border border-white/15 hover:bg-white/5 transition">
        Ajouter au panier
      </button>
    </div>
    <p class="text-center text-xs text-zinc-600 mt-4">Paiement sécurisé Stripe · Accès immédiat après achat</p>
  `;
  document.getElementById("modal").classList.remove("hidden");
  document.getElementById("modal").classList.add("flex");
  body.querySelector("[data-add-modal]")?.addEventListener("click", () => {
    addToCart(p.id);
    closeModal();
  });
}

function closeModal() {
  document.getElementById("modal").classList.add("hidden");
  document.getElementById("modal").classList.remove("flex");
}

function checkoutCart() {
  const cart = loadCart();
  if (cart.length === 0) return;
  if (cart.length === 1) {
    const p = PRODUCTS.find((x) => x.id === cart[0]);
    if (p?.stripeUrl) window.open(p.stripeUrl, "_blank");
    return;
  }
  const first = PRODUCTS.find((x) => x.id === cart[0]);
  if (first?.stripeUrl) {
    window.open(first.stripeUrl, "_blank");
    alert(
      "Plusieurs produits dans le panier : chaque formation s’achète via son propre lien Stripe sécurisé. Le premier vient de s’ouvrir — tu peux payer les autres depuis les fiches produits."
    );
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  updateCartUI();

  document.getElementById("btn-sub").href = SUBSCRIPTION.stripeUrl;

  document.getElementById("cart-btn").addEventListener("click", openCart);
  document.getElementById("cart-close").addEventListener("click", closeCart);
  document.getElementById("cart-overlay").addEventListener("click", closeCart);
  document.getElementById("cart-checkout").addEventListener("click", checkoutCart);
  document.getElementById("modal-close").addEventListener("click", closeModal);
  document.getElementById("modal-backdrop").addEventListener("click", closeModal);
});
