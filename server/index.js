import express from 'express';
import mongoose from "mongoose";
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/auth.js'

const app = express();
dotenv.config();

// Middlewares
app.use(cors())
app.use(express.json())


// Constants
const PORT = process.env.PORT
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_NAME = process.env.DB_NAME


// Routes
app.use('/api/auth', authRoutes)


async function start() {
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
start()

