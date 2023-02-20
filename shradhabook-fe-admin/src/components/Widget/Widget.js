import React from 'react';
import "./widget.scss"
import {MdKeyboardArrowUp, MdOutlineMonetizationOn, MdOutlineAccountBalanceWallet, MdOutlineShoppingCart} from "react-icons/md"
import {BsFillPersonFill} from "react-icons/bs"
const Widget = ({type}) => {
    let data;
    const amount = 100
    const diff = 20

    switch (type) {
        case "user":
            data = {
                title: "users",
                isMoney: false,
                link: "See all users",
                icon: (<BsFillPersonFill className={`icon`} style={{
                    backgroundColor: "#F65D4E",
                }}/>)
            }
            break;
        case "order":
            data = {
                title: "orders",
                isMoney: false,
                link: "View all orders",
                icon: (<MdOutlineShoppingCart className={`icon`} style={{
                    backgroundColor: "#d97706",
                }}/>)
            }
            break;
        case "earning":
            data = {
                title: "earnings",
                isMoney: true,
                link: "View new earnings",
                icon: (<MdOutlineMonetizationOn className={`icon`} style={{
                    backgroundColor: "#65a30d",
                }}/>)
            }
            break;
        case "balance":
            data = {
                title: "balance",
                isMoney: true,
                link: "See details",
                icon: (<MdOutlineAccountBalanceWallet className={`icon`} style={{
                    backgroundColor: "#0891b2",
                }}/>)
            }
            break;
        default:
            break;
    }
    return (
        <div className={`widget`}>
            <div className="left">
                <span className={`title`}>{data.title}</span>
                <span className={`counter`}>{data.isMoney && "$"} {amount}</span>
                <span className={`link`}>{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <MdKeyboardArrowUp/>
                    {diff} % / week
                </div>
                {data.icon}
            </div>
        </div>
    );
};

export default Widget;