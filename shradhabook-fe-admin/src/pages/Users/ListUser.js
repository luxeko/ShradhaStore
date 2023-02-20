import React from 'react';
import './users.scss'
import {DataGrid} from '@mui/x-data-grid';
import {Link} from "react-router-dom";
import avatar from '../../assets/admin_avatar.png'
import {HiTrash} from 'react-icons/hi'
import {GoPlus, GoEye} from 'react-icons/go'
const columns = [
    {field: 'id', headerName: 'ID', width: 100},
    {
        field: 'user', headerName: 'User', width: 250, renderCell: (params) => {
            return (
                <div className={`cell-width-img`}>
                    <img className={`cell-img`} src={params.row.img} alt={`avatar`}/>
                    {params.row.username}
                </div>
            )
        }
    },
    {
        field: 'email',
        headerName: 'Email',
        width: 250,
    },
    {
        field: 'phone',
        headerName: 'Phone',
        width: 250,
    },
    {
        field: 'age',
        headerName: 'Age',
        width: 150,
    },
    {
        field: 'city',
        headerName: 'City',
        width: 250,
    },
    {
        field: "action", headerName: "Action", width: 250, renderCell: (params) => {
            return (
                <div className={`cell-action`}>
                    <Link to={`/admin/users/detail/${params.row.id}`} className={`btn-view`}><GoEye/> View</Link>
                    <Link to={`/admin/users/delete/${params.row.id}`}  className={`btn-delete`}><HiTrash/> Delete</Link>
                </div>
            )
        }
    }
];

const rows = [
    {id: 1, username: 'Snow', img: avatar, age: 35, phone: '098756364', email: 'test1@gmail.com', city: 'Hà Nội'},
    {id: 2, username: 'Lannister', img: avatar, age: 42, phone: '098756364', email: 'test1@gmail.com', city: 'Thanh Hóa'},
    {id: 3, username: 'Lannister', img: avatar, age: 45, phone: '098756364', email: 'test1@gmail.com', city: 'Hải Phòng'},
    {id: 4, username: 'Stark', img: avatar, age: 16, phone: '098756364', email: 'test1@gmail.com', city: 'Đà Nẵng'},
    {id: 5, username: 'Targaryen', img: avatar, age: 23, phone: '098756364', email: 'test1@gmail.com', city: 'Hà Nội'},
    {id: 6, username: 'Melisandre', img: avatar, age: 15, phone: '098756364', email: 'test1@gmail.com', city: 'Hà Nội'},
    {id: 7, username: 'Clifford', img: avatar, age: 44, phone: '098756364', email: 'test1@gmail.com', city: 'TP.Hồ Chí Minh'},
    {id: 8, username: 'Frances', img: avatar, age: 36, phone: '098756364', email: 'test1@gmail.com', city: 'Nghệ An'},
    {id: 9, username: 'Roxie', img: avatar, age: 65, phone: '098756364', email: 'test1@gmail.com', city: 'Thanh Hóa'},
];

const ListUser = () => {
    return (
        <div className={`list-user`}>
            <div className={`btn-add-user`}>
                <Link to={'/admin/users/add'}><div><GoPlus/> Add new user</div></Link>
            </div>
            <div className={`filter-user`}>

            </div>
            <div className={`table-list-user`}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </div>
        </div>
    );
};

export default ListUser;