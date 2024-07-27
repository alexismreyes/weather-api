import { useEffect, useState } from "react"
import "../assets/Weather.css"
import WeatherCity from "./WeatherCity";

const Weather = () =>{
  
    const [currentData, setCurrentData] = useState({}); 
    const [location, setLocation] = useState('');  

    const apiKey = import.meta.env.VITE_API_KEY;
    const url = `${import.meta.env.VITE_API_URL}?key=${apiKey}&q=${location}&days=5`; 

    const getWeather = async(e) => {
        if(e.key === "Enter"){
            const response = await fetch(url);      
            const data = await response.json();      
            console.log(data);
            setCurrentData(data);
        }        
    }

    return (
        <>
        <div className="container">
            {   Object.keys(currentData).length === 0 && (
                    <div className="weather-container">
                    <h1 className="title-weather">Weather Forecast</h1>
                    <input 
                    type="text" 
                    placeholder="Enter a city" 
                    className="input-search" 
                    onKeyDown={getWeather} 
                    onChange={
                        (e)=> setLocation(e.target.value)
                    }
                    />
                </div>
            )
            }    

            { Object.keys(currentData).length>0 && (
                <div className="weather-container">                             
                    <input 
                    type="text" 
                    placeholder="Enter a city" 
                    className="input-search" 
                    onKeyDown={getWeather}
                    onChange={
                        (e)=> setLocation(e.target.value)
                    }
                     />
                    <WeatherCity 
                        current={currentData.current} 
                        location={currentData.location} 
                        forecast={currentData.forecast}
                    />                
                </div>        
            )}
        </div>              

        </>
    )
    
}

export default Weather