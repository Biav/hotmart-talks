import React from 'react';
import Article from '../UI/Article/Article';
import Button from '../UI/Button/Button';
import './Banner.scss';

const banner = () => (
    <div className="banner__container">
         <div className="banner__container-info">
             <div className="container-info__image">
                 <div className="container-info">
                    <div className="container-info__logo"></div>
                    <div className="container-info__local text-line text-spacing">
                        Madrid
                    </div>
                    <div className="container-info__date">
                        Juves 30 de noviembre de 2017
                    </div>
                    <div className="text-spacing">
                        Lammuca de Prado | 19:30H
                    </div>
                    <div className="container-info__subscription text-line text-spacing">
                        <Button btnType="button-success">
                            Quiero Inscribirme ahora
                        </Button>
                    </div>
                 </div>
             </div>

         </div>
         <div className="banner__container-description">
            <Article title = "Share knowledge, make friends, and have fun."
                     type  = "large"
                     description = "Hotmart Talks es la oportunidad de participar en un Happy Hour y aprovechar para conocer a personas que se dedican al emprendimiento, los productos digitales y el mercado de la innovación. Ideado y organizado por Hotmart, 'Talks' tiene lugar en bares o sitios que amalgaman happy hour con aprendizaje y cuenta siempre con la presencia de invitados especiales, proporcionando una experiencia placentera para todos. Es un momento dedicado a conversar, hacer amigos y crecer."/>
         </div>
    </div>
);

export default banner;