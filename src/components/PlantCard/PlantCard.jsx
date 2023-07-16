import React from 'react';

export default function PlantCard({ plant }) {
    
    return (
        <>
        <div className='form-container'>
            <h2>Name: {plant.name}</h2>
            <h3>Plant Type: {plant.type}</h3>
            <h4>Date Planted: {plant.datePlanted}</h4>
            <h4>Last watered: {plant.prettyWateringDate}</h4>
            <h4>Next Watering Date: {plant.nextWateringDate}</h4> 
        </div>
        <br/>
        </>
    );
}