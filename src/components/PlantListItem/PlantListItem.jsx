import React from 'react';
import { Link } from 'react-router-dom';
import './PlantListItem.css';

export default function PlantListItem({ plant }) {
    return (
        <div className='form-container-button'>
            <Link to={{ pathname: '/plants/details', state: {plant} }}>
                <div className='panel-heading'>
                    <h3 className='panel-title'>{plant.name} - {plant.type}</h3>   
                </div>
            </Link>
        </div>
    )
}