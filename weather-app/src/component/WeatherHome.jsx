import { useEffect,useState } from "react"
import { FormControl } from "react-bootstrap"
import WeatherCard from "./WeatherCard"
import { fillWeatherAction } from "../Action"
import {useSelector,useDispatch} from 'react-redux'
const Home = ()=>{
    const [weather, setWeather] = useState(null)
    const [query, setQuery] = useState('london')
    const [metrics, setMetrics] = useState('')

    const state = useSelector(state => state)
    const dispatch = useDispatch()
   console.log('stateeeeee',state)
    useEffect(() => {
     
        dispatch(fillWeatherAction(query,metrics))
       
    }, [metrics,query])
   

    // const fetchData = async()=>{
    //      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=${metrics}&APPID=67b85ad588b7a77330f69a6edbe7ce31`)
    //      if(response.ok){
    //          let data = await response.json()
    //          console.log("weather",data)
    //          setWeather(data)
    //      }
    // }

    return(
             <>
             <FormControl
                          placeholder="Search City Weather"
                          className='search-city'
                         
                          value={query}
                          onChange={e => {
                            setQuery(e.target.value)
                            dispatch(fillWeatherAction(e.target.value))

                          }}
                         
               />
                 { <WeatherCard metrics={metrics} setMetrics={setMetrics} state={state}/>}
           
            </>
            
    )
}
export default Home