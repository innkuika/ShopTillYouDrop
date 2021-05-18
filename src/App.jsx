
import React, { useRef, useEffect } from 'react';
import MyD3Component from "./MyD3Component.jsx";
import './App.css';





/* App */
function App() {
    return (
        <div>
          <p>A bar chart! </p>
        
          <div  className="barChart">
            <MyD3Component data={[1,5,6,3]}/>
        </div>
        </div>
    )
}

export default App;