import React from 'react';
import PropTypes from 'prop-types';

import './ListItem.css';

const ListItem = ({image, name, description, twitterLink}) => (
    <li className="listItem__wrapper">
        <img 
            src={image} 
            className="listItem__image"
            alt = {name}
        />
        <div>
        <h2 className="listItem__title">{name}</h2>
        <p className="listItem__text">{description}</p>
        <a className="listItem__btn" href={twitterLink} target="_blank">visit twitter page</a>
        </div>
    </li>
);

ListItem.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    twitterLink: PropTypes.string.isRequired,
};

ListItem.defaultProps = {
    description: "One of the React creators",
}

export default ListItem;