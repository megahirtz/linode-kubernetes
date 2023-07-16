import React, { useState } from 'react';
import { Route, Switch, useHistory, Redirect } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import * as plantAPI from '../../utilities/plants-api';

import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import HomePage from '../HomePage/HomePage';
import PlantListPage from '../PlantListPage/PlantListPage';
import PlantDetailPage from '../PlantDetailPage/PlantDetailPage';
import AddPlantPage from '../AddPlantPage/AddPlantPage';
import EditPlantPage from '../EditPlantPage/EditPlantPage';
import WaterPlantPage from '../WaterPlantPage/WaterPlantPage';


export default function App(props) {
  const [user, setUser] = useState(getUser());
  const [plants, setPlants] = useState([]);
  const history = useHistory();

  async function handleAddPlant(newPlantData) {
    const newPlant = await plantAPI.add(newPlantData);
    setPlants([...plants, newPlant]);
    history.push('/plants');
  }
  
  async function handleUpdatePlant(updatedPlantData) {
    const updatedPlant = await plantAPI.update(updatedPlantData);
    const newPlantArray = plants.map(plant => {
      return plant._id === updatedPlant._id ? updatedPlant : plant
    })
    setPlants(newPlantArray);
    history.push('/plants');
  }

  async function handleDeletePlant(plantId) {
    await plantAPI.deleteOne(plantId);
    setPlants(plants.filter(plant => plant._id !== plantId));
    history.push('/plants');
  }

  async function handleWaterPlant(wateredPlantData) {
    const wateredPlant = await plantAPI.updateWatered(wateredPlantData);
    const wateredPlantArray = plants.map(plant => {
      return plant._id === wateredPlant._id ? wateredPlant : plant
    })
    setPlants(wateredPlantArray);
    history.push('/plants');
  }


  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Switch>

              <Route exact path="/">
                <HomePage 
                  handleAddPlant={handleAddPlant}
                />
              </Route>

              <Route exact path="/plants/add">
                <AddPlantPage 
                  handleAddPlant={handleAddPlant}
                />
              </Route>

              <Route exact path='/plants'>
                <PlantListPage 
                  plants={plants}
                />
              </Route>

              <Route exact path='/plants/edit'>
                <EditPlantPage 
                  handleUpdatePlant={handleUpdatePlant}
                />
              </Route>

              <Route exact path='/plants/confirm-water'>
                <WaterPlantPage
                  plants={plants} 
                  handleWaterPlant={handleWaterPlant}
                />
              </Route>
              
              <Route exact path='/plants/details'>
                <PlantDetailPage 
                  plants={plants}
                  setPlants={setPlants}
                  handleUpdatePlant={handleUpdatePlant}
                  handleDeletePlant={handleDeletePlant} 
                  handleWaterPlant={handleWaterPlant}
                />
              </Route>

              <Redirect to="/plants"/>
            </Switch>
          </>
        :
          <AuthPage setUser={setUser}/>
      }
    </main>
  );
}
