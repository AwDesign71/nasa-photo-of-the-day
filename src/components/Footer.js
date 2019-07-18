import React from 'react';
import styled from 'styled-components';

const H2Tag = styled.h2 `
width: 270px;
padding: 60px 40%;

`;
const FooterContent = ()=> {
    
    return(
        <>
        <H2Tag>Nasa &copy; Copyright 2019</H2Tag>
        </>
    );
}
export default FooterContent;