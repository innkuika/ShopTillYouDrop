import React, {useState} from 'react';
import './css/reset.css';
import './css/App.css';
import './css/discount.css';
import discount from './graphics/discount.png'
import {NavLink, useHistory} from "react-router-dom";
import SelectSearch from "react-select-search";
import fuzzySearch from "./fuzzySearch";

const DiscountPage = (props) => {
    const options = [
        {name: '$0 - $30,000', value: 'income_30k'},
        {name: '$30,001 - $48,000', value: 'income_48k'},
        {name: '$48,001 - $75,000', value: 'income_75k'},
        {name: '$75,001 - $110,000', value: 'income_110k'},
        {name: '$110,001 +', value: 'income_110k_plus'},
    ]
    const mainPage = (button) => {
        return (<div className='discount page'>
            <green-title>DISCOUNTS</green-title>
            <div className='text-content-wrap'>
                <p> Remember, tuition is only the sticker price - you might be eligible for a big discount!</p>
                <p>Let's see if you qualify for any discounts.</p>
            </div>
            <div className='center-img'>
                <img src={discount}/>
            </div>
            <div className='text-content-wrap'>
                <div className='dropdown-title'>
                    Family Income
                </div>
            </div>

            <SelectSearch options={options} placeholder='Select Income Range' value={props.selectedIncomeRange}
                          name="language" search={true} filterOptions={fuzzySearch} onChange={(e) => {
                props.onChange(e)
            }}/>
            {button}
        </div>)
    }

    if (props.selectedIncomeRange) {
        return (
            mainPage(<button className='nav green-button'>
                <NavLink exact activeClassName="current" to='/total' className='nav-link'>GO</NavLink>
            </button>))
    } else if (!props.id) {
        const history = useHistory();
        history.push("/");
        return (<div/>)
    }else {
        return (
            mainPage(<button className='nav grey-button'>
                GO
            </button>)
        )
    }
}

export default DiscountPage;
