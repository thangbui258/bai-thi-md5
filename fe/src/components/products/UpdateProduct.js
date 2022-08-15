import {useState} from "react";
import DashboardContent from "../layout";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {Card, CardContent, Stack, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {useParams} from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UpdateProduct() {
    let navigate = useNavigate();
    let {id} = useParams()
    console.log(id)
    const [data, setData] = useState({
        name: '',
        price: '',
        stock: '',
        description: '',
    })

    const handleChange = (e, field) => {
        data[field] = e.target.value
        setData({...data})
        console.log(data)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(id)
        let body = {
            name: data.name,
            price: data.price,
            stock: data.stock,
            description: data.description
        }
        console.log(body)
        await axios.put(`http://localhost:3001/products/${id}`, body)
        navigate("/")

    }

    return (
        <div>
            <DashboardContent>
                <Typography variant="h4">THEM MOI SAN PHAM</Typography>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': {m: 1, width: '100%'},
                    }}
                    noValidate
                    autoComplete="off"
                    onSubmit={handleSubmit}
                >
                    <Grid container spacing={2}>
                        <Grid item xs={7}>
                            <Card sx={{m: 1}}>
                                <Typography variant="h6">Thong tin san pham</Typography>
                                <CardContent>
                                    <TextField
                                        id="name"
                                        label="Name"
                                        defaultValue=""
                                        placeholder="Name"
                                        focused
                                        onChange={(e) => handleChange(e, 'name')}
                                    />
                                    <TextField
                                        id="price"
                                        label="Price"
                                        defaultValue=""
                                        placeholder="Price"
                                        focused
                                        onChange={(e) => handleChange(e, 'price')}
                                    />
                                    <TextField
                                        id="stock"
                                        label="Stock"
                                        defaultValue=""
                                        placeholder="Stock"
                                        focused
                                        onChange={(e) => handleChange(e, 'stock')}
                                    />
                                    <TextField
                                        id="description"
                                        label="Description"
                                        defaultValue=""
                                        placeholder="Description"
                                        focused
                                        onChange={(e) => handleChange(e, 'description')}
                                    />
                                </CardContent>
                            </Card>

                            <Card sx={{m: 1}}>
                                <CardContent>
                                    <Stack spacing={2} direction="row">
                                        <Button variant="contained" type="submit">Update</Button>
                                        <Button variant="outlined">Huy</Button>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </DashboardContent>
        </div>
    )
}

export default UpdateProduct