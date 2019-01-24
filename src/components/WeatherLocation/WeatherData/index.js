import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import {
    CLOUDY,
} from './../../../constants/weathers';
import './styles.css';

const WeatherData = () => (
    <div className="weatherDataCont">
        <WeatherTemperature 
            temperature={20} 
            weatherState={CLOUDY}/>
        <WeatherExtraInfo humidity={80} wind={"10m/s"} />
    </div>
);

export default WeatherData;