import React,{useState,useEffect} from 'react';
import "./App.scss";
import Image from './components/Header';
import DataRequest from './components/ImageCards';
import FooterContent from './components/Footer';
import axios from 'axios';

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
      <div className='AppDivs'>
      <Image />
      </div>
      <section>
      <h1 className='position'>{dataImg.title}</h1>
      <h3 className='position'>{dataImg.date}</h3>
      <DataRequest imageurl = {dataImg.url} />
      <div className='media'>Media type: {dataImg.media_type}</div>
      <p className='position'>Copyright &copy; {dataImg.copyright}</p>
      <p className='position'>{dataImg.explanation}</p>
      </section>
      <footer>
        <FooterContent />
      </footer>
    </div>
  );
}

export default App;
