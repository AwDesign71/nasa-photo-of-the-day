import React,{useState,useEffect} from 'react';
import "./App.scss";
import Image from './components/Header';
import DataRequest from './components/ImageCards';
import FooterContent from './components/Footer';
import axios from 'axios';
import styled from 'styled-components';
import Wallpaper from './components/space-wallpaper-5.jpg';
//Styling the header using styled-components
const HeaderImage = styled.div `
background-image: url(${Wallpaper});
 width: 100%;
 height: 650px; 
`;
//Now styling the footer
const Footer = styled.footer `
width: 100%;
height: 150px;
color: #eed;
background: #060e19;
`;
//Styling the data
const NasaApi = styled.section `
 border-radius: 100%;
 margin: 13px 15% 33px 8%;
`;
const Cpyrght = styled.div `
margin: -20px 15% 20px 50%;
font-weight: bold;
`;
const Ptag = styled.p `
margin: 13px 15% 33px 48%;
`;
function App() {
  const [dataImg, setDataImg] = useState({})
  function getData() {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=x1Do4cxZ0nN03XOZWYT6rfqbHSsVdYNdGnkMYhU3&date=2019-07-15`)
    .then(response=> {
     //const images = response.data;  
     setDataImg(response.data)

     console.log(response.data)
    }).catch(error=>{
        console.log(error);
    })
  }
  useEffect(()=> {
     getData();
  }, [])
  return (
    <div className="App">
      <HeaderImage>
      <Image />
      </HeaderImage>
      <NasaApi>
      <h1>{dataImg.title}</h1>
      <h3>{dataImg.date}</h3>
      <DataRequest imageurl = {dataImg.url} />
      <Cpyrght>Media type: {dataImg.media_type}</Cpyrght>
      <Ptag>Copyright &copy; {dataImg.copyright}</Ptag>
      <p>{dataImg.explanation}</p>
      </NasaApi>
      <Footer>
        <FooterContent />
      </Footer>
    </div>
  );
}

export default App;
 