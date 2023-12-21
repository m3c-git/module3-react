## Étape 6 : utiliser le state et les props pour afficher le bon Post

### Étape 6.1 : Choisir l'article dans le Blog

Pour pouvoir signaler à votre composant `App` qu'un article a été sélectionné, nous allons utiliser un mélange de props et de state. Vous allez passer en props de votre composant `Blog`, une fonction flechée qui prend une variable `postNb` qui appelle setState et donne à son attribut `currentPost`, la valeur de `postNb`.

Ensuite dans votre composant `Blog`, vous allez utiliser cette fonction reçue en props pour l'appeler dans l'event `onClick` de vos boutons, en lui passant en paramètre le `i` de votre boucle.

### Étape 6.2 : Afficher le bon article

Une fois que vous pouvez updater le state de `App` depuis votre composant `Blog` nous devons faire en sorte que le composant `Post` recoive les bonnes informations à afficher. Pour cela nous allons utiliser ses props. 

Dans votre `App` quand vous appelez votre composant `Post`, passer lui en props (que vous pouvez par exemple appeler `post`) l'objet du tableau `blogPosts` qui correspond au numéro du `currentPost` dans le state de votre `App`.

### Étape 6.3 : Dynamiser le Post

Une fois dans votre composant `Post`, utilisez ce que vous avez reçu en props pour le dynamiser.

🚨 Pour pouvoir injecter du HTML dans votre composant, vous allez devoir utiliser la technique suivante :

```jsx
<section dangerouslySetInnerHTML={{ __html: props.post.content }}>

</section>
```

comme son nom l'indique celà peut être dangereux. Nous pouvons le faire ici par le HTML est le notre, si ça n'est pas le cas cette méthode est à proscrire car elle ouvre une grosse faille de sécurité. Ne le faites jamais lorsque vous n'êtes pas 100% certain-e-s de la provenance du HTML.