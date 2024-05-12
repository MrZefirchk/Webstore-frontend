import React from 'react';

function BraceletItem(props) {
    const formatPrice = (price) => {
        return `${price.toFixed(2)} $`;
    };

    return (
        <div className='bracelet'>
            <div className='bracelet__image'>
                <img src="https://dolls-for-all.onrender.com/photos/Alice.jpg" />
            </div>
            <div>
                {props.bracelet.name}
            </div>
            <div>
                {props.bracelet.description}
            </div>
            <div>
                Price: {formatPrice(props.bracelet.price)}
            </div>
            <button>Buy</button>
        </div>
    );
}

export default BraceletItem;