import React from "react"; 
// import { useState } from "react";
import { Container, Box, Text , Tab, Tabs,TabList, TabPanels, TabPanel  } from "@chakra-ui/react";
import Login from "./Login";
import SignUp from "./Signup";

const InitialPage= ()=> {
//   const [status, setStatus] = useState('');
    return <Container maxW= "xl" centerContent >
        <Box 
          d="flex"
          justifyContent='center'
          textAlign='center'
          p={3}
          bg= "white"
          w='100%'
          m= '40px 0 15px 0'
          borderRadius='20px'
          borderWidth= "5px"
        >
            <Text fontSize="3xl" fontFamily= "Work sans" color="Black">Welcome to Project-Manager APP!!</Text>
        </Box>

        <Box bg= "white" width="100%" p="4" borderRadius='20px' borderWidth= "5px" >            
        <Tabs variant='soft-rounded' colorScheme='green' >
         <TabList>
           <Tab width={"50%"}>Login</Tab>
           <Tab width={"50%"}>Sign up</Tab>
         </TabList>
         <TabPanels>
           <TabPanel>
             {/* <Login status={status} setStatus={setStatus}/> */}
             <Login />
           </TabPanel>
           <TabPanel>
            {/* <SignUp addUser={addUser}  /> */}
            <SignUp  />
           </TabPanel>
         </TabPanels>
        </Tabs>

        </Box>
    </Container>

}



export default InitialPage; 