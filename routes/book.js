const express =require('express');
const router = express.Router();
const {getallbooks ,getsinglebook ,createbook,updateBook,deleteBook} = require('../controllers/books');

router.route('/').get(getallbooks).post(createbook);
router.route('/:id').get(getsinglebook).patch(updateBook).delete(deleteBook);

module.exports =router;