import React from 'react';
//import MuiTheme from '@material-ui/core/styles/MuiThemeProvider';
import './App.css';
import Cloud from './cloud.png';
import Animation from './Animation/Animation';

import Nav from './nav/Navbar';
import Data from './Wetherap/index'
function App() {
  return (
    <div className="App">
      <Nav/>
    
      <header className="App-header">
      
        {/* <Home/> */}

      
          <Data />
          <Animation/>
          <div className="background-wrap">  
          <div className="x1">
         
          </div>
          </div>
        
      </header>
      <div id="background-wrap">
    <div className="x1">
        <div className="cloud x5"></div>
    </div>

    <div className="x2">
    <div className="cloud x2"></div>
    </div>

    <div className="x3">
        <div className="cloud xs"></div>
    </div>

    <div className="x4">
        <div className="cloud x5"></div>
    </div>

    <div className="x5">
        <div className="cloud"></div>
    </div>
</div>

  
    </div>
  );
}

export default App;
