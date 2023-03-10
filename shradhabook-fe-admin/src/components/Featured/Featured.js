import React from 'react';
import "./featured.scss"
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {FiMoreVertical} from "react-icons/fi"
import {MdKeyboardArrowDown, MdKeyboardArrowUp} from "react-icons/md"
const Featured = () => {
    return (
        <div className={`featured`}>
            <div className="top">
                <h1 className="title">Total Revenue</h1>
                <FiMoreVertical fontSize={`25px`}/>
            </div>
            <div className="bottom">
                <div className="featured-chart">
                    <CircularProgressbar value={70} text={"70%"} strokeWidth={6}/>
                </div>
                <p className="title">Total sales made today</p>
                <p className="amount">$420</p>
                <p className="desc">Previous transactions processing. Last payments may not be included</p>
                <div className="summary">
                    <div className="item">
                        <div className="item-title">Target</div>
                        <div className="item-result negative">
                            <MdKeyboardArrowDown fontSize={`large`}/>
                            <div className="result-amount">
                                $12.4k
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-title">Last Week</div>
                        <div className="item-result positive">
                            <MdKeyboardArrowUp fontSize={`large`}/>
                            <div className="result-amount">
                                $12.4k
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-title">Last Month</div>
                        <div className="item-result positive">
                            <MdKeyboardArrowUp fontSize={`large`}/>
                            <div className="result-amount">
                                $12.4k
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;