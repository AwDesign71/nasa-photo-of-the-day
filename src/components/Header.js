import React from 'react';
import Img from './nasalogo.png';
import styled from 'styled-components';
const Position = styled.img `
    width: 200px;
    height: 69px;
    margin: 20px;
`;
const Image = (props)=> {
    const img = Img;
    return(
    <>
    <Position src = {img} alt = 'logo of nasa' />
   </>); 

}
export default Image