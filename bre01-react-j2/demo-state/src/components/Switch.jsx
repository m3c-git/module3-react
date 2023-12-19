import { useState } from "react";

const Switch = (props) => {
    const [message, setMessage] = useState('off');

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