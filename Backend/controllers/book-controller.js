const Book=require('../models/Book');

const getAllBooks=async(req,res)=>{

// this will find all books
let books;
try{
    books=await Book.find();
}
catch(err){
    console.log(err);
}
if(!books){
    return res.status(404).json({message:"no books found"})

}
else
  return res.status(200).json({books});

}

//new 
const getById=async(req,res)=>{
   const id=req.params.id;
   let book;
   try {
    book=await Book.findById(id);
   } catch (error) {
    console.log(error);
   }
   if(!book){
    return res.status(404).json({message:"no books found"})

    }
   else
  return res.status(200).json({book});

}













const addBook=async(req,res)=>{
    const {name,author,description,price,available,image}=req.body;
  let book;
  try{
    book=new Book({
        name,
        author,
        description,
        price,
        available,
        image
    });
    await book.save();
  }catch(err){
    console.log(err);
  }
  if(!book){
    return res.status(500).json({message:"unable to add"})

}
else
  return res.status(201).json({book});

}


const updateBook=async(req,res)=>{
    const id=req.params.id;
    const {name,author,description,price,available,image}=req.body;
    let book;
    try {
        book=await Book.findByIdAndUpdate(id,
            {name,
                author,
                description,
                price,
                available,image}
            );
            book=await book.save();
    } catch (error) {
        console.log(error);
    }
    if(!book){
        return res.status(404).json({message:"unable to update"})
    
    }
    else
      return res.status(200).json({book});
}


const deleteBook=async(req,res)=>{
    const id=req.params.id;
    let book;
    try {
        book=await Book.findByIdAndRemove(id)
    } catch (error) {
        console.log(error);
    }
    if(!book){
        return res.status(404).json({message:"unable to delete"})
    
    }
    else
      return res.status(200).json({message:"product succesfully deleted"});
}




exports.getAllBooks=getAllBooks;
exports.addBook=addBook;
 exports.getById=getById;
 exports.updateBook=updateBook;
 exports.deleteBook=deleteBook;