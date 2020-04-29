import React from 'react';
import Button from  '../../../UI/Button/Button';
import '../Stamp.scss';

const stampItem = ({stampInfo}) => {  
    return <div className="stamp-container container">
        <div className="stamp-lines">

        </div>
        <div className="stamp-item">
            <div className="stamp-item__title">
                {stampInfo.title}
            </div>
            <div className="stamp-item__image"></div>
            <div className="stamp-item__local text-line text-spacing">
                {stampInfo.local}
            </div>
            <div className="stamp-item__date">
                {stampInfo.date}
            </div>
            <div className="stamp-item__price">
                {stampInfo.price}
            </div>
            <div className="stam-item__buy">
                <Button btnType="button-success">
                    Comprar
                </Button>
            </div>
        </div>
    </div>
};

export default stampItem;