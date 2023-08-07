import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Wheather from './Wheather'
import {TiWeatherCloudy} from 'react-icons/ti';
import {BiSearchAlt} from 'react-icons/bi';
import './style.css'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {ImLocation2} from 'react-icons/im'
import {CiTempHigh} from 'react-icons/ci';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Search() {

    useEffect(()=>{
       

    },[])
    let[City,Setcity]=useState()
    let[Weather,SetWeather]=useState([])
    let [data,setdata]=useState(false)


    const getData=(e)=>{
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `https://pro.openweathermap.org/data/2.5/weather?q=${City}&appid=3500aa8ab775cb0cb97ead2b9fc41866&units=metric`,
            headers: { }
          };
          
          axios.request(config)
          .then((response) => {
            console.log(response.data)
            SetWeather((response.data))
            setdata(true)
          })
          .catch((error) => {
            console.log(error);
            console.log("incorrect")
            toast.error('Please enter correct city', {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              });
          });
        }
let mr=Math.round()
  return (
    <>
    <div>
        <div className='logo'>< TiWeatherCloudy />WheatherTrack</div>
        <div className="box">
            <div className="inp_des" >
            <input type="text" placeholder='Search City...' onChange={(e)=>Setcity(e.target.value)}  />
            <button onClick={(e)=>getData(e)} className='ser_btn'><BiSearchAlt className='ser'/></button>
            </div>
       </div>

      

        {
          data == true ?
       <div style={{margin:'auto'}} className='align-center'>

         <Card className='card_style'  style={{ borderRadius:"20px", width: '30rem' ,margin:'auto',marginTop:'40px'}}>
           <Card.Title className='mt-2 mx-2' variant="top">{Weather.name}<ImLocation2/></Card.Title>
           <h3>{Weather.weather[0].main}</h3>
         <Card.Body>
          <div className='w_pic'>
            <h1 style={{marginTop:'20px'}}><CiTempHigh/>{Math.round(Weather.main.temp)}°C</h1>
       <img src={`https://openweathermap.org/img/wn/${Weather.weather[0].icon}@2x.png`} />
          </div>
           <Card.Text>
           {Date(Date.now()).slice(0, 10)}
           </Card.Text>
           <div className='footer' >
           <p>Humadity <br/>{Weather.main.humidity}%</p>
           <p>Visibility<br/>{Weather.visibility/1000}Km</p>
           <p>Air Pressure<br/>{Weather.main.pressure}hpa</p>
           <p>Wind<br/>{Weather.wind.speed}mph</p>
           <ToastContainer />
           </div>
         </Card.Body>
       </Card>
       </div>
       :
       <h1>{}</h1>
    
      }
      
          
    </div>
    </>
  )
}
