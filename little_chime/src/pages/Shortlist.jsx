import React, { useContext, useEffect, useState } from "react";
import { Box, Image, Text, Heading, Button, Stack } from "@chakra-ui/react";
import axios from "axios";
import style from "./Product.module.css";
import { AuthContext } from "../Context/AuthContextProvider";

const getData = () => {
  return axios.get(` http://localhost:3004/shortlist`);
};
export default function Shortlist() {
  const [data, setData] = useState([]);
  const { AddToCart} = useContext(AuthContext);
  const [change, setChange] = useState(false);
  useEffect(() => {
    getData()
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleRemove = (id) => {
    axios({
      method: "delete",
      url: `http://localhost:3004/shortlist/${id}`,
    }).then(() => {
      getData();
      setChange(!change);
    }).catch((err)=>console.log(err));
  };
  return (
    <Box display={"flex"} width="90%" margin={"auto"}>
      <Box width="20%" height={"300px"}></Box>
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
                  width="100px"
                  border="0"
                  height="30px"
                  fontWeight="bolder"
                  fontSize="15px"
                  borderRadius="5px"
                  marginRight="5px"
                  onClick={() => {
                    AddToCart(el);
                  }}
                >
                  Add to cart
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
                  marginRight="5px"
                  onClick={() => {
                    handleRemove(el.id);
                  }}
                >
                  Remove
                </Button>
              </Stack>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}


