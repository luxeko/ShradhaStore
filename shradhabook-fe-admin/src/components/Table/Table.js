import React from 'react';
import "./table.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Book1 from '../../assets/books/book1.png'
import Book2 from '../../assets/books/book2.png'
import Book3 from '../../assets/books/book3.png'
import Book4 from '../../assets/books/book4.png'
import Book5 from '../../assets/books/book5.png'
import Book6 from '../../assets/books/book6.png'
const ListTable = () => {
    const createData = (id, product, img, customer, date, amount, method, status) => {
        return {id, product, img, customer, date, amount, method, status};
    }
    const rows = [
        createData(284238, "ASUS ROG Strix ASUS ROG Strix ASUS ROG Strix ASUS ROG Strix ASUS ROG Strix ASUS ROG Strix ASUS ROG Strix ASUS ROG Strix ASUS ROG Strix ASUS ROG Strix", Book1, "Duc Anh", "09/01/2023", 2000, "Online", "Approved"),
        createData(190357, "ASUS ROG Strix", Book2, "Minh Hong", "20/08/2022", 1799, "Cash on Delivery", "Pending"),
        createData(305923, "ASUS ROG Strix", Book3, "Duc Tuan", "11/12/2022", 2199, "Online Payment", "Pending"),
        createData(599231, "ASUS ROG Strix", Book4, "Nam Anh", "20/02/2022", 3900, "Cash on Delivery", "Approved"),
        createData(794731, "ASUS ROG Strix", Book5, "Vu Duc", "05/10/2022", 1199, "Online", "Pending"),
        createData(694900, "ASUS ROG Strix", Book6, "Tuan Duong", "25/07/2022", 3399, "Cash on Delivery", "Approved"),
    ];
    return (
        <div className={`home-table`}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell><div style={{fontSize: "20px"}}>Latest Transactions</div></TableCell>
                        </TableRow>
                    </TableHead>
                </Table>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell className={`table-cell`}>Tracking ID</TableCell>
                            <TableCell className={`table-cell`}>Image</TableCell>
                            <TableCell className={`table-cell`}>Amount</TableCell>
                            <TableCell className={`table-cell`}>Customer</TableCell>
                            <TableCell className={`table-cell`}>Date</TableCell>
                            <TableCell className={`table-cell`}>Payment Method</TableCell>
                            <TableCell className={`table-cell`}>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell className={`table-cell`}>{row.id}</TableCell>
                                <TableCell className={`table-cell table-image`}>
                                    <div className="cell-wrapper">
                                        <img title={row.product} src={row.img} alt={``} className={`image`}/>
                                        <p title={row.product}>{row.product}</p>
                                    </div>
                                </TableCell>
                                <TableCell className={`table-cell amount`}>$ {row.amount}</TableCell>
                                <TableCell className={`table-cell`}>{row.customer}</TableCell>
                                <TableCell className={`table-cell`}>{row.date}</TableCell>
                                <TableCell className={`table-cell`}>{row.method}</TableCell>
                                <TableCell className={`table-cell`}>
                                    <span className={`status ${row.status}`}>{row.status}</span>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default ListTable;