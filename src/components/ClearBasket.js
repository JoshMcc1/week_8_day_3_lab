import React, { useContext } from 'react'
import UserContext from '../context/UserContext';

const ClearBasket = () => {

    const { onClearButtonSubmit } = useContext(UserContext)

    const handleSubmit = () => {
        onClearButtonSubmit();
    }



    return (
        <button onClick={handleSubmit}>Check out</button>
    )
}

export default ClearBasket;