import React, {useState} from 'react';
import './css/reset.css';
import './css/App.css';
import './css/price.css';
import useAsyncFetch from "./useAsyncFetch";
import {NavLink, useHistory} from "react-router-dom";

const PricePage = (props) => {
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const [prices, setPrices] = useState(null)
    useAsyncFetch(`query/getPrice?id=${props.id}`, {}, (result) => {
        console.log(result);
        setPrices(result);
    }, (error) => {
        console.log(error);
    }, []);

    if (prices) {
        return (<div className='page price'>
            <blue-title>PRICE</blue-title>
            <div className='price-tag'>
                <div className='price-tag-content-wrapper'>
                    <div className='bold-text'>
                        SCHOOL
                    </div>
                    <div className='light-text'>
                        {prices.school_name.toUpperCase()}
                    </div>
                    <div className='bold-text'>
                        TUITION
                    </div>
                    <div className='light-text'>
                        {`$${numberWithCommas(prices.tuition)}.00`}
                    </div>
                    <div className='bold-text'>
                        ROOM AND BOARD, FEES, SUPPLIES
                    </div>
                    <div className='light-text'>
                        {`$${numberWithCommas(parseInt(prices.total_price) - parseInt(prices.tuition))}.00`}
                    </div>
                    <div className='dotted-line'>
                        --------------------------------------------------------------
                    </div>
                    <div>
                        TOTAL RETAIL PRICE**
                    </div>
                    <div className='price-text'>
                        {`$${numberWithCommas(prices.total_price)}.00`}
                    </div>
                </div>


            </div>
            <div className='bold-text'>
                **YOU MAY BE ELIGIBLE FOR A DISCOUNT!
            </div>
            <button className='nav green-button price'>
                <NavLink exact activeClassName="current" to='/discounts' className='nav-link'>SHOP FOR
                    DISCOUNTS</NavLink>
            </button>
        </div>)
    } else if (!props.id) {
        const history = useHistory();
        history.push("/");
        return (<div/>)
    } else {
        return (<div className='loading-page price'>
            <div className="dot-collision"/>
            <div>Calculating the sticker price...</div>
        </div>)
    }

}

export default PricePage;
