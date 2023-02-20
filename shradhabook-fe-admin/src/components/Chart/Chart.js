import React from 'react';
import "./chart.scss"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {name: "January", Total: 1200},
    {name: "February", Total: 2300},
    {name: "March", Total: 800},
    {name: "April", Total: 1600},
    {name: "May", Total: 900},
    {name: "June", Total: 1700},
];

const Chart = ({aspect, title}) => {
    return (
        <div className={`chart`}>
            <div className="title">{title}</div>
            <ResponsiveContainer width="100%" aspect={aspect}>
                <AreaChart width={730} height={250} data={data}
                           margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#3e98c7" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#3e98c7" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" stroke={`gray`} fontSize={`16px`} fontWeight={`600`}/>
                    <YAxis fontSize={`16px`} fontWeight={`600`}/>
                    <CartesianGrid strokeDasharray="3 3" className={`chart-grid`} />
                    <Tooltip contentStyle={{fontSize: "12px", fontWeight: "500"}} itemStyle={{ fontSize: '14px', fontWeight: "600" }} cursor={{ stroke: '#F65D4E', strokeWidth: 0.5 }}/>
                    <Area type="monotone" dataKey="Total" stroke="#3e98c7" fillOpacity={1} fill="url(#total)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;