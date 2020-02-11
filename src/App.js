import React from 'react';
import './resources/styles.css';
import Header from './components/header_footer/header'
import Featured from './components/featured'
import { lightBlue } from '@material-ui/core/colors';

class App extends React.Component {
    render(){
        return(
            <div className="App" style={{height:"1500px",backgroundColor:"lightBlue"}}>
                <Header/>
                <Featured/>
            </div>
        );
    }
}

export default App;