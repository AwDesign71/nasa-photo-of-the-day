import React from 'react';
import Img from './nasalogo.png';
const Image = (props)=> {
    const img = Img;
    return(
    <>
    <img src = {img} alt = 'logo of nasa' />
   </>); 

}
export default Image