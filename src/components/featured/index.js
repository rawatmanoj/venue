import React from 'react';
import Slider from "react-slick";
import Carrousel from './Carrousel';
import TimeUntil from './TimeUntil';
const Featured = () => {
    return (
        <div style={{position:'relative'}}>

          <Carrousel/>

            <div className="artist_name">

                <div className="wrapper">
                     Ariana Grande
                </div>

            </div>
           <TimeUntil/>
        </div>
    );
};
 
export default Featured;