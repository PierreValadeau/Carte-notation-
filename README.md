# Carte de Notation

## Description
Cette application web est une **carte de notation interactive** permettant aux utilisateurs d'évaluer un service à l'aide d'étoiles. Elle est construite en **HTML**, **CSS**, et **JavaScript vanilla** et offre une expérience utilisateur fluide et intuitive.

### Fonctionnalités principales :
- **Préréplissage des étoiles au survol :** Lorsque la souris passe sur les étoiles, elles se remplissent temporairement.
- **Sélection d'une note :** Les utilisateurs peuvent cliquer sur une étoile pour choisir une note (1 à 5).
- **Soumission de la note :** Une fois une étoile sélectionnée, un bouton "Soumettre" s'active pour afficher un message de confirmation.
- **Réinitialisation :** Un bouton à droite permet de réinitialiser la note et de revoter.

---

## Structure du Projet

### 1. **HTML**
Le fichier HTML définit la structure de la carte avec :
- Un conteneur pour les étoiles.
- Un bouton "Soumettre".
- Un bouton "Reset" positionné en haut à droite.
- Un message de feedback pour afficher la note choisie.

### 2. **CSS**
Le fichier CSS applique les styles pour :
- La mise en page de la carte.
- L'apparence des étoiles (remplies ou non).
- Les transitions pour les étoiles au survol et au clic.
- Le positionnement et le style des boutons.

### 3. **JavaScript**
Le fichier JavaScript gère :
- La génération dynamique des étoiles.
- Les événements de survol, clic et sortie de la souris.
- L'activation du bouton "Soumettre" après la sélection d'une étoile.
- La réinitialisation des étoiles via le bouton "Reset".

---

## Installation
1. Clonez ce répertoire :
   ```bash
   git clone <url_du_repertoire>
   ```
2. Ouvrez le fichier `index.html` dans un navigateur.

---

## Utilisation
1. Survolez les étoiles pour voir l'effet de préréplissage.
2. Cliquez sur une étoile pour sélectionner une note.
3. Cliquez sur "Soumettre" pour confirmer votre note.
4. Utilisez le bouton "Reset" (en haut à droite) pour réinitialiser et revoter.

---

## Améliorations possibles
Voici quelques idées pour enrichir l'application :
- Ajouter une option pour commenter en plus de la note.
- Sauvegarder la note dans le `localStorage` pour la persistance.
- Simuler l'envoi des données à un serveur avec `fetch`.
- Adapter le design pour les appareils mobiles.

---

## Aperçu du Projet
Voici un exemple visuel de la carte (après soumission) :

```
+------------------------------+
|         ⟲                  |
| Comment évaluez-vous ?    |
|  ★ ★ ★ ★ ★                 |
| [Soumettre]                |
| Merci pour votre note !    |
+------------------------------+
```

---

## Créé par
[Valadeau Pierre]

