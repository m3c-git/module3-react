# Exercices Fetch

Ces exercices sont à réaliser en JavaScript Vanilla, sans React.


## Exercice 1 : récupérer une info et l'afficher

Consignes : appelez l'URL qui vous permet de récupérer les informations d'un post et affichez-les.

### URL

`https://jsonplaceholder.typicode.com/posts/1`.

### HTML

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<title>Exercice 1 Fetch</title>
	</head>
	<body>
		<article>
			<h1 id="post-title">

			</h1>
			<p id="post-body">
			</p>
		</article>
	</body>
	<script type="application/javascript" src="main.js"></script>
</html>
```


## Exercice 2 : récupérer des infos et en afficher une partie

Consignes : appelez l'URL qui vous permet de récupérer les posts et affichez les infos des 4 premiers.

### URL

`https://jsonplaceholder.typicode.com/posts`.

### HTML

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<title>Exercice 1 Fetch</title>
	</head>
	<body>
		<ul>
			<li>
				<article id="post-1">
					<h1 class="post-title">

					</h1>
					<p class="post-body">
					</p>
				</article>
			</li>
			<li>
				<article id="post-2">
					<h1 class="post-title">

					</h1>
					<p class="post-body">
					</p>
				</article>
			</li>
			<li>
				<article id="post-3">
					<h1 class="post-title">

					</h1>
					<p class="post-body">
					</p>
				</article>
			</li>
			<li>
				<article id="post-4">
					<h1 class="post-title">

					</h1>
					<p class="post-body">
					</p>
				</article>
			</li>
		</ul>
	</body>
	<script type="application/javascript" src="main.js"></script>
</html>
```


## Exercice 3 : envoyer des infos et afficher le résultat

Utilisez une requête post pour envoyer des infos à une API et affichez le résultat dans le HTML

### URL

`https://jsonplaceholder.typicode.com/posts`.

### Post à envoyer

```js
const post = {
	title : "Ceci est le titre de mon nouveau post",
	body : "Ceci est le contenu de mon nouveau post",
	userId: 2
};
```

### HTML

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<title>Exercice 1 Fetch</title>
	</head>
	<body>
		<article>
			<h1 id="post-title">

			</h1>
			<p id="post-body">
			</p>
		</article>
	</body>
	<script type="application/javascript" src="main.js"></script>
</html>
```

## Exercice 4 : envoyer des infos depuis une formulaire et afficher le résultat

À la soumission d'un formulaire utilisez une requête post pour envoyer des infos à une API et affichez le résultat dans le HTML (utlisez le userId 1 pour les informations de votre post).

### URL

`https://jsonplaceholder.typicode.com/posts`.

### HTML

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<title>Exercice 1 Fetch</title>
	</head>
	<body>
		<form>
			<fieldset>
				<label for="title">
					Titre
				<label>
				<input type="text" id="title" name="title" />
			</fieldset>
			<fieldset>
				<label for="content">
					Titre
				<label>
				<input type="text" id="content" name="content" />
			</fieldset>
			<button id="submit" type="submit">Envoyer</button>
		</form>
		<article>
			<h1 id="post-title">

			</h1>
			<p id="post-body">
			</p>
		</article>
	</body>
	<script type="application/javascript" src="main.js"></script>
</html>
```


