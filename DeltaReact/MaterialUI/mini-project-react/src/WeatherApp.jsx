import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";


export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({city: "Delhi",
        feelsLike: 0,
        temp: 0,
        tempMin: 856,
        tempMax: 90349,
        humidity: 8098,
        weather: "haze",});

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }
    return (
        <div style={{textAlign: "center"}}>
            <h1>Weather App by Aditya</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}