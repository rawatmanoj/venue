import React from 'react';
import './resources/styles.css';
import Header from './components/header_footer/header'

class App extends React.Component {
    render(){
        return(
            <div className="App">
                <Header/>
            </div>
        );
    }
}

export default App;