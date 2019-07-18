import React from 'react';
import styled from 'styled-components';
//Styling the image data
const NasaApi = styled.img `
 border-radius: 100%;
 margin: 33px 15% 33px 18%;
`;
const DataRequest = (props)=> {
    
    //Within the deconstructor there are a change state and state.
    //dataImage at 0 index is state, first state and setDataImg will set the state.
        return(
        <>
        <NasaApi src = {props.imageurl} alt = 'logo of nasa' />
        </>
           ); 
}

export default DataRequest;