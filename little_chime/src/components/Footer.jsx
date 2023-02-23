 import React from 'react';
 import { Box, UnorderedList, ListItem ,Text,Image} from "@chakra-ui/react";




 function Footer() {
   return (
     <Box marginTop="50px" backgroundColor={"#E0F7FA"} padding="50px">
       <Box
         display={"flex"}
         justifyContent="space-around"
         fontSize={"15px"}
         color="#616161"
       >
         <Box>
           <i class="fa-solid fa-star fa-3x" style={{ color: "#00BCD4" }}></i>
           <br />
           <span>
             2 lakh + <br /> Unique brands
           </span>
         </Box>
         <Box>
           <i
             class="fa-solid fa-horse-head fa-3x"
             style={{ color: "#00BCD4" }}
           ></i>
           <br />
           <span>5800 brands</span>
         </Box>
         <Box>
           <i class="fa-solid fa-users fa-3x" style={{ color: "#00BCD4" }}></i>
           <br />
           <span>
             7.5 Million <br />
             Registered Users
           </span>
         </Box>
         <Box>
           <i
             class="fa-solid fa-recycle fa-3x"
             style={{ color: "#00BCD4" }}
           ></i>
           <br />
           <span>
             Easy Return, Replacement <br />& Exchange Policy
           </span>
         </Box>
         <Box>
           <i
             class="fa-solid fa-truck-fast fa-3x"
             style={{ color: "#00BCD4" }}
           ></i>
           <br />
           <span>
             Free Shipping Available
             <br />
             above Rs.699
           </span>
         </Box>
       </Box>
       <Box display={"flex"} marginTop="30px">
         <Box
           display={"flex"}
           textAlign={"left"}
           justifyContent="space-evenly"
           color="#616161"
           width="70%"
           alignContent={"left"}
         >
           <Box>
             <Text
               textDecoration={"underline"}
               fontSize="15px"
               fontWeight={"bold"}
             >
               CATEGORIES
             </Text>
             <UnorderedList
               listStyleType={"none"}
               fontSize="13px"
               padding={"0px"}
               margin="0"
             >
               <ListItem>Clothing & Fashion</ListItem>
               <ListItem>Toys</ListItem>
               <ListItem>Books & CDs</ListItem>
               <ListItem>School Supplies</ListItem>
               <ListItem>Birthday Party Supplies</ListItem>
               <ListItem>Baby Diapering</ListItem>
               <ListItem>Feeding & Nursing</ListItem>
               <ListItem>Bath & Skin Care</ListItem>
               <ListItem>Health & Safety</ListItem>
               <ListItem>Baby Gear</ListItem>
               <ListItem>Nursery</ListItem>
               <ListItem>Moms & Maternity</ListItem>
               <ListItem>Gifts</ListItem>
               <ListItem>Preschool Admissions</ListItem>
             </UnorderedList>
             <Text
               textDecoration={"underline"}
               fontSize="15px"
               fontWeight={"bold"}
             >
               COMPANY INFO
             </Text>
             <UnorderedList
               listStyleType={"none"}
               fontSize="13px"
               padding={"0px"}
               margin="0"
             >
               <ListItem>About Us</ListItem>
               <ListItem>Contact Us</ListItem>
               <ListItem>Brands</ListItem>
               <ListItem>F.A.Q.s</ListItem>
               <ListItem>FirstCry Stores & Playschool</ListItem>
             </UnorderedList>
           </Box>
           <Box>
             <Text
               textDecoration={"underline"}
               fontSize="15px"
               fontWeight={"bold"}
             >
               FIRSTCRY PARENTING
             </Text>
             <UnorderedList
               listStyleType={"none"}
               fontSize="13px"
               padding={"0px"}
               margin="0"
             >
               <ListItem>Getting Pregnant</ListItem>
               <ListItem>Pregnancy</ListItem>
               <ListItem>Baby</ListItem>
               <ListItem>Toddler</ListItem>
               <ListItem>Preschooler</ListItem>
               <ListItem>Big Kid</ListItem>
               <ListItem>Vaccination</ListItem>
               <ListItem>Growth Tracker</ListItem>
               <ListItem>Baby Names</ListItem>
               <ListItem>FirstCry Parenting YouTube</ListItem>
               <ListItem>Coloring Pages</ListItem>
             </UnorderedList>
             <Text
               textDecoration={"underline"}
               fontSize="15px"
               fontWeight={"bold"}
             >
               REGIONAL PARENTING
             </Text>
             <UnorderedList
               listStyleType={"none"}
               fontSize="13px"
               padding={"0px"}
               margin="0"
             >
               <ListItem>FirstCry Hindi Parenting</ListItem>
               <ListItem>FirstCry Marathi Parenting</ListItem>
               <ListItem>FirstCry Bangla Parenting</ListItem>
               <ListItem>FirstCry Arabia Parenting</ListItem>
               <ListItem>FirstCry UAE Parenting</ListItem>
             </UnorderedList>
             <Text
               textDecoration={"underline"}
               fontSize="15px"
               fontWeight={"bold"}
             >
               OUR OTHER WEBSITES
             </Text>
             <UnorderedList
               listStyleType={"none"}
               fontSize="13px"
               padding={"0px"}
               margin="0"
             >
               <ListItem>GlobalBees Shopping</ListItem>
             </UnorderedList>
           </Box>
           <Box>
             <Text
               textDecoration={"underline"}
               fontSize="15px"
               fontWeight={"bold"}
             >
               SHIPPING & POLICIES
             </Text>
             <UnorderedList
               listStyleType={"none"}
               fontSize="13px"
               padding={"0px"}
               margin="0"
             >
               <ListItem>Payments</ListItem>
               <ListItem>Shipping Policy</ListItem>
               <ListItem>Return & Replacement Policy</ListItem>
               <ListItem>Cancellation Policy</ListItem>
               <ListItem>Terms of Use</ListItem>
               <ListItem>Privacy Policy</ListItem>
               <ListItem>Next day & Same day delivery</ListItem>
               <ListItem>Responsible Disclosure</ListItem>
             </UnorderedList>
             <Text
               textDecoration={"underline"}
               fontSize="15px"
               fontWeight={"bold"}
             >
               PAYMENT METHOD
             </Text>
             <UnorderedList
               listStyleType={"none"}
               fontSize="13px"
               padding={"0px"}
               margin="0"
             >
               <ListItem>Credit Cards</ListItem>
               <ListItem>Net Bankingg</ListItem>
               <ListItem>ATM & Debit Cards</ListItem>
               <ListItem>COD(Cash on Delivery)</ListItem>
               <ListItem>Easy EMI</ListItem>
             </UnorderedList>
             <Text
               textDecoration={"underline"}
               fontSize="15px"
               fontWeight={"bold"}
             >
               CONNECT WITH US
             </Text>
             <Box letterSpacing={"4px"}>
               <i class="fa-brands fa-square-facebook fa-xl"></i>
               <i class="fa-brands fa-instagram fa-xl"></i>
               <i class="fa-brands fa-square-twitter fa-xl"></i>
               <i class="fa-brands fa-youtube fa-xl"></i>
               <i class="fa-brands fa-linkedin fa-xl"></i>
             </Box>
           </Box>
           <Box>
             <Text
               textDecoration={"underline"}
               fontSize="15px"
               fontWeight={"bold"}
             >
               OUR APPS
             </Text>
             <UnorderedList
               listStyleType={"none"}
               fontSize="13px"
               padding={"0px"}
               margin="0"
             >
               <ListItem>FirstCry India: Shopping & Parenting</ListItem>
               <ListItem>FirstCry India: Shopping & Parenting iOS</ListItem>
             </UnorderedList>
             <Text
               textDecoration={"underline"}
               fontSize="15px"
               fontWeight={"bold"}
             >
               Learning & Education
             </Text>
             <UnorderedList
               listStyleType={"none"}
               fontSize="13px"
               padding={"0px"}
               margin="0"
             >
               <ListItem>Intellikits</ListItem>
               <ListItem>Intellitots</ListItem>
             </UnorderedList>
             <Text
               textDecoration={"underline"}
               fontSize="15px"
               fontWeight={"bold"}
             >
               SHOP INTERNATIONAL
             </Text>
             <UnorderedList
               listStyleType={"none"}
               fontSize="13px"
               padding={"0px"}
               margin="0"
             >
               <ListItem>FirstCry UAE</ListItem>
               <ListItem>FirstCry KSA</ListItem>
               <ListItem>FirstCry KSA (English)</ListItem>
               <ListItem>FirstCry Arabia: Shopping & Parenting</ListItem>
               <ListItem>FirstCry Arabia: Shopping & Parenting iOS</ListItem>
             </UnorderedList>
             <Text
               textDecoration={"underline"}
               fontSize="15px"
               fontWeight={"bold"}
             >
               KIDS LEARNING & EDUCATIONAL APPS
             </Text>
             <UnorderedList
               listStyleType={"none"}
               fontSize="13px"
               padding={"0px"}
               margin="0"
             >
               <ListItem>PlayBees: Kids Learning & Education App</ListItem>
               <ListItem>PlayBees: 123 Kids Numbers App</ListItem>
               <ListItem>PlayBees: ABC for Kids</ListItem>
             </UnorderedList>
             <Text
               textDecoration={"underline"}
               fontSize="15px"
               fontWeight={"bold"}
             >
               CAREER AT FIRSTCRY.COM
             </Text>
             <UnorderedList
               listStyleType={"none"}
               fontSize="13px"
               padding={"0px"}
               margin="0"
             >
               <ListItem>Current Openings at FirstCry.com</ListItem>
             </UnorderedList>
           </Box>
         </Box>
         <Box float={"right"}>
           <Box
             display={"flex"}
             backgroundColor="white"
             paddingRight={"20px"}
             paddingLeft="20px"
             paddingBottom={"20px"}
             justifyContent={"space-around"}
             marginBottom="20px"
             boxShadow=" rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"
           >
             <Image
               boxSize="100px"
               backgroundColor={"white"}
               src="https://www.nicepng.com/png/detail/125-1256639_shop-cartoon-png-small-shop.png"
             />
             <Text fontWeight={"bolder"} fontSize="15px" color={"grey"}>
               BECOME OUR <br /> FRANCHISE STORE
             </Text>
           </Box>
           <Box>
             <Image src="https://cdn.fcglcdn.com/brainbees/images/intellitots-franchise-footer-banner.jpg" />
           </Box>
         </Box>
       </Box>
       <hr />
       <Box>
         <Text textAlign="left" fontSize="13px" color="#616161">
           <b>FirstCry India ~ Online Store for Baby & Kids Products</b>
           <br />
           Explore kids and baby products galore at FirstCry.com, the Big Store
           for Little Ones. We at FirstCry.com empathize with you as a mother
           who always aspires to bestow her newborn, infant, baby or kid with
           the best things even for their smallest needs. That is why,
           <br /> 'Mommy Knows Best'. From breastfeeding to bathing essentials,
           right furniture to myriad baby care products, a mother needs them all
           for her lil' one. This inspires us to offer convenient & hassle-free
           online shopping not just for babies & kids but for moms-to-be & new
           <br /> moms as well.
           <br />
           With 2 Lakh Baby & Kids Products, 2 Million Happy Customers, and 2
           Thousand+ top-notch national and international brands like Babyhug,
           Chicco, Graco, BSA, Johnson & Johnson, Huggies, Pampers, Medela,
           Pigeon, Mothercare, Fisher-Price, FunSkool, Lego, Disney,
           <br /> Barbie and more you can look forward to an unparalleled
           shopping experience with us. Shop for baby & kids products online
           ranging across diapering, feeding & nursing, skin & health care, baby
           & kids toys, newborn & infant clothing, baby clothes, kids wear,
           footwear,
           <br /> fashion accessories, baby gear, nursery, kids furniture,
           gifts, party supplies, books & CDs, school supplies and more at great
           discounts.
           <br />
           With the FirstCry mobile app, now you can shop on the go! Download
           the FirstCry Android and the iOS app and Voila!
           <br />
           <br />
           <br /> <b>Newborn & Baby Products Online Shopping in India</b>
           <br /> Along with all your affection and attention, your little
           bundle of joy deserves the best when it comes to newborn & baby
           items. Pamper your lil' one with the widest range of newborn & baby
           products: right from diapers to potty chairs, onesies to party wear,
           booties <br />
           to clogs, carry-cots to baby walkers, rattles to learning toys,
           FirstCry has it all! FirstCry newborn baby shopping checklist.
           <br />
           <br />
           <br />
           <b>Online Shopping for Kids at FirstCry.com</b> <br /> Shopping for
           your kid is no child's play and thus we help you explore, choose and
           buy from an exhaustive & finest collection of kids' products.
           FirstCry buying guides, premium store, boutiques, products checklist,
           and look-books are all aimed towards an enriching <br />
           and a fulfilling shopping experience. That's what makes us your go-to
           online store for kids shopping.
           <br />
           <br />
           <br />
           <b>FirstCry Parenting</b>
           <br /> With FirstCry Parenting, FirstCry isn’t just about shopping
           anymore. No matter if you are a first time parent, or it’s you second
           pregnancy we have you covered. FirstCry Parenting aids you not only
           as a perplexed parent, but also at each step from Planning to
           Pregnancy.
           <br /> Learn more about the important vaccines for your child from
           birth to 12 years, the immunization schedule and have it personalized
           for your child and never miss a vaccine with our timely
           notifications.
           <br /> Worried about your child’s growth? Don’t be! Track your
           child’s height & weight with our child growth tracker and take
           proactive steps towards your child’s healthy growth.
           <br /> Benefit from expert advice, researched articles, Q&A’s, tools
           & trackers and tips from fellow parents and simplify your parenting
           experience with us.
           <br />
           <br />
           <br />
           <b>FirstCry Intellikit </b> <br />
           Keep your little one engaged for hours with this age-appropriate fun
           with learning activity program. FirstCry Intellikit is designed by
           developmental experts and toy makers to put together unique themed
           activities every month! Each box contains activities, a story book,
           <br></br>flash cards and so much more!
           <br />
           With the Intellikit, your child will learn about a vast variety of
           topics, while enhancing and honing development, all in a fun and
           interactive way! To see all the past boxes and the current theme,
           click here.
           <br />
           <br />
           <br /> <b>FirstCry Intellitots Preschool</b>
           <br /> From shopping to parenting reads to activity boxes and now
           schools, FirstCry covers everything from conception to your baby’s
           education! FirstCry Intellitots preschools offer children a unique
           learning experience through hands-on education that covers
           life-skills
           <br /> and more. Modeled around the SPARKS ™ curriculum, children are
           exposed to quality education and given individual attention. Learn
           more about all the exciting things happening at our preschools here.
           <br />
           <br />
           <br />
           <b>FirstCry India Offers</b>
           <br />
           Satisfaction and Savings come guaranteed with irresistible FirstCry
           offers & deals on a range of high quality products. These are
           including but not limited to the FirstCry shopping carnivals, loyalty
           cash program, app offers, bank & wallet offers, Free @ Three,
           cashback,
           <br /> Guaranteed savings offers & more.
           <br /> To start with, why not grab some great discounts with the
           FirstCry coupons and buy baby & kids products online from anywhere in
           India with Free Shipping, Cash On Delivery (COD), Same & Next day
           delivery & EZ returns options. Happy Shopping!
         </Text>
       </Box>
       
     </Box>
   );
 }
 
 export default Footer