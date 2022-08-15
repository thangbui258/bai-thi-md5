import {Dashboard} from "@mui/icons-material";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';


import DashboardContent from '../layout'
import {useEffect, useState} from "react";
import axios from "axios";
import {Chip} from "@mui/material";
// import {useNavigate} from "react-router-dom";
import {Link} from 'react-router-dom'


function ListProducts() {

    const [data, setData] = useState([])

    async function getAllProduct() {
        return await axios.get('http://localhost:3001/products')
    }

    const disPlayProduct = () => {
        getAllProduct()
            .then((r) => {
                setData(r.data)
            })
    }

    useEffect(() => {
        disPlayProduct()
    }, [])

    const handleDeleteClick = async (id) => {
        console.log(id)
        await axios.delete(`http://localhost:3001/products/${id}`)
        disPlayProduct()
    }




    return (
        <DashboardContent>
            <h2>Danh Sach San Pham</h2>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Stock</TableCell>
                            <TableCell align="left">
                                <Link to={'/add'}><Button  variant="contained">them moi san
                                    pham</Button>
                                </Link>
                            </TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell align="right">{row.name}</TableCell>
                                <TableCell align="right">{row.price}</TableCell>
                                <TableCell align="right">{row.stock}</TableCell>

                                <TableCell>
                                    <Link to={`/update/${row.id}`}><button><Chip label="Update"/></button></Link>
                                </TableCell>
                                <TableCell>
                                    <button><Chip label="Delete" onClick={() => handleDeleteClick(row.id)}/></button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </DashboardContent>
    )

}

export default ListProducts