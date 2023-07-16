import React, {useState, useEffect} from 'react';
import PlantCard from '../../components/PlantCard/PlantCard';
import { useLocation, Link } from 'react-router-dom';

export default function PlantDetailPage({handleDeletePlant, handleWaterPlant}) {
    const { state: {plant} } = useLocation();
    
    const calculateTimeLeft = () => {
        // eslint-disable-next-line
        let year = new Date().getFullYear();
        const difference = new Date(`${plant.nextWateringDate}`) - +new Date();
        let timeLeft = {};
    
        if (difference > 0) {
          timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            // seconds: Math.floor((difference / 1000) % 60),
          };
        }
    
        return timeLeft;
      };
    
      const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    
      useEffect(() => {
        setTimeout(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
      });
    
      const timerComponents = [];
    
      Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
          return;
        }
    
        timerComponents.push(
          <span>
            {timeLeft[interval]} {interval}{" "}
          </span>
        );
      });    

    return (
        <>
            <h1>Plant Detail</h1>
            <PlantCard 
                key={plant._id}
                plant={plant}
            />
            {/* Countown/timer here: */}
            <div className='form-container'>
                <h2>Time left until next watering: </h2>
                <h3>{timerComponents.length ? timerComponents : <span>Time to water {plant.name} today!</span>}</h3>
            </div>

            <Link 
                className='button'
                    to={{
                    pathname: '/plants/edit',
                    state: {plant}
                    }}
            >
                Edit Plant
            </Link>

            <Link
                className='button'
                    to={{
                    pathname: '/plants/confirm-water',
                    state: {plant}
                    }}
            >
                Water Me!
            </Link>

            <button
                className='button'
                onClick={() => handleDeletePlant(plant._id)}
            >
                Delete Plant
            </button>

            <div>
                <Link to='/plants'>Return to Plant List</Link>
            </div>
        </>
    );
}