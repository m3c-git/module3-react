# Mini-projet Page perso en React

## Étape 0 : Créer le repository

Créez un repository GitHub public avec un README : `bre01-react-page-perso`.

## Étape 1 : Créer le projet

Une fois votre repository cloné, rendez vous dans son dossier et exécuter les commandes suivantes :

```sh
npm create vite
```

Donnez un nom au dossier de votre projet puis choisissez React et JavaScript.

Saisissez ensuite les commandes indiquées par votre terminal :

```sh
cd nom_du_dossier
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

Puis enfin faites la commande 

```sh
npm run dev
```

## Étape 2 : modifier les fichiers

### Étape 2.1 : vider le CSS

Supprimez les contenus présents dans les fichiers App.css et index.css.

### Étape 2.2 : réinitialiser l'App

Remplacez le contenu du fichier App.jsx par ceci :

```jsx
import './App.css'

function App() {
  return (
    <>

    </>
  )
}

export default App
```

### Étape 2.3 : changer l'ancrage HTML

Dans le fichier `index.html`, remplacez :

```html
<div id="root"></div>
```

par 

```html
<main id="root"></main>
```

## Étape 3 : créer le fichier des données

Dans le dossier `src` de votre projet, créez un fichier `data.js` et mettez-y le code suivant :

```js
const posts = [
    {
        image : "https://picsum.photos/id/122/600/400",
        title : "Ma première conférence technique",
        excerpt : "J'ai assisté à ma première conférence technique le mois dernier, je vous partage mon ressenti et un résumé des interventions"
    },
    {
        image : "https://picsum.photos/id/9/600/400",
        title : "Découvrir un nouveau framework JS",
        excerpt : "Mes trucs et astuces pour bien approcher un tout nouveau framework en prenant l'exemple de VueJS"
    },
    {
        image : "https://picsum.photos/id/403/600/400",
        title : "Créer son blog avec GitHub",
        excerpt : "Mon tuto sur la création d'un blog avec GitHub Pages."
    }
];

const skills = [
    {
        name: "HTML",
        grade: 4
    },
    {
        name : "CSS",
        grade : 4
    },
    {
        name : "JavaScript",
        grade : 3,
    },
    {
        name : "React",
        grade : 2
    }
];

export {posts, skills};
```

Vous avez créé les données dont votre site aura besoin, vous n'aurez plus qu'à les importer dans vos composants.


## Étape 4 : On commence par tout coder dans App

Pour notre première étape de code nous allons d'abord tout mettre dans notre composant App, nous nous occuperons de diviser en plusieurs composants enfants plus tard.

## Étape 4.1 : Mettre en place le HTML

Dans le dossier contenant les maquettes, ouvrez la maquette de l'étape 4.1. Pour le moment on ne se souciera que de HTML.

### Étape 4.1.1 : Importer les données

Tout d'abord vous allez devoir importer les données de `data.js` (le tableau `skills` et le tableau `posts`) dans votre composant App (fichier `App.jsx` donc).

### Étape 4.1.2 : Structurer le HTML

Dans votre composant App vous allez devoir faire en sorte d'obtenir le HTML de rendu suivant : 

```html
	<h1>Joan Doe</h1>
	<section>
		<h2>Compétences</h2>
		<ul>
			<li>HTML : 4 / 5</li>
			<li>CSS : 4 / 5</li>
			<li>JavaScript : 3 / 5</li>
			<li>React : 2 / 5</li>
		</ul>
	</section>
	<section>
		<h2>Publications</h2>
		<ul>
			<li>
				<article>
					<img src="https://picsum.photos/id/122/600/400" alt="Une ville moderne de nuit">
					<h3>
						Ma première conférence technique
					</h3>
					<p>
						J'ai assisté à ma première conférence technique le mois dernier, je vous partage mon ressenti et un résumé des interventions
					</p>
				</article>
			</li>
			<li>
				<article>
					<img src="https://picsum.photos/id/9/600/400" alt="Un ordinateur prêt à travailler">
					<h3>
						Découvrir un nouveau framework JS
					</h3>
					<p>
						Mes trucs et astuces pour bien approcher un tout nouveau framework en prenant l'exemple de VueJS
					</p>
				</article>
			</li>
			<li>
				<article>
					<img src="https://picsum.photos/id/403/600/400" alt="Des touches de machine à écrire">
					<h3>
						Créer son blog avec GitHub
					</h3>
					<p>
						Mon tuto sur la création d'un blog avec GitHub Pages.
					</p>
				</article>
			</li>
		</ul>
	</section>
