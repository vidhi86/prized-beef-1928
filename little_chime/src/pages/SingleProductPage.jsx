import axios from 'axios'
import React, { useContext, useEffect ,useState} from 'react'
import {useNavigate, useParams} from "react-router-dom";
import{Box,Button,Stack} from "@chakra-ui/react";
import { AuthContext } from '../Context/AuthContextProvider';



function SingleProductPage() {
    const navigate = useNavigate();
    const { AddToShortlist } = useContext(AuthContext);
    let params = useParams();
    console.log(params);
    const [data,setData] = useState({});
    const getData=(id)=>{
            axios.get(`  http://localhost:3004/products/${id}`).then((res)=>{
                console.log(res)
                setData(res.data);
            }).catch((err)=>{console.log(err)});
        };
    useEffect(()=>{
        getData(params.product_id);
    },[])
  return (
    <div style={{ display: "flex" }}>
      <div>
        <img style={{ width: "500px" }} src={data.avatar} alt={data.title} />
        {/* <img style={{ width: "500px" }} src={data.avatar2} alt={data.title} /> */}
      </div>
      <div style={{ width: "80%", textAlign: "left", padding: "20px" }}>
        <h1>{data.title}</h1>
        <p style={{ color: "#607D8B" }}>Product Id : {data.id}</p>
        <hr />
        <h1>
          <i class="fa-solid fa-indian-rupee-sign"></i>
          {data.price}
        </h1>
        <p style={{ color: "#607D8B" ,fontSize:"15px"}}>
          MRP incl. all taxes, Add'l charges may apply on discounted price
        </p>
        <div></div>
        <div style={{display:"flex"}}>
          <h3>Size</h3>
          <div style={{border:"1px solid #B0BEC5",padding:"20px",margin:"10px"}}>9 - 12 M</div>
          <div style={{border:"1px solid #B0BEC5",padding:"20px",margin:"10px"}}>12 - 18 M</div>
          <div style={{border:"1px solid #B0BEC5",padding:"20px",margin:"10px"}}>18 - 24 M</div>
          <div style={{border:"1px solid #B0BEC5",padding:"20px",margin:"10px"}}>2 - 3 Y</div>
          <div style={{border:"1px solid #B0BEC5",padding:"20px",margin:"10px"}}>3 - 4 Y</div>
        </div>
        <hr />
        <div>
          <h4>PRODUCT DESCRIPTION </h4>
          <p>Specifications:</p>
          <p>Brand - Bonfino</p>
          <p>Type - Top and Pants Set</p>
          <p>Fabric - Viscose/Woven</p>
          <p>Sleeves - Full</p>
          <p>Neck - Peter pan collar</p>
        </div>
        <Box margin="auto">
          <Stack direction="row" spacing={4} align="center">
            <Button
              backgroundColor="white"
              color={"#F4511E"}
              width="200px"
              border="0"
              height="50px"
              fontWeight="bolder"
              fontSize="20px"
              borderRadius="5px"
              marginRight="5px"
                onClick={() => {
                  navigate("/cart")
                }}
            >
              <i class="fa-solid fa-cart-shopping"></i>&nbsp; Go to Cart
            </Button>
            <Button
              color="white"
              backgroundColor={"#F4511E"}
              width="200px"
              border="0"
              height="50px"
              fontWeight="bolder"
              fontSize="20px"
              borderRadius="5px"
              marginRight="5px"
                onClick={() => {
                  AddToShortlist(data);
                }}
            >
              <i class="fa-solid fa-heart"></i>&nbsp; Shortlist
            </Button>
          </Stack>
        </Box>
      </div>
    </div>
  );
}

export default SingleProductPage;