import React, { useEffect, useState } from 'react';
import './PlantListPage.css';
import PlantListItem from "../../components/PlantListItem/PlantListItem";
import * as plantAPI from '../../utilities/plants-api';

export default function PlantListPage({ handleDeletePlant }) {
    // eslint-disable-next-line
    const [plants, setPlants] = useState([]);

    useEffect(() => {
      async function getPlants() {
        const plants = await plantAPI.getAll();
        setPlants(plants);
      }
      getPlants();
    }, [])

    return (
      <>
        <h1>My Plants</h1>
        <div className="PlantListPage-grid">
            {plants.map(plant => 
                <PlantListItem 
                    plant={plant}
                    key={plant._id}
                    handleDeletePlant={handleDeletePlant}
                />
            )}

        </div>
      </>
    );
}