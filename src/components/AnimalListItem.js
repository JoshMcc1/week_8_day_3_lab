import React from 'react';
import BuyButton from './BuyButton';

const AnimalListItem = ({ animal, onBuyButtonSubmit }) => {



    return (
        <li>
            <h3>Animal Name : {animal.name}</h3>
            <p>Animal Type : {animal.type}</p>
            <p>Price : {animal.price}</p>
            <BuyButton onBuyButtonSubmit={onBuyButtonSubmit} animal={animal} />
        </li>
    )
}
export default AnimalListItem;