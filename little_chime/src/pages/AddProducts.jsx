import {Input,
    FormControl,
  FormLabel,
  Select,
  FormErrorMessage,
  FormHelperText, } from "@chakra-ui/react"


import React from 'react'
import axios from "axios";
import { useReducer } from "react";
import { useState } from "react";


const initailState ={
   title:"",
   avatar:"",
   avatar2:"",
   price:0,
   category:"",
   rating:0,
};
const addReducer =(state,action)=>{
    const {type,payload} = action;
    switch (type) {
      case "title":
        return {
          ...state,
          title: payload,
        };
      case "avatar":
        return {
          ...state,
          avatar: payload,
        };
      case "avatar2":
        return {
          ...state,
          avatar2: payload,
        };
      case "price":
        return {
          ...state,
          price: payload,
        };
      case "category":
        return {
          ...state,
          category: payload,
        };
      case "rating":
        return {
          ...state,
        rating: payload,
        };
      case "reset":
        return initailState;
      default:
        return state;
    } 
}

export const AddProducts = () => {
const [state,dispatch] = useReducer(addReducer,initailState);
// const [products,setProducts] = useState([]);

const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(state);
    axios.post(`http://localhost:3004/products`,state)
    .then((res)=>{console.log(res)})
    .catch((err)=>{console.log(err)});
    dispatch({type:"reset"});
}



const {title,avatar,avatar2,price,category,rating} = state;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Title</FormLabel>
          <Input
            type="text"
            placeholder="tilte"
            value={title}
            onChange={(e) => {
              dispatch({ type: "title", payload: e.target.value });
            }}
          />
          <FormLabel>Image</FormLabel>
          <Input
            type="url"
            placeholder="image"
            value={avatar}
            onChange={(e) => {
              dispatch({ type: "avatar", payload: e.target.value });
            }}
          />
          <FormLabel>Image 2</FormLabel>
          <Input
            type="url"
            placeholder="image2"
            value={avatar2}
            onChange={(e) => {
              dispatch({ type: "avatar2", payload: e.target.value });
            }}
          />
          <FormLabel>Price</FormLabel>
          <Input
            type="number"
            placeholder="price"
            value={price}
            onChange={(e) => {
              dispatch({ type: "price", payload: e.target.value });
            }}
          />
          <FormLabel>Category</FormLabel>
          <Select
            placeholder="Category"
            value={category}
            onChange={(e) => {
              dispatch({ type: "category", payload: e.target.value });
            }}
          >
            <option>Toys</option>
            <option>Daipers</option>
            <option>Footwears</option>
            <option>Gears</option>
            <option>Costmetics</option>
            <option>Moms</option>
            <option>Boutiquies</option>
            <option>Girls</option>
            <option>Boys</option>
          </Select>
          <FormLabel>Rating</FormLabel>
          <Select
            placeholder="Rating"
            value={rating}
            onChange={(e) => {
              dispatch({ type: "rating", payload: e.target.value });
            }}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Select>
          <Input type="submit"></Input>
        </FormControl>
      </form>
    </div>
  );
}



