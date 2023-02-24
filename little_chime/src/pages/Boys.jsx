import React, { useContext, useEffect,useState } from 'react'
import{Box, Heading,Text,Image} from "@chakra-ui/react";
import { AuthContext } from '../Context/AuthContextProvider';
import { Pagination } from '../components/Pagination';

import { ProductBox } from '../components/ProductBox';



function Boys() {
 const {apiGetData} = useContext(AuthContext);
 const [data,setData]= useState([]);
 const [page,setPage] = useState(1);
 const [totalPages,setTotalPages] = useState(0);
 const total = Math.ceil(totalPages/9);
 console.log(totalPages,"here");


  useEffect(()=>{
    apiGetData("boy",page).then((res) => {
      console.log(res.headers["x-total-count"]);
      setData(res.data);
      setTotalPages(res.headers["x-total-count"]);
    });
  },[page])
 const handlePage=(val)=>{
   setPage(page+val);
 }

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
          <ProductBox id={el.id} image={el.avatar} title={el.title} price={el.price} rating={el.rating}/>
        ))}
        <Box margin="auto" gridColumn={"1/4"}>
          <Pagination handlePage={handlePage} page={page} total={total} />
        </Box>
      </Box>
    </Box>
  );
}

export default Boys