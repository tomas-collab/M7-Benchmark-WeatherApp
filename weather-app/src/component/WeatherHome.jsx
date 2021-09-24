import { useEffect,useState } from "react"
import { FormControl } from "react-bootstrap"
import WeatherCard from "./WeatherCard"

const Home = ()=>{
    const [weather, setWeather] = useState(null)
    const [query, setQuery] = useState('london')
    const [metrics, setMetrics] = useState('')
   
    useEffect(() => {
      fetchData()
    }, [query,metrics])

    const fetchData = async()=>{
         const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=${metrics}&APPID=67b85ad588b7a77330f69a6edbe7ce31`)
         if(response.ok){
             let data = await response.json()
             console.log("weather",data)
             setWeather(data)
         }
    }
    
    return(
             <>
             <FormControl
                          placeholder="Search City Weather"
                          className='search-city'
                         
                          value={query}
                          onChange={e => {
                            setQuery(e.target.value)
                          }}
                         
               />
                 {weather && <WeatherCard metrics={metrics} setMetrics={setMetrics} data={weather}/>}
           
            </>
            
    )
}
export default Home