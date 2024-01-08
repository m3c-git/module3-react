---
theme: theme.json
author: Gaellan
date: Dec 20, 2023
paging: Page %d sur %d
---

# React : les Formulaires

## Plan du cours

### Les formulaires

---

# Les formulaires

Les formulaires et les inputs en React ne changent pas par rapport à ceux que vous connaissez en JavaScript, par contre les events à appeler sont : `onChange` pour les inputs, textearea et select, et `onSubmit` pour les formulaires.

```jsx
import { useState } from 'react'

const Form = (props) => {
  const [value, setValue] = useState("");
  
  const handleChange = (event) => {
    console.log(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setValue(event.target.username.value);
  };

   return (
      <>
      {
        value !== "" && (
          <p>Dernier ajout : {value}</p>
        )
      }
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
          	name="username"
          	id="username"
            type="text"
            value={value}
            onChange={handleChange}
          />
        </label>
        <input type="submit" value="Add" />
      </form>
      </>
    );
};

export default Form;
```

---

# Exercice

## Formulaire de connexion

Pour cet exercice, vous allez créer un composant `LoginForm` qui représentera un formulaire de connexion. Vous allez utiliser le state de votre `LoginForm` pour savoir si votre utilisateur est connecté ou non. S'il est connecté, vous afficherez uniquement le message "Vous êtes déjà connecté", sinon vous allez devoir avoir le rendu HTML suivant :

```html
<form>
    <fieldset>
        <label for="email">
            Email
        <label>
        <input type="email" name="email" id="email" />
    </fieldset>
    <fieldset>
        <label for="password">
            Mot de passe
        <label>
        <input type="password" name="password" id="password" />
    </fieldset>
    <button type="submit">Connexion</button>
</form>
```

Pour l'instant nous n'allons pas nous occuper de vérifier si le couple username / password est bon, on connecte automatiquement l'utilisateur au submit du formulaire.

---

# Exercice

## Formulaire d'inscription

Pour cet exercice vous allez créer un composant SignUpForm qui représentera un formulaire d'inscription. Vous allez utiliser le state de votre formulaire pour stocker le dernier utilisateur créé. Si un utilisateur a été créé vous afficherez "Dernier utilisateur : Prénom Nom" avec les bonnes infos, sinon vous evez avoir le rendu HTML suivant :

```html
<form>
	<fieldset>
        <label for="firstName">
            Prénom
        <label>
        <input type="text" name="firstName" id="firstName" />
    </fieldset>
    <fieldset>
        <label for="lastName">
            Nom
        <label>
        <input type="text" name="lastName" id="lastName" />
    </fieldset>
    <fieldset>
        <label for="email">
            Email
        <label>
        <input type="email" name="email" id="email" />
    </fieldset>
    <fieldset>
        <label for="password">
            Mot de passe
        <label>
        <input type="password" name="password" id="password" />
    </fieldset>
    <fieldset>
        <label for="confirmPassword">
            Confirmer le Mot de passe
        <label>
        <input type="password" name="confirmPassword" id="confirmPassword" />
    </fieldset>
    <button type="submit">Inscription</button>
</form>
```

Pour pouvoir s'inscrire password et confirmPassword doivent être identiques (utilisez onChange et faites disparaitre le bouton par exemple).