import React, {useState} from 'react';
import './css/reset.css';
import './css/App.css';
import './css/total.css';
import useAsyncFetch from "./useAsyncFetch";
import {NavLink} from "react-router-dom";

const TotalPage = (props) => {
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
        return (<div className='page total'>
            <blue-title>TOTAL</blue-title>
            <div className='receipt'>
                <div className='receipt-content-wrapper'>
                    <div className='semi-bold-text'>
                        {prices.school_name.toUpperCase()}
                    </div>
                    <div className='location-text'>
                        {`${prices.school_city.toUpperCase()}, ${prices.school_state.toUpperCase()}`}
                    </div>
                    <div className="grid-container">
                        <div className="receipt-head dotted-line">
                            --------------------------------------------------------------
                        </div>
                        <div className="receipt-bottom dotted-line">
                            --------------------------------------------------------------
                        </div>
                        <div className="receipt-header-qty">QTY</div>
                        <div className="receipt-header-description">DESCRIPTION</div>
                        <div className="receipt-header-amount">AMOUNT</div>
                        <div className="tuition-qty">1</div>
                        <div className="tuition-description">TUITION</div>
                        <div className="tuition-amount">{`$${numberWithCommas(prices.tuition)}.00`}</div>
                        <div className="fee-qty">1</div>
                        <div className="fee-description">FEES, SUPPLIES AND LIVING EXPENSE</div>
                        <div className="fee-amount">
                            {`$${numberWithCommas(parseInt(prices.total_price) - parseInt(prices.tuition))}.00`}
                        </div>
                        <div className="subtotal-description">SUBTOTAL</div>
                        <div className="subtotal-amount">{`$${numberWithCommas(prices.total_price)}.00`}</div>
                    </div>
                    <div className="dotted-line receipt-bottom">
                        --------------------------------------------------------------
                    </div>
                    <div className='discount-wrapper'>
                        <div>DISCOUNT</div>
                        <div>
                            {`-$${numberWithCommas(parseInt(prices.total_price) - parseInt(prices[props.incomeRange]))}.00`}
                        </div>
                    </div>
                    <div className='total-wrapper'>
                        <div>TOTAL</div>
                        <div>
                            {`$${numberWithCommas(parseInt(prices[props.incomeRange]))}.00*`}
                        </div>
                    </div>

                    <div className="note-wrapper">
                        <div className="note-content1">*</div>
                        <div className="note-content2">
                            <div>
                                This estimate is based on actual cost for families that received Federal aid or loans by
                                applying with the FAFSA form. It always pays to ask for a discount!
                            </div>

                            <br/>
                            <div>Cost includes tuition, living costs, books and supplies, and fees minus the average
                                grants
                                and scholarships for federal financial aid recipients.
                            </div>
                            <br/>
                            <div>Depending on the federal, state, or institutional grant aid available, students in your
                                income bracket may pay more or less than the overall average costs.
                            </div>
                        </div>
                    </div>


                </div>


            </div>
            <button className='nav orange-button total'>
                <NavLink exact activeClassName="current" to='/' className='nav-link'>START OVER</NavLink>
            </button>
        </div>)
    } else {
        return (<div className='page price'/>)
    }

}

export default TotalPage;
