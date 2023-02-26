import { Button } from '@chakra-ui/react';
import React,{useReducer} from 'react';
import { Select, DrawerOverlay, Drawer,DrawerContent,DrawerCloseButton,DrawerHeader,DrawerBody,FormControl,FormLabel,Input,DrawerFooter, } from "@chakra-ui/react";



function DrawerFunction({isOpen,onClose,btnRef,id}) {
   

  return (
    <Drawer
      isOpen={isOpen}
      placement="top"
      onClose={onClose}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent backgroundColor="white" borderBottom={"3px solid #FFEB3B"}>
        <DrawerCloseButton
          h={"30px"}
          backgroundColor="white"
          color={"#F4511E"}
          border="0"
        />
        <DrawerHeader fontSize={"30px"} textAlign="center" color="#FF5722">
          Edit Product
        </DrawerHeader>

        <DrawerBody>
          <form>
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
                // value={title}
                //   onChange={(e) => {
                //     dispatch({ type: "title", payload: e.target.value });
                //   }}
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
                // value={avatar}
                // onChange={(e) => {
                //   dispatch({ type: "avatar", payload: e.target.value });
                // }}
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
                // value={avatar2}
                // onChange={(e) => {
                //   dispatch({
                //     type: "avatar2",
                //     payload: e.target.value,
                //   });
                // }}
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
                // value={price}
                // onChange={(e) => {
                //   dispatch({ type: "price", payload: e.target.value });
                // }}
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
                // value={category}
                border="0"
                height="30px"
                // onChange={(e) => {
                //   dispatch({
                //     type: "category",
                //     payload: e.target.value,
                //   });
                // }}
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
                // value={rating}
                border="0"
                width="400px"
                height="30px"
                // onChange={(e) => {
                //   dispatch({ type: "rating", payload: e.target.value });
                // }}
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
                // disabled={
                //   title === "" ||
                //   avatar === "" ||
                //   avatar2 === "" ||
                //   price === 0 ||
                //   category === "" ||
                //   rating === 0
                // }
              ></Input>
            </FormControl>
          </form>
        </DrawerBody>

        <DrawerFooter>
          <Button
            alignContent={"left"}
            variant="outline"
            mr={3}
            onClick={onClose}
            backgroundColor="#F4511E"
            color={"white"}
            border="0"
            fontSize={"20px"}
            h="30px"
            borderRadius={"5px"}
            fontWeight="bold"
            margin={"20px"}
          >
            Close
          </Button>
          
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export default DrawerFunction;