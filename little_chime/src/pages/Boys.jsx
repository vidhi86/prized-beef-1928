import React, { useContext, useEffect,useState } from 'react'
import{Box, Heading,Text,Image} from "@chakra-ui/react";
import { AuthContext } from '../Context/AuthContextProvider';
import { Pagination } from '../components/Pagination';
import "./Product.css";
import { ProductBox } from '../components/ProductBox';
import Sorting from '../components/Sorting';


function Boys() {
 const {apiGetData} = useContext(AuthContext);
 const [data,setData]= useState([]);
 const [page,setPage] = useState(1);
 const [sort, setSort] = useState("");
 const [order, setOrder] = useState("");
 const [totalPages,setTotalPages] = useState(0);
 const total = Math.ceil(totalPages/9);
 console.log(totalPages,"here");


  useEffect(() => {
    apiGetData("boy", page, sort, order).then((res) => {
      console.log(res.headers["x-total-count"]);
      setData(res.data);
      setTotalPages(res.headers["x-total-count"]);
    });
  }, [page, order]);
 const handlePage=(val)=>{
   setPage(page+val);
 }
 const handleSort = (sort, order) => {
   setSort(sort);
   setOrder(order);
 };

  return (
    <Box display={"flex"} margin={"auto"}>
      <Box width="20%" height={"300px"}>
        <Sorting handleSort={handleSort} />
      </Box>
      <Box className="productBox">
        {data.map((el) => (
          <ProductBox
            id={el.id}
            image={el.avatar}
            title={el.title}
            price={el.price}
            rating={el.rating}
          />
        ))}
        <Box margin="auto" gridColumn={"1/4"}>
          <Pagination handlePage={handlePage} page={page} total={total} />
        </Box>
      </Box>
    </Box>
  );
}

export default Boys