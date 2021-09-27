import { Col, ListGroup, ListGroupItem,Badge } from "react-bootstrap"
import {IoIosPartlySunny} from 'react-icons/io'
import { useSelector,useDispatch} from "react-redux"
import { useEffect,useState } from "react"
import { fillWeatherAction } from "../Action"
const WeatherCard = ({...props})=>{
    // const [metrics, setMetrics] = useState('')

    // const state = useSelector((state) => state )
    // const dispatch = useDispatch()

    // useEffect(() => {
     
    //     dispatch(fillWeatherAction(metrics))
    //   }, [metrics])
    return(
   
         <div className='weather-card d-flex'>
               
                <>
              <Col >
                <ListGroup className='weather-card-list'>
                   <h4><IoIosPartlySunny color="yellow"/> {props.state.city.name && props.state.city.name}</h4>
                          lattitude/longitude
                          <ListGroupItem variant="primary">{ props.state.city.coord && props.state.city.coord.lat}</ListGroupItem>
                          <ListGroupItem variant="primary">{ props.state.city.coord && props.state.city.coord.lon}</ListGroupItem>

                         <h4 className='mt-5'>change metrics</h4> 
                          
                
                         <button className='btn-dark mt-2' onClick={()=>props.setMetrics('imperial')}>Fahrenheit</button>
                         <button  className='btn-dark mt-2' onClick={()=>props.setMetrics('metric')}>Celcius</button>  
                </ListGroup>
            </Col>
               
            <Col >
                  <ListGroup className='weather-card-list'>
                           Weather
                           <ListGroupItem variant="primary">TempMax: {props.state.city.main && props.state.city.main.temp_max}</ListGroupItem>
                           <ListGroupItem variant="primary">TempMin: {props.state.city.main && props.state.city.main.temp_min} </ListGroupItem>
                           <ListGroupItem variant="primary">Humidity: {props.state.city.main && props.state.city.main.humidity} </ListGroupItem>
                     
                  </ListGroup>
                 
                  <ListGroup className='weather-card-list'>
                     {
                    props.state.city.weather && props.state.city.weather.map(w=>  
                            <ListGroupItem variant="primary">{w.description} </ListGroupItem> 
                              )
                       }
                  </ListGroup> 

                   <ListGroup className='weather-card-list'>
                     Wind
                            <ListGroupItem variant="primary">Degree:{props.state.city.deg?props.state.city.deg:'N/A'}</ListGroupItem>
                            <ListGroupItem variant="primary">Speed:{ props.state.city.deg?props.state.city.speed:'N/A'} </ListGroupItem>
                     
                   </ListGroup>
             </Col>  
         </div>
    )
}

export default WeatherCard