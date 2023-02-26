import React, { useContext, useEffect,useState } from 'react'
import{Box,Image,Text,Heading,Button,Stack} from "@chakra-ui/react";
import axios from 'axios';
import style from "./Product.module.css";
import { AuthContext } from '../Context/AuthContextProvider';



const getData = ()=>{
 return axios.get(` http://localhost:3004/cart`)
}
function Cart() {
const [data, setData] = useState([]);
const {AddToShortlist} = useContext(AuthContext);
const [change,setChange] = useState(false);
useEffect(()=>{
    getData().then((res)=>{
        console.log(res);
        setData(res.data);
    });
},[change])
const total = data.reduce((acc,el)=>acc += +el.price,0)
const discount = total * (20 / 100);
console.log(total);
const handleRemove = (id)=>{
  axios.delete(`http://localhost:3004/cart/${id}`).then(()=>{
     getData();
     setChange(!change);
  }).catch((err)=>{console.log(err)});
  
}
return (
  <Box display={"flex"} width="90%" margin={"auto"} gap="20px">
    <Box
      width="80%"
      // border="1px solid black"
      display={"grid"}
      gridTemplateColumns={"repeat(3,1fr)"}
      gridGap="10px"
    >
      {data.map((el) => (
        <Box
          key={el.id}
          // border="1px solid black"
          marginTop="30px"
          textAlign={"left"}
          padding="20px"
          className={style.product}
        >
          <Image height="300px" width="300px" src={el.image} />
          <Text>{el.title}</Text>
          <Heading>
            <i class="fa-solid fa-indian-rupee-sign"></i>
            {el.price}
          </Heading>
          <Text>{el.rating}</Text>
          <Box margin="auto">
            <Stack direction="row" spacing={4} align="center">
              <Button
                backgroundColor="white"
                color={"#F4511E"}
                width="150px"
                border="0"
                height="30px"
                fontWeight="bolder"
                fontSize="15px"
                borderRadius="5px"
                marginRight="5px"
                marginLeft={"10px"}
                onClick={() => {
                  AddToShortlist(el);
                }}
              >
                <i class="fa-solid fa-heart"></i>&nbsp; Add to Shortlist
              </Button>
              <Button
                color="white"
                backgroundColor={"#F4511E"}
                width="100px"
                border="0"
                height="30px"
                fontWeight="bolder"
                fontSize="15px"
                borderRadius="5px"
                marginLeft={"10px"}
                onClick={() => {
                  handleRemove(el.id);
                }}
              >
                <i class="fa-solid fa-trash"></i>&nbsp; Remove
              </Button>
            </Stack>
          </Box>
        </Box>
      ))}
    </Box>
    <Box
      boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
      width="20%"
      padding={"20px"}
      marginTop="30px"
      textAlign={"left"}
      height="400px"
    >
      <Heading as="h4" size="md">
        Payment Information
      </Heading>
      <Box fontSize="15px" display={"flex"} color="#90A4AE">
        <Text>Value of Product(s)</Text>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Text display={"flex"}>
          <i class="fa-solid fa-indian-rupee-sign"></i>
          {total.toFixed(2)}
        </Text>
      </Box>
      <Box fontSize="15px" display={"flex"} color="#4CAF50">
        <Text>Discount</Text>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Text display={"flex"}>
          <i class="fa-solid fa-indian-rupee-sign"></i>
          {discount.toFixed(2)}
        </Text>
      </Box>
      <Box fontSize="15px" color="#4CAF50" display={"flex"}>
        <Text>Shipping</Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <Text>Free</Text>
      </Box>
      <hr style={{ border: "1px dotted black" }} />
      <Box fontSize="15px" display={"flex"} fontWeight="bolder">
        <Text>Sub total</Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
        <Text display={"flex"}>
          <i class="fa-solid fa-indian-rupee-sign"></i>
          {total - discount.toFixed(2)}
        </Text>
      </Box>
      <hr style={{ border: "1px dotted black" }} />
      <Box fontSize="15px" display={"flex"} fontWeight="bolder">
        <Text>Final Payment</Text> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Text display={"flex"}>
          <i class="fa-solid fa-indian-rupee-sign"></i>
          {total - discount.toFixed(2)}
        </Text>
      </Box>
    </Box>
  </Box>
);
}

export default Cart