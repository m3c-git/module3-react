import { useState } from 'react'

const SignUpForm = (props) => {
    const [value, setValue] = useState({
        submitted : false,
        firstName : "",
        lastName : "",
        email : "",
        password : "",
        confirmPassword : "",
        pass: ""


    });

    const handleChangeFirstName = (event) => {
        let newState = Object.assign({}, value, {firstName:event.target.value});
        setValue(newState);
    };

    const handleChangeLastName = (event) => {
        let newState = Object.assign({}, value, {lastName:event.target.value});
        setValue(newState);
    };

    const handleChangeMail = (event) => {
        let newState = Object.assign({}, value, {email:event.target.value});
        setValue(newState);
    };

    const handleChangeConfirmPassword = (event) => {
        let newState = Object.assign({}, value, {password:event.target.value});
        setValue(newState);
    };

    const handleChangePassword = (event) => {
        let newState = Object.assign({}, value, {confirmPassword:event.target.value});
        setValue(newState);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let newState = Object.assign({}, value, {submitted:true});
        setValue(newState);
    };


    


    return (
        <>
            {
                value.submitted === false && (
                    <form onSubmit={handleSubmit}>
                        <fieldset>
                            <label htmlFor="firstName">
                                Prénom
                            </label>
                            <input type="text" name="firstName" id="firstName" onChange={handleChangeFirstName}/>
                        </fieldset>
                        <fieldset>
                            <label htmlFor="lastName">
                                Nom
                            </label>
                            <input type="text" name="lastName" id="lastName"  onChange={handleChangeLastName}/>
                        </fieldset>
                        <fieldset>
                            <label htmlFor="email">
                                Email
                            </label>
                            <input type="email" name="email" id="email" onChange={handleChangeMail}/>
                        </fieldset>
                        <fieldset>
                            <label htmlFor="password">
                                Mot de passe
                            </label>
                            <input type="password" name="password" id="password" onChange={handleChangePassword}/>
                        </fieldset>
                        <fieldset>
                            <label htmlFor="confirmPassword">
                                Confirmer le Mot de passe
                            </label>
                            <input type="password" name="confirmPassword" id="confirmPassword" onChange={handleChangeConfirmPassword}/>
                        </fieldset>
                        {value.password === value.confirmPassword && (
                        <button type="submit">Inscription</button>
                    
                    )}
                        
                    </form>
                )
            }

            { 

                value.submitted === true && (
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
                            <input type="text" name="lastName" id="lastName"  value={value.lastName} onChange={handleChangeLastName}/>
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
                            <input type="password" name="confirmPassword" id="confirmPassword" value={value.confirmPassword} onChange={handleChangeConfirmPassword}/>
                        </fieldset>                    
                        <p>Dernier utilisateur : {value.firstName} {value.lastName}</p>
                    </form>
                )
                
            }
            
            
        </>
    );
};

export default SignUpForm;