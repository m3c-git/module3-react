import { useState } from 'react'

const LoginForm = (props) => {
    const [value, setValue] = useState({
        submitted : false,
        email : "",
        password : ""

    });

    const handleChangeeMail = (event) => {
        setValue({
            submitted: false,
            email : event.target.value
        });
    };

    const handleChangePassword = (event) => {
        setValue({
            submitted: false,
            password : event.target.value
            
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setValue({
            submitted: true,
            email : event.target.email.value,
            password : event.target.password.value
        });
    };

    return (
        <>
            {
                value.submitted === true && (
                    <p>Vous êtes déja connecté</p>
                )
            }
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label for="email">
                        Email
                    </label>
                    <input type="email" name="email" id="email" value={value.email} onChange={handleChangeeMail} />
                </fieldset>
                <fieldset>
                    <label for="password">
                        Mot de passe
                    </label>
                    <input type="password" name="password" id="password" value={value.password} onChange={handleChangePassword}/>
                </fieldset>
                <button type="submit">Connexion</button>
            </form>
            
        </>
    );
};

export default LoginForm;