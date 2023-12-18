---
theme: theme.json
author: Gaellan
date: Dec 18, 2023
paging: Page %d sur %d
---

# React Jour 1

## Plan du cours

### La syntaxe des modules

### Présentation de React

### Composants et DOM Virtuel

### Démarrer avec React

### La syntaxe JSX

### Les components

### Attributs

### Parcourir un tableau

### Les fragments

### Imbriquer les composants

### Les props

---

# La syntaxe des modules

Les modules en JavaScript ont été créés pour nettoyer et simplifier le code. Le principe est simple il consiste à pouvoir charger une ou plusieurs fonctions depuis un fichier vers un autre.

## Exporter plusieurs fonctions différentes

Dans le fichier où vous définissez vos fonctions :

```js
function commonHelper() {
    //
}

function validate() {
    //
}

function ucfirst(string) {
    return string.charAt(0).toUpperCase() + string.substring(1);
}

// On exporte que les fonctions dont on a besoin.
export { ucfirst, validate };
```

Dans celui où vous voulez les importer :

```js
import { ucfirst, validate } from './fonctions.js';
```

## Exporter un élément unique

Si vous n'avez qu'un élément à exporter, utilisez le mot clé `default` devant votre export :

```js
function ucfirst(string) {
    return string.charAt(0).toUpperCase() + string.substring(1);
}

export default ucfirst;
```

et pour l'importer :

```js
import ucfirst from './ucfirst.js';
```

---

# Présentation de React

React est techniquement une librairie JS développée par Facebook.

💡On considère généralement qu'une librairie n'impose pas de sturcture obligatoire du code alors qu'un framework si. React n'obligeant pas à une structure définie c'est techniquement une librairie pas un framework. Dans la réalité : React est un framework.

React sert à créer des composants d'interface réutilisables, on dit qu'il est orienté "vue" (son concurrent direct a fait plus simple, il est orienté vue, il s'appelle Vue 😄).

## La documentation de React

https://react.dev/

---

# Composants et DOM virtuel

## Les composants

React permet de définir des composants. Chaque élément de votre application sera constitué d'un ou plusieurs éléments. Chaque composants a ses états, ses données et ses comportements. Vous pouvez les voir comme des éléments isolés et indépendants que vous assemblez pour créer un tout cohérent et fonctionnel.

## Le DOM Virtuel

React n'interragit pas directement avec le DOM, il émule et manipule un DOM Virtuel qui va ensuite lui servir à mettre à jour le véritable DOM de la façon la plus optimisée possible. Le fait de ne jamais manipuler directement le DOM permet de de s'abstraire du navigateur lui-même et de changer de cible (modile, tablette, tv, document PDF, ...).

---

# Démarrer avec React

Dans ce cours de React nous allons installer React via ViteJS : https://vitejs.dev/guide/.

Vite va nous fournir la structure et les dépendances nécéssaires pour faire fonctionner React.

Une fois que vous avez cloné le repository GitHub dns lequel vous aller versionner votre projet (dans cet exemple je vais utiliser `bre01-react-j1`), rendez-vous dans son dossier.

```sh
cd sites/react/bre01-react-j1
```

Puis

```sh
npm create vite
```

L'installateur va vous demander le nom de votre projet, répondez-lui (dans mon exemple je lui répond `project`).

Puis il va vous demander quel framework utiliser. Choisissez React avec les flêches du clavier.

Il va ensuite vous demander de choisir une variante : sélectionnez JavaScript.

Et enfin pour lancer le projet faites les commandes suivantes une par une :

```sh
cd project
npm install
```

🚨Sur les IDE de la 3WA une manipulation supplémentaire est nécessaire. Ouvre le fichier `vite.config.js` à la racine de votre projet et modifiez-le comme suit :

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
      host:true,
      port:9000
  }
})
```

Puis faire la commande :

```sh
npm run dev
```

Vous allez ensuite pouvoir visualiser l'application à l'url suivante : http://prenomnom.ide.3wa.io:9000. (en remplacant prenom nom par votre prénom et votre nom).

---

# La syntaxe JSX

La syntaxe de JSX est une syntaxe particulière de JavaScript utilisée pour développer en React (quand vous consultez la doc de React les exemples sont en JSX), c'est celle que nous allons utiliser pendant le module React.

Ce qui en JavaScript s'écrirait :

```js
const el = React.createElement(
  'h1',
  {className: 'main'},
  'Hello, world!'
);
```

donne ceci en JSX :

```jsx
const el = (
  <h1 className="main">
    Hello, world!
  </h1>
);
```

---

# Les components

Un composant c'est un élément d'une page qui contient toutes les données, fonctions et variables dont il a besoin. Il va retourner le code JSX nécéssaire à son propre fonctionnement.

Ce code va être injecté dans une balise de la page, il doit donc renvoyer tout son code encapsulé dans une seule balise HTML.

Imaginons un composant Hello, que nous écrivons dans un fichier Hello.jsx :

```jsx
const Hello = (props) => {
  return (
    <article className="heading" >
        <h1>Hello</h1>
        <p>Comment ça va ?</p>
    </article>
  )
}

