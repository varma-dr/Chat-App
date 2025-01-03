import express from 'express';
import dotenv from 'dotenv'
import authRoutes from './routes/auth.routes.js';
import connectToMongoDB from './db/connectToMongoDB.js';

const app = express() ;
const PORT = process.env.PORT || 5002;

dotenv.config();

app.use(express.json());    // to parse json data from request.body

app.use("/api/auth",authRoutes);

//Test
//app.get("/", (req, res) => {
//res.send("Hello World - Chat App");
//});



app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server is running on port ${PORT}`);
});

