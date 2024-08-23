import dotenv from "dotenv";
import express from "express";
const app = express();
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running successfully on port: ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("Failed to connect to the database!! error found: ", err);
})

