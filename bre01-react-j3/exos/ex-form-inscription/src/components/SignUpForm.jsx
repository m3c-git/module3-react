import { useState } from 'react'

const SignUpForm = (props) => {
    const [value, setValue] = useState({
        submitted : false,
        firstName : "",
        lastName : "",
        email : "",
        password : "",
        confirmPassword : ""


    });

    const handleChangeFirstName = (event) => {
        setValue({
            submitted: false,
            firstName : event.target.value
        });
    };

    const handleChangeLastName = (event) => {
        setValue({
            submitted: false,
            lastName : event.target.value
        });
    };

    const handleChangeMail = (event) => {
        setValue({
            submitted: false,
            email : event.target.value
        });
    };

    const handleChangeConfirmPassword = (event) => {
        setValue({
            submitted: false,
            confirmPassword : event.target.value
            
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

    const  source = value.password;
    const  target = value.ConfirmPassword;

    return (
        <>
            {
                value.submitted === false && (
                    <form onSubmit={handleSubmit}>
                        <fieldset>
                            <label for="firstName">
                                Prénom
                            </label>
                            <input type="text" name="firstName" id="firstName" value={value.firstName} onChange={handleChangeFirstName}/>
                        </fieldset>
                        <fieldset>
                            <label for="lastName">
                                Nom
                            </label>
                            <input type="text" name="lastName" id="lastName"  value={value.lastname} onChange={handleChangeLastName}/>
                        </fieldset>
                        <fieldset>
                            <label for="email">
                                Email
                            </label>
                            <input type="email" name="email" id="email" value={value.email} onChange={handleChangeMail}/>
                        </fieldset>
                        <fieldset>
                            <label for="password">
                                Mot de passe
                            </label>
                            <input type="password" name="password" id="password" value={value.password} onChange={handleChangePassword}/>
                        </fieldset>
                        <fieldset>
                            <label for="confirmPassword">
                                Confirmer le Mot de passe
                            </label>
                            <input type="password" name="confirmPassword" id="confirmPassword" value={value.email} onChange={handleChangePassword}/>
                        </fieldset>
                        <button type="submit">Inscription</button>
                    </form>
                )
            }

            { 

                value.submitted === true && (
                    value.password === value.confirmPassword && (
                        
                    <p>Vous êtes  inscript</p>
                    )
                    
                )
            }
            
            
        </>
    );
};

export default SignUpForm;