import { Card,Button } from "react-bootstrap"
import {IoIosPartlySunny} from 'react-icons/io'
import {FaCloudMoonRain} from 'react-icons/fa'
const WeatherJumbotron =()=>{
    return(
        <div className=" weather-jumbotron">
                <Card.Header >Weather APP</Card.Header>
                <Card.Body >
                    <Card.Title >Search Current Weather across the globe</Card.Title>
                    <Card.Text >
                          <IoIosPartlySunny color="yellow"/>East to the West<FaCloudMoonRain color="black"/>
                    </Card.Text>
                    {/* <Button variant="light">Further info</Button> */}
                </Card.Body>
                <Card.Footer className="text-muted">last Searched 3 days ago</Card.Footer>
</div>
    )
}
export default WeatherJumbotron