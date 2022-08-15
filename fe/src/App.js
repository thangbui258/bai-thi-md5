import logo from './logo.svg';
import './App.css';
import DashboardContent from "./components/layout";
import ListProducts from "./components/products/ListProducts";
import NewProduct from "./components/products/NewProduct";
import Link from "@mui/material/Link";
import {Route, Routes} from "react-router-dom";
import React from "react";
import UpdateProduct from "./components/products/UpdateProduct";


function App() {
  return (


        <Routes>
            <Route path="/" element={<ListProducts />}>
            </Route>
            <Route path="/add" element={<NewProduct />} />
            <Route path="/update/:id" element={<UpdateProduct />} />
        </Routes>


  );
}

export default App;
