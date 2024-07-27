import PropTypes from 'prop-types';
import '../assets/ForecastWeather.css';

const ForecastWeather = ({dayli}) => {

    return (
        <>
        <div className='dayli-forecast'>
        <ul className='forecast-ul'>  
            <li> <img src={dayli.icon}/></li>            
            <li> {dayli.dayname} </li>            
            <li> {dayli.date} </li>            
            <li> {dayli.avgTmp} °C </li>
            <li> Rain: {dayli.rainChance} % </li>
        </ul>
        </div>
        </>       
    )

}

ForecastWeather.propTypes = {
    dayli: PropTypes.shape({
        icon: PropTypes.string.isRequired,
        dayname: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        avgTmp: PropTypes.number.isRequired, 
        rainChance: PropTypes.number.isRequired,        
    }).isRequired,

}

export default ForecastWeather