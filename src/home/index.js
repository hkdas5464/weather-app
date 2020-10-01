import React, { useState, useEffect } from 'react';

//import MuiTheme from '@material-ui/core/styles/MuiThemeProvider';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

import LocationOnIcon from '@material-ui/icons/LocationOn';
import IconButton from '@material-ui/core/IconButton';



import './style.css';

import sun from './sun.png';
import moon from './moon.png'


function Index(props) {
    const [state, setstate] = useState('0')
    const [time, settime] = useState(null);


    var d = new Date();
    var n = d.getHours();
    console.log(n)
    // if(n==11) {

    //     setstate({ name: '1'});

    //   } 
    //     {
    //         if (n === '11') {
    //         setstate("0");  // is this ok in if?
    //       }
    // }
    useEffect(() => {
        var unixTimestamp = props.timezone;
        var n = new Date(unixTimestamp * 1000).getHours();
        if (n > 6 && n < 18) {
            setstate('1')
        }

    });
    ///////////////

    var totaltime = props.timezone;
    var newtime = new Date(totaltime * 1000).toLocaleString()


    //////////////////
    let unix_timestamp = props.sunrise;
    let unix_timestamp1 = props.sunset;

    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    var date = new Date(unix_timestamp * 1000);
    var date1 = new Date(unix_timestamp1 * 1000);
    // Hours part from the timestamp
    var hours = date.getHours();
    var hours1 = date1.getHours();
    // Minutes part from the timestamp
    var minutes = "0" + date.getMinutes();
    var minutes1 = "0" + date1.getMinutes();
    // Seconds part from the timestamp
    var seconds = "0" + date.getSeconds();
    var seconds1 = "0" + date1.getSeconds();

    // Will display time in 10:30:23 format
    var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    var formattedTime1 = hours1 + ':' + minutes1.substr(-2) + ':' + seconds1.substr(-2);

    console.log(formattedTime);

    return (
        <div>

            <div >
              



                    <div className='card'>

                        <IconButton >

                            {/* <img className="sun" src={sun} alt="img"/> */}
                            {state === '1' ? (<img className="sun" src={sun} alt="img" />) : <img className="sun" src={moon} alt="img" />}
                        </IconButton>

                        <div ><IconButton><LocationOnIcon /> {props.name}</IconButton></div>
                        <div><IconButton>{newtime}</IconButton></div>
                        <div className="temp">{props.temp} &#8451;</div>
                        <div><IconButton>Climate:{props.climate}</IconButton></div>
                        <div><IconButton>Wind:{props.wind} Km/hr</IconButton></div>

                        <div><IconButton>Min:{props.min}&#8451; || Max:{props.max}&#8451;</IconButton></div>
                        <IconButton>Sunrise:{formattedTime}  ||  Sunset:{formattedTime1}</IconButton>





                    </div>



               

            </div>
        </div>
    )
}

export default Index
