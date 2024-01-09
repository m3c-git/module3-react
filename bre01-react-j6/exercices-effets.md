# Exercices effets

## Préparation

### Créez votre projet avec Vite

```sh
npm create vite
```

Nom du projet : `bre01-react-j6-reprise`.

Choisissez `React` puis `JavaScript`.

```sh
cd reprise
npm install
npm run dev
``` 

💡 Si vous êtes sur l'IDE n'oubliez pas de modifier le fichier de configuration.


## Exercice 1 : afficher une liste de posts

Utiliser un effet pour appeler l'URL de l'API avec fetch et affichez les 5 premiers articles qu'elle vous renvoie.

### URL :

`https://jsonplaceholder.typicode.com/posts`


## Exercice 2 : choisir un post à afficher dans une liste

Reprenez la liste de l'exercice 1. Pour chacun des posts affichés, rajouter un bouton "Lire l'article".

Lorsque ce bouton sera cliqué vous allez arrêter d'afficher la liste et afficher uniquement ce post, avec toutes ses informations.

### URLs:

#### Liste des posts

`https://jsonplaceholder.typicode.com/posts`

#### Détails du Post

`https://jsonplaceholder.typicode.com/posts/id-du-post` donc

`https://jsonplaceholder.typicode.com/posts/1`
`https://jsonplaceholder.typicode.com/posts/2`
...


## Exercice 3 : choisir un post à afficher et récupérer les commentaires

Reprenez le code de votre exercice 3. Maintenant lorsque vous affichez un post en liquant sur le bouton, vous allez en plus afficher les comentaires liés à ce post.

### URLs:

#### Liste des posts

`https://jsonplaceholder.typicode.com/posts`

#### Détails du Post

`https://jsonplaceholder.typicode.com/posts/id-du-post` donc

`https://jsonplaceholder.typicode.com/posts/1`
`https://jsonplaceholder.typicode.com/posts/2`
...

#### Commentaires d'un post

`https://jsonplaceholder.typicode.com/posts/id-du-post/comments` donc

`https://jsonplaceholder.typicode.com/posts/1/comments`
`https://jsonplaceholder.typicode.com/posts/2/comments`
...



