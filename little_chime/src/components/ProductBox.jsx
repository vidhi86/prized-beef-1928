import React, { useContext } from 'react'
import{Box,Text,Heading,Image} from "@chakra-ui/react";
import AddButton from './AddButton';
import style from "../pages/Product.module.css";
import axios from 'axios';
import { AuthContext } from '../Context/AuthContextProvider';


export const ProductBox = ({id ,image,title,price,rating}) => {
    const{AddToCart,AddToShortlist} = useContext(AuthContext);
    const cart = {
      image,title,price,rating,
     }

  return (
    <Box
      key={id}
      // border="1px solid black"
      marginTop="30px"
      textAlign={"left"}
      padding="20px"
      className={style.product}
    >
      <Image height="300px" width="300px" src={image} />
      <Text>{title}</Text>
      <Heading>
        <i class="fa-solid fa-indian-rupee-sign"></i>
        {price}
      </Heading>
      <Text>{rating}</Text>
      <AddButton AddToCart={AddToCart} AddToShortlist={AddToShortlist} obj={cart}/>
    </Box>
  );
}
