const Book = require('../models/book');

const getallbooks = async (req, res) => {
    try {
    const {page=1, limit=10} =req.query;
    const pageNumber = Number(page);
    const limitNumber = Number(limit);

    const books = await Book.find()
    .skip((pageNumber-1) * limitNumber)
    .limit(limitNumber);

    const totalbooks= await Book.countDocuments();

    res.status(200).json({
        page: Number(page),
        limit: Number(limit),
        data: books,
      });
    } catch (error) {
      res.status(500).json({ message: 'Error fetching books', error });
    }
};

const getsinglebook = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.status(200).json({ book });
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving the book', error });
    }
};

const createbook = async (req, res) => {
    const { title, author, available } = req.body;
    if (!title || !author) {
      return res.status(400).json({ message: 'Title and author are required' });
    }
  
    try {
      const newbook = new Book({ title, author, available });
      await newbook.save(); 
      res.status(201).json({ message: 'Book created successfully', newbook });
    } catch (error) {
      res.status(500).json({ message: 'Error creating the book', error });
    }
  };

const updateBook = async (req, res) => {
    const { id } = req.params;
    const { title, author, available } = req.body;

    try {
        const updatedBook = await Book.findByIdAndUpdate(id, { title, author, available }, { new: true });

        if (!updatedBook) {
            return res.status(404).json({ message: 'Book not found' });
        }

        res.status(200).json({ message: 'Book updated successfully', updatedBook });
    } catch (error) {
        res.status(500).json({ message: 'Error updating the book', error });
    }
};

// Delete a book
const deleteBook = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedBook = await Book.findByIdAndDelete(id);

        if (!deletedBook) {
            return res.status(404).json({ message: 'Book not found' });
        }

        res.status(200).json({ message: 'Book deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting the book', error });
    }
};

module.exports = {
    getallbooks,
    getsinglebook,
    createbook,
    updateBook,
    deleteBook,
};
