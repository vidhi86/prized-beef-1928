import{Box,
  Button,
   
  ListItem,
  
  UnorderedList,} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import styles from  "./Navbar.module.css";


export default function Navbar(){
 const navigate = useNavigate();

    return (
      <Box
        className={styles.navbar}
        backgroundColor={"#FDD835"}
        color="#616161"
        fontWeight={"bolder"}
        display="flex"
        justifyContent={"space-around"}
        height="50px"
        alignItems={"center"}
      >
        <Box className={styles.dropdown}>
          <Button className={styles.dropbtn}>ALL CATEGORIES</Button>
          <Box className={styles.dropdown_content}>
            <UnorderedList listStyleType={"none"}>
              <ListItem>BOYS FASHION</ListItem>
              <ListItem>GIRLS FASHION</ListItem>
              <ListItem>FOOTWEARS</ListItem>
              <ListItem>TOYS</ListItem>
              <ListItem>DAIPERING</ListItem>
              <ListItem>GEAR</ListItem>
              <ListItem>FEEDING</ListItem>
              <ListItem>BATH</ListItem>
              <ListItem>NURSERY</ListItem>
              <ListItem>MOMS</ListItem>
              <ListItem>HEALTH</ListItem>
              <ListItem>BOUTIQUES</ListItem>
              <ListItem>WOMEN'S BEAUTY & CARE</ListItem>
              <ListItem>STORES & PRESCHOOLS</ListItem>
              <ListItem>BIRTHDAYS & GIFTS</ListItem>
              <ListItem>OFFERS</ListItem>
            </UnorderedList>
          </Box>
        </Box>

        <Box className={styles.dropdown}>
          <Button onClick={() => navigate("/boys")} className={styles.dropbtn}>
            BOYS FASHION
          </Button>
          <Box className={styles.dropdown_content}>
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </Box>
        </Box>

        <Box className={styles.dropdown}>
          <Button onClick={() => navigate("/girls")} className={styles.dropbtn}>
            GIRLS FASHION
          </Button>
          <Box className={styles.dropdown_content}>
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </Box>
        </Box>

        <Box className={styles.dropdown}>
          <Button className={styles.dropbtn}>FOOTWEAR</Button>
          <Box className={styles.dropdown_content}>
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </Box>
        </Box>

        <Box className={styles.dropdown}>
          <Button onClick={() => navigate("/toys")} className={styles.dropbtn}>
            TOYS
          </Button>
          <Box className={styles.dropdown_content}>
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </Box>
        </Box>

        <Box className={styles.dropdown}>
          <Button onClick={() => navigate("/diapering")} className={styles.dropbtn}>
            DIAPERING
          </Button>
          <Box className={styles.dropdown_content}>
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </Box>
        </Box>

        <Box className={styles.dropdown}>
          <Button className={styles.dropbtn}>GEAR</Button>
          <Box className={styles.dropdown_content}>
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </Box>
        </Box>

        <Box className={styles.dropdown}>
          <Button className={styles.dropbtn}>FEEDING</Button>
          <Box className={styles.dropdown_content}>
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </Box>
        </Box>

        <Box className={styles.dropdown}>
          <Button className={styles.dropbtn}>BATH</Button>
          <Box className={styles.dropdown_content}>
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </Box>
        </Box>

        <Box className={styles.dropdown}>
          <Button className={styles.dropbtn}>NURSERY</Button>
          <Box className={styles.dropdown_content}>
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </Box>
        </Box>

        <Box className={styles.dropdown}>
          <Button className={styles.dropbtn}>MOMS</Button>
          <Box className={styles.dropdown_content}>
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </Box>
        </Box>

        <Box className={styles.dropdown}>
          <Button className={styles.dropbtn}>HEALTH</Button>
          <Box className={styles.dropdown_content}>
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </Box>
        </Box>
      </Box>
    );
}