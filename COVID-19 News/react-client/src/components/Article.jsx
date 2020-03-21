import React from 'react';
import data from './data';

//needs changing to render a single article and its props pick between this and NewsItem...
const Article = ({title, calories, image}) => {

    return (
        <div>
            <h1>{title}</h1>
            <p>{calories}</p>
            <img src={image} alt={image}/>
        </div>
    );
};

export default Article;
