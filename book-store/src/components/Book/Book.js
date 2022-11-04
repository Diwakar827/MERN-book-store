import { Button } from '@mui/material';
import React from 'react';
import {Link} from 'react-router-dom';
import './Book.css'
const book = (props) => {
    const {_id,name,author,description,price,image}=props.book;
    return (
        <div className='card'>
            <img src={image} alt={name}/>
            <article>By {author}</article>
            <h3>{name}</h3>
            <p>{description}</p>
            <h3>Rs {price}</h3>
         <Button LinkComponent={Link} to={`/books/${_id}`} sx={{mt:'auto'}}>Update</Button>
         <Button sx={{mt:'auto'}}>Delete</Button>
        </div>
    );
};

export default book;