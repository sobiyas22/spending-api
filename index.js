import express from "express";
import connectDB from "./config/db.js";
import userRoutes from "./routes/user.route.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

const PORT=3000;

app.use(express.json());

app.use("/api/users", userRoutes);


app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

app.listen(PORT,()=>{
    console.log('Server running..');
    connectDB();
})