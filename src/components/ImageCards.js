import React from 'react';

const DataRequest = (props)=> {
    
    //Within the deconstructor there are a change state and state.
    //dataImage at 0 index is state, first state and setDataImg will set the state.
        return(
        <>
        <img className='position' src = {props.imageurl} alt = 'logo of nasa' />
        </>
           ); 
}

export default DataRequest;