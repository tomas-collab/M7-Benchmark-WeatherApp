import logo from './logo.svg';
import './App.css';
import WeatherNavBar from './component/WeatherNavBar';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { Container } from 'react-bootstrap';
import WeatherCard from './component/WeatherCard';
import Home from './component/WeatherHome';
import WeatherFooter from './component/Footer'
import WeatherJumbotron from './component/Jumbotron';
function App() {
  return (
        <div className='App'>
    <Router >
        <WeatherNavBar/>
        <WeatherJumbotron/>
          <Container>
              {/* <WeatherCard/> */}
              <Home/>
          </Container>    
        <WeatherFooter/>
    </Router>
    </div>
  );
}

export default App;
