import express from 'express';
import mongoose from "mongoose";
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/auth.js'

const app = express();
dotenv.config();

// Constants
const PORT = process.env.PORT || 3002
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_NAME = process.env.DB_NAME

// Middlewares
app.use(cors())
app.use(express.json())

// Routes
app.use('/api/auth', authRoutes)


async function requestDB() {
   try{
      await mongoose.connect(
          `mongodb+srv://${DB_USER}:${DB_PASSWORD}@lessonsdb.6d06en5.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`)
      app.listen(PORT, () => {
         console.log(`Server started on port ${PORT}`)
      })
   }
   catch(err){
      console.log(err)
   }
}
requestDB()

