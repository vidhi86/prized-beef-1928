import React,{useState} from 'react'

import { Heading, Input, Box, Text, Button, Image } from 
"@chakra-ui/react";
import { Navigate, useNavigate } from 'react-router-dom';





function AdminLogin() {
const [identity, setIdentity] = useState("");
const [password, setPassword] = useState("");

const navigate = useNavigate();
const handleSubmit=(e)=>{
  e.preventDefault();
  if(identity==="vidhi98sharma@gmail.com"|| identity==="8619510169" && password==="sharma"){
    alert("Logged In");
    navigate("/admin")
  }else{
    alert("Authorized excess only")
  }
}

  return (
    <div style={{ width: "400px", margin: "auto" }}>
      <Heading as="h3" size="lg" textAlign={"left"}>
       Admin Login 
      </Heading>
      <form onSubmit={handleSubmit}>
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
      
    </div>
  );
}

export default AdminLogin