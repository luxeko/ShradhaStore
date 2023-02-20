import React from 'react';
import "./sidebar.scss"
import {MdDashboard, MdOutlineAccountTree, MdOutlineCategory, MdSettingsSystemDaydream, MdOutlinePsychology, MdLogout} from "react-icons/md"
import {FiUser} from "react-icons/fi"
import {AiOutlineShop, AiFillSetting} from "react-icons/ai"
import {BiCreditCard, BiPencil} from "react-icons/bi"
import {RiTruckLine, RiShieldCheckLine} from "react-icons/ri"
import {ImStatsBars} from "react-icons/im"
import {TbNotification} from "react-icons/tb"
import {Link} from "react-router-dom";

const categories = [
    {id: 1, name: 'Main'},
    {id: 2, name: 'Lists'},
    {id: 3, name: 'Useful'},
    {id: 4, name: 'Service'},
]
const listMenu = [
    {id: 1, parentId: 1, menuName: 'Dashboard', path: '/admin', icon: MdDashboard},
    {id: 2, parentId: 2, menuName: 'Users', path: '/admin/users', icon: FiUser},
    {id: 3, parentId: 2, menuName: 'Categories', path: '/admin/categories', icon: MdOutlineCategory},
    {id: 4, parentId: 2, menuName: 'Products', path: '/admin/products', icon: AiOutlineShop},
    {id: 5, parentId: 2, menuName: 'Blogs', path: '/admin/blogs', icon: BiPencil},
    {id: 6, parentId: 2, menuName: 'Orders', path: '/admin/orders', icon: BiCreditCard},
    {id: 7, parentId: 2, menuName: 'Delivery', path: '/admin/delivery', icon: RiTruckLine},
    {id: 8, parentId: 3, menuName: 'Stats', path: '/admin/stats', icon: ImStatsBars},
    {id: 9, parentId: 3, menuName: 'Notifications', path: '/admin/notifications', icon: TbNotification},
    {id: 10, parentId: 4, menuName: 'Permissions', path: '/admin/permissions', icon: RiShieldCheckLine},
    {id: 11, parentId: 4, menuName: 'Roles', path: '/admin/roles', icon: MdOutlineAccountTree},
    {id: 12, parentId: 4, menuName: 'System Health', path: '/admin/system-health', icon: MdSettingsSystemDaydream},
    {id: 13, parentId: 4, menuName: 'Logs', path: '/admin/logs', icon: MdOutlinePsychology},
    {id: 14, parentId: 4, menuName: 'Settings', path: '/admin/settings', icon: AiFillSetting},
]

const Sidebar = () => {
    return (
        <div className={`sidebar`}>
            <div className="top">
                <span className="logo">Shradha Admin</span>
            </div>
            <hr/>
            <div className="center">
                <ul>
                    {
                        categories.map((category) => {
                            return <div key={category.name}>
                                <p className={`title`}>{category.name}</p>
                                {
                                    listMenu.map((menu) => {
                                        const Icon = menu.icon
                                        if (menu.parentId === category.id) {
                                            return  <Link key={menu.menuName} to={menu.path}>
                                                <li>
                                                    <Icon className={`icon`}/>
                                                    <span>{menu.menuName}</span>
                                                </li>
                                            </Link>
                                        }
                                    })
                                }
                            </div>
                        })
                    }
                </ul>
            </div>
            {/*<div className="bottom">*/}
            {/*    <MdLogout className={`icon`}/>*/}
            {/*    <span>Logout</span>*/}
            {/*</div>*/}
        </div>
    );
};

export default Sidebar;