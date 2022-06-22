import React, { useContext } from 'react';
import AnimalListItem from './AnimalListItem';
import UserContext from '../context/UserContext';


const AnimalList = ({ onBuyButtonSubmit }) => {

    const { animals } = useContext(UserContext);

    const animalListNodes = animals.map((animal, index) => {
        return <AnimalListItem key={index} animal={animal} onBuyButtonSubmit={onBuyButtonSubmit} />
    })

    return (
        <ul>
            {animalListNodes}
        </ul>
    )
}

export default AnimalList;