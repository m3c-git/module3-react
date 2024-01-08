# Exercice de reprise

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

### Remplacer le contenu des fichiers

Sur Discord vous trouverez un dossier zippé `reprise-fichiers.zip`, récupérez les fichiers qu'il contient et remplacez les contenus par défaut de votre projet par celui des fichiers.


## Étape 1 : afficher une liste de posts dans la zone bleue (`section.posts`)

### Les données :

Voici les données des posts que vous devrez afficher :

```js

const posts = [
	{
		title : "Post 1",
		body : "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
	},
	{
		title : "Post 2",
		body : "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
	},
	{
		title : "Post 3",
		body : "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
	},
	{
		title : "Post 4",
		body : "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
	}
];

export { posts };

```

### Précisions

Pour chacune des tâches de l'exercice, chez dans vos cours et vos anciens exercices et leur correction une solution pour réaliser la tâche demandée. Le CSS fourni au départ doit être modifié pour donner quelque chose de visuellement moins moche (à minima, retirer les couleurs de fond bleu et rouge).

### Étape 1.1 : importer les données dans le composant App

Trouvez un moyen d'importer ces données dans votre composant App.

### Etape 1.2 : Créer le composant Posts

Vous allez devoir créer un nouveau composant, appelé `Posts`, qui sera contenu dans votre composant App. Il contiendra une liste non ordonnée d'articles et chaque article aura un titre et un paragraphe corespondant à l'un des posts de votre jeu de données.


## Étape 2 : Créer un formulaire dans la zone rouge (`section.add-post`)

### Étape 2.1 : Créer le composant PostForm

Vous allez devoir créer un nouveau composant, appelé `PostForm`, qui sera contenu dans votre composant App. Il contiendra un formulaire avec un champ `title`, un champ `body` et un bouton de soumission.

### Étape 2.2 : Le formulaire ajoute un Post

À la soumission du formulaire il devra ajouter le post correspondant à ses champs dans la liste. Si le nouveau post disprait lorsque vous recharche votre page c'est normal.