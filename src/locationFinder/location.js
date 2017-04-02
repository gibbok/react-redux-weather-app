import React, { PropTypes } from 'react';

const Location = ({ onClick, name, country}) => (
    <li
        onClick={onClick}
    >
        {name} {country}
    </li>
);

export default Location;