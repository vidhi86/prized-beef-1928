import React,{useEffect, useState} from 'react'
import {
  Heading,
  Input,
  Box,
  Text,
  Button,
  Image,
  
} from "@chakra-ui/react";
import facebook from "../images/facebook.png"
import google from "../images/google.png"
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import { useContext } from "react";
import {AuthContext} from "../Context/AuthContextProvider"





const Login = () => {

  const [identity,setIdentity] = useState("");
  const [password,setPassword] = useState("");
  const [data, setData] = useState([]);
 
  const {isAuth,login} = useContext(AuthContext);
  useEffect(()=>{
     axios.get(`http://localhost:3004/users`).then((res) => {
       console.log(res);
       setData(res.data);
     });
  },[])
  
  const handleLogin = (e)=>{
     e.preventDefault();
    
    data.map((el) => {
      if (
        el.email === identity ||
        (el.mobile === identity && el.password === password)
      ) {
        
       login(el.name);
      }
    }); 
    if(isAuth){
     alert("Login Successfull!");
     return <Navigate to="/"/>
    }else{
      alert("Fill Credentials");
    }
  } 
  console.log(identity,password);
  return (
    <div style={{ width: "400px", margin: "auto" }}>
      <Heading as="h3" size="lg" textAlign={"left"}>
        Login / Register
      </Heading>
      <form onSubmit={handleLogin}>
        <Text margin={0} textAlign="left" fontSize={"15px"} fontWeight="bold">
          Email ID / Mobile No.
        </Text>

        <br />
        <Input
          width="400px"
          height="30px"
          placholder="email/mobile no."
          type="text||number"
          onChange={(e) => {
            setIdentity(e.target.value);
          }}
        />

        <br />
        <br />
        <Text margin={0} textAlign="left" fontSize={"15px"} fontWeight="bold">
          Password
        </Text>

        <br />
        <Input
          width="400px"
          height="30px"
          placholder="password"
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <br />
        <br />
        <Input
          width="410px"
          backgroundColor={"#FF5722"}
          color="white"
          fontWeight={"bold"}
          fontSize="15px"
          height="40px"
          type="submit"
          value="Login"
          border={0}
          borderRadius="5px"
        />
      </form>
      <Box display="flex" width="100%" margin="auto" marginTop="50px">
        <hr width="150px"></hr>OR<hr width="150px"></hr>
      </Box>
      <Box>
        <Button
          width="400px"
          height="40px"
          margin="10px"
          border="1px solid #CFD8DC"
          backgroundColor={"white"}
        >
          <Image width="30px" src={facebook} padding="10px"></Image>
          <Text fontWeight={"bolder"} color="#90A4AE">
            FACEBOOK
          </Text>
        </Button>
        <Button
          width="400px"
          height="40px"
          margin="10px"
          border="1px solid #CFD8DC"
          backgroundColor={"white"}
        >
          <Image width="30px" src={google} padding="10px"></Image>
          <Text fontWeight={"bolder"} color="#90A4AE">
            GOOGLE
          </Text>
        </Button>
        <Link to="/register">
          <Button
            width="400px"
            height="30px"
            margin="10px"
            color={"#1E88E5"}
            fontWeight="bold"
            textDecoration={"none"}
            border="0"
            backgroundColor={"white"}
          >
            New to FirstCry? Register Here
          </Button>
        </Link>
        <hr />
        <Text fontSize={"10px"}>
          By continuing, you agree to Firstcry's Conditions of Use <br />
          and Privacy Notice.
        </Text>
      </Box>
    </div>
  );
}

export default Login