import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json({ limit: "10mb" })); // allows you to parse the body of the request
app.use(cookieParser());



app.listen(PORT,()=>{
    console.log("Server is listening on port: ", PORT)
})