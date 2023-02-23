import React from 'react'
import {
  Heading,
  Input,
  Box,
  Text,
  
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";
import {useState,useReducer} from "react";
import axios from "axios";
import style from "./Register.module.css";


const initialState = {
  name: "",
  mobile: "",
  email: "",
  password: "",
};
const reducer = (state, action) => {
  const {type,payload} = action;
  switch(type){
    case "name":
        return{
          ...state,
          name :payload
        };
      case "mobile" :
        return{
          ...state,
          mobile:payload
        };
      case "email" :
        return{
          ...state,
         email :payload
        };
      case "password" :
        return{
          ...state,
          password:payload
        };
      case "reset" :
        return initialState;
      default :
       return state;     
    }
  }
;

export default function Register() {

const [state, dispatch] = useReducer(reducer, initialState);
const handleSubmit = (e) => {
  e.preventDefault();
  axios.post(`http://localhost:3004/users`,state).then((res) => {
    console.log(res);
   
  });
  dispatch({ type: "reset" });
};
console.log(state);
const { name, mobile,email,password} = state;
  return (
    <Box width="400px" margin="auto">
      <Heading as="h3" size="lg" textAlign={"left"}>
        <i class="fa-regular fa-less-than"></i> Register
      </Heading>
      <form onSubmit={handleSubmit}>
        <Text margin={0} textAlign="left" fontSize={"15px"} fontWeight="bold">
          Full Name
        </Text>

        <br />
        <Input
          width="400px"
          height="30px"
          placholder="Enter your Full name"
          type="text||number"
          border="0"
          borderBottom={"1px solid black"}
          value={name}
          name="name"
          onChange={(e) => {
            dispatch({ type: "name", payload: e.target.value });
          }}
        />

        <br />
        <br />
        <Text margin={0} textAlign="left" fontSize={"15px"} fontWeight="bold">
          Mobile No.
        </Text>

        <br />
        <InputGroup>
          <InputLeftAddon
            children="+91"
            marginRight="10px"
            border="0"
            borderBottom={"1px solid black"}
          />
          <Input
            type="tel"
            placeholder="mobile number"
            width="400px"
            height="30px"
            border="0"
            borderBottom={"1px solid black"}
            value={mobile}
            name="mobile"
            onChange={(e) => {
              dispatch({ type: "mobile", payload: e.target.value });
            }}
          />
        </InputGroup>
        <Text fontSize={"13px"} textAlign="left">
          OTP will be sent on this Mobile No. for verification.
        </Text>
        <br />
        <br />
        <Text margin={0} textAlign="left" fontSize={"15px"} fontWeight="bold">
          Email ID
        </Text>

        <br />
        <Input
          width="400px"
          height="30px"
          placholder="email"
          type="text"
          border="0"
          borderBottom={"1px solid black"}
          value={email}
          name="email"
          onChange={(e) => {
            dispatch({ type: "email", payload: e.target.value });
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
          border="0"
          borderBottom={"1px solid black"}
          value={password}
          name="password"
          onChange={(e) => {
            dispatch({ type: "password", payload: e.target.value });
          }}
        />
        <Text fontSize={"13px"} textAlign="left">
          Password must be at least 8 characters long with 1<br /> Uppercase, 1
          Lowercase & 1 Numeric character.
        </Text>
        <br />
        <br />
        <Input
          width="410px"
          color="white"
          fontWeight={"bold"}
          fontSize="15px"
          height="40px"
          type="submit"
          value="Register"
          border="0"
          borderRadius="5px"
          backgroundColor={"#FF7043"}
          cursor="pointer"
          disabled={name===""||mobile===""||email===""|| password===""}
        />
      </form>
    </Box>
  );
}

