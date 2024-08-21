import { configDotenv } from "dotenv";
import express from "express";

const server = express();

dotenv.config()

server.get("/",(request,response)=>{})
server.listen(5555)
mongoose.connect(MONGODB_URL).then(()=>{}).catch(err);
