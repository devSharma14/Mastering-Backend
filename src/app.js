import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

// accepting json -> setting the limit
app.use(express.json({limit: "16kb"}))

// to accept data from a url:
app.use(express.urlencoded({extended: true, limit: "16kb"}))

// store pdfs, img, public assests:
app.use(express.static("public"));

app.use(cookieParser());

export { app }