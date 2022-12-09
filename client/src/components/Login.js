import {React, useState} from "react";
import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from "@chakra-ui/react";
import { Redirect, useHistory,Link } from "react-router-dom";




const Login =({ status, setStatus} )=>{
        const history = useHistory()
        const[email, setEmail]=useState('')
        const [password, setPassword]=useState('') 
        const [show, setShow] =useState(false)
        
        const handleClick=()=> setShow(!show)
            
        const handleSubmit=(e)=>{
           e.preventDefault()
        
           const currentUser ={  
            email: email,
            password: password ,
        }    
        //create session for login
        fetch("http://localhost:3000/login",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"   
            }, 
            body : JSON.stringify(currentUser)
        })
        .then(res => {
            if(res.ok){
                res.json().then(user => {
                    
                    history.push('/')
                })
            }
        })
         
    }   

        return (
            <VStack spacing={'5px'}> 
               
               <FormControl id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input h="30px" placeholder="Enter your email-id " 
                value={email}
                onChange={e=>setEmail(e.target.value)}></Input>
               </FormControl>
               
                
               <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                <Input h="40px" type={show? "text" : "password"} placeholder="Enter your password " 
                value={password}
                onChange={e=>setPassword(e.target.value)}></Input>
                <InputRightElement width={"4.5rem"}>
                    <Button   h="1.5rem" size="sm" onClick={handleClick}>{show? "Hide" : "Show"}</Button>
                </InputRightElement>
                </InputGroup>
               </FormControl>
    
              
               <Button colorScheme={"blue"}
               width="100%"
               style={{marginTop: 15}}
               onClick={handleSubmit}>
                Login
               </Button>
               
            </VStack>
           
    )
}

export default Login;