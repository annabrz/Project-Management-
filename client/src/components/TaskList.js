import React, {useState, useEffect} from 'react';
import {HStack, VStack, Text, IconButton, StackDivider, Spacer} from '@chakra-ui/react';
import {DeleteIcon} from "@chakra-ui/icons"

function TaskList(){
  const [tasks, setTasks]= useState([])
    

  useEffect(() => {
    setInterval(() => {
        fetch("/tasks")
         .then (r=>r.json())
         .then ( tasks=>setTasks(tasks))
    }, 1000)
}, [])

// function handleAddTask(){

// }
function handleDelete(id) {
  fetch(`/tasks/${id}`, {
    method: "DELETE",
  }).then((r) => {
    if (r.ok) {
      setTasks((tasks) =>
        tasks.filter((task) => task.id !== id)
      );
    }
  });
}
  return (
    <VStack
      divider={<StackDivider />}
      borderColor='gray.100'
      borderWidth='2px'
      p='4'
      borderRadius='lg'
      w='100%'
      // maxW={{ base: '90vw', sm: '80vw', lg: '50vw', xl: '40vw' }}
      alignItems='stretch'
    >
    {tasks.map((task) => {
      return(<HStack key={task.id}>
        <Text>{task.content}</Text>
        <Spacer />
        <IconButton
          icon={<DeleteIcon />}
          isRound='true'
          onClick={() => handleDelete(task.id)}
        />
      </HStack>
     
    )})}
  </VStack>

  )
}

export default TaskList;