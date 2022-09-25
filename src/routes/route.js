const express = require('express')
const router = express.Router();
const userController = require('../controller/userController')
const bookController = require('../controller/bookController')
const reviewController = require('../controller/reviewController')
const middleWare = require('../middleware/auth')

//-------------------register-----------------------------//
router.post('/register', userController.createUser)

//--------------------Loginuser---------------------------//
router.post('/login', userController.loginUser)

//--------------------createbook--------------------------//

router.post('/books', middleWare.authenticate, middleWare.authorisation, bookController.createBook)

//--------------------getebookbyquery---------------------//
router.get('/books', middleWare.authenticate, bookController.getBooks)

//--------------------getebookbyId------------------------//
router.get('/books/:bookId', middleWare.authenticate, bookController.getBookById)

//--------------------updatebook--------------------------//
router.put('/books/:bookId', middleWare.authenticate, middleWare.authorisation, bookController.updateBook)

//--------------------deletetebook-------------------------//
router.delete('/books/:bookId', middleWare.authenticate, middleWare.authorisation, bookController.deleteBook)
    //--------------------createReview-------------------------//

router.post('/books/:bookId/review', reviewController.createReview)

//--------------------updateteReview-------------------------//
router.put('/books/:bookId/review/:reviewId', reviewController.updateReview)

//--------------------deleteReview----------------------------//
router.delete('/books/:bookId/review/:reviewId', reviewController.deleteReview)

module.exports = router