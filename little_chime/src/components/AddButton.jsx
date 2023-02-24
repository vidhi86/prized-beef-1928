import React from 'react'
import{Stack,Button,Box} from "@chakra-ui/react";



function AddButton({AddToCart,AddToShortlist,obj}) {



  return (
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
            AddToCart(obj);
          }}
        >
          Add to Cart
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
            AddToShortlist(obj);
          }}
        >
          Shortlist
        </Button>
      </Stack>
    </Box>
  );
}

export default AddButton