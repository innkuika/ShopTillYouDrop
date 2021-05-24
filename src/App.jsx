import React, {useRef, useEffect, useState} from 'react';
import './css/reset.css';
import './css/App.css';
import './css/dropdownsearch.css'
import {NavLink, Switch, Route} from 'react-router-dom';
import Home from "./homePage";
import PricePage from "./pricePage";
import DiscountPage from "./discountsPage";
import useAsyncFetch from "./useAsyncFetch";
import TotalPage from "./totalPage";



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

    const [selectedIncomeRange, setSelectedIncomeRange] = useState("");
    const handleSelectedIncomeRangeChange = (e) => {
        setSelectedIncomeRange(e)
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
                <Route exact path='/discounts' component={() => {
                    return <DiscountPage id={selectedOption} selectedIncomeRange={selectedIncomeRange} onChange={handleSelectedIncomeRangeChange}/>
                }}/>
                <Route exact path='/total' component={() => {
                    return <TotalPage id={selectedOption} incomeRange={selectedIncomeRange}/>
                }}/>
            </Switch>
        </div>
    )
}

export default App;
