const express=require('express');
const router=express.Router();
const Book=require("../models/Book")
const booksController=require('../controllers/book-controller');
router.get('/',booksController.getAllBooks);
router.post('/',booksController.addBook);

router.get('/:id',booksController.getById);

router.put("/:id",booksController.updateBook);
router.delete("/:id",booksController.deleteBook);
module.exports=router;