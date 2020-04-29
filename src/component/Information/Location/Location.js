import React from 'react';
import Article from '../../UI/Article/Article';
import './Location.scss';

const location = () => {

    const locationInfo = {
        title: 'Una noche de diversión y aprendizaje en Lamucca de Prado',
        type: 'article-row',
        description: 'Fundado en 2010 en el corazón de Madrid, el restaurante Lamucca combina la elegancia de los techos altos y los grandes ventanales que dan a las Calles de Prado y León, con el estilo industrial vintage. Un ambiente divertido, moderno y agradable con una carta estupenda, ideal para los más diversos tipos de eventos. ',
    };

    return <div className="location">
        <div className="location-container container">
            <Article title = {locationInfo.title}
                 type = {locationInfo.type}
                 description = {locationInfo.description}/>
            <div className="location-info">
                <div className="location-info__name">Calle Prado 16 | </div>
                <a className="location-info__site text-underline text-small" href="www.lamucca.es">
                    <span>www.lamucca.es</span>
                </a>
            </div>
            <div className="location-photos">
                <div className="photo-local-1"></div>
                <div className="photo-local-2"></div>
                <div className="photo-border">
                    <div className="photo-local-3"></div>
                </div>
            </div>
        </div>
    </div>
};

export default location;