import React from 'react';
import './MovieTitle.css';

// MovieTitle component responsible for displaying a movie's title.
// It receives a 'title' prop.
const MovieTitle = ({ title, size }) => {

    // Check if 'title' is not defined, and if so, log a message and return null.
    if (!title) {
        console.log("Title is not defined.");
        return null;
    }

    switch(size){
        case 'moviedetail':
            return <h2 className="moviedetail-title">{title}</h2>; 

        default :
            // Determine the CSS class name based on the length of the title.
            const titleClassName = title.length > 20 ? 'title title-long' : 'title';
            // Render the movie title with the determined CSS class.
            return <h3 className={titleClassName}>{title}</h3>;
    }
};

export default MovieTitle;