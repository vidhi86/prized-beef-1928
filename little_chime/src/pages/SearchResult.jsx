import React from 'react' 
import {Box}  from "@chakra-ui/react";
import { ProductBox } from '../components/ProductBox';

export const SearchResult = ({data=[]}) => {
  return (
    <Box display={"flex"} margin={"auto"}>
      
      <Box
        className="productBox"
        // width="80%"
        // // border="1px solid black"
        // display={"grid"}
        // gridTemplateColumns={"repeat(3,1fr)"}
        // gridGap="10px"
      >
        {data.map((el) => (
          <ProductBox
            id={el.id}
            image={el.avatar}
            title={el.title}
            price={el.price}
            rating={el.rating}
          />
        ))}
        {/* <Box margin="auto" gridColumn={"1/4"}>
          <Pagination handlePage={handlePage} page={page} total={total} />
        </Box> */}
      </Box>
    </Box>
  );
}
