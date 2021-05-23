import React, {useState} from 'react';
import './css/reset.css';
import './css/App.css';
import './css/price.css';
import useAsyncFetch from "./useAsyncFetch";

const PricePage = (props) => {
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
                <div className='bold-text'>
                    SCHOOL
                </div>
                <div className='bold-text'>
                    {prices.school_name}
                </div>
                <div className='bold-text'>
                    TUITION
                </div>
                <div className='bold-text'>
                    {prices.tuition}
                </div>

                <div className='bold-text'>
                    ROOM AND BOARD, FEES, SUPPLIES
                </div>

            </div>
        </div>)
    } else {
        return (<div className='page price'/>)
    }

}

export default PricePage;
