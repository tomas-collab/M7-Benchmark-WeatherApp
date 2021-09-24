import { Col, ListGroup, ListGroupItem,Badge } from "react-bootstrap"
import {IoIosPartlySunny, IoMdColorFill} from 'react-icons/io'
const WeatherCard = ({data,setMetrics})=>{

    return(
         <div className='weather-card d-flex'>
             
            <Col >
                <ListGroup className='weather-card-list'>
                   <h4><IoIosPartlySunny color="yellow"/> { data.name}</h4>
                    lattitude/longitude
                   <ListGroupItem variant="primary">{ data.coord.lat}</ListGroupItem>
                   <ListGroupItem variant="primary">{  data.coord.lon}</ListGroupItem>

                    <h4 className='mt-5'>change metrics</h4>
                  
                   <button className='btn-dark mt-2' onClick={()=>setMetrics('imperial')}>Fahrenheit</button>
                   <button  className='btn-dark mt-2' onClick={()=>setMetrics('metric')}>Celcius</button>
                </ListGroup>
            </Col>
               
            <Col >
                <ListGroup className='weather-card-list'>
                    Weather
                     <ListGroupItem variant="primary">TempMax: { data.main.temp_max}</ListGroupItem>
                     <ListGroupItem variant="primary">TempMin: { data.main.temp_min} </ListGroupItem>
                     <ListGroupItem variant="primary">Humidity: { data.main.humidity} </ListGroupItem>
                     
                </ListGroup>
                <ListGroup className='weather-card-list'>
                {
                         data.weather.map(w=>
                            // <ListGroupItem>TempMax: {w.description}</ListGroupItem>
                            <ListGroupItem variant="primary">{w.description} </ListGroupItem>
                            
                            )
                     }
                </ListGroup>
                <ListGroup className='weather-card-list'>
                    Wind
                     <ListGroupItem variant="primary">Degree:{data.deg?data.deg:'N/A'}</ListGroupItem>
                     <ListGroupItem variant="primary">Speed:{ data.deg?data.speed:'N/A'} </ListGroupItem>
                     
                </ListGroup>
            </Col>
         </div>
    )
}

export default WeatherCard