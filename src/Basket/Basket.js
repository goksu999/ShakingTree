import React from 'react';
import BasketIcon from '../icons/basket-icon';
import AppleIcon from '../icons/apple-icon';
import { useSelector } from 'react-redux';
import './Basket.scss';

const Basket = (props) => {
    const isFinalized = useSelector((state) => state.shake.finalize);
    const apples = new Array(2).fill(0);
    return (
        <div className="basket-container">
            <BasketIcon size="100" />
            <div style={{display: isFinalized ? "block" : "none"}}>
            {apples.map((apple, index) => <AppleIcon key={index} size="24" />)}
            </div>
            
        </div>
    );
};

export default Basket;