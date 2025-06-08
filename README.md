# 📚 Book API

A RESTful API built with Node.js, Express, and MongoDB to manage a collection of books. This project includes authentication, pagination, and CRUD operations.

## 📌 Features

- Add, edit, delete, and view books
- Pagination support for listing books
- MongoDB for data storage using Mongoose
- Basic validation
- RESTful structure

## 🚀 Technologies Used

- Node.js
- Express.js
- MongoDB + Mongoose
- dotenv
- nodemon

## 🔐 Endpoints Overview

| Method | Endpoint         | Description           |
|--------|------------------|-----------------------|
| GET    | /api/books       | Get all books (with pagination) |
| GET    | /api/books/:id   | Get a single book by ID |
| POST   | /api/books       | Add a new book        |
| PUT    | /api/books/:id   | Update a book         |
| DELETE | /api/books/:id   | Delete a book         |


