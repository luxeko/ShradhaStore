import React from 'react';
import "./home.scss"
import Widget from "../../components/Widget/Widget";
import Featured from "../../components/Featured/Featured";
import Chart from "../../components/Chart/Chart";
import ListTable from "../../components/Table/Table";
const Home = () => {
    return (
        <div className={`home-dashboard`}>
            <div className="widgets">
                <Widget type={`user`}/>
                <Widget type={`order`}/>
                <Widget type={`earning`}/>
                <Widget type={`balance`}/>
            </div>
            <div className={`charts`}>
                <Featured/>
                <Chart aspect={2/1} title={`Last 6 Months (Revenue)`}/>
            </div>
            <div className="list-container">
                <ListTable/>
            </div>
        </div>
    );
};

export default Home;