// MUI Imports
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CloudIcon from '@mui/icons-material/Cloud';
import Brightness1Icon from '@mui/icons-material/Brightness1';

import "../App.css";
import axios from 'axios';
import { useEffect, useState } from 'react';
import moment from 'moment'


const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
    );

export default function BasicCard({City}) {
    const activeCity = City || "Sohag";

    let [country, setCountry] = useState("");
    let [temp, setTemp] = useState(null);
    let [description, setDescription] = useState(null);
    let [maxTemp, setMaxTemp] = useState(null);
    let [minTemp, setMinTemp] = useState(null);
    let [icon, setIcon] = useState(null);
    let [time, setTime] = useState(null);
    const [cityName, setCityName] = useState('');


    
    useEffect(() => {
            const controller = new AbortController();
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${activeCity}&units=metric&lang=ar&appid=187527bb2d3550adefc739d1cb228bb4`, {
            signal: controller.signal
            
        })
        .then((response) => {

            console.log(response.data);
            setTemp(response.data.main.temp);
            setDescription(response.data.weather[0].description);
            setMaxTemp(response.data.main.temp_max);
            setMinTemp(response.data.main.temp_min);
            setIcon(`https://openweathermap.org/payload/api/media/file/${response.data.weather[0].icon}.png`);
            setCityName(activeCity || "Sohag");
            setTime(moment().format('MMMM Do YYYY, h:mm:ss a'));

        })
        .catch((error) => {
            console.error(error);
        })
        return () => {
        controller.abort();
        };
    
    }, [City]);

    
    return (
    <Card sx={{ minWidth: 275, backgroundColor: 'rgba(255, 255, 255, 0.1)', color: 'white' }}>
        <CardContent>
        <div className="card-content" dir='ltr'> 
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <h1 style={{ margin: 0 , marginRight: '10px' }}>{cityName}</h1>
                <p style={{ margin: 2 }}>{time}</p>
            </div>
            <hr style={{ border: '1px solid white', margin: '10px 0' }} />

            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '20px' }}>
                <div>
                    <CloudIcon style={{ fontSize: 150, color: 'white' }} />
                </div>
                <div className="card-info" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    
                    {/* التعديل هنا: استخدام Flexbox لوضع الرقم والدائرة بجانب بعضهما */}
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
                    {/* <Brightness1Icon className="temp-icon" style={{ color: tempcolor }} /> */}
                    <img src={icon} alt="Weather Icon" style={{ width: '50px', height: '50px' }} />
                        <p style={{ fontSize: 50, margin: 0 }}>{temp}°</p>
                        
                    </div>

                    <span style={{ fontSize: 20, margin: '10px 0' }}>{description}</span>
                    <span style={{ fontSize: 18 }}>Min: {minTemp}°C | Max: {maxTemp}°C</span>
                </div>
            </div>
        </div>
        </CardContent>

        
    </Card>
    );
    }