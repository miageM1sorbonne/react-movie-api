import React from 'react';
import './MovieTitle.css';

// It receives a 'title' prop.
const MovieTitle = ({ title }) => {
    // Check if 'title' is not defined, and if so, log a message and return null.
    if (!title) {
        console.log("Title is not defined.");
        return null;
    }

    // Determine the CSS class name based on the length of the title.
    const titleClassName = title.length > 20 ? 'title title-long' : 'title';

    return <h3 className={titleClassName}>{title}</h3>;
};

export default MovieTitle;
