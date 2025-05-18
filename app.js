require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const connectdb = require('./db/connect');
const booksRoutes =require('./routes/book');
const authRoutes = require('./routes/authroutes');
const setupSwaggerDocs =require('./config/swagger');

setupSwaggerDocs(app);
app.use(express.json());
app.use('/api/books',booksRoutes)
app.use('/api/auth', authRoutes);
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
