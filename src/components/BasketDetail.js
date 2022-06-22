import React, { useContext } from 'react';
import UserContext from '../context/UserContext';
import ClearBasket from './ClearBasket';
import DiscountForm from './DiscountForm';


const BasketDetail = () => {

    const { user, basketTotal } = useContext(UserContext);
    // const {} =useContext(UserContext);

    const basket = user.basket.map((animal, index) => {
        return <li key={index}>
            <h2>{animal.name}</h2>
            <p>{animal.price}</p>

        </li>
    })


    return (
        <>
            <ul>
                {basket}
            </ul>
            <p>{basketTotal}</p>
            <DiscountForm />
            <ClearBasket />

        </>
    )

}

export default BasketDetail;