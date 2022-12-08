import React, { useState } from "react";
import { Button,Select, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from "@chakra-ui/react";



const SignUp =({addUser})=>{
    const[firstName, setFirstName]= useState("")
    const[lastName, setLastName]= useState("")
    const[email, setEmail]= useState("")
    const [password, setPassword]= useState("")
    const [avatar, setAvatar]= useState("")
    const [selection, setSelection] = useState("")
    const [show, setShow] = useState(false)
  

    const handleClick=()=> setShow(!show)
   
    const handleSubmit=(e)=>{
        e.preventDefault();
        const newUser ={
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password ,
            user_role: selection,
            avatar: avatar
        }
        fetch("http://localhost:3000/users",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",   
                "Accept": "application/json"
            }, 
            body: JSON.stringify(newUser)
        })
        .then (r=>r.json())
        .then (user=> {
            // addUser(user);
            setFirstName("");
            setLastName("");
            setPassword("");
            setAvatar("");
            setEmail("");
        })

    }
    return (
        <VStack spacing={'5px'}> 
           <FormControl id="first-name" isRequired>
            <FormLabel>First Name</FormLabel>
            <Input h="30px" placeholder="Enter your first name " 
            value={firstName}
            onChange={e=>setFirstName(e.target.value)}></Input>
           </FormControl>

           <FormControl id="last-name" >
            <FormLabel>Last Name</FormLabel>
            <Input h="30px" placeholder="Enter your last name " 
            value={lastName}
            onChange={e=>setLastName(e.target.value)}></Input>
           </FormControl>

           <FormControl id="selection" >
           <FormLabel>Select Role</FormLabel>
           <Select value={selection}  onChange= {e=>setSelection(e.target.value)} placeholder='Select role'>
          <option value='Employee'>Employee</option>
          <option value='Manager'>Manager</option>
           </Select>
           </FormControl>

           <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input h="30px" placeholder="Enter your email-id " 
            value={email}
            onChange={e=>setEmail(e.target.value)}></Input>
           </FormControl>
           

           <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
            <Input h="40px" type={show? "text" : "password"} placeholder="Enter your desired password " 
            value={password}
            onChange={e=>setPassword(e.target.value)}></Input>
            <InputRightElement width={"4.5rem"}>
                <Button   h="1.5rem" size="sm" onClick={handleClick}>{show? "Hide" : "Show"}</Button>
            </InputRightElement>
            </InputGroup>
           </FormControl>

           <FormControl id="pic" >
            <FormLabel>Upload your picture</FormLabel>
            <Input h="40px" p ="4.5px" type={"file"} accept="image/*" 
            value={avatar}
            onChange={e=>setAvatar(e.target.value)}></Input>
           </FormControl>
           <Button colorScheme={"blue"}
           width="100%"
           style={{marginTop: 15}}
           onClick={handleSubmit}>
            Sign Up
           </Button>
        </VStack>
    )
}

export default SignUp;