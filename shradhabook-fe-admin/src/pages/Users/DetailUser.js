import React from 'react';
import {Link, useParams} from "react-router-dom";
import './users.scss'
import {AiFillEdit} from 'react-icons/ai'
import avatar from '../../assets/admin_avatar.png'
import Chart from "../../components/Chart/Chart";
import Table from "../../components/Table/Table";
const DetailUser = () => {
    const {id} = useParams();

    const fetchDetailUser = async () => {

    }
    return (
        <div className={`detail-user`}>
            <div className="top">
                <div className="left">
                    <Link to={`/admin/users/edit/${id}`} className="btn-edit"><AiFillEdit/>Edit user</Link>
                    <div className="title">Information</div>
                    <div className="item">
                        <img src={avatar} alt="" className={`item-img`}/>
                        <div className="details">
                            <h3 className="item-title">
                                Đức Anh
                            </h3>
                            <div className="detail-item">
                                <span className="item-key">Email: </span>
                                <span className="item-value">test1@gmail.com</span>
                            </div>
                            <div className="detail-item">
                                <span className="item-key">Phone: </span>
                                <span className="item-value">+84 9853 84 36</span>
                            </div>
                            <div className="detail-item">
                                <span className="item-key">Age: </span>
                                <span className="item-value">24</span>
                            </div>
                            <div className="detail-item">
                                <span className="item-key">Gender: </span>
                                <span className="item-value">Male</span>
                            </div>
                            <div className="detail-item">
                                <span className="item-key">Address: </span>
                                <span className="item-value">150 Triều Khúc, Thanh Xuân, Hà Nội</span>
                            </div>
                            <div className="detail-item">
                                <span className="item-key">Quantity of products purchased: </span>
                                <span className="item-value">20</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <Chart aspect={3/1} title={`User Spending (Last 6 Months)`}/>
                </div>
            </div>
            <div className="bottom">
                <Table/>
            </div>
        </div>
    );
};

export default DetailUser;