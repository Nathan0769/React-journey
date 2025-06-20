# React Journey — Workshop composants React

Une application Next.js avec Tailwind CSS qui liste des concepts React classés par catégorie. Elle sert d’exemple pratique pour comprendre le routage, le filtrage via URL, et la composition de composants UI modulaires.

---

## 📝 Description

- Application décomposée en 3 étapes : création de la structure et header, ajout d’un menu latéral, affichage dynamique de cartes
- Header avec logo React SVG intégré et boutons interactifs stylisés avec `cva`
- Menu latéral pour filtrer les concepts par catégorie via les paramètres d’URL (`SearchParams`)
- Composants cartes affichant les données récupérées, avec boutons d’action et lien vers la doc React
- Utilisation de Next.js App Router pour gérer la navigation et le rendu côté serveur/client
- Stylisation complète avec Tailwind CSS, facilitant un design rapide et responsive
- Intégration d’icônes via `lucide-react` (`ShoppingBasket`, `User`, `BookOpenText`, `PlusCircle`)

---

## 🛠️ Techniques utilisées

- Next.js App Router : navigation déclarative moderne et layout imbriqués
- Tailwind CSS : classes utilitaires pour styling rapide sans CSS complexe
- URLSearchParams : gestion fine des filtres via l’URL pour un état partageable
- Intersection Observer API : utilisée pour du lazy loading ou des animations conditionnelles
- class-variance-authority (`cva`) : gestion propre et déclarative des variantes de composants UI
- Intégration directe de composants SVG React pour un rendu rapide du logo

---

## 🧰 Technologies et bibliothèques notables

- React — bibliothèque UI déclarative
- Next.js — framework React full-stack
- Tailwind CSS — framework CSS utility-first
- lucide-react — bibliothèque d’icônes SVG moderne
- class-variance-authority (`cva`) — gestion des variantes de composants
- Fonts par défaut de Tailwind (option d’ajouter Inter ou autre)

---

## 📁 Structure du projet

```plaintext
.
├── app/
│   ├── layout.jsx
│   └── page.jsx
├── src/
│   └── components/
├── data/
├── public/
│   └── images/
├── styles/

**Détails**

- `src/components/` : tous les composants UI de l’application
- `data/` : données des cartes, utilisées pour alimenter les vues
- `public/images/` : images et icônes statiques accessibles publiquement
```
