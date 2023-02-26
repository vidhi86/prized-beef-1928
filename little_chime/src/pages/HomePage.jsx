import React from 'react' 
import SimpleSlider from '../components/Carousel';
import {Box,Image,Text,Grid} from "@chakra-ui/react";

import "./Home.css";


function HomePage() {
  return (
    <div>
      <SimpleSlider />
      <div className="addBox">
        <Box
          // w="400px"
          // backgroundColor={"white"}
          // borderRadius="10px"
          className="addBoxChild"
        >
          <Image
            w="400px"
            src="https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/29192.jpg"
            borderRadius={"10px 10px 0px 0px"}
          />
          <Box padding={"10px"} textAlign="left">
            <Text color="#78909C" fontWeight={"bold"}>
              Trendy Ethnic Looks | 2 - 14Y
            </Text>
            <Text color="#CFD8DC">Contemporary Indian Wear</Text>
            <Text textAlign="right" color={"red"}>
              NEW TODAY
            </Text>
          </Box>
        </Box>
        <Box
          w="400px"
          backgroundColor={"white"}
          borderRadius="10px"
          className="addBoxChild"
        >
          <Image
            w="400px"
            src="https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/29176.jpg"
            borderRadius={"10px 10px 0px 0px"}
          />
          <Box padding={"10px"} textAlign="left">
            <Text color="#78909C" fontWeight={"bold"}>
              Leave your mark | Up to 14Y
            </Text>
            <Text color="#CFD8DC">Explore the Print collection</Text>
          </Box>
        </Box>
        <Box
          w="400px"
          backgroundColor={"white"}
          borderRadius="10px"
          className="addBoxChild"
        >
          <Image
            w="400px"
            src="https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/29128.jpg"
            borderRadius={"10px 10px 0px 0px"}
          />
          <Box padding={"10px"} textAlign="left">
            <Text color="#78909C" fontWeight={"bold"}>
              Festival of Colors l Up To 24M
            </Text>
            <Text color="#CFD8DC">Shop curated list for Holi</Text>
          </Box>
        </Box>
        <Box
          w="400px"
          backgroundColor={"white"}
          borderRadius="10px"
          className="addBoxChild"
        >
          <Image
            w="400px"
            src="https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/29193.jpg"
            borderRadius={"10px 10px 0px 0px"}
          />
          <Box padding={"10px"} textAlign="left">
            <Text color="#78909C" fontWeight={"bold"}>
              Treat for your baby | Up to 24M
            </Text>
            <Text color="#CFD8DC">Onesies, Rompers &amp; more</Text>
          </Box>
        </Box>
        <Box
          w="400px"
          backgroundColor={"white"}
          borderRadius="10px"
          className="addBoxChild"
        >
          <Image
            w="400px"
            src="https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/29185.jpg"
            borderRadius={"10px 10px 0px 0px"}
          />
          <Box padding={"10px"} textAlign="left">
            <Text color="#78909C" fontWeight={"bold"}>
              Trendiest Fashion Fever | 2 - 11Y
            </Text>
            <Text color="#CFD8DC">Trendiest Fashion Fever | 2 - 11Y</Text>
          </Box>
        </Box>
        <Box
          w="400px"
          backgroundColor={"white"}
          borderRadius="10px"
          className="addBoxChild"
        >
          <Image
            w="400px"
            src="https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/29194.jpg"
            borderRadius={"10px 10px 0px 0px"}
          />
          <Box padding={"10px"} textAlign="left">
            <Text color="#78909C" fontWeight={"bold"}>
              Shout Out Trends | 4 - 15Y
            </Text>
            <Text color="#CFD8DC">Jeans, Tshirts, tops &amp; more</Text>
            <Text textAlign="right" color={"red"}>
              NEW TODAY
            </Text>
          </Box>
        </Box>
        <Box
          w="400px"
          backgroundColor={"white"}
          borderRadius="10px"
          className="addBoxChild"
        >
          <Image
            w="400px"
            src="	https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/29195.jpg"
            borderRadius={"10px 10px 0px 0px"}
          />
          <Box padding={"10px"} textAlign="left">
            <Text color="#78909C" fontWeight={"bold"}>
              Made Easy for Mommy
            </Text>
            <Text color="#CFD8DC">Maternity Wear &amp; more</Text>
          </Box>
        </Box>
        <Box
          w="400px"
          backgroundColor={"white"}
          borderRadius="10px"
          className="addBoxChild"
        >
          <Image
            w="400px"
            src="https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/29197.jpg"
            borderRadius={"10px 10px 0px 0px"}
          />
          <Box padding={"10px"} textAlign="left">
            <Text color="#78909C" fontWeight={"bold"}>
              Mommy's Shopping Spree
            </Text>
            <Text color="#CFD8DC">Maternity Dresses &amp; more</Text>
          </Box>
        </Box>
        <Box
          w="400px"
          backgroundColor={"white"}
          borderRadius="10px"
          className="addBoxChild"
        >
          <Image
            w="400px"
            src="https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/29196.jpg"
            borderRadius={"10px 10px 0px 0px"}
          />
          <Box padding={"10px"} textAlign="left">
            <Text color="#78909C" fontWeight={"bold"}>
              Slay The Ethnics | Up to 14Y
            </Text>
            <Text color="#CFD8DC">Stylish Ethnic wear &amp; accessories</Text>
            <Text textAlign="right" color={"red"}>
              NEW TODAY
            </Text>
          </Box>
        </Box>
        <Box
          w="400px"
          backgroundColor={"white"}
          borderRadius="10px"
          className="addBoxChild"
        >
          <Image
            w="400px"
            src="https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/29190.jpg"
            borderRadius={"10px 10px 0px 0px"}
          />
          <Box padding={"10px"} textAlign="left">
            <Text color="#78909C" fontWeight={"bold"}>
              Traditional Styles | Up To 14Y
            </Text>
            <Text color="#CFD8DC">
              Ethnic wear, Accessories, Footwear &amp; more
            </Text>
            <Text textAlign="right" color={"red"}>
              NEW TODAY
            </Text>
          </Box>
        </Box>
        <Box
          w="400px"
          backgroundColor={"white"}
          borderRadius="10px"
          className="addBoxChild"
        >
          <Image
            w="400px"
            src="https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/29189.jpg"
            borderRadius={"10px 10px 0px 0px"}
          />
          <Box padding={"10px"} textAlign="left">
            <Text color="#78909C" fontWeight={"bold"}>
              Cozy Cuddly Nights | Up To 14Y
            </Text>
            <Text color="#CFD8DC">Nightwear, Footwear &amp; more</Text>
            <Text textAlign="right" color={"red"}>
              NEW TODAY
            </Text>
          </Box>
        </Box>
        <Box
          w="400px"
          backgroundColor={"white"}
          borderRadius="10px"
          className="addBoxChild"
        >
          <Image
            w="400px"
            src="https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/29177.jpg"
            borderRadius={"10px 10px 0px 0px"}
          />
          <Box padding={"10px"} textAlign="left">
            <Text color="#78909C" fontWeight={"bold"}>
              Fill Up Your Carts With Carter's | Up to 24M
            </Text>
            <Text color="#CFD8DC">Full Sleeves Tees, Onesies &amp; more</Text>
            <Text textAlign="right" color={"red"}>
              NEW TODAY
            </Text>
          </Box>
        </Box>
      </div>
    </div>
  );
}

export default HomePage