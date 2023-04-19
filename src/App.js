import coldBg from './assets/cold.jpg';
import Descriptions from './components/Descriptions';
// import './App.css';
import { useEffect, useState } from 'react';
import { getFormatedWeatherData } from './weatherService';

function App() {
  const[weather, setWeather] = useState(null);
  const [units, setUnits] = useState("metric");

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getFormatedWeatherData('paris', units);
      console.log(data);
      setWeather(data); 
    };
    fetchWeatherData();
    
  }, []);
  return (
    <div className="App" style={{ backgroundImage: `url(${coldBg})` }}>
      <div className='overlay'>
        {
          weather && ( 
            <div className='container'>
            <div className='section section__inputs'>
              <input type="text" name="city" placeholder='Enter City...'/>
              <button>f</button>
            </div>
            <div className='section section__temperature'>
              <div className='icon'>
                <h2>{`${weather.name}, ${weather.country}`}</h2>
                <img src={weather.iconURL} alt='weatherIcon'/>
                <h3>{weather.description}</h3>
              </div>
              <div className='temperature'>
                <h1>{`${weather.temp.toFixed()} °${units ==='metric' ? 'C' : 'F'}`}</h1>
              </div>
            </div>
            {/* Bottom description */}
            <Descriptions weather={weather} units={units}/>
          </div>
          )
        }
        
      </div>
    </div>
  );
}

export default App;
