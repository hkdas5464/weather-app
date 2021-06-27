import React, { useState } from 'react';
import axios from 'axios';
import Mdata from '../home/index';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import './style.css'

function App() {
    
    const [state, Setstate] = useState("bokaro");
    const [person, setperson] = useState(null);

    const onKeyPress = (event) => {
        if (event.key === "Enter") {
            fetchdata();
        }
    }

    
    const fetchdata = async () => {
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${state}&units=metric&appid='API_KEY'`
        );

        setperson(response.data);
    };
    console.log(person)


 
    return (
        <div>

            <p></p>
            <div className="style">
            <TextField
               id="standard-basic"
                label="Enter Your City Name"
               
                onKeyPress={onKeyPress}
                onChange={e => Setstate(e.target.value)}
                name="searchText"

                fullWidth={true}
            />
            <div className="search">
            <IconButton  onClick={fetchdata}><SearchIcon /></IconButton></div>
            </div>
        
        
            {
                person && <div><ul>
                    <Mdata name={person.name} temp={person.main.temp} min={person.main.temp_min}  
                    max={person.main.temp_max} sunrise={person.sys.sunrise} sunset={person.sys.sunset} season={person.weather.main}
                        climate={person.weather.map((e)=>{
                        return(e.main)
                    })}
                    timezone={person.dt}
                    wind={person.wind.speed}
                    />
                   

                </ul></div>
            }

            {/* {
                mstate.map((person, index) => {
                    return (
                        <p>hello</p>
                    )
                })
            } */}
            {/* <ul>
                {mstate &&
                    mstate.map((e, index) => {
                        return (
                            <div>
                                hello
                            </div>
                        )
                    })
                }
            </ul> */}

        </div>
    )
}
export default App
