import React from 'react';
import {useState} from 'react';
import {useEfect} from 'react';
import axios from 'react';

const DataRequest = ()=> {
    //const [dataImg, setDataImg] = useState();
    //useEfect(()=> {
        axios.get(`https://api.nasa.gov/EPIC/api/natural?api_key=DEMO_KEY`)
        .then(nasaImages=> {
         const images = nasaImages.data.image;
         setDataImg(nasaImages)
        //})
    }, dataImg[nasaImages])
}
console.log(dataImg)
export default DataRequest;