import React from 'react';
import AnimalList from "../components/AnimalList";
import BasketDetail from '../components/BasketDetail';

const ZooContainer = ({ onBuyButtonSubmit }) => {

    return (
        <div >
            <h2>Animals for Sale</h2>
            <AnimalList onBuyButtonSubmit={onBuyButtonSubmit} />
            <BasketDetail />
        </div>

    )
}

export default ZooContainer;