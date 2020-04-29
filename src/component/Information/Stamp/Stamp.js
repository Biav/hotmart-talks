import React from 'react';
import StampItem from './StampItem/StampItem';

const stamp = () => {
    const stampInfo = {
        title: '¡Compra tu billete ahora!',
        local: 'Madrid',
        date: '30 de Noviembre',
        price: '€27,00',
        button: 'Comprar'
    };

    return (<div className="stamp">
        <StampItem stampInfo = {stampInfo}/>
    </div>)
};

export default stamp;