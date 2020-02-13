import React from 'react';
import './resources/styles.css';
import Header from './components/header_footer/header';
import Featured from './components/featured';
import VenueInfo from './components/venueinfo/VenueInfo';
import HighLights from './components/Highlights';
import Pricing from './components/pricing';
import Location from './components/location';
import Footer from './components/header_footer/Footer'
import {Element} from 'react-scroll';

class App extends React.Component {
    render(){
        return(
            <div className="App" style={{height:"1500px"}}>
                <Header/>
                <Element name="featured">
                <Featured/>
                </Element>
                <Element name="venueinfo">
                <VenueInfo/>
                </Element>
                <Element name="highlights">
                <HighLights/>
                </Element>
                <Element name="pricing">
                <Pricing/>
                </Element>
                <Element name="location">
                <Location/>
                </Element>
                <Footer/>
            </div>
        );
    }
}

export default App;