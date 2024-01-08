---
theme: theme.json
author: Gaellan
date: Jan 08, 2024
paging: Page %d sur %d
---

# React : utiliser des API

## Plan du cours

### Exercice de remise en jambe

### Rappel sur Fetch

#### GET avec fetch

#### POST avec fetch

### Exercices avec Fetch

### Utiliser les effets dans React

### Exercices sur les effets

---

# Exercice de reprise

Fichier `exercice-reprise.md` sur Discord.

---

# Rappels sur l'utilisation de fetch

L'API fetch est une fonctionnalité de JavaScript qui permet de manipuler des requêtes HTTP. Dit comme ça cela parait barbare mais en gros elle permet d'appeler des URLs pour y récupérer du contenu.

Ces URLS peuvent être sur un autre site ou une API (Facebook, Google Maps, Météo France, ...) ou bien sur votre propre site (nous verrons l'intérêt de ce procédé dans les cours de PHP).

La doc MDN (en français) de fetch : https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch.

Nous allons principalement utiliser deux types de requêtes avec fetch :

- les requêtes GET qui nous permettent de demander des informations à une URL
- les requêtes POST qui nous permettent d'envoyer des informations à une URL 

---

# Récupérer des données avec fetch : les requêtes GET

Exemple : je veux récupérer la liste des utilisateurs d'une API.

```js
const apiUrl = "https://jsonplaceholder.typicode.com/users";

fetch(apiUrl) // j'appelle l'URL
.then((response) => response.json()) // Elle me renvoie la réponse et j'extrait son JSON
.then((data) => console.log(data)); // J'affiche le JSON dans la console
```

Ceci est la syntaxe qui n'utilise pas async et await. Si vous n'êtes pas à l'aise avec async/await et l'asynchrone en JavaScript, je vous recommande celle-ci.

Testez ce code dans un JS Fiddle pour observer le résultat (https://jsfiddle.net/).

Une syntaxe alternative si vous devez faire des opérations sur les données (créer du HTML, trier, etc etc) :

```js
const apiUrl = "https://jsonplaceholder.typicode.com/users";

fetch(apiUrl) // j'appelle l'URL
.then((response) => response.json()) // Elle me renvoie la réponse et j'extrait son JSON
.then((data) => {
    // votre code pour manipuler les données ici
    console.log(data); // J'affiche le JSON dans la console
});
```

---

# Envoyer des données avec fetch : les requêtes POST

Exemple : je veux ajouter un post à une liste de posts via une API

```js
const apiURL = "https://jsonplaceholder.typicode.com/posts";

const body = JSON.stringify({
    title: 'Nouveau Post',
    body: 'Contenu du nouveau post',
    userId: 1,
}); // je crée le corps de ma requête (les infos que je veux envoyer) au format JSON

const options = {
    method: 'POST',
    body: body,
    headers: {
    'Content-type': 'application/json; charset=UTF-8',
  }
}; // Je configure les options

fetch(apiURL, options) // j'appelle l'URL avec mes options
  .then((response) => response.json()) // Elle me renvoie la réponse et j'extrait son JSON
  .then((data) => {
    // votre code pour manipuler les données ici
    console.log(data); // J'affiche le JSON dans la console
});
```

Si vous testez dans un JS Fiddle vous verrez que l'API vous renvoie votre post nouvellement créé.

---

# Exercices avec fetch

Fichier `exercices-fetch.md` sur Discord.

---

# Les effets dans React

Les effets permettent de synchroniser une application React avec des informations externes (par exemple avec les données d'une API). Ils permettent d'autre fonctionnalités mais nous allons les utiliser pour cet usage.

Par défaut les effets sont appellés à chaque fois que la page ou le composant sont réaffichés.

La syntaxe d'utilisation des effets ressemble un peu à celle des states.

Par exemple : un composant qui représente un post : 

```jsx
import { useState, useEffect } from 'react';

const Post = () => {
  const [state, setState] = useState({});

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setState(data); // J'utilise setState pour mettre le contenu récupéré dans mon composant
      });
  }, {}); // le {} est l'état initial de l'effet
  return (
    <article>
        <h1>{ state.title }</h1>
        <p>
            { state.body }
        </p>
    </article>
  );
};

export default Post;
```

---

# Exercices sur les effets

Fichier `exercices-effets.md` sur Discord.