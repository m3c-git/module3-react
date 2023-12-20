# Mini Projet React Userbase

## Fichier de données

Créez un fichier `user.js` dans lequel vous placez le code suivant.

```js
let users = [
	{
		id: 1,
		firstName : "Marcus",
		lastName : "Allen Wood",
		email : "marcus.aw@gmail.com"
	},
	{
		id: 2,
		firstName : "Camille",
		lastName : "Jourdain",
		email : "cjpo@gmail.com"
	},
	{
		id: 2,
		firstName : "James",
		lastName : "Din",
		email : "withoutacause@rebel.com"
	},
	{
		id: 3,
		firstName : "Leah",
		lastName : "Prince - Stanley",
		email: "leah.princes@gmail.com"
	}
];

export default users;
```

Le but de ce mini-projet va être de créer un formulaire d'ajout d'utilisateurs et une table qui permet d'afficher les différents utilisateurs.

Nous allons avoir besoin de créer deux composants : `UserBase` qui contiendra le formulaire et contiendra également le second composant `UserTable` qui affiche la table des utilisateurs.

Pour ajouter un utilisateur, vous aurez besoin de son prénom, son nom et son email.

Lorsque votre formulaire d'ajout est soumis, ajoutez le nouvel utilisateur dans votre tableau `users`. Votre table devra recevoir en props les informations de `users` pour les afficher.
