import axios from 'axios';
import React,{useEffect} from 'react';
import { useParams } from 'react-router-dom';

const BookDetail = () => {
   const id=useParams().id;
   console.log(id);
     useEffect(()=>{
       const fetchHandler=async()=>{
         await axios.get(`http://localhost:5000/bboks/${id}`)
         .then((res)=>console.log(res.data));
       }
       fetchHandler();
     },[id]);
    return (
        <div>
           



            )
        </div>
    );
};

export default BookDetail;