```

Pensez bien à utiliser la technique vue en cours pour afficher des tableaux et n'oubliez pas les `key`.

### Étape 4.2 : le CSS

Nous allons maintenant nous occuper dájouter du CSS à notre page. Dans le dossier `maquettes` suivez `etape-4-2.png`.

#### Étape 4.2.1 : les polices

Ajouter le lien des polices dans votre HTML : 

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">
```

Et dans votre fichier `index.css` :

```css
html {
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
    background-color: #282a36;
}

body {
    padding:0;
    margin:0;
    max-width:100vw;
    min-height: 100vh;
}
```

Pour configurer les polices et effacer le padding et margin par défaut sur le DOM.

### Étape 4.2.2 : Créer le CSS

Dans votre fichier `App.css`, rajoutez les rêgles CSS qui permettront d'intégrer la maquette.

Le `<main>` fait 80% de la largeur de la page.

Le `<h1>` a la couleur `#ff5555`, une taille de 2.5rem et une graisse de 700.

Les `<h2>` ont la couleur `#8be9f2`, une taille de 1.8rem et une graisse de 700.

Dans la première `<section>` les `<li>` ont une taille de 1.3rem.

Les couleurs de la première `<section>` :

```css
background-color: #50fa7b;
background-color: #ffb86c;
background-color: #ff79c6;
background-color: #f1fa8c;
```

Dans la seconde `<section>` le gap entre les colonnes est de 1rem.

Dans la seconde `<section>`, les `<h3>` sont de couleur `#bd93f9`, avec une taille de 1.3rem et une graisse de 700.


## Étape 5 : Découper les composants

Maintenant que tout est en place nous allons séparer notre page en différents composants, nous allons en avoir 5 au total :

- App
- Skills qui contiendra le titre et la liste des compétence
- Skill qui représentera une compétence
- Posts qui contiendra le titre et la liste des publications
- Post qui représentera une publication

### Étape 5.1 : le composant Skills

En utilisant le code que vous aviez fait pour tout mettre dans l'App, vous allez maintenant placer le code qui concerne la partie compétences dans un nouveau composant Skills. Vous allez ensuite importer Skills dans App.

### Étape 5.2 : le composant Posts

En utilisant le code que vous aviez fait pour tout mettre dans l'App, vous allez maintenant placer le code qui concerne la partie publications dans un nouveau composant Posts. Vous allez ensuite importer Posts dans App.

### Étape 5.3 : le composant Skill

Vous allez maintenant créer un composant Skill qui contiendra les infos pour une compétence, vous allez ensuite appelez Skill autant de fois que nécéssaire dans Skills. N'oubliez pas d'utiliser les props pour transmettre les informations de Skills à Skill.

### Étape 5.3 : le composant Post

Vous allez maintenant créer un composant Post qui contiendra les infos pour une publication, vous allez ensuite appelez Post autant de fois que nécéssaire dans Posts. N'oubliez pas d'utiliser les props pour transmettre les informations de Posts à Post.

## Étape 6 : Bonus

Modifie votre composant Skill et votre HTML pour afficher pour chaque compétence le nom de la compétence comme un `<h3>` et la note comme des étoiles vides ou pleines. Utilisez les icones de Bootstrap Icons : https://icons.getbootstrap.com/.
