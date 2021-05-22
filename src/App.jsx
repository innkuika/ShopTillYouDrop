import React, {useRef, useEffect} from 'react';
import './css/reset.css';
import './css/App.css';
import './css/dropdownsearch.css'
import {NavLink, Switch, Route} from 'react-router-dom';
import SelectSearch from 'react-select-search';
import fuzzySearch from "./fuzzySearch";


/* App */
function App() {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route exact path='/about' component={About}></Route>
                <Route exact path='/contact' component={Contact}></Route>
            </Switch>
        </div>
    )
}

const Navigation = () => (
    <nav>
        <ul>
            <li><NavLink exact activeClassName="current" to='/'>Home</NavLink></li>
            <li><NavLink exact activeClassName="current" to='/about'>About</NavLink></li>
            <li><NavLink exact activeClassName="current" to='/contact'>Contact</NavLink></li>
        </ul>
    </nav>
);




const options = [
    {name: 'Swedish', value: 'sv'},
    {name: 'English', value: 'en'},

];


const Home = () => (
    <div className='home page'>
        <blue-title>SHOP 'TIL YOU DROP</blue-title>
        <div className='text-content-wrap'>
            <p> Tuition is only the sticker price - you might be eligible for a big discount! Estimate the <span
                className='italic-bold'>real</span> cost of college, for schools across the country.</p>
        </div>
        <div className='center-img'>
            <img src="/src/graphics/shoppingcart.png"/>
        </div>
        <div className='bold-text home'>
            Start typing to pick a school
        </div>
        <SelectSearch options={options} value="" name="language" search={true} filterOptions={fuzzySearch}/>
    </div>
);

const About = () => (
    <div className='about'>
        <h1>About Me</h1>
        <p>Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et
            quos harum excepturi dolorum molestias?</p>
        <p>Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et
            quos harum excepturi dolorum molestias?</p>
    </div>
);

const Contact = () => (
    <div className='contact'>
        <Navigation/>
        <h1>Contact Me</h1>
        <p>You can reach me via email: <strong>hello@example.com</strong></p>
    </div>
);

export default App;
