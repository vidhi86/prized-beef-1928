import React from 'react'
import { AddProducts } from '../components/AddProducts';
import AdminProduct from "../components/AdminProduct"



const Admin = () => {
  return (
    <div>
      <AddProducts />
      <AdminProduct/>
    </div>
  );
}

export default Admin