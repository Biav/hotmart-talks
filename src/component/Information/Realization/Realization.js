import React from 'react';
import Article from '../../UI/Article/Article';
import './Realization.scss';

const realization = () => {

    const realization = {
        title: 'Idealización y realización',
        size: 'large',
        type: 'article-column',
        description: '<b>Hotmart</b> es líder en la venta y distribución de infoproductos en toda Latinoamérica y ha permitido que miles de personas trabajen con lo que más aman, vendiendo y divulgando productos digitales en todo el mundo.<br/><br/> Debido al interés del mercado europeo por el segmento de productos digitales, Hotmart posee una sede en Madri y actúa también en Holanda y Francia. Ahora, la empresa sintió que tiene mucho para compartir con los profesionales locales y decidió promover un encuentro entre ellos: <b>especialistas y personas de diferentes áreas que, al igual que tú, están interesadas en aprender y compartir sus experiencias para darle un nuevo sentido a sus trayectorias profesionales.</b>',

    };

    return <div className="realization-container">
        <Article title = {realization.title}
                 size  = {realization.size}
                 type  = {realization.type}
                 description = {realization.description}/>
        
    </div>
};

export default realization;