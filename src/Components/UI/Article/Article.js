import React from 'react';
import './Article.scss';

const article = ({title, description, type}) => {
    let clasessArticle = `container article__info ${type ? type: '' }`;

    return <div className={clasessArticle}>
        <div>
            {title}
        </div>
        <div>
            {description}
        </div>
    </div>
};

export default article;