export default Hello;

```

`class` étant un mot réservé du JavaScript, en JSX on écrira `className` pour désigner les classes HTML / CSS.

Nous appelons ensuite le composant Hello dans notre composant App :

```jsx
import Hello from './Hello.jsx';

function App() {

  return (
    <Hello />
  )
}
```

---

# Attributs

Pour transmettre des attributs à un composant vous pouvez soit les transmettre directement entre guillemets simples ou doubles s'il s'agit d'une chaine de caractères, soit les transmettre entre accolade s'il s'agit d'un objet plus complexe :

```jsx
<Hello className="heading" />

const myClass = { backgroundColor : 'red', color : 'blue', marginTop: 5 };

<Hello style={myClass} />
```

---

# Parcourir un tableau

Pour parcourir et aficher un tableau JS dans le rendu de votre composant, vous allez evoir utiliser la méthode `map` sur ce tableau.

En prime React, va avoir besoin de générer une clé unique pour pouvoir se retrouver parmi les différents éléments :

```jsx
const ShoppingList = (props) => {
    const items = ['Pain', 'Beurre', 'Boursin'];

    return (
        <ul>
            {items.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
    )
}
```

---

# Les fragments

Imaginons que nous voulions ajouter un titre à la ShoppingList de l'exemple précédent, il serait tentant d'écrire :

```jsx
const ShoppingList = (props) => {
    const items = ['Pain', 'Beurre', 'Boursin'];

    return (
        <h1>Ma liste de courses</h1>
        <ul>
            {items.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
    )
}
```

Sauf qu'en React, nous ne pouvons renvoyer qu'une seule balise qui contiendra les autres. Nous avons donc deu possibilités pour corriger. Si notre structure s'y prête nous pouvons encapsuler nos balises dans un `article` ou une `section` :

```jsx
const ShoppingList = (props) => {
    const items = ['Pain', 'Beurre', 'Boursin'];

    return (
      <article>
        <h1>Ma liste de courses</h1>
        <ul>
            {items.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </article>
    )
}
```

Si elle ne s'y prête pas nous pouvons utiliser les fragments React qui sont des sortes de balises virtuelles nous permettant d'en encapsuler d'autres :

```jsx
const ShoppingList = (props) => {
    const items = ['Pain', 'Beurre', 'Boursin'];

    return (
      <React.Fragment>
        <h1>Ma liste de courses</h1>
        <ul>
            {items.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </React.Fragment>
    )
}
```

---

# Imbriquer des composants

Il est tout à fait possible d'imbriquer des composants (appeler un composant dans un autre) :

```jsx

const ShoppingList = (props) => {
    const items = ['Pain', 'Beurre', 'Boursin'];

    return (
      <React.Fragment>
        <h1>Ma liste de courses</h1>
        <ul>
            {items.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </React.Fragment>
    )
}

const Hello = (props) => {
  return (
    <article className="heading" >
        <h1>Hello</h1>
        <p>Comment ça va ?</p>
        <ShoppingList />
    </article>
  )
}

export default Hello;

```
---

# Exercices 1 / 2

## Exercice 0

Créez votre repository GitHub pour la journée d'aujourd'hui (public et avec un README) : `bre01-react-j1`.

## Exercice 1

Objectif : Créer un composant simple

Vous allez devoir créer un composant simple, que vous appelerez `Recipe` et qui affichera le HTML suivant :

```html
<article>
  <h2>La recette de la pâte à crèpes</h2>
  <h3>Ingrédients</h3>
  <ul>
    <li>Oeufs</li>
    <li>Lait</li>
    <li>Farine</li>
    <li>Beurre</li>
  </ul>
</article>
```

Utilisez le tableau suivant pour représenter la liste de vos ingrédients :

```js
const ingredients = ["Oeufs", "Lait", "Farine", "Beurre"];
```

---

# Exercices 2 / 2

## Exercice 2

Objectif : Utiliser les composants imbriqués

Vous allez réutiliser votre composant `Recipe` de l'exercice 1 et lui ajouter un composant imbriqué appelé `Steps`, le rendu HTML final doit être le suivant :

```html
<article>
  <h2>La recette de la pâte à crèpes</h2>
  <h3>Ingrédients</h3>
  <ul>
    <li>Oeufs</li>
    <li>Lait</li>
    <li>Farine</li>
    <li>Beurre</li>
  </ul>
  <h3>Étapes</h3>
  <ol>
    <li>Faire un puits avec la farine et y verser les oeufs</li>
    <li>Battre les oeufs et la farine et y incorporer doucement le lait</li>
    <li>Faire fondre le beurre et l'ajouter au mélange</li>
  </ol>
</article>
```

Utilisez le tableau suivant pour représenter la liste de vos étapes :

```js
const steps = [
"Faire un puits avec la farine et y verser les oeufs", 
"Battre les oeufs et la farine et y incorporer doucement le lait", 
"Faire fondre le beurre et l'ajouter au mélange"
];
```

---

# Les props

Les props sont un mécanisme à utiliser lorsque vous souhaitez transmettre une information à un composant. Par exemple si vous voulez que votre composant Hello dise bonjour à la bonne personne (pour moi "Hello Mari").

```jsx
const Hello = (props) => {
  return (
    <article className="heading" >
        <h1>Hello {props.firstName}</h1>
        <p>Comment ça va ?</p>
    </article>
  )
}

export default Hello;

```

```jsx
import Hello from './Hello.jsx';

function App() {

  return (
    <Hello firstName="Mari"/>
  )
}
```

Les props sont en lecture seule, cela veut dire qu'un composant ne peut pas modifier ses props, cette restriction est en place pour imposer une certaine rigueur dans le flux des informations au sein des composants React.


---

# Exercices

## Exercice 3

Objectif : Utiliser les props dans une liste de composants

Vous allez devoir créer un composant `Student` que vous appelerez dans un boucle dans votre composant `App`, vous allez utiliser les props pour afficher pour chaque étudiant-e son nom et ses notes.

Rendu HTML attendu :

```html
<section>
  <h2>Étudiant-e-s</h2>
  <ul>
    <li>
      <article>
        <h3>
          Alan
        </h3>
        <ul>
          <li>
            12
          </li>
          <li>
            11
          </li>
          <li>
            10
          </li>
        </ul>
      </article>
    </li>
    [...]
  </ul>
</section>

```

Les données : 

```js
const students = [
  { notes: [12, 11, 10], name: "Alan" },
  { notes: [18, 10, 19], name: "Alice" },
  { notes: [10, 9, 11], name: "Bernard" },
  { notes: [11, 17, 19], name: "Sophie" },
];
```

---

# Exercices

## Exercice 4

Nous allons modifier un peu nore composant `Student` de l'exercice 3, maintenant au lieu de simplement afficher la liste des notes, il va également calculer la moyenne de ces notes et l'afficher :

Rendu HTML attendu :

```html
<section>
  <h2>Étudiant-e-s</h2>
  <ul>
    <li>
      <article>
        <h3>
          Alan
        </h3>
        <ul>
          <li>
            12
          </li>
          <li>
            11
          </li>
          <li>
            10
          </li>
        </ul>
        <p>
        Moyenne : 11
        </p>
      </article>
    </li>
    [...]
  </ul>
</section>

```

Les données n'ont pas changé :

```js
const students = [
  { notes: [12, 11, 10], name: "Alan" },
  { notes: [18, 10, 19], name: "Alice" },
  { notes: [10, 9, 11], name: "Bernard" },
  { notes: [11, 17, 19], name: "Sophie" },
];
```
