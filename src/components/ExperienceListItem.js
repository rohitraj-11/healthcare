import React from 'react';
import { Link } from 'react-router-dom';

const ExperienceListItem = ( { experience} ) => (
   // <Link className="list-item" to={`/edit/${id}`}>
    <div>
        <div>
            <h3 className="list-item__title">{experience}</h3>
        </div>
   </div>
     
   // </Link>
);

export default ExperienceListItem;
