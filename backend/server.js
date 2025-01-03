import express from 'express';
import dotenv from 'dotenv'
import authRoutes from './routes/auth.routes.js';
import connectToMongoDB from './db/connectToMongoDB.js';

dotenv.config();
const app = express() ;

const PORT = process.env.PORT || 5002;

app.use(express.json());    

app.get("/", (req, res) => {
    res.send("Hello World - Chat App");
});

app.use("/api/auth",authRoutes);


app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server is running on port ${PORT}`);
});

