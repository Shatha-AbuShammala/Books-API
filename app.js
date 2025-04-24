require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const connectdb = require('./db/connect');
const booksRoutes =require('./routes/book')

 app.use(express.json());
app.use('/api/books',booksRoutes)

const start = async() =>{
    try {
        await connectdb(process.env.MONGO_URI)
        app.listen(process.env.PORT , ()=>{
            console.log(`the server is listinig now on port ${process.env.PORT}`);
            
        })
    } catch (error) {
        console.log('error connecting to DB' ,error);
        
    }
}

start();
