import {Input,
    FormControl,
  FormLabel,
  Select,
  Heading
   } from "@chakra-ui/react"


import React from 'react'
import axios from "axios";
import { useReducer } from "react";



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
      <Heading fontSize={"50px"} fontFamily="comic-san-ms" color={"#4FC3F7"}>
        Add Products
      </Heading>
      <form onSubmit={handleSubmit}>
        <FormControl w="500px" textAlign={"left"} margin={"auto"}>
          <FormLabel
            margin={0}
            textAlign="left"
            fontSize={"15px"}
            fontWeight="bold"
          >
            Title
          </FormLabel>
          <Input
            type="text"
            placeholder="tilte"
            width="400px"
            height="30px"
            value={title}
            onChange={(e) => {
              dispatch({ type: "title", payload: e.target.value });
            }}
          />
          <br />
          <br></br>
          <FormLabel
            margin={0}
            textAlign="left"
            fontSize={"15px"}
            fontWeight="bold"
          >
            Image
          </FormLabel>
          <Input
            type="url"
            placeholder="image"
            width="400px"
            height="30px"
            value={avatar}
            onChange={(e) => {
              dispatch({ type: "avatar", payload: e.target.value });
            }}
          />
          <br />
          <br></br>
          <FormLabel
            margin={0}
            textAlign="left"
            fontSize={"15px"}
            fontWeight="bold"
          >
            Image 2
          </FormLabel>
          <Input
            type="url"
            placeholder="image2"
            width="400px"
            height="30px"
            value={avatar2}
            onChange={(e) => {
              dispatch({ type: "avatar2", payload: e.target.value });
            }}
          />
          <br />
          <br></br>
          <FormLabel
            margin={0}
            textAlign="left"
            fontSize={"15px"}
            fontWeight="bold"
          >
            Price
          </FormLabel>
          <Input
            type="number"
            placeholder="price"
            width="400px"
            height="30px"
            value={price}
            onChange={(e) => {
              dispatch({ type: "price", payload: e.target.value });
            }}
          />
          <br />
          <br></br>
          <FormLabel
            margin={0}
            textAlign="left"
            fontSize={"15px"}
            fontWeight="bold"
          >
            Category
          </FormLabel>
          <Select
            placeholder="Category"
            value={category}
            border="0"
            height="30px"
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
          <br />
          <br></br>
          <FormLabel
            margin={0}
            textAlign="left"
            fontSize={"15px"}
            fontWeight="bold"
          >
            Rating
          </FormLabel>
          <Select
            placeholder="Rating"
            value={rating}
            border="0"
            width="400px"
            height="30px"
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
          <br />
          <br></br>
          <Input
            width="410px"
            backgroundColor={"#FF5722"}
            color="white"
            fontWeight={"bold"}
            fontSize="15px"
            height="40px"
            type="submit"
            value="Add"
            border={0}
            borderRadius="5px"
            disabled={
              title === "" || avatar === "" || avatar2 === "" || price === 0 || category===""||rating===0
            }
          ></Input>
        </FormControl>
      </form>
    </div>
  );
}



