import {Routes,Route} from "react-router-dom";
import Boys from "./Boys";
import Cart from "./Cart";
import Diapering from "./Diapering";
import Girls from "./Girls";
import HomePage from "./HomePage";
import Login from "./Login";
import Register from "./Register";
import Shortlist from "./Shortlist";

import { Toys } from "./Toys";





 export default function AllRoutes(){


    return (
      <>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/toys" element={<Toys />}></Route>
          <Route path="/girls" element={<Girls />}></Route>
          <Route path="/boys" element={<Boys />}></Route>
          <Route path="/diapering" element={<Diapering />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/shortlist" element={<Shortlist/>}></Route>
        </Routes>
      </>
    );
 }