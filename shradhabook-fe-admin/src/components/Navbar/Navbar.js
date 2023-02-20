import React, {useState} from 'react';
import "./navbar.scss"
import {HiOutlineSearch} from "react-icons/hi"
import {IoMdMoon} from "react-icons/io"
import {MdWbSunny} from "react-icons/md"
import {IoNotificationsOutline} from "react-icons/io5"
import {RiMessage2Line} from "react-icons/ri"
import {TfiMenuAlt} from "react-icons/tfi"
import avatar_1 from "../../assets/admin_avatar.png"
const Navbar = () => {
    const [toggleTheme, setToggleTheme] = useState(true)
    const handleThemeToggle = () => {
        setToggleTheme(() => !toggleTheme)
    }
    return (
        <div className={`navbar`}>
            <div className="wrapper">
                <div className="search">
                    <input type={`text`} placeholder={`Search...`}/>
                    <HiOutlineSearch/>
                </div>
                <div className="items">
                    <div className="item">
                        <div className="theme-toggle" onClick={handleThemeToggle}>
                            <span className={toggleTheme ? 'active' : ''}>
                                <IoMdMoon/>
                            </span>
                            <span className={!toggleTheme ? 'active' : ''}>
                                <MdWbSunny/>
                            </span>
                        </div>
                    </div>
                    <div className="item">
                        <IoNotificationsOutline className={`icon`}/>
                        <div className="counter">1</div>
                    </div>
                    <div className="item">
                        <RiMessage2Line className={`icon`}/>
                        <div className="counter">1</div>
                    </div>
                    <div className="item">
                        <TfiMenuAlt className={`icon`}/>
                    </div>
                    <div className="item">
                        <img
                            src={avatar_1}
                            alt={`avatar`}
                            className={`avatar`}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;