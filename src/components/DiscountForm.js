import React, { useCallback, useContext, useState } from 'react'
import UserContext from '../context/UserContext'

const DiscountForm = () => {

    const [inputDiscountCode, setInputDiscountCode] = useState("")
    const { discountCodes, basketTotal, setBasketTotal } = useContext(UserContext)

    const handleInputDiscountCode = (event) => {
        setInputDiscountCode(event.target.value)
    }

    const handleFormSubmit = () => {
        const code = discountCodes.filter((discountCode) => {
            return (
                discountCode === inputDiscountCode
            )
        })
        console.log(code)
        const newTotal = code.value * basketTotal
        console.log(newTotal)
        setBasketTotal(newTotal)

    }


    return (
        <form onSubmit={handleFormSubmit}>
            <label htmlFor='name' >Discount Code</label>
            <input type="text" id='name' required onChange={handleInputDiscountCode} />
            <input type="submit" value="Apply Discount" />
        </form>
    )
}

export default DiscountForm;