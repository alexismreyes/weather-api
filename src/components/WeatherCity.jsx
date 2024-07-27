import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import ForecastWeather from './ForecastWeather';
import "../assets/WeatherCity.css"

const WeatherCity = ({current, location, forecast}) =>{

    const [forecastDays, setForecastDays] = useState([]);

    useEffect(()=>{

        for(let i=0; i<5; i++){
            const updatedForecastDays = forecast.forecastday.map((fday)=>{
                const [year, month, day] = fday.date.split('-').map(Number);
                const date = new Date(year, month - 1, day);
                const options = { weekday: 'long' };
                const dayName = new Intl.DateTimeFormat('en-US', options).format(date);
                /* console.log('date->',forecast.forecastday[i].date);
                console.log('dayname->',dayName); */                
                return {
                    date: fday.date,
                    dayname: dayName,
                    avgTmp: fday.day.avgtemp_c,
                    icon: fday.day.condition.icon,
                    rainChance: fday.day.daily_chance_of_rain,
                };

            });      
                        
            setForecastDays(updatedForecastDays);
        }     
    },[]);

    useEffect(()=>{
        console.log('forecastDays ->',forecastDays);
    },[forecastDays]);

    return (
        <>
        <p><img src={current.condition.icon}/></p>
        <span className='title-weather'>{ location.name }</span>
        <p className='text-weather'><span>Temperature °C: { current.temp_c }</span></p>
        <p className='text-weather'><span>Condition: { current.condition.text }</span></p>
        <div className='forecast-weather'>
        {
            forecastDays && (
                forecastDays.map((dayli,index)=>( 
                    <div key={index}>
                        { index > 0 && ( /*to hide forecast current day */
                            <ForecastWeather dayli={dayli} />
                        )}
                        
                    </div>                   
                ))           
            )          
        }
        </div> 
        
        </>
    )
}

WeatherCity.propTypes = {
    current: PropTypes.shape({
        temp_c: PropTypes.number.isRequired,
        condition: PropTypes.shape({
            text: PropTypes.string.isRequired,
            icon: PropTypes.string.isRequired,
        })
    }).isRequired,

    location: PropTypes.shape({
        name: PropTypes.string.isRequired
    }).isRequired,

    forecast: PropTypes.shape({
        forecastday: PropTypes.array,
        date: PropTypes.string
    }).isRequired,

}

export default WeatherCity