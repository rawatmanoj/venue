import React from 'react';
import Slider from "react-slick";
import Carrousel from './Carrousel';
const Featured = () => {
    return (
        <div style={{position:'relative'}}>

          <Carrousel/>

            <div className="artist_name">

                <div className="wrapper">
                     Ariana Grande
                </div>

            </div>
        </div>
    );
};
 
export default Featured;