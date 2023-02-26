import logo from "../images/little_chime_logo.png"
import search from "../images/search.png"
import cart from "../images/cart.png"
import { Box,Button,Image ,Input} from '@chakra-ui/react'
import React, { useState,useEffect, useContext } from 'react'
import heart from "../images/heart.png"
import location from '../images/loaction.png'
import { Link, Navigate, useNavigate } from "react-router-dom"
import { AuthContext } from "../Context/AuthContextProvider"
// import { SearchResult } from "../pages/SearchResult"




export default function Header() {
   const [toSearch,setToSearch] = useState('');
   const {apiGetData} = useContext(AuthContext);
   const [data,setData] = useState([]);
   const navigate = useNavigate();
  //  const [searchOn,setSearchOn] = useState(false);
  
  // useEffect(()=>{
  //   apiGetData(toSearch).then((res) => {
  //     console.log(res);
  //     setData(res.data);
  //   });
  // },[])
  const handleSearch=()=>{
    navigate(`/${toSearch}`)
  }
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Box>
        <Link to="/">
          <Image
            style={{ width: "200px", height: "100px" }}
            src={logo}
            alt="logo"
          />
        </Link>
      </Box>
      <Box
        height={"30px"}
        width="400px"
        borderRadius={"10px"}
        border="1px solid grey"
        alignContent={"center"}
        display="flex"
        justifyContent={"space-between"}
        marginTop="30px"
        padding={"10px"}
      >
        <Input
          border={"0"}
          placeholder="Search for category"
          borderRadius={"10px"}
          fontSize="20px"
          onChange={(e) => {
            console.log(toSearch)
            setToSearch(e.target.value);
          }}
        />
        <Button
          border={"0"}
          borderRadius={"0px 10px 10px 0px"}
          width="50px"
          backgroundColor={"white"}
          onClick={handleSearch}
        >
          <Image
            style={{ width: "50px", height: "40px", backgroundColor: "white" }}
            src={search}
            alt="search"
          />
        </Button>
      </Box>
      <Box marginTop={"25px"}>
        <Button border="0px" backgroundColor={"white"}>
          <Image
            style={{ width: "20px", height: "20px" }}
            src={location}
            alt="location"
          />
          Select location
        </Button>
        <span>|</span>
        <Button border="0px" backgroundColor={"white"}>
          Stores & Preschools
        </Button>
        <span>|</span>
        <Button border="0px" backgroundColor={"white"}>
          Support
        </Button>
        <span>|</span>
        <Button border="0px" backgroundColor={"white"}>
          Track Order
        </Button>
        <span>|</span>
        <Link to="/admin_login">
          <Button border="0px" backgroundColor={"white"}>
            Admin
          </Button>
        </Link>

        <span>|</span>
        <Link to="/login">
          <Button border="0px" backgroundColor={"white"}>
            Login / Register
          </Button>
        </Link>
        <span>|</span>
        <Link to="/shortlist">
          <Button border="0px" backgroundColor={"white"}>
            <Image
              style={{ width: "20px", height: "20px" }}
              src={heart}
              alt="heart"
            />
            Shortlist
          </Button>
        </Link>

        <span>|</span>
        <Link to="/cart">
          <Button border="0px" backgroundColor={"white"}>
            <Image
              style={{ width: "50px", height: "40px" }}
              src={cart}
              alt="cart"
            />
          </Button>
        </Link>
        
      </Box>
    </div>
  );
}

