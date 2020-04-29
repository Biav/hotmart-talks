import React from 'react';
import PropTypes from 'prop-types';
import './Article.scss';

const article = ({title, description, type, size}) => {
    let clasessArticle = `container article__info ${type} ${size ? size: '' }`;

    return <div className={clasessArticle}>
        <div>
            {title}
        </div>
        <div dangerouslySetInnerHTML={{ __html: description}}></div>
    </div>
};

article.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    type: PropTypes.string,
    size: PropTypes.string
  };

export default article;