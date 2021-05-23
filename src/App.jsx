import React, {useRef, useEffect, useState} from 'react';
import './css/reset.css';
import './css/App.css';
import './css/dropdownsearch.css'
import {NavLink, Switch, Route} from 'react-router-dom';
import Home from "./homePage";
import PricePage from "./pricePage";
import useAsyncFetch from "./useAsyncFetch";



/* App */
function App() {
    // static var will contain the list of options
    const [options, setOptions] = useState([]);

    // call the custom fetch hook, passing it the callback functions that it can use
    useAsyncFetch("query/getOptions", {}, (result) => {
        console.log(result)
        setOptions(result);
    }, (error) => {
        console.log(error);
    }, []);

    const [selectedOption, setSelectedOption] = useState("");
    const handleOptionChange = (e) => {
        setSelectedOption(e)
    }
    return (
        <div>
            <Switch>
                <Route exact path='/' component={() => {
                    return <Home selectedOption={selectedOption} onChange={handleOptionChange} options={options}/>
                }}/>
                <Route exact path='/price' component={() => {
                    return <PricePage id={selectedOption}/>
                }}/>
            </Switch>
        </div>
    )
}

export default App;
