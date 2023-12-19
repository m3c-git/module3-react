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