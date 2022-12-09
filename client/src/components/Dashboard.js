import React, {useEffect,useState}from 'react';
import { Grid, GridItem, Text, Tabs, TabList, TabPanels, Tab, TabPanel,Avatar, MenuDivider, MenuItem, MenuList } from '@chakra-ui/react'
import {   Menu, MenuButton,Button, Card, CardHeader, CardBody, CardFooter, Heading}  from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { SimpleGrid } from '@chakra-ui/react'
import { Link, Redirect } from 'react-router-dom'
import { useHistory } from 'react-router-dom';

function Dashboard (){
  const [projects, setProjects] = useState([])
  const history = useHistory();

  useEffect(()=>{
    fetch("/projects")
    .then(r=>r.json())
    .then(projects=>setProjects(projects))
  },[])
 
  function handleDelete(id) {
    fetch(`/projects/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setProjects((projects) =>
          projects.filter((project) => project.id !== id)
        );
      }
    });
  }

  
  //delete session for logout
  function handleClick (e){
    fetch("http://localhost:3000/logout", {
      method: 'DELETE'
    })
    .then(res => {
      if(res.ok){
        history.push('/login')
      }
    })
  }
    return (
    <Grid
    templateAreas={`"header header "
                  `}
    gridTemplateRows={'50px 1fr 10px'}
    gap='7'
    fontWeight='bold'
    paddingLeft={5}
    paddingRight={5}
    paddingTop={2}
    marginBottom={'2px'}
    >

    <GridItem pl='100' bg='white' display={'flex'} justifyContent='space-between' borderWidth='3px' borderColor={'blue.100'} borderRadius='lg' area={'header'}>
      <Tabs  marginLeft='-50px'>
        <TabList>
          <Tab>Board</Tab>
          <Link to= '/project/new'>
          <Tab>New Project + </Tab>
          </Link>
        </TabList>
      </Tabs>
  
    <Text textColor={"GrayText"} alignSelf='center' marginLeft='-150px' fontSize={"3xl"} ><b> Project-Manager </b></Text>
    <Menu >
      <MenuButton as ={Button} marginTop='3px' marginRight={'5px'} padding='5' leftIcon={<ChevronDownIcon />}>
        <Avatar size="sm" cursor={"pointer"} />
        </MenuButton>
        <MenuList>
          <MenuItem>My Profile</MenuItem>
          <MenuDivider />
          <MenuItem onClick={handleClick}>LogOut</MenuItem>
          
        </MenuList>
    </Menu>
    </GridItem>

   
    <Grid templateColumns='repeat(4, 1fr)'  gap={5}>
      <GridItem overflow="scroll" display="grid" borderRadius='lg' w='100%' h='740' bg='blue.100'  >
        {projects.map(project=>{
          return(
          <SimpleGrid spacing={4}  margin='10px' templateRows='repeat(auto-fill, minmax(200px, 1fr))'>
          <Card bg={'white'} >
            <CardHeader>
              <Heading size='md'>{project.project_title}</Heading>
            </CardHeader>
            <CardBody >
              <Text textColor={"GrayText"}>{project.detail}</Text>
            </CardBody>
            <CardFooter>
              <Button colorScheme={"blue"} h={'30px'} margin="4px">Assign</Button><br />
              <Button colorScheme={"yellow"} h={'30px'} margin="4px">Update</Button>
              <Button colorScheme={"orange"} h={'30px'} margin="4px"   
              onClick={() => handleDelete(project.id)}>Delete</Button>
            </CardFooter>
            </Card>
        </SimpleGrid>)

        })}
       
      </GridItem>
    
      <GridItem borderRadius='lg' w='350px' h='740' bg='blue.100' />
      <GridItem borderRadius='lg' w='350px' h='740' bg='blue.100' />
      <GridItem borderRadius='lg' w='107%' h='740' bg='blue.100' />
  
    </Grid>
    </Grid>
 
    )
}

export default Dashboard;