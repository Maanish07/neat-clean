import React, { useState } from 'react';
import Pricing from './Pricing';
import Form from './Form';

const Parentcomp = () => {
    const [selectedPrice, setSelectedPrice] = useState(null);

    const handlePriceSelect = (price) => {
        setSelectedPrice(price);
    };

    return (
        <div>
            <Pricing onPriceSelect={handlePriceSelect} />
            <Form price={selectedPrice} />
        </div>
    );
};

export default Parentcomp;

