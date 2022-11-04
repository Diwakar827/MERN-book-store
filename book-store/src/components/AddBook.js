import React, { useState } from 'react';
import {Button,FormControlLabel,Checkbox, FormLabel, TextField} from '@mui/material'
import {Box} from '@mui/material';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
const AddBook = () => {
     const history=useNavigate();
   const[inputs,setInputs]= useState({
    name:"",
    description:'',
    price:'',
    author:'',
    available:'',
    image:'',
     

   });
   const[checked,setChecked]=useState(false);

   const handleChange=(e)=>{
    setInputs((prevstate)=>({
        ...prevstate,
        [e.target.name]:e.target.value
    }))

   }

  const sendRequest=async()=>{
    axios.post('http://localhost:5000/books',{
  
    name:String(inputs.name),
    author:String(inputs.author),
    description:String(inputs.description),
    price:Number(inputs.price),
    image:String(inputs.image),
    available:Boolean(checked)
    }).then(res=>res.data);

  }



   const handleSubmit=(e)=>{
   e.preventDefault();
   console.log(inputs,checked);
   sendRequest().then(()=>history('/books'));
   }

    return (
        <form onSubmit={handleSubmit}>
        <Box  
    display="flex"
        flexDirection="column"
         justifyContent={'center'}
         maxWidth={700}
         alignContent={'center'}
         alignSelf={'center'}
         marginLeft={'auto'}
         marginRight={'auto'}
        marginTop={10}
        >

        <FormLabel>Name</FormLabel>
        <TextField value={inputs.name} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='name'></TextField>
        
        <FormLabel>Author</FormLabel>
        <TextField value={inputs.author} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='author'></TextField>
        
        <FormLabel>Description</FormLabel>
        <TextField value={inputs.description} onChange={handleChange}  margin='normal' fullWidth variant='outlined' name='description'></TextField>
        
        <FormLabel>Price</FormLabel>
        <TextField  value={inputs.price} onChange={handleChange}  type={"number"} margin='normal' fullWidth variant='outlined' name='price'></TextField>
        
        <FormLabel>Images</FormLabel>
        <TextField  value={inputs.image} onChange={handleChange}   margin='normal' fullWidth variant='outlined' name='image'></TextField>
        
      <FormControlLabel control={<Checkbox checked={checked} onChange={()=>setChecked(!checked)} />} label="Available" />

        <Button type='submit' variant='contained'> Add book</Button>


        </Box>
        
        </form>
    );
};

export default AddBook;