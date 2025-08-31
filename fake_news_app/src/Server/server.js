import cors from "cors";
import dotenv from "dotenv";
import express from "express";

const app = express();
app.use(express.json());
app.use(cors());

app.listen(3000, async () => {
  
});