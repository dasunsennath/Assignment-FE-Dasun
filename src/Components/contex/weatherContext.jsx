import { useState,createContext,useEffect } from "react";
import Data from '../../Data/cities.json';
import moment from "moment/moment";
import Cookies from 'js-cookie';
import { json } from "react-router-dom";

  
export const WeatherContext = createContext();

export function ContextProvider({children})
{
  
    const [weather,setWeather] = useState(null);
    const [filteredData,setFilteredData] = useState(null);

const fetchWeather =() => {
    const fiteredData = Data.List.map((item) => item.CityCode);
    const ids = fiteredData.join(",");
    console.log(ids)
    fetch(`${process.env.REACT_APP_API_URL}?id=${ids}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`).then((response) => {
        return response.json();
    }).then((data) => {
    
        setWeather(data);
        const save_data =JSON.stringify(data.list);
        const save_data_c = DataFiletering(save_data);
        if(save_data_c)
        {
            Cookies.set('weatherData',JSON.stringify(save_data_c),{ expires: new Date(Date.now() + 5 * 60 * 1000) });
        }
        
       
     

    })
    .catch((error) => {
        console.log(error);
    });
    

}


    const DataFiletering = (data) => { 
        const fiteredData = JSON.parse(data).map((item) => {
            const data = {
                id:item.id,
                dt:item.dt,
                time: new Date(item.dt * 1000).toLocaleTimeString("en-IN",{hour: 'numeric', minute: '2-digit', hour12: true }).replace(" ", ""),
                date: moment(new Date(item.dt * 1000)).format("MMM D"),
                name: item.name,
                country: item.sys.country,
                temp:item.main.temp,
                temp_min:item.main.temp_min,
                temp_max:item.main.temp_max,
                description:item.weather[0].description
             }
             return data;
                    });
            setFilteredData(fiteredData);
            return fiteredData;
        }

    
    useEffect(() => {
        const weatherData = Cookies.get('weatherData');
        console.log("taking")
        if(weatherData !== undefined)
        {
            setFilteredData(JSON.parse(weatherData));
        }else{
                fetchWeather();
        }


        },[]);
 
    const value = {
        weather,
        setWeather,
        filteredData,
        setFilteredData};


    return(
        <WeatherContext.Provider value={value}>
            {children}
        </WeatherContext.Provider>
    )
}
export default ContextProvider;