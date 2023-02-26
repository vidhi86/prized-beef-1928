import React, { useContext } from 'react'
import{Box,Text,Heading,Image} from "@chakra-ui/react";
import AddButton from './AddButton';
import style from "../pages/Product.module.css";
import axios from 'axios';
import { AuthContext } from '../Context/AuthContextProvider';
import { Link } from 'react-router-dom';


export const ProductBox = ({id ,image,title,price,rating}) => {
    const{AddToCart,AddToShortlist} = useContext(AuthContext);
    const cart = {
      image,title,price,rating,
     }

  return (
    <Link to={`/products/${id}`}>
      <Box
        key={id}
        // border="1px solid black"
        marginTop="30px"
        textAlign={"left"}
        padding="20px"
        className={style.product}
        textDecoration="none"
      >
        <Image height="300px" width="300px" src={image} />
        <Text textDecoration="none">{title}</Text>
        <Heading>
          <i class="fa-solid fa-indian-rupee-sign"></i>
          {price}
        </Heading>
        <Text textDecoration="none">{rating}</Text>
        <AddButton
          textDecoration="none"
          AddToCart={AddToCart}
          AddToShortlist={AddToShortlist}
          obj={cart}
        />
      </Box>
    </Link>
  );
}
