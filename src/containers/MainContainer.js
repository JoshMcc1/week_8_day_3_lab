import React, { useState } from 'react';
import Header from '../components/Header'
import ZooContainer from './ZooContainer';
import UserContext from '../context/UserContext';

const MainContainer = () => {
    const [user, setUser] = useState({
        name: "James Jarvis",
        email: "james@cogc.ac.uk",
        basket: []
    });

    const [animals, setAnimals] = useState([
        { name: "Tony", type: "Tiger", price: 13000.99 },
        { name: "Dave", type: "Lion", price: 13050.99 },
        { name: "Bob", type: "Cat", price: 500.99 },
        { name: "Steve", type: "Bear", price: 130445.99 }
    ]);

    const [basketTotal, setBasketTotal] = useState(0);

    const [discountCodes, setDiscountCodes] = useState([
        { name: "DISCOUNT10", value: 0.9 },
        { name: "DISCOUNT20", value: 0.8 }
    ])

    const onBuyButtonSubmit = function (animal) {
        const updatedBasket = [...user.basket, animal];
        const updatedUser = { ...user, basket: updatedBasket };
        const updatedBasketTotal = basketTotal + animal.price;
        setBasketTotal(updatedBasketTotal);
        setUser(updatedUser);
    }

    const onClearButtonSubmit = () => {
        const updatedUser = { ...user, basket: [] };
        const updatedBasketTotal = 0;
        setBasketTotal(updatedBasketTotal);
        setUser(updatedUser);
    }

    return (
        <>
            <div>
                <Header />
                <UserContext.Provider value={({ animals, user, onClearButtonSubmit, basketTotal, discountCodes, setBasketTotal })}>
                    <ZooContainer onBuyButtonSubmit={onBuyButtonSubmit} />
                </UserContext.Provider>

            </div>
        </>
    );
}

export default MainContainer;