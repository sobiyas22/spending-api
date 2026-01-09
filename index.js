import express from "express";
import connectDB from "./config/db.js";
const app = express();

const PORT=3000;

app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

app.listen(PORT,()=>{
    console.log('Server running..');
    connectDB();
})