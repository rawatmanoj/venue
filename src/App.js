import React from 'react';
import './resources/styles.css';
import Header from './components/header_footer/header'
import Featured from './components/featured'
import VenueInfo from './components/venueinfo/VenueInfo'
import HighLights from './components/Highlights'

class App extends React.Component {
    render(){
        return(
            <div className="App" style={{height:"1500px"}}>
                <Header/>
                <Featured/>
                <VenueInfo/>
                <HighLights/>
            </div>
        );
    }
}

export default App;