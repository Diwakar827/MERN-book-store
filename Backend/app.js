const express=require('express');
const mongoose=require('mongoose');
const router=require('./routes/book-routes');
const cors=require('cors');
// cors is used to send axios request to another server ie backend of our otherwise it is against browser securtiy
const app=express();
app.use(express.json());
app.use(cors());
app.use('/books',router);
 // write / books
mongoose.connect('mongodb://localhost:27017/bookStore', { 
  useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("connected to database MONGO CONNECTION OPEN!!!")})
        .then(()=>{
            app.listen(5000,(req,res)=>{
                console.log("server started at port 5000")
            })
        
                })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })


    

     