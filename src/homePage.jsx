import React from 'react';
import './css/reset.css';
import './css/App.css';
import './css/dropdownsearch.css'
import shoppingcart from './graphics/shoppingcart.png'
import {NavLink} from 'react-router-dom';
import SelectSearch from 'react-select-search';
import fuzzySearch from "./fuzzySearch";


const Home = (props) => {
    const mainPage = (button) => {
        return (<div className='home page'>
            <blue-title>SHOP 'TIL YOU DROP</blue-title>
            <div className='text-content-wrap'>
                <p> Tuition is only the sticker price - you might be eligible for a big discount! Estimate the <span
                    className='italic-bold'>real</span> cost of college, for schools across the country.</p>
            </div>
            <div className='center-img'>
                <img src={shoppingcart}/>
            </div>
            <div className='bold-text home'>
                Start typing to pick a school
            </div>
            <SelectSearch options={props.options} value={props.selectedOption} name="language" search={true} filterOptions={fuzzySearch} onChange={(e) => {
                props.onChange(e)
            }}/>
            {button}
        </div>)
    }

    if (props.selectedOption) {
        return (
            mainPage(<button className='nav orange-button'>
                <NavLink exact activeClassName="current" to='/price' className='nav-link'>ADD TO CART</NavLink>
            </button>))
    } else {
        return (
            mainPage(<button className='nav grey-button'>
                ADD TO CART
            </button>)
        )
    }


};

export default Home;
