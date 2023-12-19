---
theme: theme.json
author: Gaellan
date: Dec 19, 2023
paging: Page %d sur %d
---

# React : States et Events

## Plan du cours

### Les states

### Les events

---

# Les states

En React chaque composant a un état, qui peut changer. Cet état peut contenir de nombreuses informations, que ce soit des chaînes de caractères, des tableaux, des objets, ...

Un exemple : Un interrupteur qui a deux états possibles : allumé ou éteint.

```jsx
const Switch = (props) => {
    const [message, setMessage] = useState('on');

    return (
        <>
            {
                message === 'on' && (
                    <p>L'interrupteur est allumé</p>
                )
            }

            {
                message === 'off' && (
                    <p>L'interrupteur est éteint</p>
                )
            }
        </>
    )
}

export default Switch;
```

Nous pouvons ici conditionner un affichage en fonction de la valeur de l'état du composant. Un seul problème nous n'avons pas encore de mécanisme qui nous permettrait de changer cet état, en cliquant sur un bouton par exemple. Pour ça nous allons avoir besoin d'utiliser les events.

---

# Events

Les events fonctionnent de la même façon dans React que les events JavaScript.

Si nous rajoutons un bouton pour éteindre et allumer notre interrupteur :

```jsx
import { useState } from 'react'

const Switch = (props) => {
    const [message, setMessage] = useState('on');

    function switchClick()
    {
        if(message === "on")
            setMessage("off");
        else
            setMessage("on");
    }

    return (
        <>
            {
                message === 'on' && (
                    <p>L'interrupteur est allumé</p>
                )
            }

            {
                message === 'off' && (
                    <p>L'interrupteur est éteint</p>
                )
            }
            <button onClick={switchClick}>Cliquez ici</button>
        </>
    )
}

export default Switch;
```

---

# Exercices

## ReadMore

Pour cette étape vous allez créer un nouveau composant ReadMore, qui sera un article qui peut être ouvert ou fermé.

Si il est ouvert son HTML sera :

```html
<article>
    <header>
        <h2>
            Le titre de l'article
        </h2>
    </header>
    <section>
        Le corps de l'article
    </section>
    <footer>
        <button onClick={toggleOpen}>Voir moins</button>
	</footer>
</article>
```

Si il est fermé :

```html
<article>
    <header>
        <h2>
            Le titre de l'article
        </h2>
    </header>
    <footer>
		<button onClick={toggleOpen}>Voir plus</button>
	</footer>
</article>
```

---

# Exercices

## ToastMessage

Pour cette étape vous allez créer un nouveau composant ToastMessage. Il contient un message d'information et un bouton pour effacer ce message une fois qu'il a été lu.

Vous allez également devoir lui créer un fichier CSS pour gérer son style, n'oubliez pas d'importer le fichier CSS dans votre composant.

Le HTML attendu s'il est visible :

```html
<article className="toastMessage">
    <p>
        Ceci est le texte de mon message
    </p>
    <button onClick={dismiss}>X</button>
</article>
```

S'il est invisible :

```html
<article className="dismissed">
    <p>
        Ceci est le texte de mon message
    </p>
    <button onClick={dismiss}>X</button>
</article>
```

Vous trouverez sur Discord une maquette d'à quoi doit ressembler votre ToastMessage quand il est visible.

---

# Exercices

## Tabs

Dans cette étape nous allons créer un système d'onglets. Notre groupe d'onglets sera contenu dans un composant Tabs qui importera un autre composant qui lui s'appelle Tab au singulier.

Votre composant Tabs contiendra 3 boutons qui permettent de changer l'onglet actif, ainsi que 3 composants Tab.
Lorsque vous cliquez sur l'un des boutons, le Tab correspondant devient actif et s'affiche, les autres sont masqués.

Chaque composant Tab contiendra un article qui contient un titre et un paragraphe.



