import React from 'react'
import {   Menu, MenuButton,Button, Card, CardHeader, CardBody, CardFooter, Heading}  from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { SimpleGrid } from '@chakra-ui/react'
import { Grid, GridItem, Text, Tabs, TabList, TabPanels, Tab, TabPanel,Avatar, MenuDivider, MenuItem, MenuList } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import {useState, useEffect} from 'react'

const NavBar = () => {
    const [projects, setProjects] = useState([])
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



    function handleClick (){

    }
  return (
    <div>
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
            <Link to='/'>
          <Tab>Board</Tab>
          </Link>
          <Link to= '/project/new'>
          <Tab>New Project + </Tab>
          </Link>
          <Link to= '/employees'>
          <Tab> Employees </Tab>
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

</Grid>

    </div>
  )
}

export default NavBar
