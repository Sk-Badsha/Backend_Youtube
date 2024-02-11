import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: '../.env'
})

 connectDB()
 


















/*
// this code can be used also but it is not a good practice
// because we are creating the connection every time when we need to use db. 
// so, instead of this, we should create only one instance for all our app in index.js file and export that instance as default.
// so, instead of this, we will create the connection once and then use whenever needed.



import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";

import express from "express";
const app = express();

( async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        app.on("error", (error)=>{
            console.log("ERROR: ", error);
            throw error;
        })

        app.listen(process.env.PORT ,() => {
            console.log(`Server is running on port ${process.env.PORT
                ? process.env.PORT : 3000}`)
        });

    } catch (error) {
        console.log("ERROR: "+ error);
        throw error;
    }
})()
*/