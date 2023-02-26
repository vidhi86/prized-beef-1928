import axios from 'axios'
import React, { useEffect,useState } from 'react'
import {
  Box,
  Image,
 
  Button,
  Heading,
  
  useDisclosure
} from "@chakra-ui/react";
import DrawerFunction from "./Drawer"
import { Pagination } from './Pagination';



const AdminProduct = () => {
 const { isOpen, onOpen, onClose } = useDisclosure();
 const btnRef = React.useRef();
 const [id,setId] = useState(null); 
const[data,setData] = useState([]);
const [page,setPage] = useState(1);
const [change,setChange] = useState(false);
const [totalPages, setTotalPages] = useState(0);
const total = Math.ceil(totalPages/10);
console.log(totalPages);
const getData =()=>{
   axios.get(` http://localhost:3004/products`,{
    params:{
      _limit:10,
      _page:page
    }
   }).then((res)=>{
    console.log(res);
    setData(res.data);
    setTotalPages(res.headers["x-total-count"]);
   }).catch((err)=>{console.log(err)});
    }

 useEffect(()=>{
   getData();
 },[page,change]);   
const handleEdit =(id)=>{
   setId(id);

}
console.log(id,"*");
const handleRemove = (id) => {
  axios
    .delete(`http://localhost:3004/products/${id}`)
    .then(() => {
      getData();
      setChange(!change);
    })
    .catch((err) => {
      console.log(err);
    });
};
 const handlePage = (val) => {
    setPage(page + val);
  };
  return (
    <Box>
      <Heading fontSize={"50px"} fontFamily="comic-san-ms" color={"#4FC3F7"}>
        All Products
      </Heading>
      {data?.map((el) => (
        <Box
          display={"flex"}
          gap="20px"
          margin={"30px"}
          width="90%"
          h="250px"
          border="1px solid #CFD8DC"
        >
          <Image
            float="left"
            padding={"30px"}
            width="150px"
            h={"150px"}
            src={el.avatar}
            alt={el.title}
          />
          <Image
            float="left"
            padding={"30px"}
            width="150px"
            h={"150px"}
            src={el.avatar2}
            alt={el.title}
          />
          <Box padding={"50px"} textAlign="left" height={"150px"}>
            <Box
              mt="1"
              fontWeight="bold"
              as="h4"
              lineHeight="tight"
              noOfLines={1}
            >
              {el.title}
            </Box>
            <Box
              fontWeight="bold"
              display="flex"
              mt="2"
              alignItems="center"
              margin="20px"
            >
              Category:&nbsp;&nbsp;&nbsp;{el.category}
            </Box>
            <Box>
              <Box fontWeight="bold" as="span" margin="20px">
                Price:&nbsp;&nbsp;&nbsp;
                <i class="fa-solid fa-indian-rupee-sign"></i>
                {el.price}
              </Box>
            </Box>

            <Box display="flex" mt="2" alignItems="center" margin="20px">
              {el.rating}
            </Box>
          </Box>
          <Box h={"200px"} border="1px solid #CFD8DC" margin="auto"></Box>
          <Box width="200px" margin={"auto"}>
            <Button
              backgroundColor="white"
              color={"#F4511E"}
              w={["100px", "100px", "100px", "100px", "100px", "200px"]}
              height="30px"
              fontWeight="bolder"
              fontSize="15px"
              borderRadius="5px"
              marginRight="5px"
              border="1px solid #F4511E"
              onClick={()=>{onOpen()
                handleEdit(el.id)
              }}
            >
              <i class="fa-solid fa-pen-to-square"></i>&nbsp;&nbsp; Edit
            </Button>
            <DrawerFunction
              isOpen={isOpen}
              onClose={onClose}
              btnRef={btnRef}
              id={id}
            
            />
            <Button
              color="white"
              backgroundColor={"#F4511E"}
              w={["100px", "100px", "100px", "100px", "100px", "200px"]}
              border="0"
              height="30px"
              fontWeight="bolder"
              fontSize="15px"
              borderRadius="5px"
              marginTop="10px"
              onClick={() => {
                handleRemove(el.id);
              }}
            >
              <i class="fa-solid fa-trash"></i>&nbsp;&nbsp;Remove
            </Button>
          </Box>
        </Box>
      ))}
      <Pagination handlePage={handlePage} page={page} total={total} />
    </Box>
  );
}

export default AdminProduct