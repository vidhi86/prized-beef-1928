import {Routes,Route} from "react-router-dom";
import Diapering from "./Diapering";
import Girls from "./Girls";
import HomePage from "./HomePage";
import Login from "./Login";
import Register from "./Register";
import Shortlist from "./Shortlist";
import Cart from "./Cart"
import Boys from "./Boys"
import { Toys } from "./Toys";
import AdminLogin from "./AdminLogin";
import Admin from "./Admin";
import DrawerFunction from "../components/Drawer";
import PrivateRoute from "../Context/PrivateRoute";
import SingleProductPage from "./SingleProductPage";
import { PageNotFound } from "./PageNotFound";
import { SearchResult } from "./SearchResult";








 export default function AllRoutes(){


    return (
      <>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route
            path="/toys"
            element={
              // <PrivateRoute>
              <Toys />
              // </PrivateRoute>
            }
          ></Route>
          <Route
            path="/girls"
            element={
              // <PrivateRoute>
              <Girls />
              // </PrivateRoute>
            }
          ></Route>
          <Route
            path="/boys"
            element={
              // <PrivateRoute>
              <Boys />
              // </PrivateRoute>
            }
          ></Route>
          <Route path="/diapering" element={<Diapering />}></Route>
          <Route
            path="/cart"
            element={
              // <PrivateRoute>
              <Cart />
              // </PrivateRoute>
            }
          ></Route>
          <Route path="/shortlist" element={<Shortlist />}></Route>
          <Route path="/admin_login" element={<AdminLogin />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route
            path="/products/:product_id"
            element={<SingleProductPage />}
          ></Route>
          <Route path="*" element={<PageNotFound />}></Route>
          <Route path="/search" element={<SearchResult />}></Route>
        </Routes>
      </>
    );
 }