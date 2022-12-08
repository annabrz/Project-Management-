import React, {useState} from 'react';
import TaskList from './TaskList';
import { Button,Box,Container, FormControl, FormLabel, Input, VStack, HStack } from "@chakra-ui/react";
// import { nanoid } from 'nanoid';
// import Calendar from 'react-calendar'

function AddProject ({onAddTask, onAddProject}){
    const[projectTitle, setProjectTitle]=useState("")
    const[description, setDescription]=useState("")
    const [content, setContent]=useState("")
    const [date, setDate]= useState()
    // const [task_id, setTask_id]
    

     function handleSubmit (e){
        e.preventDefault();
        fetch("/tasks", {
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            }, 
            body: JSON.stringify({
                //  id: nanoid() ,
                content: content, 
                project_id: project.id
            }), 
        })
        .then ((r)=>r.json())
        .then((newTask)=> {
            onAddTask(newTask);
            setContent("");          
        })}
        


    function handleFormSubmit(e){
        e.preventDefault();   
        fetch("/projects", {
            method: "POST",
            headers: {
                "Content-Type":"application/json",
            }, 
            body: JSON.stringify({
                project_title: projectTitle, 
                detail: description, 
                end_date: date
            }),
        })
         .then ((r)=>r.json())
        .then((newProject)=> {
            onAddProject(newProject);
            setProjectTitle("");  
            setDate("");
            setDescription("");
        }) 
    }

     

    return (
        <Container  maxW= "xl" centerContent justifyItems={'center'} >
        <Box 
        bg= "white" 
        justifyContent={'center'}
        margin='100px'  
        width="100%"
        height='auto' p="4" 
        borderRadius='20px' 
        borderWidth= "5px"
        display={'flex'}
        > 
        <VStack width='100%' spacing={'15px'}> 
           <FormControl id="project-title" isRequired>
            <FormLabel>Project title</FormLabel>
            <Input value={projectTitle} h="30px" placeholder="Enter project title ... " 
            onChange={e=>setProjectTitle(e.target.value)}></Input>
           </FormControl>

           <FormControl id="descriprtion" >
            <FormLabel>Description</FormLabel>
            <Input value={description} h="100px"  paddingTop='1px' textAlign={"left"} placeholder="Details..." 
            onChange={e=>setDescription(e.target.value)}></Input>
           </FormControl>

           
           <FormControl id="task-input" >
           <FormLabel>Project Task List - </FormLabel>
           <HStack width='100%' spacing={'10px'}>
           <Input value={content} h="30px" placeholder="Add Tasks...." 
            onChange={e=>setContent(e.target.value)}></Input>
            <Button height={'30px'} colorScheme={'whatsapp'} onClick={handleSubmit}>Add Task</Button>
            {/* <ProjectTaskList></ProjectTaskList> */}
            </HStack>
           </FormControl>
            <TaskList ></TaskList>
           
            <FormControl id="date" >
            <FormLabel>DL to complete: {date}</FormLabel>
            <Input value={date} type="date" h="30px"  paddingTop='1px' textAlign={"left"} 
            onChange={e=>setDate(e.target.value)}></Input>
           </FormControl>

           <Button  colorScheme={"blue"}
           width="50%"
           style={{marginTop: '50px'}}
           onClick={handleFormSubmit}>
            Add Project
           </Button>
        </VStack>
        </Box> 
        </Container>
    )
}






export default AddProject; 