import React from "react";

const BuyButton = ({ animal, onBuyButtonSubmit }) => {
    const handleSubmit = () => {
        onBuyButtonSubmit(animal)
    }
    return (
        <button onClick={handleSubmit}>Add to basket</button>
    );
}

export default BuyButton;